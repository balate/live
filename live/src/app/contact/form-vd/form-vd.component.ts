import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';

@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {

  contact: Contacto;

  constructor() { }

  ngOnInit() {
    this.contact = new Contacto();
  }

}
