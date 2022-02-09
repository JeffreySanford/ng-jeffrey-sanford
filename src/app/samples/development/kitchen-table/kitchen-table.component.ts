import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.class';

@Component({
  selector: 'kitchen-table',
  templateUrl: './kitchen-table.component.html',
  styleUrls: ['./kitchen-table.component.scss']
})

export class KitchenTableComponent implements OnInit {
  private portfolioAPI = 'https://api-portfolio-l8cra.ondigitalocean.app/recipes';
  // private portfolioAPI = 'http://localhost:3000/recipes';
  recipes!: Recipe[];
  color = 'green';
  projectLove = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford',
      icon: 'code'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jeffrey.sanford.56/',
      icon: 'facebook'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sanfordjeffrey/',
      icon: 'linkedin'
    }];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Recipe[]>(this.portfolioAPI).subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }
}
