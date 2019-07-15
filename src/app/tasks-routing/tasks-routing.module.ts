import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { TaskListComponent } from '../task-list/task-list.component';
import { TaskDetailsComponent } from '../task-details/task-details.component'
import { from } from 'rxjs';
const routes:Routes = [
  {path:'list',component:TaskListComponent},
  {path:'add-new', component:TaskDetailsComponent},
  {path: '**', redirectTo:'/list'},
  {path: 'save', redirectTo:'/list'}
]
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]

})
export class TasksRoutingModule { }
