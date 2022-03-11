import { AfterContentInit, AfterViewChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { BreadCrumb } from '../services/bread-crumb'
import { BreadCrumbService } from '../services/bread-crumb.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeaderComponent implements OnInit, AfterViewChecked {
  @Output() menuItemVisited: EventEmitter<boolean> = new EventEmitter<boolean>();
  navigation: NavigationService;
  home = { icon: "pi pi-home" };
  breadcrumbsUpdate = false;

  constructor(navigation: NavigationService, private breadCrumbService: BreadCrumbService) {
    this.navigation = navigation;
    this.breadcrumbs = this.breadCrumbService.getBreadCrumbs();
  }

  breadcrumbs: Array<BreadCrumb> = [{
    key: 'Home',
    name: 'Home',
    route: '/home'
  }];

  ngAfterViewChecked(): void {
      this.breadcrumbs = this.breadCrumbService.getBreadCrumbs();
      console.log(this.breadcrumbs);
      this.breadcrumbsUpdate = false;
  }

  ngOnInit(): void {
    this.navigation.navigate('landing', '/landing');
    this.breadCrumbService.updateBreadcrumbs();
    this.breadcrumbs = this.breadCrumbService.getBreadCrumbs();
    console.log(this.breadcrumbs);
  }

  menuItemClicked() {
    this.menuItemVisited.emit(true);
  }

  launchPage(page?: string) {
    if (page)
    this.navigation.navigate(page);
    this.breadCrumbService.updateBreadcrumbs();
    this.breadcrumbsUpdate = true;
  }
}
