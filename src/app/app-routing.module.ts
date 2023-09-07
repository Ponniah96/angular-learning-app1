import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { Navigation2Component } from './navigation2/navigation2.component';

const routes: Routes = [
  {path:'nav1', component:NavigationComponentComponent},
  {path:'nav2', component:Navigation2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
