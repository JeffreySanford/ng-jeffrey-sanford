import { HttpClient } from '@angular/common/http';
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
  $users = this.http.get('https://jsonplaceholder.typicode.com/users');

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  resolveUsers() {
    this.$users.subscribe((users: any) => {
      this.length = users.length;
      this.dataSource = new MatTableDataSource<Users>(users);
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return !filter || data.name === filter;
      }
      this.router.navigate(['../samples/sample-table'], {relativeTo: this.activatedRoute, state: users});
    });
  }

  navigateHome() {
    this.router.navigate(['landing']);
  }
}
