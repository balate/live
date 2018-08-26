import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  usuario : string;
  languages : string;
  constructor() { }

  ngOnInit() {
    this.usuario = 'Javi Ocon'; 
    this.languages = 'es';
  }
  btnRemove(ev){
  console.log(ev)
  this.usuario = "";
  console.log("name udated")
  }
}
