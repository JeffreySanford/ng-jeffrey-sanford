import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';
import { PopCornRecipes } from './popcorn-recipes.class';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent extends PopCornRecipes {
  inventory: Array<Inventory> = [];
  dataSource = new MatTableDataSource<Inventory>();
  displayedColumns = ['id', 'name', 'quantity'];
  addNewItemContainer = false;
  newItem: Inventory = {
    id: this.dataSource.data.length + 1,
    name: '',
    quantity: 0,
  };

  recipes: Array<PopCornRecipes> = [];
  inventoryService: InventoryService;

  constructor(private http: HttpClient, inventoryService: InventoryService) {
    super(inventoryService);
    this.inventoryService = inventoryService;
  }

  toggleNewItem() {
    this.addNewItemContainer = !this.addNewItemContainer;
  }

  addItem(newItem: Inventory): Subscription {
    return this.inventoryService.addItem(newItem).subscribe(
      (response) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.log('error during post is ', error);
        return this.dataSource.data;
      }
    );
  }

  submit(newItem: Inventory) {
    newItem.id = this.dataSource.data.length + 1;
    this.addItem(newItem);

    this.inventoryService.addItem(newItem).subscribe(
      (next) => {
        this.dataSource.data = next;
        this.addNewItemContainer = false;
      },
      (error) => {
        console.error(newItem);
      }
    );
  }

  updateItemQuantity(item: Inventory, increment?: boolean) {
    increment ? item.quantity++ : item.quantity--;
    this.inventoryService.updateItem(item);
  }
}
