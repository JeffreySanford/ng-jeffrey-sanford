import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../samples/development/kitchen-table/recipe.class';
import { breadcrumbService } from './bread-crumb.service';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  isLandingPage: boolean = true;
  private ob$ = new BehaviorSubject<boolean>(true);
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: breadcrumbService
  ) {}

  getPageStatus(): Observable<boolean> {

    return this.ob$;
  }
  
  navigate(item: Item, payload?: any) {

    this.isLandingPage = item.name === 'landing' ? true: false;
    this.ob$.next(this.isLandingPage);

    if (payload) {
      this.router.navigate(['recipe/' + payload.url], {
        relativeTo: this.route,
      });
    } else {
      if (item.url) {
        window.open(item.url, '_blank');
      } else {
        if (item.route) {
          this.router.navigate([item.route]);
        } else {
          this.router.navigate([item.name]);
        }
      }
    }

    this.breadcrumbService.getBreadcrumbs();
  }

}
