import { Injectable, OnDestroy } from '@angular/core';
import { Event as NavigationEvent, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { BreadCrumb } from './bread-crumb';

@Injectable({
  providedIn: 'root',
})
export class breadcrumbService implements OnDestroy {
  breadcrumbSubscription: Subscription;
  applicationRoutes = new Array<BreadCrumb>();
  breadcrumbs = new Array<BreadCrumb>();
  private present = false;
  private empty = true;

  constructor(private router: Router, private location: Location) {
    this.breadcrumbSubscription = this.router.events.subscribe((value: any) => {
      if (value.url) {
        this.router.config.map((menuItem: any) => {
          this.applicationRoutes.push({
            name: menuItem.data.title,
            route: menuItem.path
          });
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.breadcrumbSubscription) {
      this.breadcrumbSubscription.unsubscribe();
    }
  }

  parseBreadcrumbs(): BreadCrumb[] {
    this.location.onUrlChange((val) => {
      const location = val.substring(1);
      this.applicationRoutes.forEach((appRoute) => {
        if (appRoute.route === location && !this.present) {
          if (this.empty) {
            this.breadcrumbs.push(appRoute);
            this.empty = false;
            this.present = true;
            return this.breadcrumbs;
          }
          else {
            this.breadcrumbs.map((crumb: BreadCrumb) => {
              const isSecondLevel = (appRoute.route === "design-dashboard" || appRoute.route === "development-dashboard");
              this.present = (crumb.route === location) ? true : false;
              debugger
              if (!this.present || isSecondLevel) {
                debugger
                if (appRoute.route === location && isSecondLevel) {
                  this.breadcrumbs[1] = {
                    name: appRoute.name,
                    route: appRoute.route
                  };
                  this.breadcrumbs.splice(2,this.breadcrumbs.length);
                }
                else {
                  debugger

                  if (location === 'landing') {
                    this.breadcrumbs = [
                      {
                        name: appRoute.name,
                        route: appRoute.route
                      }
                    ];
                    this.empty = false;
                  } else {
                    let isUpdated = false;
                    this.breadcrumbs.map((crumb: BreadCrumb) => {
                      if (crumb.name === appRoute.name) {
                        isUpdated = true;
                      }
                    })

                    if (!isUpdated) {
                      debugger
                      this.breadcrumbs.push(appRoute);
                      this.empty = false;
                      this.present = true;
                    }
                  }
                }
              }
              else {
                debugger
                if (location === 'landing') {
                  this.breadcrumbs = [
                    {
                      name: appRoute.name,
                      route: appRoute.route
                    }];

                  this.empty = false;
                }
              }

              return this.breadcrumbs;
            });

            debugger
            return this.breadcrumbs;
          }
          return this.breadcrumbs;
        }
        return this.breadcrumbs;
      });
    });
    return this.breadcrumbs;
  }

  getBreadcrumbs(): Observable<BreadCrumb[]> {
    this.present = false;
    return new Observable((observer: Subscriber<any>) => {
      observer.next(this.parseBreadcrumbs());
      observer.complete();
    });
  }
}
