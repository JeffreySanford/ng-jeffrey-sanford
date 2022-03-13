import { Component, ElementRef, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { SocialButton } from 'src/app/classes/social-button';
import { Item } from 'src/app/services/item';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  options: GridsterConfig = {
    itemChangeCallback: DevelopmentComponent.itemChange,
    itemResizeCallback: DevelopmentComponent.itemResize
  };

  dashboard: Array<GridsterItem> = [
    { cols: 3, rows: 1, y: 0, x: 0, title: 'Kitchen Table', url: 'samples/kitchen-table', description: 'Active Angular Recipe connection' },
    { cols: 3, rows: 1, y: 0, x: 3, title: 'Local Weather', url: 'samples/weather', description: 'Weather frontend' }
  ];

  projectLove: Array<SocialButton> = [
    {
      name: 'GitHub',
      url: 'http://localhost',
      icon: 'home',
      disabled: false
    }
  ];

  pageLove: Array<SocialButton> = [
    {
      name: 'GitHub',
      url: 'http://localhost',
      icon: 'github',
      disabled: false
    }
  ];

  color = 'white';

  constructor(private navigation: NavigationService, private elementRef: ElementRef) { }

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  // loveIcons = ["../../../assets/images/angular.png", "../../../assets/images/nodejs-new-pantone-black.png", "../../../assets/images/WebReady-Logo_RGB_Forest-Green.JPG"];
  loveIcons = ["../../../assets/images/angular.png", "../../../assets/images/nodejs-new-pantone-black.png"];

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = this.color;
  }
  ngOnInit(): void {
  }

  launchPage(page: string) {
    const routeItem: Item = {
      name: page
    };
    this.navigation.navigate(routeItem);;
  }
}
