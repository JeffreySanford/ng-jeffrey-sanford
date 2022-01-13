import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExtraOptions, Navigation, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

export interface Users {
  address?: { street: string, suite: string, city: string, zipcode: string, geo: any }
  company?: { name: string, catchPhrase: string, bs: 'harness real-time e-markets' }
  email?: string;
  id?: number;
  name: string;
  phone?: string;
  username?: string;
  website?: string;
}
@Component({
  selector: 'sample-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterContentChecked {
  @ViewChild(MatSort, { static: false }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(HTMLInputElement) input: HTMLInputElement | undefined;

  length = 0;
  displayedColumns?: string[];
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<Users>;
  resolved: boolean = false;
  currentNavigation: any;
  users: Users[] | undefined;
  private portfolioAPI = 'http://localhost:3000/users';

  constructor(private cd: ChangeDetectorRef, private router: Router, private http: HttpClient) { }

  ngAfterContentChecked() {
    if (this.users && this.sort && this.paginator && !this.resolved) {
      this.length = this.users.length;
      this.dataSource = new MatTableDataSource<Users>(this.users);
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return !filter || data.name.includes(filter);
      }

      this.sort.active = 'name';
      this.sort.direction = 'asc';
      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.length;
      this.resolved = true;
    }
  }

  ngOnInit(): void {

    this.http.get<Users[]>(this.portfolioAPI).subscribe((data: any) => {
      this.displayedColumns = ['name', 'address', 'email'];
      this.users = data.users;
    });
  }

  applyFilter(filterValue: HTMLInputElement) {
    this.dataSource.filter = filterValue.value;
  }
}
