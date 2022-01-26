import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { SocialButton } from 'src/app/footer/footer.component';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;
  item: any;
  projectLove: SocialButton[] | undefined;
  pageLove: SocialButton[] | undefined;

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.options = {
      itemChangeCallback: DesignComponent.itemChange,
      itemResizeCallback: DesignComponent.itemResize,
    };

    this.dashboard = [
      {cols: 3, rows: 1, y: 0, x: 0, title: 'Material Sample Table', url: 'samples/sample-table', description: 'Angular 13 implimentation of Material Design Table concepts using Node to generate mocked users on the backend.  The table impliments searching users, sorting and pagination.'},
      {cols: 3, rows: 1, y: 0, x: 3, title: 'Kitchen Table', url: 'samples/development/kitchen-table', description: 'Active Angular Recipe connection'},
      {cols: 3, rows: 1, y: 0, x: 6, title: 'Space Video', url: 'samples/'}
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



  changedOptions() {
    debugger
    // this.options.api.optionsChanged();
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(item: any) {
    this.dashboard.push(item);
  }
  handleError(error: Error) {
    debugger
    console.log(error)
  }

  navigateDesign(item?: string) {
    if (!item) {
      this.router.navigate(['landing']);
    } else {
      this.router.navigate([item]);
    };
  }

}