import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../samples/table/table.component';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  $users = this.http.get('https://jsonplaceholder.typicode.com/users');
  length: any;
  dataSource: MatTableDataSource<Users> | undefined;
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.$users.subscribe(
        (data) => {
          debugger
          // const users: Array<Users> = data.propertyIsEnumerable;
          this.length = data.valueOf.length;
          // this.dataSource = new MatTableDataSource<Users>(users);
          // this.dataSource.filterPredicate = (data: any, filter: string) => {
            // return !filter || data.name === filter;
          // }
        },
        (error) => this.handleError(error),
        () => {
          debugger
        }
      );

      // this.router.navigate(['../samples/sample-table'], { relativeTo: this.activatedRoute, state: users });
  }

  handleError(error: Error) {
    debugger
    console.log(error)
  }

}
