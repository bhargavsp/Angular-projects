import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'addnewproject',component:AddComponent },
  {path: '', component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
