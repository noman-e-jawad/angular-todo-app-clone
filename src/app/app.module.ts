import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { ToolTipDirective } from './shared/tool-tip.directive';
import { ToolTipSingletenDirective } from './shared/tool-tip-singleten.directive';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    EditTodoDialogComponent,
    ToolTipDirective,
    ToolTipSingletenDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
