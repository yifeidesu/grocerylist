import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user = {};

  constructor(
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerSubmit() {
    this.flashMessage.show('', { cssClass: 'alert-danger', timeout: 3000 });
    this.userService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/items']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        //this.router.navigate(['/register']);
      }
    });
  }
}
