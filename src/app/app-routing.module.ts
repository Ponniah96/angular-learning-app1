import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularComponentsComponent } from './basic/angular-components/angular-components.component';
import { AngularTemplatesComponent } from './basic/angular-templates/angular-templates.component';
import { AngularRoutesComponent } from './basic/angular-routes/angular-routes.component';
import { AngularFormsComponent } from './basic/angular-forms/angular-forms.component';
import { AngularMaterialHomepageComponent } from './angular-material/angular-material-homepage/angular-material-homepage.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { Navigation2Component } from './navigation2/navigation2.component';

const routes: Routes = [
  {path:'', component:IntroductionComponent},
  {path:'angular-cli', component:AngularCLIComponent},
  {path:'angular-components', component:AngularComponentsComponent},
  {path:'angular-templates', component:AngularTemplatesComponent},
  {path:'angular-routes', component:AngularRoutesComponent},
  {path:'angular-forms', component:AngularFormsComponent},
  {path:'angular-material', component:AngularMaterialHomepageComponent},
  {path:'nav1', component:NavigationComponentComponent},
  {path:'nav2', component:Navigation2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
