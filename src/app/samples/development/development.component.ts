import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { SocialButton } from 'src/app/classes/social-button';
import { HeaderService } from 'src/app/header/header.service';
import { Item } from 'src/app/services/item';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
})
export class DevelopmentComponent implements AfterViewInit {
  options: GridsterConfig = {
    itemChangeCallback: DevelopmentComponent.itemChange,
    itemResizeCallback: DevelopmentComponent.itemResize,
  };

  dashboard: Array<GridsterItem> = [
    {
      cols: 3,
      rows: 1,
      y: 0,
      x: 0,
      title: 'Kitchen Table',
      url: 'samples/kitchen-table',
      description: 'Active Angular Recipe connection',
    },
    {
      cols: 3,
      rows: 1,
      y: 0,
      x: 2,
      title: 'Local Weather',
      url: 'samples/weather',
      description: 'Weather frontend',
    },
    {
      cols: 3,
      rows: 1,
      y: 0,
      x: 4,
      title: 'Inventory List',
      url: 'samples/inventory',
      description: 'Sample inventory control basics',
    },
  ];

  projectLove: Array<SocialButton> = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford/jeffrey-sanford',
      icon: 'code',
      disabled: false,
    },
  ];

  pageLove: Array<SocialButton> = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford',
      icon: 'code',
      disabled: false,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanfordjeffrey/',
      icon: 'linkedin',
      disabled: false,
    },
  ];

  color = 'white';
  isSidebarClosed = false;

  constructor(
    private navigation: NavigationService,
    private elementRef: ElementRef,
    private headerState: HeaderService
  ) {}

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  // loveIcons = ["../../../assets/images/angular.png", "../../../assets/images/nodejs-new-pantone-black.png", "../../../assets/images/WebReady-Logo_RGB_Forest-Green.JPG"];
  loveIcons = [
    '../../../assets/images/angular.png',
    '../../../assets/images/nodejs-new-pantone-black.png',
  ];

  ngAfterContentChecked() {
    this.isSidebarClosed = this.headerState.getSidebarState();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.color;
  }

  launchPage(page: string) {
    const routeItem: Item = {
      name: page,
    };
    this.headerState.setSidebarState(true);
    this.navigation.navigate(routeItem);
  }
}
