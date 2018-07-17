(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/item-detail/item-detail.component */ "./src/app/components/item-detail/item-detail.component.ts");
/* harmony import */ var _components_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/item-edit/item-edit.component */ "./src/app/components/item-edit/item-edit.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'items', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'items/:id', component: _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["ItemDetailComponent"] },
    { path: 'items/:id/edit', component: _components_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_3__["ItemEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-center{\r\n    margin: 0!important;\r\n    padding: 0;\r\n    height: 80vh;\r\n}\r\n\r\n.flash {\r\n    position: absolute;\r\n    bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"justify-content-center row\">\n    <div class=\"col-lg-10\">\n        <div id=\"router-outlet\">\n            <router-outlet></router-outlet>\n\n        </div>\n        <div class=\"flash\">\n            <flash-messages></flash-messages>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_item_add_item_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-add/item-add.component */ "./src/app/components/item-add/item-add.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/item/item.service */ "./src/app/services/item/item.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/item-detail/item-detail.component */ "./src/app/components/item-detail/item-detail.component.ts");
/* harmony import */ var _components_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/item-edit/item-edit.component */ "./src/app/components/item-edit/item-edit.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _components_item_add_item_add_component__WEBPACK_IMPORTED_MODULE_5__["ItemAddComponent"],
                _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_11__["ItemDetailComponent"],
                _components_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_12__["ItemEditComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [
                _services_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-5\">\n    <app-item-add [items]=\"items\" [createdItem]=\"createdItem\"></app-item-add>\n  </div>\n  <div class=\"col-lg-7\">\n    <app-list [items]=\"items\" [createdItem]=\"createdItem\"></app-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.items = [];
        this.createdItem = { title: '' };
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/item-add/item-add.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/item-add/item-add.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#randomBtn {\r\n    background-color: blueviolet;\r\n    color: #fff;\r\n}\r\n\r\n.disabled {\r\n    opacity: .4;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/item-add/item-add.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/item-add/item-add.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div>\n    <label for=\"itemTitle\">Title</label>\n    <input [(ngModel)]=\"createdItem.title\" name=\"title\" id=\"titleInput\" (keyup)=\"onKey($event)\" class=\"form-control\" type=\"text\"\n      placeholder=\"What to buy...\">\n  </div>\n  <br>\n  <div class=\"form-group\">\n    <label for=\"itemNote\">Notes</label>\n    <textarea [(ngModel)]=\"createdItem.note\" name=\"note\" id=\"noteInput\" class=\"form-control\" rows=\"2\" placeholder=\"Add some notes...\"></textarea>\n  </div>\n\n  <button [disabled]=\"isUnchanged\" (click)=\"addItem()\" type=\"submit\" id=\"okBtn\" class=\"btn btn-success disabled\">Add</button>\n  <button (click)=\"clearFields()\" routerLink=\"/items\" class=\"btn btn-light\">Cancel</button>\n\n</form>\n<br>\n<button (click)=\"populateList()\" id=\"randomBtn\" class=\"btn btn-light\" [ngClass]=\"items.length<1 ? '': 'disabled'\">Generate Some</button>\n<button (click)=\"removeAll()\" class=\"btn btn-danger\" [ngClass]=\"items.length<1? 'disabled': ''\">Clear All</button>\n"

/***/ }),

/***/ "./src/app/components/item-add/item-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/item-add/item-add.component.ts ***!
  \***********************************************************/
/*! exports provided: ItemAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAddComponent", function() { return ItemAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item/item.service */ "./src/app/services/item/item.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemAddComponent = /** @class */ (function () {
    function ItemAddComponent(itemService, flashMessage) {
        this.itemService = itemService;
        this.flashMessage = flashMessage;
        this.createdItem = { title: '' };
        this.titleText = '';
    }
    ItemAddComponent.prototype.ngOnInit = function () { };
    ItemAddComponent.prototype.addItem = function () {
        var _this = this;
        if (this.createdItem.title.length > 0) {
            this.itemService.addItem(this.createdItem).subscribe(function (data) {
                _this.clearFields();
                _this.flashMessage.show('Added', { cssClass: 'alert-success', timeout: 1000 });
                _this.items.unshift(data);
            });
        }
        else {
            this.flashMessage.show('Item must have a title', { cssClass: 'alert-danger', timeout: 1000 });
        }
    };
    ItemAddComponent.prototype.onKey = function (event) {
        this.titleText = event.target.value;
        var okBtn = document.getElementById("okBtn");
        if (this.titleText.length > 1) {
            okBtn.classList.remove("disabled");
        }
        else {
            okBtn.classList.add("disabled");
        }
    };
    ItemAddComponent.prototype.clearFields = function () {
        document.getElementById("titleInput").value = '';
        document.getElementById("noteInput").value = '';
        this.createdItem = { title: '' };
        document.getElementById("okBtn").classList.add("disabled");
    };
    ItemAddComponent.prototype.populateList = function () {
        var _this = this;
        if (this.items.length < 1) {
            var seeds = [
                { title: "Carrots", note: "Important!" },
                { title: "Ice cream", note: "Many many" },
                { title: "Chips", note: "Original flavour" }
            ];
            seeds.forEach(function (item) {
                _this.itemService.addItem(item).subscribe(function (data) {
                    _this.flashMessage.show('Added', { cssClass: 'alert-success', timeout: 1000 });
                    _this.items.unshift(data);
                });
            });
        }
    };
    ItemAddComponent.prototype.removeAll = function () {
        var _this = this;
        var result = confirm("Want to delete all?");
        if (result) {
            this.itemService.removeAll().subscribe(function (data) {
                if (data.success == true) {
                    _this.flashMessage.show('All removed!', { cssClass: 'alert-danger', timeout: 1000 });
                    _this.items.splice(0, _this.items.length);
                }
                else {
                    _this.flashMessage.show('Something wrong happened.', { cssClass: 'alert-success', timeout: 1000 });
                    console.error(data.msg);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemAddComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemAddComponent.prototype, "createdItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemAddComponent.prototype, "value", void 0);
    ItemAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-add',
            template: __webpack_require__(/*! ./item-add.component.html */ "./src/app/components/item-add/item-add.component.html"),
            styles: [__webpack_require__(/*! ./item-add.component.css */ "./src/app/components/item-add/item-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], ItemAddComponent);
    return ItemAddComponent;
}());



/***/ }),

/***/ "./src/app/components/item-detail/item-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    opacity: .6;\r\n}"

/***/ }),

/***/ "./src/app/components/item-detail/item-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\n  <label>{{ item.purchased ? 'Item purchased' : 'Item to purchase' }}</label>\n  <h3>{{item.title}}</h3>\n  <br>\n  <div *ngIf=\"item.note\">\n    <label>Notes</label>\n    <h5>{{item.note}}</h5>\n  </div>\n  <br>\n  <button (click)=\"deleteItem()\" class=\"btn btn-danger\">Delete</button>\n  <a routerLink=\"edit\" class=\"btn btn-light\">Edit</a>\n  <hr>\n  <button (click)=\"back()\" class=\"btn btn-light\">Back</button>\n</div>"

/***/ }),

