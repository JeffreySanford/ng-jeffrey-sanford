import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../samples/development/kitchen-table/recipe.class';
import { breadcrumbService } from './bread-crumb.service';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private route: ActivatedRoute, private breadcrumbService: breadcrumbService) { }

  navigate(item: Item, payload?: any) {
    if (payload) {
      debugger
      this.router.navigate(["recipe/" + payload.url], {relativeTo:this.route});
    }
    else {
      (item.url) ? window.open(item.url, '_blank') : this.router.navigate([item.name]);
    }

    this.breadcrumbService.getBreadcrumbs();
  }
}