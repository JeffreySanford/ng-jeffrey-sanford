import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
=======
import { LandingComponent } from './landing/landing.component';
>>>>>>> e5eff4842e769e39c0d5e3d1d863eb5cbf50f35a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AppToolbarComponent,
    SidebarComponent
=======
    LandingComponent
>>>>>>> e5eff4842e769e39c0d5e3d1d863eb5cbf50f35a
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


