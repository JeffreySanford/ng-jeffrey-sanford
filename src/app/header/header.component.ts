import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { BreadCrumb } from '../services/bread-crumb';
import { breadcrumbService } from '../services/bread-crumb.service';
import { Item } from '../services/item';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AppHeaderComponent implements OnInit, AfterContentChecked {
  @Input() public color!: string;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  @ViewChild('breadcrumbRow') breadcrumbRow!: MatToolbar;
  @ViewChild('gridster') gridster!: ElementRef;
  @Output() menuItemVisited: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  navigation: NavigationService;
  home = { icon: 'pi pi-home' };
  breadcrumbUpdate = false;
  isSidebarClosed = false;
  breadcrumbs: BreadCrumb[] = [];
  page: string | undefined;

  constructor(
    navigation: NavigationService,
    private breadcrumbService: breadcrumbService,
    private change: ChangeDetectorRef,
    private renderer: Renderer2,
    private headerState: HeaderService
  ) {
    this.navigation = navigation;
  }

  ngAfterContentChecked(): void {
    if (
      this.sidebar &&
      this.breadcrumbUpdate &&
      this.breadcrumbRow &&
      this.color
    ) {
      this.setBackgroundColorSideBar(this.color);

      this.isSidebarClosed = this.headerState.getSidebarState();
      this.breadcrumbService.getBreadcrumbs().subscribe(
        (next) => {
          if (next !== undefined) {
            const isLandingPage = this.navigation.isLandingPage;
            if (isLandingPage) {
              this.color = 'black';
              this.breadcrumbs = [{route: 'landing', name: 'Home'}];
            } else {
              this.color = 'white';
              this.breadcrumbs = next;
            }

            this.renderer.setStyle(
              this.breadcrumbRow._elementRef.nativeElement,
              'background-color',
              this.color
            );
            this.change.detectChanges();
          }
        },
        (error) => {
          debugger;
        },
        () => { }
      );

      this.change.detectChanges();
      this.breadcrumbUpdate = false;
    }
  }

  ngOnInit(): void {
    const routeItem: Item = {
      name: 'landing',
      route: 'landing',
    };

    this.page = routeItem.name;
    this.navigation.navigate(routeItem);
    this.color = 'black';
    this.breadcrumbUpdate = true;
    this.change.detectChanges();
  }

  launchPage(page: Item) {
    let routeItem: Item;
    if (page.route) {
      routeItem = {
        name: page.name,
        route: page.route,
      };
    } else {
      routeItem = {
        name: page.name,
        url: page.url,
      };
    }
    this.isSidebarClosed = this.headerState.getSidebarState();
    this.breadcrumbUpdate = true;
    this.navigation.navigate(routeItem);
  }

  setBackgroundColorSideBar(color: string) {
    this.color = color;
    this.renderer.setStyle(
      this.breadcrumbRow._elementRef.nativeElement,
      'background-color',
      this.color
    );
    this.breadcrumbUpdate = true;
    this.change.detectChanges();
  }

  setUpdate(isUpdate: boolean) {
    if(isUpdate) {
      this.breadcrumbUpdate = true;
    }
  }
}
