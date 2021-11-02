import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './app-landing/landing.component';
import { TableComponent } from './samples/table/table.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'samples/sample-table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
