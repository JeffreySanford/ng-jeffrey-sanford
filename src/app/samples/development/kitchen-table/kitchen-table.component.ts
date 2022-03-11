import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Recipe } from './recipe.class';

@Component({
  selector: 'kitchen-table',
  templateUrl: './kitchen-table.component.html',
  styleUrls: ['./kitchen-table.component.scss']
})

export class KitchenTableComponent implements OnInit {
  // private portfolioAPI = 'https://api-portfolio-l8cra.ondigitalocean.app/recipes';
  private portfolioAPI = 'http://localhost:3000/recipes';
  recipes!: Recipe[];
  color = 'white';
  projectLove = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford',
      icon: 'code',
      disabled: false
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jeffrey.sanford.56/',
      icon: 'facebook',
      disabled: true
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sanfordjeffrey/',
      icon: 'linkedin',
      disabled: true
    }];
    siteSections = ['landing', 'recipes', 'history', 'contact'];
    active = 0;


  constructor(private http: HttpClient, private navigation: NavigationService) { }

  ngOnInit(): void {
    this.http.get<Recipe[]>(this.portfolioAPI).subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

  onTabChange(tabIndex: Number) {
    console.log(tabIndex)
  }

  routeTo(recipe: Recipe, event: Event) {
    const path = '/samples/kitchen-table/' + recipe.name;
    this.navigation.navigate(path, recipe);
  }
}

