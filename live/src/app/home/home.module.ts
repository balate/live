import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetComponent } from './greet/greet.component';
import { FormsModule } from '@angular/forms';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, GreetComponent, ReferencesComponent]
})
export class HomeModule { }
