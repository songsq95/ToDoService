import { TodoApiService } from './../api/todo.api.service';
import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public errorMessage?: string;
  private _selectedTodoItem: ToDoItem = {} as ToDoItem;
  private _updatingTodoItem: ToDoItem = {} as ToDoItem;
  constructor(private todoStore: TodoStoreService, private todoApi: TodoApiService) {
  }

  public get todoItems(): Array<ToDoItem> {
    return this.todoStore.getAll();
  }

  public findById(id: number): ToDoItem{
    let foundToDoItem: ToDoItem = {} as ToDoItem;
    this.todoApi.findById(id).subscribe({
      next: response => { foundToDoItem = response},
      error: error => {
        this.errorMessage = error.errorMessage
      }
    });
    return foundToDoItem;
  }

  public create(todoItem: ToDoItem): void {
    this.todoApi.create(todoItem).subscribe({
      next: response => { },
      error: error => {
        this.errorMessage = error.errorMessage
      }
    });
  }

  public update(updateTodoItem: ToDoItem): void {
    this.todoStore.update(updateTodoItem);
  }

  public delete(id: number): void {
    this.todoApi.delete(id).subscribe({
      next: response => { },
      error: error => {
        this.errorMessage = error.errorMessage
      }
    });
  }

  public selectTodoItem(id: number): void {
    this._selectedTodoItem = this.todoStore.findById(id);
  }

  public selectTodoItemForUpdate(id: number): void {
    this._updatingTodoItem = Object.assign({}, this.todoStore.findById(id));
  }
}
