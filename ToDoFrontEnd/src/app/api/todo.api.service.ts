import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  public create(todoItem: ToDoItem): Observable<void> {
    return this.http.post<void>('https://localhost:5001/ToDos', todoItem);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete('https://localhost:5001/ToDos/'+String(id));
  }

  public findById(id: number): Observable<ToDoItem> {
    return this.http.get<ToDoItem>('https://localhost:5001/ToDos/' + String(id));
  }

}
