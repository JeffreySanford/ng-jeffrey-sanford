import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDrawer,
    MatDrawerContainer,
    MatCheckboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


