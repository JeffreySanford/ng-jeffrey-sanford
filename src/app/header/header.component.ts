
import { OverlayOutsideClickDispatcher } from '@angular/cdk/overlay';
import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { BreadCrumb } from '../services/bread-crumb'
import { BreadCrumbService } from '../services/bread-crumb.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeaderComponent implements OnInit, AfterContentChecked {
  @Output() menuItemVisited: EventEmitter<boolean> = new EventEmitter<boolean>();
  navigation: NavigationService;
  home = { icon: "pi pi-home" };
  breadcrumbs: any;

  constructor(navigation: NavigationService, private breadCrumbService: BreadCrumbService) {
    this.navigation = navigation;
  }

  bcInitItem: BreadCrumb = {
    key: 'Home',
    name: 'Home',
    route: '/home'
  };

  ngAfterContentChecked() {
    if(this.breadCrumbService.pruned) {
      this.breadcrumbs = this.breadCrumbService.getBreadCrumbs();

    }
  }

  ngOnInit(): void {
    this.navigation.navigate('landing', this.bcInitItem);
      this.breadcrumbs = this.breadCrumbService.breadcrumbs;
  }

  menuItemClicked() {
    this.menuItemVisited.emit(true);
  }

  launchPage(page?: string) {
    debugger
    if (page)
      this.navigation.navigate(page);
  }
}
