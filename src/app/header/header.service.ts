import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  isSidebarClosed = false;

  constructor() {}

  setSidebarState(sidebarState: boolean) {
    this.isSidebarClosed = sidebarState;
  }

  getSidebarState() {
    return this.isSidebarClosed;
  }
}
