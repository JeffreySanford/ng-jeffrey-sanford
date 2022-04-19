import { Injectable, OnDestroy } from '@angular/core';
import { Router, Event as NavigationEvent } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { BreadCrumb } from './bread-crumb';

@Injectable({
  providedIn: 'root'
})

export class breadcrumbService implements OnDestroy {
  public breadcrumb: Array<BreadCrumb> = [];
  pruned: boolean = false;
  currentRoute: any;
  validRoutes: Array<BreadCrumb> = [];
  breadcrumbSubscription: Subscription;

  constructor(private router: Router, private location: Location) {
    let routeSolved = false;
    this. breadcrumbSubscription = this.router.events.subscribe((value: any) => {
      if (value.url) {
        this.router.config.map((menuItem: any) => {
          if (!routeSolved || this.breadcrumb.length === 0) {
            if (menuItem.data) {
              const filter = !menuItem.path.includes('*') || !menuItem.path.includes('page-not-found') || !menuItem.path.includes('');
              const present = this.validRoutes && this.validRoutes.indexOf({
                name: menuItem.data.breadCrumb,
                route: menuItem.path
              });

              if (filter && present === -1) {
                this.validRoutes.push({
                  name: menuItem.data.breadCrumb,
                  route: menuItem.path
                });
              }
            }
          }
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.breadcrumbSubscription) {
      this.breadcrumbSubscription.unsubscribe();
    }
  }

  getBreadcrumbs(): Array<BreadCrumb> {
    this.location.onUrlChange((val) => {
      this.currentRoute = val.substring(1);
      let present = false;
      this.validRoutes.map((route: BreadCrumb) => {
        if (route.route !== '') {
          if (this.currentRoute === route.route) {
            this.breadcrumb.forEach((crumb) => {
              if (crumb.route === this.currentRoute) {
                present = true;
              }
            });

            if (!present && route.route !== '') {
              const isSecondLevel = route.route === 'design-dashboard' || route.route === 'development-dashboard';

              if (isSecondLevel) {
                this.breadcrumb[1] = {
                  name: route.name,
                  route: route.route
                };

                this.breadcrumb = this.breadcrumb.slice(0, 2);
              }

              else {
                this.breadcrumb.push({
                  name: route.name,
                  route: route.route
                });
              }
            }
            else if (this.currentRoute === 'landing') {
              this.breadcrumb = new Array<BreadCrumb>(this.breadcrumb[0]);
            }
          }
        }
      });
    });

    return this.breadcrumb;
  }
}