import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tasks',
  template: `
    <div class="row">
      <kc-tasks-control class="col"></kc-tasks-control>
    </div>
  `,
  styles: []
})
export class TasksComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
}

