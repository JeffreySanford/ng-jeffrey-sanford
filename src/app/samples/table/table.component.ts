import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'sample-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSort, { static: false }) sort: any;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(HTMLInputElement) input: HTMLInputElement | undefined;

  $users = this.http.get('https://jsonplaceholder.typicode.com/users');
  length = 0;
  displayedColumns = [''];
  dataSource: MatTableDataSource<any>;

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<any>();
   }

  ngAfterContentInit(){
    if(this.sort && this.sort.active) {
      this.sort.active = 'name';
      this.sort.direction = 'asc';
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    }
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>();
    if (this.$users) {
      this.$users.subscribe((users: any) => {
        this.length = users.length;
        this.displayedColumns = ['name'];

        this.dataSource.data = users;
      });
    }
  }

  applyFilter(filterValue: HTMLInputElement){
    this.dataSource.filter = filterValue.value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return !filter || data.name === filter;
    }

  }

}
