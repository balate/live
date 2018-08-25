import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  usuario : string;
  constructor() { }

  ngOnInit() {
    this.usuario = 'Javi Ocon'; 
  }
  btnRemove(ev){
  console.log(ev)
  this.usuario = "";
  }
}
