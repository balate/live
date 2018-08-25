import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetComponent } from './greet/greet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, GreetComponent]
})
export class HomeModule { }
