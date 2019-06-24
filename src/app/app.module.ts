// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Material Design and Styling
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
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
  { path: '', component: LandingComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'projects/:id', component: ProjectsComponent},
  { path: '*', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: false,
  initialNavigation : false
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
      appRoutes,
      {
        // enableTracing: true,  // <-- debugging purposes only
        initialNavigation : true
      }
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
    ngIfMediaQuery,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
