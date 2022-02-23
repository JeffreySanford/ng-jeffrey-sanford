import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreadCrumb } from './bread-crumb';

@Injectable({
  providedIn: 'root'
})

export class BreadCrumbService {
  public breadcrumbs: Array<BreadCrumb> = [];
  pruned: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.getBreadCrumbs().subscribe((breadCrumbs: Array<BreadCrumb>)=>{
      this.router.config.map((menuItem: any) => {
        
        if (!menuItem.path.includes('*') && !menuItem.path.includes('page-not-found') && !menuItem.path.includes('')) {
          this.breadcrumbs.push({
            name: menuItem.data.breadCrumb,
            route: menuItem.path
          });
        }
      });
    
    });
      // if (breadCrumbs.length > 0) {
        // debugger
        // let bcRoute: string = value;
  
        //Remove the breadcrumb trailing items.
        // let bcIndex: number = this.getBreadcrumbPositionByKey(bcRoute);
      //   if (bcIndex >= 0) {
      //     breadcrumbs.splice(bcIndex + 1);
      //   }
      // }    
    //  });
  }

  getBreadCrumbs(): any {

    return this.breadcrumbs;
    // let child: ActivatedRoute;
    // const breadcrumbsObs =  this.router.events.subscribe((value: any) => {
    //   //Any primary route side-menu action will add base breadcrumb items.
    //   if (value.isMenuAction) {
    //     value.isMenuAction = false;
    //     this.loadBaseBreadcrumbList(value);
    //     (this.route.firstChild) ? child = this.route.firstChild : child = this.route;

    //   }
    // });
  }

  loadBaseBreadcrumbList(item: any, payload?: any) {
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
