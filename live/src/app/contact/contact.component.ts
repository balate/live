import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-contact',
  template: `
   <div class="row">
   <kc-form-vd class="col"></kc-form-vd>
   </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
