import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BreadCrumb } from './bread-crumb';

@Injectable({
  providedIn: 'root'
})

export class BreadCrumbService {
  public breadcrumbs: Array<BreadCrumb> = [];
  pruned: boolean = false;
  currentRoute: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentRoute = this.route.snapshot;
    this.router.events.subscribe((value: any) => {
      let routeSolved = false;
      if (value.url) {
        this.router.config.map((menuItem: any) => {
          if (!routeSolved || this.breadcrumbs.length === 0) {
            const filter = !menuItem.path.includes('*') || !menuItem.path.includes('page-not-found') || !menuItem.path.includes('');

            if (filter) {
              if (this.breadcrumbs.length === 0) {

                this.breadcrumbs.push({
                  name: menuItem.data.breadCrumb,
                  route: menuItem.path
                });

                routeSolved = true;
              } else {
                this.breadcrumbs.forEach((crumb: BreadCrumb) => {
                  if (crumb.name === menuItem.data.breadCrumb) {
                    routeSolved = true;
                  }
                });

                if (!routeSolved) {
                  this.breadcrumbs.push({
                    name: menuItem.data.breadCrumb,
                    route: menuItem.path
                  });

                  routeSolved = true;
                }
              }
            }
          }
        });
      }
    });
  }

  ngOnInit() {

  }

  getBreadCrumbs(): Array<BreadCrumb> {
    this.updateBreadcrumbs();

    return this.breadcrumbs;
  }
  updateBreadcrumbs() {
    this.route.url.subscribe((route: any) => {
      this.router.events.subscribe((value: any) => {
        let routeSolved = false;
        if (value.url) {
          this.router.config.map((menuItem: any) => {
            if (!routeSolved || this.breadcrumbs.length === 0) {
              const filter = !menuItem.path.includes('*') || !menuItem.path.includes('page-not-found') || !menuItem.path.includes('');

              const currentRoute = route.path;
              console.log('Current route: ' + route.path, currentRoute);

              if (filter) {
                if (this.breadcrumbs.length === 0) {

                  this.breadcrumbs.push({
                    name: menuItem.data.breadCrumb,
                    route: menuItem.path
                  });

                  routeSolved = true;
                } else {
                  this.breadcrumbs.forEach((crumb: BreadCrumb) => {
                    if (crumb.name === menuItem.data.breadCrumb) {
                      routeSolved = true;
                    }
                  });

                  if (!routeSolved) {
                    this.breadcrumbs.push({
                      name: menuItem.data.breadCrumb,
                      route: menuItem.path
                    });

                    routeSolved = true;
                  }
                }
              }
            }
          });
        }
      });
    });
  }
}
