import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbService } from './bread-crumb.service';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private breadcrumbService: BreadCrumbService) { }

  navigate(item: Item, payload?: any) {
    if (payload) {
      this.router.navigate([item.url, payload]);
    }
    else {
      (item.url) ? window.open(item.url, '_blank') : this.router.navigate([item.name]);
    }

    this.breadcrumbService.getBreadCrumbs();
  }
}