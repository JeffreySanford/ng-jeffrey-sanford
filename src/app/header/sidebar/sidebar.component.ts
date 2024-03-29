import {
  AfterContentChecked, ChangeDetectorRef, Component, ElementRef,
  Input, OnInit, Renderer2, ViewChild
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Item } from '../../services/item';
import { NavigationService } from '../../services/navigation.service';
import { AppHeaderComponent } from '../header.component';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterContentChecked {
  @Input() isSidebarClosed: boolean | undefined;
  @Input() color!: string;
  @ViewChild('breadcrumbRow') breadcrumbRow!: MatToolbar;
  @ViewChild('container') container!: ElementRef;
  sidebarDirection: string = 'east';
  breadcrumbUpdate = false;

  projects = [
    {
      name: 'Home',
      route: 'landing',
      description: 'Return to the landing page',
      icon: 'home',
    },
    {
      name: 'Design',
      route: 'design-dashboard',
      description: 'Projects related to core design concepts',
      icon: 'art_track',
    },
    {
      name: 'Development',
      route: 'development-dashboard',
      description: 'Projects related to Web Development and external APIs',
      icon: 'whatshot',
    },
  ];
  smallScreenSize: boolean = false;
  screenWidth: number = 0;

  constructor(
    private headerState: HeaderService,
    private navigation: NavigationService,
    private cd: ChangeDetectorRef,
    private renderer: Renderer2,
    private ref: ElementRef,
    private header: AppHeaderComponent
  ) { }

  ngAfterContentChecked() {
    if (this.container !== undefined && this.breadcrumbUpdate && this.color) {
      this.sidebarDirection = this.isSidebarClosed ? 'west' : 'east';
      this.renderer.setStyle(
        this.container.nativeElement,
        'background-color',
        this.color
      );

      this.renderer.setStyle(this.container.nativeElement, 'opacity', 0.9);
      this.isSidebarClosed = true;
      this.breadcrumbUpdate = false;
      this.header.breadcrumbUpdate = true;

      this.cd.detectChanges();
    }
  }

  ngOnInit(): void {
    this.navigation.getPageStatus().subscribe(() => {
      this.breadcrumbUpdate = true;
      this.header.breadcrumbUpdate = true;
      this.cd.detectChanges();
    });

    this.isSidebarClosed = false;
  }

  launchPage(page?: string) {
    const routeItem: Item = {
      name: page,
    };

    if (page === 'landing') {
      this.color = 'black';
    } else {
      this.color = 'azure';
    }

    this.isSidebarClosed = false;
    this.headerState.setSidebarState(false);
    this.header.isSidebarClosed = this.isSidebarClosed;
    this.breadcrumbUpdate = true;
    this.header.setBackgroundColorSideBar(this.color);
    this.navigation.navigate(routeItem);
  }
}
