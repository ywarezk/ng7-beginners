import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoTask } from './models/todo-task';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  getAlltasks = (): Observable<TodoTask[]> => {
    return this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').pipe(
      map((json: Array<any>) => json.map((singleJson) =>  new TodoTask(singleJson)))
    ) // Observable<Object>
  }
}
