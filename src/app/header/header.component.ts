import { AfterContentInit, AfterViewChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { BreadCrumb } from '../services/bread-crumb'
import { BreadCrumbService } from '../services/bread-crumb.service';
import { Item } from '../services/item';


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
    if(this.breadcrumbsUpdate) {
      this.breadcrumbs = this.breadCrumbService.getBreadCrumbs();
      console.log(this.breadcrumbs);
      debugger
      this.breadcrumbsUpdate = false;
    }
  }

  ngOnInit(): void {
    const routeItem: Item = {
      name: 'landing'
    };
    this.navigation.navigate(routeItem);
    this.breadcrumbs = this.breadCrumbService.getBreadCrumbs();
  }

  menuItemClicked() {
    this.menuItemVisited.emit(true);
  }

  launchPage(page?: string) {
    const routeItem: Item = {
      name: page
    };
    this.navigation.navigate(routeItem);;
    this.breadcrumbsUpdate = true;
  }
}
