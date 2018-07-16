import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { ActivatedRoute } from "@angular/router";
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  showDetail = true
  item = {}
  itemId = ''

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItemById();
  }

  getItemById() {
    this.route.params.subscribe(params => {
      const id = params.id;
      console.log(id);

      this.itemService.getItemById(id).subscribe((data) => {
        this.item = data;
        this.itemId = data._id;
      });
    });
  }

  deleteItem() {
    const result = confirm("Want to delete?");
    if (result) {
      this.itemService.deleteItem(this.itemId).subscribe((data) => {
        console.log('delete item' + data);
      });
    }
    this.showDetail = !this.showDetail;
  }

  editItem() {
    this.showDetail = !this.showDetail;
  }

  saveItem(){
    this.itemService.updateItem(this.item).subscribe((data) => {
      // hide from, show detail, show flash
   this.toggleDisplay();
    });
  }

  toggleDisplay(){
    this.showDetail = !this.showDetail;
  }
}
