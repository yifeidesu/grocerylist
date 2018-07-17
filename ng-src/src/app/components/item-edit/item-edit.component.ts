import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item = {};
  itemId;

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

  save() {
    this.itemService.updateItem(this.item).subscribe((data) => {
      this.flashMessage.show('Saved', { cssClass: 'alert-success', timeout: 1000 });
      this.location.back();
    });
  }

  back() {
    this.location.back();
  }
}
