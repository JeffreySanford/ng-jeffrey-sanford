import { AfterContentChecked, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Users {
  address?: { street: string, suite: string, city: string, zipcode: string, geo: any }
  company?: { name: string, catchPhrase: string, bs: 'harness real-time e-markets' }
  email: string;
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
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(HTMLInputElement) input: HTMLInputElement | undefined;
  $users = this.http.get('https://jsonplaceholder.typicode.com/users');

  length = 0;
  displayedColumns = ['name', 'email'];
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 50];
  dataSource: any;
  users: Users[] = [];

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
    this.$users.subscribe((users: any) => {
      this.displayedColumns = ['name', 'email'];
      this.length = users.length;

      this.dataSource = new MatTableDataSource<Users>(users);
      this.dataSource = new MatSort();
      this.dataSource.sort.active = 'name';
      this.dataSource.sort.direction = 'asc';
    });
  }

  ngAfterContentChecked() {
    if(this.length > 0) {

      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return !filter || data.name === filter;
      }



      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.cd.detectChanges();
    }
  }

  ngOnInit(): void { }

  applyFilter(filterValue: HTMLInputElement) {
    this.dataSource.filter = filterValue.value;
  }
}
