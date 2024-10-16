import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularComponentsComponent } from './basic/angular-components/angular-components.component';
import { AngularTemplatesComponent } from './basic/angular-templates/angular-templates.component';
import { AngularFormsComponent } from './basic/angular-forms/angular-forms.component';
import { AngularRoutesComponent } from './basic/angular-routes/angular-routes.component';
import { Navigation2Component } from './basic/navigation2/navigation2.component';
import { NavigationComponentComponent } from './basic/navigation-component/navigation-component.component';
import { AngularRoutesHomeComponent } from './basic/angular-routes-home/angular-routes-home.component';
import { AngularMaterialHomepageComponent } from './angular-material/angular-material-homepage/angular-material-homepage.component';
import { AngularMaterialHomepageContentComponent } from './angular-material/angular-material-homepage-content/angular-material-homepage-content.component';
import { AngularMaterialTableComponent } from './angular-material/angular-material-table/angular-material-table.component';
import { AngularMaterialCardComponent } from './angular-material/angular-material-card/angular-material-card.component';
import { AngularMaterialTreeComponent } from './angular-material/angular-material-tree/angular-material-tree.component';

const routes: Routes = [
  {path:'angular-cli', component:AngularCLIComponent},
  {path:'angular-components', component:AngularComponentsComponent},
  {path:'angular-templates', component:AngularTemplatesComponent},
  {path:'angular-forms', component:AngularFormsComponent},
  { path:'angular-routes', 
    component:AngularRoutesComponent,
    children: [
      {path:'nav1', component:NavigationComponentComponent},
      {path:'nav2', component:Navigation2Component},
      {path:'', component:AngularRoutesHomeComponent}
    ]
  },
  {path:'angular-material', 
   component:AngularMaterialHomepageComponent,
   children: [
    {path:'table', component:AngularMaterialTableComponent},
    {path:'card', component:AngularMaterialCardComponent},
    {path:'tree', component:AngularMaterialTreeComponent},
    {path:'', component:AngularMaterialHomepageContentComponent}
  ]
  },
  {path:'', component:IntroductionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
