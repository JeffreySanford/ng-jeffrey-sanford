import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../header/header.component';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  router: Router;
  breadcrumbs: { name: string; route: string; }[];
  pruned: boolean = false;
  constructor(router: Router, private route: ActivatedRoute) {
    this.router = router;

    const breadcrumbs = new Array<{ name: string, route: string }>();
    this.router.config.map((menuItem: any) => {
      if (menuItem.path && !menuItem.path.includes('*') && !menuItem.path.includes('page-not-found')) {
        breadcrumbs.push({
          name: menuItem.data.breadCrumb,
          route: menuItem.path
        });
      }
    });
    this.breadcrumbs = breadcrumbs;
  }

  navigate(item: string, payload?: any): any {
    this.router.events.subscribe((value: any) => {
      //Any primary route side-menu action will add base breadcrumb items.
      if (value.isMenuAction) {
        value.isMenuAction = false;
        this.loadBaseBreadcrumbList(value);
      }

      console.dir(value)
      let child: ActivatedRoute;
      if (this.route.firstChild) {
        child = this.route.firstChild;
      }
      else {
        child = this.route;
      }

      if (this.breadcrumbs.length > 0) {
        let bcRoute: string = item;

        //Remove the breadcrumb trailing items.
        let bcIndex: number = this.getBreadcrumbPositionByKey(bcRoute);
        if (bcIndex >= 0) {
          this.breadcrumbs.splice(bcIndex + 1);
          this.pruned = true;
        }
      }
    });

    return this.breadcrumbs;
  }

  getBreadCrumbs(): Array<Breadcrumb> {
    if(this.pruned) {
      return this.breadcrumbs;
    }
    else
    return [];
  }

  loadBaseBreadcrumbList(item: any, payload?: any) {
    debugger
    this.breadcrumbs.push(item);
    (payload) ? this.router.navigate([item], payload) : this.router.navigate([item]);
  }

  getBreadcrumbPositionByKey(route: string): number {
    let rtnIndex: number = -1;
    for (let idx: number = this.breadcrumbs.length - 1; idx >= 0; idx--) {
      if (this.breadcrumbs[idx].route == route) {
        rtnIndex = idx;
        break;
      }
    }
    return rtnIndex;
  }
}
