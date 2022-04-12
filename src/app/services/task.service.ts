import { Injectable } from '@angular/core';

// for normal json data from source code
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-task';

//http call
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // for htttp
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  gettingTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteingTasks(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updatingTasks(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addingTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

  //when we use json data within the source code
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
