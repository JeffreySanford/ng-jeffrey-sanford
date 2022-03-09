
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

export class AppHeaderComponent implements OnInit {
  @Output() menuItemVisited: EventEmitter<boolean> = new EventEmitter<boolean>();
  navigation: NavigationService;
  home = { icon: "pi pi-home" };
  breadCrumbs: Array<BreadCrumb> | undefined;

  constructor(navigation: NavigationService, private breadCrumbService: BreadCrumbService) {
    this.navigation = navigation;
  }

  bcInitItem: BreadCrumb = {
    key: 'Home',
    name: 'Home',
    route: '/home'
  };

  ngOnInit(): void {
    this.navigation.navigate('landing', this.bcInitItem);
    this.breadCrumbs  = this.breadCrumbService.getBreadCrumbs();
  }

  menuItemClicked() {
    this.menuItemVisited.emit(true);
  }

  launchPage(page?: string) {
    if (page)
      this.navigation.navigate(page);
  }
}
