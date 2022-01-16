import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Recipe {

}
@Component({
  selector: 'app-kitchen-table',
  templateUrl: './kitchen-table.component.html',
  styleUrls: ['./kitchen-table.component.scss']
})
export class KitchenTableComponent implements OnInit {
  private portfolioAPI = 'http://localhost:3000/users';
  recipes!: Recipe[];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Recipe[]>(this.portfolioAPI).subscribe((data: any) => {
      this.recipes = data.recipes;
    });
  }

  
}
