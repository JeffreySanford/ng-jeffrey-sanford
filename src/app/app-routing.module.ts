import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ArchitectureComponent } from './samples/architecture/architecture.component';
import { DesignComponent } from './samples/design/design.component';
import { DevelopmentComponent } from './samples/development/development.component';
import { TableComponent } from './samples/design/table/table.component';
import { SpaceVideoComponent } from './samples/design/space-video/space-video.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { KitchenTableComponent } from './samples/development/kitchen-table/kitchen-table.component';
import { RecipeComponent } from './samples/development/kitchen-table/recipe/recipe.component';
import { WeatherComponent } from './samples/development/weather/weather.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent, data: { breadCrumb: 'home', title: 'Home' } },
  { path: 'design-dashboard', component: DesignComponent, data: { breadCrumb: 'design', title: 'Design Dashboarrd' } },
  { path: 'development-dashboard', component: DevelopmentComponent, data: { breadCrumb: 'development', title: 'Development Dashboard' } },
  { path: 'architecture-dashboard', component: ArchitectureComponent, data: { breadCrumb: 'architecture', title: 'Architeture Dashbiard' } },
  { path: 'samples/sample-table', component: TableComponent, data: { breadCrumb: 'table', title: 'Material Table' } },
  { path: 'samples/space-video', component: SpaceVideoComponent, data: { breadCrumb: 'space-video', title: 'Space Video' } },
  {
    path: 'samples/kitchen-table',
    component: KitchenTableComponent,
    data: { breadCrumb: 'kitchen-table', title: 'Kitchen Table' },
    children: [{ path: 'detail', component: RecipeComponent, data: { breadCrumb: 'Detailed Tile' } }]
  },
  { path: 'samples/weather', component: WeatherComponent, data: { breadCrumb: 'weather', title: 'Weather' } },
  // the empty path will be redirected to the home component
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  // this path redirects to the home component
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppRoutingModule { }
