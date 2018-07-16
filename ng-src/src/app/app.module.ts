import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { ItemService } from './services/item/item.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    ItemAddComponent,
    RegisterComponent,
    ItemDetailComponent,
    ItemEditComponent,
    DashboardComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ItemService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
