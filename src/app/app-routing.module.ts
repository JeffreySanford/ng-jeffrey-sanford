import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './app-landing/landing.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { DesignComponent } from './design/design.component';
import { DevelopmentComponent } from './development/development.component';
import { TableComponent } from './samples/table/table.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'samples/sample-table', component: TableComponent },
  { path: 'design', component: DesignComponent },
  { path: 'developemnt', component: DevelopmentComponent },
  { path: 'architecture', component: ArchitectureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
