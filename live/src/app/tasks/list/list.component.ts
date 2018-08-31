import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'kc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() aItems;
  @Output() evtRemove: EventEmitter<number>
  constructor() { 
    this.evtRemove = new EventEmitter();
  }

  ngOnInit() {
  }

  btnRemove(i){
    this.evtRemove.emit(i);

  }

}
