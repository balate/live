import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksControlComponent } from './tasks-control/tasks-control.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, TasksControlComponent, ItemComponent, ListComponent]
})
export class TasksModule { }
