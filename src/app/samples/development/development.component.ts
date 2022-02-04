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
      itemResizeCallback: DevelopmentComponent.itemResize,
    };

    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0, title: 'Material Sample Table', url: 'samples/sample-table', description: 'Angular 13 implimentation of Material Design Table concepts using Node to generate mocked users on the backend.  The table impliments searching users, sorting and pagination.' },
      { cols: 3, rows: 1, y: 0, x: 3, title: 'Kitchen Table', url: 'samples/development/kitchen-table', description: 'Active Angular Recipe connection' },
      { cols: 3, rows: 1, y: 0, x: 6, title: 'Space Video', url: 'samples/' }
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
    this.navigation.navigateDesign('landing');
  }
}
