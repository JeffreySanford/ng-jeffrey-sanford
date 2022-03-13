import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Event as NavigationEvent } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { BreadCrumb } from './bread-crumb';

@Injectable({
  providedIn: 'root'
})

export class BreadCrumbService {
  public breadcrumbs: Array<BreadCrumb> = [];
  pruned: boolean = false;
  currentRoute: any;
  validRoutes: Array<BreadCrumb> = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    let routeSolved = false;
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        this.router.config.map((menuItem: any) => {
          if (!routeSolved || this.breadcrumbs.length === 0) {
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

              // if (this.breadcrumbs.length === 0) {

              //   this.breadcrumbs.push({
              //     name: menuItem.data.breadCrumb,
              //     route: menuItem.path
              //   });

              //   routeSolved = true;
              // } else {
              //   this.breadcrumbs.forEach((crumb: BreadCrumb) => {
              //     if (crumb.name === menuItem.data.breadCrumb) {
              //       console.log(crumb.name, menuItem.data.breadCrumb)
              //       debugger
              //       routeSolved = true;
              //     }
              //   });

              //   if (!routeSolved) {
              //     this.breadcrumbs.push({
              //       name: menuItem.data.breadCrumb,
              //       route: menuItem.path
              //     });

              //     routeSolved = true;
              //   }
              // }
            }
          }
        });
      }
    });
  }

  ngOnInit() {
  }

  getBreadCrumbs(): Array<BreadCrumb> {
    this.location.onUrlChange((val) => {
      this.currentRoute = val.substring(1);
      this.validRoutes.map((route: BreadCrumb) => {

        if (this.currentRoute === route.route) {
          const present = this.breadcrumbs.includes({
            name: route.name,
            route: route.route
          });

          if (!present) {
            debugger
            this.breadcrumbs.push({
              name: route.name,
              route: route.route
            });
          }
        }
      })
    })

    return this.breadcrumbs;
  }
}