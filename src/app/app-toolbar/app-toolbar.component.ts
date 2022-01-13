import { HttpClient } from '@angular/common/http';
import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../samples/table/table.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})

export class AppToolbarComponent implements OnInit {
  displayedColumns = ['name', 'email'];
  length: any;
  dataSource: any;



  constructor(private router: Router) {
  }

  ngOnInit(): void { }

  navigateHome() {
    this.router.navigate(['landing']);
  }

  navigateDesign(item?: string) {
    if (!item) {
      this.router.navigate(['design']);
    } else {
      this.router.navigate(['samples/sample-table']);
    };
  }
}
