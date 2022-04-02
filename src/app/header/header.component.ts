import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { BreadCrumb } from '../services/bread-crumb'
import { breadcrumbervice } from '../services/bread-crumb.service';
import { Item } from '../services/item';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { GridsterComponent } from 'angular-gridster2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeaderComponent implements OnInit, AfterContentChecked {
  @Input() public color!: string;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  @ViewChild('breadcrumbRow') breadcrumbRow!: MatToolbar;
  @ViewChild('gridster') gridster!: ElementRef;
  @Output() menuItemVisited: EventEmitter<boolean> = new EventEmitter<boolean>();
  navigation: NavigationService;
  home = { icon: "pi pi-home" };
  breadcrumbUpdate = false;
  isSidebarClosed = false;

  constructor(navigation: NavigationService, private breadcrumbervice: breadcrumbervice, private change: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
    this.navigation = navigation;
    this.breadcrumb = this.breadcrumbervice.getBreadcrumbs();
  }

  breadcrumb: Array<BreadCrumb> = [{
    key: 'Home',
    name: 'Home',
    route: '/home'
  }];

  ngAfterContentChecked(): void {
    if (this.sidebar && this.breadcrumbUpdate && this.breadcrumbRow && this.color) {
      this.breadcrumb = this.breadcrumbervice.getBreadcrumbs();
      this.renderer.setStyle(this.breadcrumbRow._elementRef.nativeElement, 'background-color', this.color);
      this.setBackgroundColorSideBar(this.color);
      this.change.detectChanges();
      this.breadcrumbUpdate = false;
    }
  }

  ngOnInit(): void {
    const routeItem: Item = {
      name: 'landing'
    };
    this.navigation.navigate(routeItem);
    this.color = 'black';
    this.breadcrumbUpdate = true;
    this.breadcrumb = this.breadcrumbervice.getBreadcrumbs();
    this.change.detectChanges();
  }

  launchPage(page?: string) {
    const routeItem: Item = {
      name: page
    };

    this.breadcrumbUpdate = true;
    this.navigation.navigate(routeItem);
  }

  setBackgroundColorSideBar(color: string) {
    this.color = color;
    this.breadcrumb = this.breadcrumbervice.getBreadcrumbs();
    this.renderer.setStyle(this.breadcrumbRow._elementRef.nativeElement, 'background-color', this.color);
    this.change.detectChanges();
  }
}
