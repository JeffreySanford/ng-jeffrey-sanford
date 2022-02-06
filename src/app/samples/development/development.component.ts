import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  dashboard!: Array<GridsterItem>;
  options!: GridsterConfig;
  projectLove: { name: string; url: string; icon: string; }[] | undefined;
  pageLove: { name: string; url: string; icon: string; }[] | undefined;
  constructor(private navigation: NavigationService) { }

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  // loveIcons = ["../../../assets/images/angular.png", "../../../assets/images/nodejs-new-pantone-black.png", "../../../assets/images/WebReady-Logo_RGB_Forest-Green.JPG"];
  loveIcons = ["../../../assets/images/angular.png", "../../../assets/images/nodejs-new-pantone-black.png"];

  ngOnInit(): void {
    this.options = {
      itemChangeCallback: DevelopmentComponent.itemChange,
      itemResizeCallback: DevelopmentComponent.itemResize
    }

    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0, title: 'Kitchen Table', url: 'samples/kitchen-table', description: 'Active Angular Recipe connection' },
      { cols: 3, rows: 1, y: 0, x: 6, title: 'Local Weather', url: 'samples/weather', description: 'Weather frontend'  }
    ];

    this.projectLove = [
      {
        name: 'GitHub',
        url: 'http://localhost',
        icon: 'home'
      },
      {
        name: 'Facebook',
        url: 'http://localhost',
        icon: 'home'
      },
      {
        name: 'Sample',
        url: 'http://localhost',
        icon: 'airplane'
      },
      {
        name: 'Twitter',
        url: 'http://localhost',
        icon: 'ship'
      },
    ];


    this.pageLove = [
      {
        name: 'GitHub',
        url: 'http://localhost',
        icon: 'github'
      },
      {
        name: 'Facebook',
        url: 'http://localhost',
        icon: 'facebook'
      },
      {
        name: 'Sample',
        url: 'http://localhost',
        icon: 'airplane'
      },
      {
        name: 'Azure',
        url: 'http://localhost',
        icon: 'mdi:azure'
      },
    ];
  }

  launchPage(page: string) {
    this.navigation.navigateDesign(page);
  }
}
