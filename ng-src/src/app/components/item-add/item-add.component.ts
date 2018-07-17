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
  @Input() value;
  titleText = '';

  constructor(private itemService: ItemService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() { }

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

  onKey(event: any) {
    this.titleText = event.target.value;
    console.log(this.titleText);
    const okBtn = document.getElementById("okBtn");

    if (this.titleText.length > 1) {
      okBtn.classList.remove("disabled");
    } else {
      okBtn.classList.add("disabled");
    }
  }

  clearFields() {
    document.getElementsByTagName("input")[0].value = '';
    document.getElementsByTagName("input")[1].value = '';
    this.createdItem = { title: '' };
    document.getElementById("okBtn").classList.add("disabled");
  }

  populateList() {

    if (this.items.length < 1) {
      const seeds = [
        { title: "Carrots", note: "Important!" },
        { title: "Ice cream", note: "Many many" },
        { title: "Chips", note: "Original flavour" }
      ];

      seeds.forEach(item => {
        this.itemService.addItem(item).subscribe((data) => {
          this.flashMessage.show('Added', { cssClass: 'alert-success', timeout: 1000 });
          this.items.unshift(data);
        });
      });
    }
  }
}