/***/ "./src/app/components/item-detail/item-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item/item.service */ "./src/app/services/item/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route, flashMessage, location) {
        this.itemService = itemService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.location = location;
        this.item = {};
        this.itemId = '';
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.getItemById();
    };
    ItemDetailComponent.prototype.getItemById = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params.id;
            _this.itemService.getItemById(id).subscribe(function (data) {
                _this.item = data;
                _this.itemId = data._id;
            });
        });
    };
    ItemDetailComponent.prototype.deleteItem = function () {
        var _this = this;
        var result = confirm("Want to delete?");
        if (result) {
            this.itemService.deleteItem(this.itemId).subscribe(function (data) {
                _this.flashMessage.show('Deleted', { cssClass: 'alert-danger', timeout: 1000 });
                window.location.href = '/items';
            });
        }
    };
    ItemDetailComponent.prototype.saveItem = function () {
        var _this = this;
        this.itemService.updateItem(this.item).subscribe(function (data) {
            _this.flashMessage.show('Saved', { cssClass: 'alert-success', timeout: 1000 });
        });
    };
    ItemDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-detail',
            template: __webpack_require__(/*! ./item-detail.component.html */ "./src/app/components/item-detail/item-detail.component.html"),
            styles: [__webpack_require__(/*! ./item-detail.component.css */ "./src/app/components/item-detail/item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/item-edit/item-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/item-edit/item-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#randomBtn {\r\n    background-color: blueviolet;\r\n    color: #fff;\r\n}\r\n\r\n.btn {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.disabled {\r\n    opacity: .4;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/item-edit/item-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/item-edit/item-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"col-lg-6\">\n  <div>\n    <label for=\"itemTitle\">Title</label>\n    <input [(ngModel)]=\"item.title\" name=\"title\" id=\"itemTitle\" class=\"form-control\" type=\"text\" placeholder=\"What to buy...\">\n  </div>\n  <br>\n  <div class=\"form-group\">\n    <label for=\"itemNote\">Notes</label>\n    <textarea [(ngModel)]=\"item.note\" name=\"note\" id=\"itemNote\" class=\"form-control\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-check\">\n    <input [(ngModel)]=\"item.purchased\" name=\"purchased\" type=\"checkbox\" checked={{item.purchased}} class=\"form-check-input\"\n      id=\"itemPurchased\">\n    <label class=\"form-check-label\" for=\"itemPurchased\">Purchased</label>\n  </div>\n  <br>\n  <button (click)=\"save()\" class=\"btn btn-primary\" type=\"submit\">Save</button>\n  <button (click)=\"back()\" class=\"btn btn-light\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/item-edit/item-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/item-edit/item-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function() { return ItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item/item.service */ "./src/app/services/item/item.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemEditComponent = /** @class */ (function () {
    function ItemEditComponent(itemService, route, flashMessage, location) {
        this.itemService = itemService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.location = location;
        this.item = {};
    }
    ItemEditComponent.prototype.ngOnInit = function () {
        this.getItemById();
    };
    ItemEditComponent.prototype.getItemById = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params.id;
            _this.itemService.getItemById(id).subscribe(function (data) {
                _this.item = data;
                _this.itemId = data._id;
            });
        });
    };
    ItemEditComponent.prototype.save = function () {
        var _this = this;
        this.itemService.updateItem(this.item).subscribe(function (data) {
            _this.flashMessage.show('Saved', { cssClass: 'alert-success', timeout: 1000 });
            _this.location.back();
        });
    };
    ItemEditComponent.prototype.back = function () {
        this.location.back();
    };
    ItemEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-edit',
            template: __webpack_require__(/*! ./item-edit.component.html */ "./src/app/components/item-edit/item-edit.component.html"),
            styles: [__webpack_require__(/*! ./item-edit.component.css */ "./src/app/components/item-edit/item-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ItemEditComponent);
    return ItemEditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0 4em;\r\n    /* width: 100%; */\r\n    height: 70vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.items li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    margin: 0 0 2em 0;\r\n    padding: .5em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n}\r\n\r\n.items li a:hover {\r\n    font-weight: 600;\r\n    color: #607D8B;\r\n    left: .1em;\r\n    bottom: .1em;\r\n}\r\n\r\n.items li a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    border-bottom: solid 1px #EEE;\r\n    margin-left: .5em;\r\n    line-height: 2em;\r\n    position: relative;\r\n    display: block;\r\n    width: inherit;\r\n}\r\n\r\n/* .items a:hover {\r\n    color: #607D8B;\r\n} */\r\n\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n}"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"items\">\n  <li *ngFor=\"let item of items\" [style.opacity]=\"item.purchased ? '0.4': '1'\">\n    <input [(ngModel)]=\"item.purchased\" name=\"purchased\" type=\"checkbox\" value=\"{{item.purchased}}\"\n      class=\"form-check-input\" (change)=\"togglePurchased(item)\">\n    <a routerLink=\"/items/{{item._id}}\">\n      {{item.title}}\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item/item.service */ "./src/app/services/item/item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(itemService) {
        this.itemService = itemService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ListComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems()
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.items.unshift(item);
            });
        });
    };
    ListComponent.prototype.togglePurchased = function (item) {
        this.itemService.updateItem(item).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "createdItem", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    padding: .5em 0;\r\n    margin-bottom: 2em!important;\r\n    font-weight: 600;\r\n}\r\n\r\n.row {\r\n    margin: 0;\r\n}\r\n\r\n.navbar-nav a {\r\n    letter-spacing: 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light row justify-content-center\">\n  <div class=\"col-lg-10\">\n    <div class=\"row\">\n      <a class=\"navbar-brand\" href=\"#\">🍅 GroceryList</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse-target\" aria-controls=\"navbarNavAltMarkup\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"collapse-target\">\n        <div class=\"navbar-nav\">\n          <a class=\"nav-item nav-link\" routerLink=\"/items\">Dashboard</a>\n          <a class=\"nav-item nav-link\" href=\"https://github.com/yifeidesu/grocerylist\">GitHub</a>\n          <a class=\"nav-item nav-link\" href=\"https://yifeidesu.github.io/\">Portfolio</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, flashMessage) {
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/item/item.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/item/item.service.ts ***!
  \***********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;
    }
    /** GET Itemes from the server */
    ItemService.prototype.getItems = function () {
        return this.http.get(this.API_URL, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Get items')));
    };
    ItemService.prototype.getItemById = function (id) {
        return this.http.get(this.API_URL + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Get item by id')));
    };
    ItemService.prototype.addItem = function (item) {
        return this.http.post(this.API_URL, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Add item')));
    };
    ItemService.prototype.updateItem = function (item) {
        return this.http.put(this.API_URL + item._id, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Update item')));
    };
    ItemService.prototype.deleteItem = function (id) {
        return this.http.delete(this.API_URL + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Delete item')));
    };
    ItemService.prototype.removeAll = function () {
        return this.http.delete(this.API_URL, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Remove all items')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ItemService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation + error);
            // Returning empty.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'api/items/'
    //API_URL:'http://localhost:3000/api/items/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yifei\code\grocerylist\ng-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map