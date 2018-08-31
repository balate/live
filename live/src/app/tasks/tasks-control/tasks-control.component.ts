import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tasks-control',
  templateUrl: './tasks-control.component.html',
  styleUrls: ['./tasks-control.component.css']
})
export class TasksControlComponent implements OnInit {
  aTask: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTask = [];
  }

  addTask(task){
    this.aTask.push(task);
    console.dir(this.aTask);
  };
  
  removeTask(i){
    this.aTask.splice(i, 1);
  }

}