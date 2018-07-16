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
  showDetail = true;
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
    window.location.href = '/items';
  }

  editItem() {
    this.showDetail = !this.showDetail;
  }

  saveItem() {
    this.itemService.updateItem(this.item).subscribe((data) => {
      this.flashMessage.show('Saved', { cssClass: 'alert-success', timeout: 1000 });
      this.toggleDisplay();
    });
  }

  back(){
    this.location.back();
  }

  toggleDisplay() {
    this.showDetail = !this.showDetail;
  }
}
