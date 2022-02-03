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

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'samples/sample-table', component: TableComponent },
  { path: 'samples/space-video', component: SpaceVideoComponent },
  { path: 'design-dashboard', component: DesignComponent },
  { path: 'development-dashboard', component: DevelopmentComponent },
  { path: 'architecture-dashboard', component: ArchitectureComponent },
  // the empty path will be redirected to the home component
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  // this path redirects to the home component
  { path: '**', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppRoutingModule { }
