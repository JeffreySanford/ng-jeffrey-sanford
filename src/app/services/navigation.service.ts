import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigate(item: string, payload?: any) {
    (payload)? this.router.navigate([item], payload): this.router.navigate([item]);
  }
}