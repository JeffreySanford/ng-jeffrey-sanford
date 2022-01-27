import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './landing/landing.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFooterComponent } from './footer/footer.component';
import { TableComponent } from './samples/design/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignComponent } from './samples/design/design.component';
import { DevelopmentComponent } from './samples/development/development.component';
import { ArchitectureComponent } from './samples/architecture/architecture.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { GridsterModule } from 'angular-gridster2';
import { KitchenTableComponent } from './samples/development/kitchen-table/kitchen-table.component';
import { WeatherComponent } from './samples/development/weather/weather.component';
import { DataVisualizationsComponent } from './samples/design/data-visualizations/data-visualizations.component';
import { SpaceVideoComponent } from './samples/design/space-video/space-video.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LandingComponent,
    AppFooterComponent,
    TableComponent,
    DesignComponent,
    DevelopmentComponent,
    ArchitectureComponent,
    KitchenTableComponent,
    WeatherComponent,
    DataVisualizationsComponent,
    SpaceVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridsterModule,
    MatSidenavModule,
    MatCheckboxModule,
    MaterialModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


