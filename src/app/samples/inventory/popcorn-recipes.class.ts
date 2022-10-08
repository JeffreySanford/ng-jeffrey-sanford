import { InventoryService } from './inventory.service';

export interface Requirement {
  id: number;
  ingredient: string;
  quantity: number;
  unitOfMeasure: string;
}

export class PopCornRecipes {
  id!: number;
  recipeName!: string;
  requirements!: [Requirement];
  dataSource: any;

  constructor(inventoryService: InventoryService) {
    inventoryService
      .getInventory()
      .subscribe((inventory) => (this.dataSource.data = inventory));
  }
}
