/* eslint-disable sort-imports */
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppFooterComponent } from './footer/footer.component';
import { TableComponent } from './samples/design/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignComponent } from './samples/design/design.component';
import { DevelopmentComponent } from './samples/development/development.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GridsterModule } from 'angular-gridster2';
import { KitchenTableComponent } from './samples/development/kitchen-table/kitchen-table.component';
import { WeatherComponent } from './samples/development/weather/weather.component';
import { SpaceVideoComponent } from './samples/design/space-video/space-video.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RecipeComponent } from './samples/development/kitchen-table/recipe/recipe.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { InventoryComponent } from './samples/inventory/inventory.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './samples/development/kitchen-table/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LandingComponent,
    AppFooterComponent,
    TableComponent,
    DesignComponent,
    DevelopmentComponent,
    KitchenTableComponent,
    WeatherComponent,
    SpaceVideoComponent,
    PageNotFoundComponent,
    RecipeComponent,
    SidebarComponent,
    InventoryComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GridsterModule,
    MatSidenavModule,
    MatCheckboxModule,
    MaterialModule,
    MatToolbarModule,
    OverlayModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatIconModule,
  ],
  exports: [MaterialModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
