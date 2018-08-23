import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {  path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'books', loadChildren: './books/books.module#BooksModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '**', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
