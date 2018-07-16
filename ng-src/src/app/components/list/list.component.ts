import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item/item.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items;
  @Input() createdItem;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    
    this.itemService.getItems()
      .subscribe(data => {
        data.forEach(item => {
          this.items.unshift(item);   
        });
        console.log(this.items);
      });
  }
}
