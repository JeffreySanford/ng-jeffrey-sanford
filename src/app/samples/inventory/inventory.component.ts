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
    id: this.dataSource.data.length +1,
    name: '',
    quantity: 0
  };

  constructor(http: HttpClient, private inventoryService: InventoryService) {
    http.get<Inventory[]>(this.portfolioAPI).subscribe((items: Inventory[]) => {
      this.dataSource = new MatTableDataSource<Inventory>(items);
    });
  }

  ngOnInit() {

  }

  addItem(newItem: Inventory): Array<Inventory> {
      this.inventoryService.addItem(newItem).subscribe((response)=>{
        this.dataSource.data = response;
        debugger
        return this.dataSource.data;
      },(error)=>{
        debugger
        console.log('error during post is ', error)
        return this.dataSource.data;
      });
      debugger
      return this.dataSource.data;

  }


  updateItemQuantity(item: Inventory, newValue: number) {
    this.dataSource.data.map((dataItem: Inventory) => {
      if (item.id === dataItem.id) {
        dataItem.quantity = newValue;
      }
    })
  }

  toggleNewItem() {
    this.addNewItemContainer = !this.addNewItemContainer
  }

  submit(newItem: Inventory) {
    debugger
    newItem.id = this.dataSource.data.length + 1;
    this.dataSource.data = this.addItem(newItem);
    newItem = {
      id: this.dataSource.data.length + 1,
      name: '',
      quantity: 0
    };
    this.addNewItemContainer = false;
  }
}
