import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { Navigation2Component } from './basic/navigation2/navigation2.component';
import { NavigationComponentComponent } from './basic/navigation-component/navigation-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularComponentsComponent } from './basic/angular-components/angular-components.component';
import { AngularTemplatesComponent } from './basic/angular-templates/angular-templates.component';
import { AngularRoutesComponent } from './basic/angular-routes/angular-routes.component';
import { AngularFormsComponent } from './basic/angular-forms/angular-forms.component';
import { AngularMaterialHomepageComponent } from './angular-material/angular-material-homepage/angular-material-homepage.component';
import { AngularRoutesHomeComponent } from './basic/angular-routes-home/angular-routes-home.component';
import { AngularMaterialTableComponent } from './angular-material/angular-material-table/angular-material-table.component';
import { AngularMaterialHomepageContentComponent } from './angular-material/angular-material-homepage-content/angular-material-homepage-content.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavigationComponentComponent,
    Navigation2Component,
    HeaderComponent,
    FooterComponent,
    AngularCLIComponent,
    AngularComponentsComponent,
    AngularTemplatesComponent,
    AngularRoutesComponent,
    AngularFormsComponent,
    AngularMaterialHomepageComponent,
    AngularRoutesHomeComponent,
    AngularMaterialTableComponent,
    AngularMaterialHomepageContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }