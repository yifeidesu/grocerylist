import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  @Input() items;
  @Input() createdItem = { title: '' };
  
  constructor(private itemService: ItemService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {

  }

  addItem() {

    if (this.createdItem.title.length > 0) {
      this.itemService.addItem(this.createdItem).subscribe((data) => {
        this.clearFields();
        this.flashMessage.show('Added', { cssClass: 'alert-success', timeout: 1000 });
        this.items.unshift(data);        
      });
    } else {
      this.flashMessage.show('Item must have a title', { cssClass: 'alert-danger', timeout: 1000 });
    }
  }

  checkInputEmply() {

    const titleInput = document.getElementById("title");
    const okBtn = document.getElementById("okBtn");

    if (titleInput.textContent.length < 1) {
      okBtn.classList.add("disabled");
    } else {
      okBtn.classList.remove("disabled");
    }
  }

  clearFields() {
    document.getElementsByTagName("input")[0].value = '';
    this.createdItem = { title: '' };
  }
}
