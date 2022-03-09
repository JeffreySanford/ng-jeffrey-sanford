import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user';
import { SocialButton } from 'src/app/classes/social-button';

@Component({
  selector: 'sample-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterContentChecked {
  @ViewChild(MatSort, { static: false }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(HTMLInputElement) input: HTMLInputElement | undefined;
  users: User[] | undefined;
  length = 0;
  displayedColumns?: string[];
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<User>;
  resolved: boolean = false;
  currentNavigation: any;
  color = 'black';
  private portfolioAPI = 'https://api-portfolio-l8cra.ondigitalocean.app/users';
  projectLove: Array<SocialButton> | undefined;

  constructor(private http: HttpClient) { }

  ngAfterContentChecked() {
    if (this.users && this.sort && this.paginator && !this.resolved) {
      this.length = this.users.length;
      this.dataSource = new MatTableDataSource<User>(this.users);
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
    this.http.get<User[]>(this.portfolioAPI).subscribe((data: any) => {
      this.displayedColumns = ['name', 'constructedAddress', 'email'];
      data.users.map((user: User)=>{
        user.constructedAddress = user.number + ' ' + user.address; 
      });

      this.users = data.users;
    });

    this.projectLove = [
      {
        name: 'GitHub',
        url: 'https://github.com/JeffreySanford',
        icon: 'github',
        disabled: false
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/jeffrey.sanford.56/',
        icon: 'facebook',
        disabled: true
      },
      {
        name: 'Twitter',
        url: 'https://www.twiter.com/jeffrey_sanford',
        icon: 'twitter_box',
        disabled: true
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sanfordjeffrey/',
        icon: 'linkedin_box',
        disabled: false
      }
    ];
  }

  applyFilter(filterValue: HTMLInputElement) {
    this.dataSource.filter = filterValue.value;
  }
}
