import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
  
  @Input() todo: Todo = new Todo;
  @Output() todoClicked: EventEmitter <void> = new EventEmitter();
  @Output() editClicked: EventEmitter <void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter <void> = new EventEmitter();
  
  constructor (){

  }
  ngOnInit(): void {
  }
  
  onTodoClicked(){
    this.todoClicked.emit();
  }
  onEditClicked(){
    this.editClicked.emit();
  }
  onDeleteClicked(){
    this.deleteClicked.emit();
  }
}
