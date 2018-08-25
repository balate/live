import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-home',
  template: `
    <div class= "row"> 
      <kc-greet class="col"></kc-greet>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
