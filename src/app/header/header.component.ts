
import { OverlayOutsideClickDispatcher } from '@angular/cdk/overlay';
import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
export interface Breadcrumb {
  name: string | undefined;
  route: string | undefined;
  terminalOnly?: boolean | undefined;
  afterBaseOnly?: boolean | undefined;
  pathParamList?: Array<any> | undefined;
  queryParams?: any | undefined;
  fragment?: string | undefined;
  key?: string | undefined;
}

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

  constructor(navigation: NavigationService) {
    this.navigation = navigation;
  }

  bcInitItem: Breadcrumb = {
    key: 'Home',
    name: 'Home',
    route: '/home'
  };

  ngAfterContentChecked() {
    if(this.navigation.pruned) {
      this.breadcrumbs = this.navigation.getBreadCrumbs();

    }
  }

  ngOnInit(): void {
    this.navigation.navigate('landing', this.bcInitItem);
      this.breadcrumbs = this.navigation.breadcrumbs;
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
