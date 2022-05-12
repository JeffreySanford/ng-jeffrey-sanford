import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnDestroy {
  private portfolioAPI = 'https://api-portfolio-65p75.ondigitalocean.app/items';
  // private portfolioAPI = 'http://localhost:3000/items';
  inventory: Array<Inventory> = [];
  dataSource = new MatTableDataSource<Inventory>();
  displayedColumns = ['id', 'name', 'quantity'];
  addNewItemContainer = false;
  newItem: Inventory = {
    id: this.dataSource.data.length + 1,
    name: '',
    quantity: 0,
  };
  inventorySubscriptiuon: any;
  inventorySubscription: any;

  constructor(
    private http: HttpClient,
    private inventoryService: InventoryService
  ) {
    this.inventorySubscription = http
      .get<Inventory[]>(this.portfolioAPI)
      .subscribe((items: Inventory[]) => {
        this.dataSource = new MatTableDataSource<Inventory>(items);
      });
  }

  ngOnDestroy() {
    if (this.inventorySubscription) {
      this.inventorySubscription.unsubscribe();
    }
  }

  toggleNewItem() {
    this.addNewItemContainer = !this.addNewItemContainer;
  }

  updateItemQuantity(item: Inventory, newValue: number) {
    this.dataSource.data.map((dataItem: Inventory) => {
      if (item.id === dataItem.id) {
        debugger
        dataItem.quantity += newValue;

        this.inventoryService.updateItem(dataItem).subscribe((dataSet) => {
          this.dataSource.data = dataSet;
        });
      }
    });
  }

  addItem(newItem: Inventory): void {
    this.inventoryService.addItem(newItem).subscribe(
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

    this.http
      .get<Inventory[]>(this.portfolioAPI)
      .subscribe((items: Inventory[]) => {
        this.dataSource.data = items;
        this.addNewItemContainer = false;
      });
  }
}
