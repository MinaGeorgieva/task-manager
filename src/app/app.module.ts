import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './model/task.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksRoutingModule } from './tasks-routing/tasks-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
   
    TaskDetailsComponent
  ],
  imports: [
  
   
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TasksRoutingModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
