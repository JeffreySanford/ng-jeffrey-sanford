import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Item } from 'src/app/services/item';
import { NavigationService } from 'src/app/services/navigation.service';
import { SocialButton } from '../../classes/social-button';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})

export class DesignComponent implements AfterViewInit {
  color = 'white';
  options: GridsterConfig = {
    itemChangeCallback: DesignComponent.itemChange,
    itemResizeCallback: DesignComponent.itemResize,
  };

  dashboard: Array<GridsterItem> = [
    { cols: 3, rows: 1, y: 0, x: 0, title: 'Material Sample Table', url: 'samples/sample-table', description: 'Angular 13 implimentation of Material Design Table concepts using Node to generate mocked users on the backend.  The table impliments searching users, sorting and pagination.' },
    { cols: 3, rows: 1, y: 0, x: 3, title: 'Moon Landing', url: 'samples/space-video', description: 'This is a sample of a HTML5 intergrated into Angular.  If this is not safe for your workplace, we probably won\'t work out but thanks for watching.' },
  ];

  item: any;
  projectLove: SocialButton[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford/ng-jeffrey-sanford',
      icon: 'code',
      disabled: false
    }
  ];

  pageLove: SocialButton[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford',
      icon: 'code',
      disabled: false
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanfordjeffrey/',
      icon: 'linkedin',
      disabled: false
    }
  ];

  loveIcons = ["../../../assets/images/angular.png", "../../../assets/images/nodejs-new-pantone-black.png"];

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  constructor(private navigation: NavigationService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = this.color;
  }

  changedOptions() {

    // this.options.api.optionsChanged();
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(item: any) {
    this.dashboard.push(item);
  }

  handleError(error: Error) {

    console.log(error)
  }

  launchPage(page: string) {
    const routeItem: Item = {
      name: page
    };
    this.navigation.navigate(routeItem);;
  }
}
