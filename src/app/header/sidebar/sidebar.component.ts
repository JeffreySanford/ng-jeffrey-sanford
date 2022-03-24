import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Item } from '../../services/item';
import { NavigationService } from '../../services/navigation.service';
import { AppHeaderComponent } from '../header.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterContentChecked {
  @Input() isSidebarClosed: boolean | undefined;
  @Input() color!: string;
  @ViewChild('breadcrumbRow') breadcrumbRow!: MatToolbar;
  @ViewChild('container') container!: ElementRef;
  sidebarDirection: string = 'east';
  breadcrumbUpdate = false;

  constructor(private navigation: NavigationService, private cd: ChangeDetectorRef, private renderer: Renderer2, private ref: ElementRef, private header: AppHeaderComponent) { }

  ngAfterContentChecked() {
    if (this.container !== undefined && this.breadcrumbUpdate && this.color) {
      this.sidebarDirection = (this.isSidebarClosed) ? 'west' : 'east';
      this.renderer.setStyle(this.container.nativeElement , 'background-color', this.color);
      this.renderer.setStyle(this.container.nativeElement , 'opacity', 0.9);
      this.isSidebarClosed = true;
      this.breadcrumbUpdate = false;
      this.header.breadcrumbUpdate = true;
      this.cd.detectChanges();
    }
  }

  ngOnInit(): void {
    this.breadcrumbUpdate = true;
    this.isSidebarClosed = false;
    this.sidebarDirection = (this.isSidebarClosed) ? 'east' : 'west';
  }

  launchPage(page?: string) {
    const routeItem: Item = {
      name: page
    };

    if (page === 'landing' || page ==='samples/space-video') {
      this.color = 'black';
    }
    else {
      this.color = 'white';
    }

    this.isSidebarClosed = true;
    this.header.isSidebarClosed =this.isSidebarClosed;
    this.breadcrumbUpdate = true;
    this.header.setBackgroundColorSideBar(this.color);
    this.navigation.navigate(routeItem);
  }

  openSidebar() {
    this.isSidebarClosed = false;
    this.header.isSidebarClosed =this.isSidebarClosed;
    this.sidebarDirection = (this.isSidebarClosed) ? 'west' : 'east';
    this.cd.detectChanges();
  }

  closeSidebar () {
    this.isSidebarClosed = true;
    this.header.isSidebarClosed =this.isSidebarClosed;
    this.sidebarDirection = (this.isSidebarClosed) ? 'west' : 'east';
    this.cd.detectChanges();
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.header.isSidebarClosed =this.isSidebarClosed;
    this.sidebarDirection = (this.isSidebarClosed) ? 'west' : 'east';
    this.cd.detectChanges();
  }
}
