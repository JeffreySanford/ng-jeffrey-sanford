
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AppHeaderComponent implements OnInit {
  displayedColumns = ['name', 'email'];
  length: any;
  dataSource: any;
  navigation: NavigationService;

  constructor(navigation: NavigationService) {
    this.navigation = navigation;
  }

  ngOnInit(): void { }
}
