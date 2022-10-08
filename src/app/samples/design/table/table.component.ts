import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user';
import { SocialButton } from 'src/app/classes/social-button';
import { HeaderService } from 'src/app/header/header.service';
import { Observable } from 'rxjs';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'sample-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterContentChecked, OnDestroy {
  @ViewChild(MatSort, { static: false }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(HTMLInputElement) input: HTMLInputElement | undefined;
  users: User[] = [];
  public length = 100000;
  displayedColumns?: string[];
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 50];
  dataSource!: MatTableDataSource<User>;
  resolved = false;
  currentNavigation: any;
  color = 'black';
  // private portfolioAPI = 'http://localhost:3000/users';
  private portfolioAPI = 'http://jeffreysanford.us:3000/users';
  projectLove: Array<SocialButton> | undefined;
  isSidebarOpened = false;
  userSubscription: any;

  constructor(
    private http: HttpClient,
    private elementRef: ElementRef,
    private headerState: HeaderService,
    private cd: ChangeDetectorRef
  ) {
    this.resolved = true;
  }

  ngAfterContentChecked() {
    if (this.color !== 'white') {
      this.color = 'white';
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        this.color;
    }
    if (this.users && this.sort && this.paginator && !this.resolved) {
      this.length = this.users.length;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return !filter || data.name.includes(filter);
      };

      this.sort.active = 'name';
      this.sort.direction = 'asc';
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.length;
      this.resolved = true;
    }

    if (this.headerState.getSidebarState() !== this.isSidebarOpened) {
      this.isSidebarOpened = this.headerState.getSidebarState();
      this.cd.detectChanges();
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.userSubscription = this.http
      .get<User[]>(this.portfolioAPI)
      .subscribe((data: any) => {
        this.displayedColumns = ['name', 'constructedAddress', 'email'];
        data.map((user: User) => {
          user.constructedAddress = user.number + ' ' + user.address;
        });

        if (data.length > 0) {
          this.resolved = false;
          this.users = data;
          this.length = this.users.length;
        }
      });

    this.projectLove = [
      {
        name: 'GitHub',
        url: 'https://github.com/JeffreySanford',
        icon: 'code',
        disabled: false,
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sanfordjeffrey/',
        icon: 'linkedin',
        disabled: false,
      },
    ];
  }

  updateUserbase(size: MatSliderChange): Observable<User[]> {
    return this.http.patch<User[]>(this.portfolioAPI, size.value);
  }

  applyFilter(filterValue: HTMLInputElement) {
    this.dataSource.filter = filterValue.value;
  }
}
