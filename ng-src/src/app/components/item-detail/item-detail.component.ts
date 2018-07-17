import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Location } from '@angular/common';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item={};
  itemId = ''

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItemById();
  }

  getItemById() {
    this.route.params.subscribe(params => {
      const id = params.id;

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
        this.flashMessage.show('Deleted', { cssClass: 'alert-danger', timeout: 1000 });
        window.location.href = '/items';
      });
    }
  }

  saveItem() {
    this.itemService.updateItem(this.item).subscribe((data) => {
      this.flashMessage.show('Saved', { cssClass: 'alert-success', timeout: 1000 });
    });
  }

  back(){
    this.location.back();
  }
}
