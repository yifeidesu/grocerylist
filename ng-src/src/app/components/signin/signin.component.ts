import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input() user = { username: '', password: '' };

  constructor(
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signinSubmit() {
    const user = {
      username: this.user.username,
      password: this.user.password
    }

    this.userService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        console.log('signin auth' + JSON.stringify(data));

        this.userService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 1500 });
        this.router.navigate(['items']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
        this.router.navigate(['signin']);
      }
    });
  }

}
