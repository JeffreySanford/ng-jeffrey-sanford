// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Material Design and Styling
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material';
import { MatButton, MatButtonToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Template
import { AppComponent } from './app.component';
import { NavigationComponent } from './page/navigation/navigation.component';
import { BrandComponent } from './page/brand/brand.component';
import { FooterComponent } from './page/footer/footer.component';

// Views
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProjectsComponent } from './views/projects/projects.component';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

// Directives
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { ngIfMediaQuery } from './ng-if-media-query.directive';
import { SocialIconsComponent } from './page/social-icons/social-icons.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, data: { state: 'landing' } },
  { path: 'landing', component: LandingComponent, data: { state: 'landing' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' } },
  { path: 'projects/:id', component: ProjectsComponent, data: { state: 'project' } },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BrandComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    ngIfMediaQuery,
    SocialIconsComponent
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    ngIfMediaQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
