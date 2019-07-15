import { Injectable } from '@angular/core';

import { Task } from './task';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { of as observableOf} from 'rxjs';
import { from as observableFrom} from 'rxjs';

const URL:string = 'http://localhost:3000';

//const tasks: Task[] = [  
 // {"1", "title":"read js", "completed":false, "lastModified":Date.now()},
 // {"2, "title":"read mongo", "completed":true, "lastModified":Date.now()},
 //{3, "title":"read robo 3t", "completed":false, "lastModified":Date.now()},
 // {4, "title":"read angular", "completed":false, "lastModified":Date.now()},
 // {"_id":"5", "title":"read js", "completed":true, "lastModified":Date.now()},
 // {"_id": "6", "title":"read js", "completed":false, "lastModified":Date.now()},
//]
@Injectable({
  providedIn: 'root'
})
export class TaskService {
    newMode:boolean = false;
    constructor(private http:HttpClient) { }

  getTaskList():Observable<Task[]>{
    //return observableOf(tasks);
    return this.http.get<Task[]>(`${URL}/task`);
  }

 getTaskById(id:string):Observable<Task>{
  return this.http.get<Task>(`${URL}/task/${id}`);
}
 deleteTask(id:string):Observable<any>{
   return this.http.delete(`${URL}/task/${id}`);
 }
 saveTask(task:Task):Observable<Task>{
  //update
  if(task._id){
    
    return this.http.put<Task>(`${URL}/task/${task._id}`, task);
  }
  //add new
  else{
    task._id = task.lastModified = undefined;
    task.isNew = true;
    return this.http.post<Task>(`${URL}/task`, task);
  }
    
  //  console.log(tasks);
  }

  
}
