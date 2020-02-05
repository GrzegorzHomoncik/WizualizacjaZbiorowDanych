import * as _ from 'lodash';

import {HttpClient, HttpErrorResponse, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';

import {BehaviorSubject, Subscription} from 'rxjs';
import {Prog} from './progresModel'


export enum FileQueueStatus {
  Pending,
  Success,
  Error,
  Progress
}

export class FileQueueObject {
  public file: any;
  public status: FileQueueStatus = FileQueueStatus.Pending;
  public progress = 0;
  public request: Subscription = null;
  public response: HttpResponse<any> | HttpErrorResponse = null;

  constructor(file: any) {
    this.file = file;
  }

  // actions
  public upload = () => { /* set in service */
  }
  public cancel = () => { /* set in service */
  }
  public remove = () => { /* set in service */
  }

  // statuses
  public isPending = () => this.status === FileQueueStatus.Pending;
  public isSuccess = () => this.status === FileQueueStatus.Success;
  public isError = () => this.status === FileQueueStatus.Error;
  public inProgress = () => this.status === FileQueueStatus.Progress;
  public isUploadable = () => this.status === FileQueueStatus.Pending || this.status === FileQueueStatus.Error;

}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class FileUploaderService implements OnInit {

  public baseUrl = 'http://localhost:5000/';
  public url = 'http://localhost:5000/?dimensions=2';

  // tslint:disable:variable-name
  private _queue: BehaviorSubject<FileQueueObject[]>;
  private _files: FileQueueObject[] = [];
  private _success = false;
  private response = [{}]
  constructor(private http: HttpClient) {
    this._queue = new BehaviorSubject(this._files) as BehaviorSubject<FileQueueObject[]>;
  }

  // the queue
  public get queue() {
    return this._queue.asObservable();
  }

  // public events
  public onCompleteItem(queueObj: FileQueueObject, response: any): any {
    return {queueObj, response};
  }

  // public functions
  public addToQueue(data: any) {
    // add file to the queue
    _.each(data, (file: any) => this._addToQueue(file));
  }

  public clearQueue() {
    // clear the queue
    this._files = [];
    this._queue.next(this._files);
  }

  public uploadAll() {
    // upload all except already successfull or in progress
    _.each(this._files, (queueObj: FileQueueObject) => {
      if (queueObj.isUploadable()) {
        this._upload(queueObj);
      }
    });
  }

  onChangeofOptions(newGov) {
    if (newGov != null) {
      this.url = this.baseUrl + '?dimensions=' + newGov;
    }
  }

  // private functions
  private _addToQueue(file: any) {
    const queueObj = new FileQueueObject(file);

    // set the individual object events
    queueObj.upload = () => this._upload(queueObj);
    queueObj.remove = () => this._removeFromQueue(queueObj);
    queueObj.cancel = () => this._cancel(queueObj);

    // push to the queue
    this._files.push(queueObj);
    this._queue.next(this._files);
  }

  private _removeFromQueue(queueObj: FileQueueObject) {
    _.remove(this._files, queueObj);
  }

  private _upload(queueObj: FileQueueObject) {
    // create form data for file
    const form = new FormData();
    form.append('korpus', queueObj.file, queueObj.file.name);

    // upload file and report progress
    const req = new HttpRequest('POST', this.url, form, {
      reportProgress: true,
    });

    // upload file and report progress
    queueObj.request = this.http.request(req).subscribe(
      (event: any) => {

        if (event instanceof HttpResponse) {
          this._uploadComplete(queueObj, event);
        } else {
          queueObj.status = FileQueueStatus.Progress;
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          this._uploadFailed(queueObj, err);
        } else {
          // The backend returned an unsuccessful response code.
          this._uploadFailed(queueObj, err);
        }
      }
    );
    this._success = false;
    setTimeout(() => {
      this._uploadProgress(queueObj);
    }, 5000);

    return queueObj;
  }

  private _cancel(queueObj: FileQueueObject) {
    // update the FileQueueObject as cancelled
    queueObj.request.unsubscribe();
    queueObj.progress = 0;
    queueObj.status = FileQueueStatus.Pending;
    this._queue.next(this._files);
  }
  private getProgres(){
    return this.http.get<Prog[]>('http://127.0.0.1:5000/progress/');
  }
  private _uploadProgress(queueObj: FileQueueObject) {
    // update the FileQueueObject with the current progress
    let res : Prog;
    let progress;
    for (let i = 0; i < 200; i++) {
      setTimeout(() => {
        if(!this._success){

          this.getProgres().subscribe( data=> {
            for(let j = 0; j < data.length; ++j){
              if(data[j].file_name == this._files[0].file.name){
                progress = data[j].progress;
                if(progress > 0){
                  queueObj.progress = Math.round(100 * progress);
                }
                queueObj.status = FileQueueStatus.Progress;
              }
            }
          })
/*
          this.getProgres().subscribe( data=> res ={
            file_name: (data as any).file_name,
            progress:  (data as any).progerss,
          })
          console.log(res);
          */
         /*
          this.http.get<Prog[]>('http://127.0.0.1:5000/progress/').subscribe(data=>{
            progress = data[0].progress;
            if(progress>0){
            queueObj.progress = Math.round(100 * progress);

            }
            queueObj.status = FileQueueStatus.Progress;
          });
          */
        }
      }, 2000 * (i + 1));
    }
    this._queue.next(this._files);
  }

  private _uploadComplete(queueObj: FileQueueObject, response: HttpResponse<any>) {
    // update the FileQueueObject as completed
    this._success = true;
    queueObj.progress = 100;
    queueObj.status = FileQueueStatus.Success;
    queueObj.response = response;
    this._queue.next(this._files);
    this.onCompleteItem(queueObj, response.body);
  }

  private _uploadFailed(queueObj: FileQueueObject, response: HttpErrorResponse) {
    // update the FileQueueObject as errored
    this._success = true;
    queueObj.progress = 0;
    queueObj.status = FileQueueStatus.Error;
    queueObj.response = response;
    this._queue.next(this._files);
  }

  ngOnInit(): void {
  }
}
