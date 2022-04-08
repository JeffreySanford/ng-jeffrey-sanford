import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { data } from 'jquery';
import { Item } from 'src/app/services/item';
import { NavigationService } from 'src/app/services/navigation.service';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  private portfolioAPI = 'https://api-portfolio-65p75.ondigitalocean.app/items';
  // private portfolioAPI = 'http://localhost:3000/items';
  inventory: Array<Inventory> = [];
  dataSource = new MatTableDataSource<Inventory>();
  displayedColumns = ['id', 'name', 'quantity'];
  addNewItemContainer = false;
  newItem: Inventory = {
    id: this.dataSource.data.length + 1,
    name: '',
    quantity: 0
  };

  constructor(private http: HttpClient, private inventoryService: InventoryService) {
    http.get<Inventory[]>(this.portfolioAPI).subscribe((items: Inventory[]) => {
      this.dataSource = new MatTableDataSource<Inventory>(items);
    });
  }

  ngOnInit() {

  }
  
  toggleNewItem() {
    this.addNewItemContainer = !this.addNewItemContainer;
  }

  updateItemQuantity(item: Inventory, newValue: number) {
    this.dataSource.data.map((dataItem: Inventory) => {
      if (item.id === dataItem.id) {
        dataItem.quantity = newValue;

        this.inventoryService.updateItem(dataItem).subscribe((dataSet) => {
          this.dataSource.data = dataSet;
        })

      }
    });
  }

  addItem(newItem: Inventory): void {
    this.inventoryService.addItem(newItem).subscribe((response) => {
      this.dataSource.data = response;
    }, (error) => {
      console.log('error during post is ', error)
      return this.dataSource.data;
    });
  }

  submit(newItem: Inventory) {
    newItem.id = this.dataSource.data.length + 1;
    this.addItem(newItem);
    
    this.http.get<Inventory[]>(this.portfolioAPI).subscribe((items: Inventory[]) => {
      this.dataSource.data = items;
      this.addNewItemContainer = false;
    });
  }
}