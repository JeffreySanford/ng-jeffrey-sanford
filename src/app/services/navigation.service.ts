import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbService } from './bread-crumb.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private breadcrumbService: BreadCrumbService) { }

  navigate(item: string, payload?: any) {
    (payload)? this.router.navigate([item], payload): this.router.navigate([item]);
  }
}