import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] =[
    // new Todo('This is a test'),
    // new Todo('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum istevelit sed!'),
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodos(todo:Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updateTodo: Todo){
    this.todos[index] = updateTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
