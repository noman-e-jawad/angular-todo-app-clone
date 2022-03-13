import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[]=[];
  showValidationErrors:boolean=false;

  constructor(private dataService:DataService, private dialog: MatDialog ) { }

  ngOnInit(): void {

    this.todos = this.dataService.getAllTodos();
  }
  onFormSubmit(form: NgForm){
    if(form.invalid){ 
      return this.showValidationErrors = true;
    }
    else{
      this.dataService.addTodos(new Todo(form.value.text));
      form.reset();
      return 0;
    }
  }
  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;

  }
  editTodo(todo:Todo){
    //we need 
    // - index to todo
    // user needs to enter new update

    const index =this.todos.indexOf(todo);
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });
    // this.dataService.updateTodo()

    dialogRef.afterClosed().subscribe((result) =>{
      if(result){
        this.dataService.updateTodo(index, result);
      }
    });
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }
}
