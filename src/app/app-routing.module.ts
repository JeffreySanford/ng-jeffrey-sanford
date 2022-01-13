import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ArchitectureComponent } from './samples/architecture/architecture.component';
import { DesignComponent } from './samples/design/design.component';
import { DevelopmentComponent } from './samples/development/development.component';
import { TableComponent } from './samples/design/table/table.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'samples/sample-table', component: TableComponent },
  { path: 'design-dashboard', component: DesignComponent },
  { path: 'development-dashboard', component: DevelopmentComponent },
  { path: 'architecture-dashboard', component: ArchitectureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
