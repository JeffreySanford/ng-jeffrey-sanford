import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './app-landing/landing.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './app-footer/contact.component';
import { TableComponent } from './samples/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignComponent } from './design/design.component';
import { DevelopmentComponent } from './development/development.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    LandingComponent,
    ContactComponent,
    TableComponent,
    DesignComponent,
    DevelopmentComponent,
    ArchitectureComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridsterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MaterialModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule

  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


