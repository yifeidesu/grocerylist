import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('Logged out successfully', {
      cssClass: 'alert-success', timeout: 1500
    });
    this.router.navigate(['/signin']);
    return false;
  }

}
