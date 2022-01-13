
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeaderComponent implements OnInit {
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
      this.router.navigate(['landing']);
    } else {
      this.router.navigate([item]);
    };
  }
}
