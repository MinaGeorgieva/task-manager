import { Component, OnInit } from '@angular/core';
import { Task} from '../model/task';
import { TaskService } from '../model/task.service'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  title:string = 'Task Manager'
 

  constructor( private taskService:TaskService) {
    console.log('list constructor');
   }

  ngOnInit() {
    console.log('list component on init');
    this.getTasks();
    
    
  }

  getTasks():void{
    this.taskService.getTaskList()
                    .subscribe((list)=>this.tasks = list,
                     (err)=>console.log(err),
                    ()=>console.log('task list loaded'));
                    
  }

 
  onSelectedTask(id:string):void{
    this.taskService.getTaskById(id)
                    .subscribe((task)=>this.selectedTask = task,
                    (err)=>console.log(err),
                    ()=>console.log('task loaded'));
  }

  deleteTask(event,id:string):void{
    event.stopPropagation();
    this.taskService.deleteTask(id)
                    .subscribe((status)=>{
                      console.log(status)
                      this.getTasks();
                    },
                    (err)=>console.log(err),
                    ()=>console.log('task deleted'));
                   
  }
  fromChildComponent():void{
    console.log(`child component`);
    
  }

  
}
