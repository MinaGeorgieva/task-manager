import {  Component, 
          OnInit, 
          Input,
          Output,
          EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Task } from '../model/task';
import { TaskService } from '../model/task.service'
import { Router, NavigationEnd } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
 @Input('selected-task') task:Task;
 @Output('contactUpdated') contactUpdated:EventEmitter<any> = new EventEmitter();
 
 public addNewMode:boolean = false;
  constructor(private dataSource:TaskService,
              private router:Router,
              private location:Location) {
      this.router.events
                    .subscribe((event)=>{
                      //console.log(event));
                      if(event instanceof NavigationEnd&& event.url === '/add-new'){
                        this.task= new Task();
                        this.addNewMode = true;
                      }
                      else{
                        this.addNewMode = false;
                      }

                    });
     }//constructor

 
   ngOnInit() {
     
  }

  saveTask():void{
    
    this.dataSource.saveTask(this.task)
                  .subscribe((task)=>{
                    this.task=task,
                    this.contactUpdated.emit();
                    
                    },
                  (err)=>console.log(err),
                  ()=>console.log(`add/update completed addNewMode: ${this.task.isNew}`));
    
               
    
  }

  goBack():void{
    this.location.back();

  }
}
