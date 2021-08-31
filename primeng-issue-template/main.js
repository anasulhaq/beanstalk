(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SZJDQV\Desktop\LEARNING MATERIAL\Angular\prime-steps\src\main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BZhf":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-dashboard/my-dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<body>\n<div class=\"content\">\n  <div>\n    <h1 *ngIf=\"errorMessage\">\n      <p>We have Encountered the some error. Please try again Later.{{errorMessage}}</p>\n    </h1>\n    <p>\n      <mat-toolbar color=\"primary\">\n        <img src=\"https://news.ycombinator.com/favicon.ico\" width=\"40\" height=\"40\" />\n        <h1>\n          <b class=\"buttonFontTop\" style=\"font-size: x-large; \"> | Hacker News </b>\n        </h1>\n        <button mat-button class=\"buttonFontTop\" (click)=\"changeStoryType('latest')\">Home</button>\n        <button mat-button class=\"buttonFontTop\" (click)=\"changeStoryType('Ask')\"> Ask</button>\n        <button mat-button class=\"buttonFontTop\" (click)=\"changeStoryType('Show')\"> Show</button>\n        <button mat-button class=\"buttonFontTop\" (click)=\"changeStoryType('Job')\"> Job </button>\n        <span class=\"example-spacer\"></span>\n        <button mat-icon-button class=\"twitter\"></button>\n        <mat-icon class = \"social\"  matTooltip=\"twitter\">\n          <a aria-label=\"Twitter\" href=\"https://www.twitter.com\"  target=\"_blank\">\n            <img src=\"../../assets/twitter.svg\" width=\"40\" height=\"40\"/>\n          </a>\n        </mat-icon>\n        <mat-icon class = \"social\"  matTooltip=\"twitter\">\n          <a aria-label=\"Twitter\" href=\"https://www.facebook.com\"  target=\"_blank\">\n            <img src=\"../../assets/facebook.svg\" width=\"40\" height=\"40\"/>\n          </a>\n        </mat-icon>\n        <mat-icon style=\"margin-right: 40px;margin-bottom: 10px\" matTooltip=\"Login\">\n          <a mat-raised-button  aria-label=\"Login Button\" href=\"https://news.ycombinator.com/login?goto=newest\" target=\"_blank\">Login</a>\n        </mat-icon>\n      </mat-toolbar>\n    </p>\n\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Stories\">\n      </mat-form-field>\n      <tr>\n        <td>\n          <div [formGroup]=\"range\">\n          <input matInput formControlName=\"username\"  placeholder=\"Filter by Username\">\n          </div>\n        </td>\n        <td><button mat-raised-button aria-label=\"Username Filter\" color=\"warn\" (click)=\"searchByUserName()\">Filter</button></td>\n        <td></td>\n        <td><button mat-raised-button aria-label=\"Reset Filter\" style=\"margin-left: 10px;\" (click)=\"resetFilter()\">Reset</button></td>\n      </tr>\n    </div>\n    <mat-progress-spinner style=\"margin-left: 100px\" value=50 mode=\"indeterminate\" *ngIf=\"IsWait\">\n    </mat-progress-spinner>\n    <table mat-table [dataSource]=\"dataSource\" matSort >\n\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>  </th>\n        <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i+1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"avatar\">\n        <th mat-header-cell *matHeaderCellDef > </th>\n        <td mat-cell *matCellDef=\"let element\"> <img [src]=\"imagePath\" style=\"height: 30px; width: 30px;\" /></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"by\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header><h4><b>Story By</b></h4></th>\n        <td mat-cell *matCellDef=\"let element\"><b>{{element.by}}</b> </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header><h4><b>Story Title</b> </h4></th>\n        <td mat-cell *matCellDef=\"let element\"> <b>{{element.title}}</b></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"time\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header><h4> <b>Posted On</b></h4></th>\n        <td mat-cell *matCellDef=\"let element\"> {{convertTime(element.time)}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef> <h4><b>Type</b></h4> </th>\n        <td mat-cell *matCellDef=\"let element\">{{element.type}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"goTo\">\n        <th mat-header-cell *matHeaderCellDef><h4> <b>Go To Story</b> </h4></th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button   aria-label=\"Button with a open in new tab icon\" >\n            <a href=\"{{element.url}}\"><mat-icon style=\"margin-top:10px;\" matTooltip=\"Go To Story\">open_in_new</mat-icon></a>\n          </button>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"share\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button aria-label=\"share button with a share icon\">\n            <mat-icon matTooltip=\"Share\">share</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"favorite\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button color=\"warn\" aria-label=\"Mark favorite button with a heart icon\">\n            <mat-icon matTooltip=\"Favorite\">favorite</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"bookmark\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button color=\"primary\" aria-label=\"Bookmark button with a bookmark icon\">\n            <mat-icon matTooltip=\"Bookmark\">bookmark</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n</div>\n<footer class=\"footer\">\n  <div>\n    <footer>\n      <mat-paginator [pageSizeOptions]=\"[ 10, 25 ,50 ,100]\" showFirstLastButtons></mat-paginator>\n      <mat-toolbar color=\"primary\">\n        <mat-toolbar-row style=\"height: 20px;\">\n          <span class=\"toolbarRow1\">Applications are open for YC Winter 2022</span>\n        </mat-toolbar-row>\n        <mat-toolbar-row style=\"height: 42px;\">\n          <span class=\"example-fill-remaining-space\" style=\"margin-left: 555px\">\n          <a mat-button class=\"buttonFontBelow\" href=\"https://news.ycombinator.com/newsguidelines.html\" target=\"_blank\">Guidelines</a>\n          <a mat-button class=\"buttonFontBelow\" href=\"https://news.ycombinator.com/newsfaq.html\" target=\"_blank\">FAQ</a>\n          <a mat-button class=\"buttonFontBelow\" href=\"https://news.ycombinator.com/lists\" target=\"_blank\">Lists</a>\n          <a mat-button class=\"buttonFontBelow\" href=\"https://news.ycombinator.com/security.html\" target=\"_blank\">Security</a>\n          <a mat-button class=\"buttonFontBelow\" href=\"http://www.ycombinator.com/legal\" target=\"_blank\">Legal</a>\n          <a mat-button class=\"buttonFontBelow\" href=\"http://www.ycombinator.com/apply\" target=\"_blank\">Apply to YC</a>\n          <a mat-button class=\"buttonFontBelow\" href=\"mailto:anasul123@gmail.com?subject=Service Assistance Required\">Contact</a>\n          </span>\n        </mat-toolbar-row>\n\n      </mat-toolbar>\n    </footer>\n  </div>\n</footer>\n</body>\n");

/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this.itemsUrl = 'https://hacker-news.firebaseio.com/v0/item/';
    }
    DataService.prototype.getNewStories = function (newsUrl) {
        return this.httpClient.get(newsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('error caught in getNewStories', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err); // Rethrow it back to component
        }));
    };
    DataService.prototype.getNewsItems = function (storyId) {
        return this.httpClient.get(this.itemsUrl + storyId + '.json?print=pretty')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('error caught in getNewsItems', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err); // Rethrow it back to component
        }));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "JmHD":
/*!*********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  min-width: 500px;\r\n}\r\nth.mat-header-cell {\r\n  text-align: left;\r\n  max-width: 300px;\r\n}\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n}\r\nbody {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.content {\r\n  min-height: 100vh; /* will cover the 100% of viewport */\r\n  overflow: hidden;\r\n  display: block;\r\n  position: relative;\r\n  padding-bottom: 100px; /* height of your footer */\r\n}\r\n.footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n.buttonFontTop{\r\n  font: caption;\r\n  font-size: large;\r\n}\r\n.buttonFontBelow{\r\n  font: caption;\r\n  font-size: medium;\r\n  color: whitesmoke;\r\n  text-decoration: none;\r\n}\r\n.hyperLink\r\n{\r\n  color: whitesmoke;\r\n  text-decoration: none;\r\n}\r\n.toolbarRow1{\r\n  margin-left: 700px; font-size: medium; font: caption;margin-top: 23px;color: beige;\r\n}\r\n.social{\r\n  margin-right: 30px;margin-bottom: 10px\r\n}\r\n.nameFilter{\r\n  width: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQixFQUFFLG9DQUFvQztFQUN2RCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBRSwwQkFBMEI7QUFDbkQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtBQUNwRjtBQUNBO0VBQ0Usa0JBQWtCLENBQUM7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJteS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogd2lsbCBjb3ZlciB0aGUgMTAwJSBvZiB2aWV3cG9ydCAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgLyogaGVpZ2h0IG9mIHlvdXIgZm9vdGVyICovXHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnV0dG9uRm9udFRvcHtcclxuICBmb250OiBjYXB0aW9uO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLmJ1dHRvbkZvbnRCZWxvd3tcclxuICBmb250OiBjYXB0aW9uO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmh5cGVyTGlua1xyXG57XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi50b29sYmFyUm93MXtcclxuICBtYXJnaW4tbGVmdDogNzAwcHg7IGZvbnQtc2l6ZTogbWVkaXVtOyBmb250OiBjYXB0aW9uO21hcmdpbi10b3A6IDIzcHg7Y29sb3I6IGJlaWdlO1xyXG59XHJcbi5zb2NpYWx7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O21hcmdpbi1ib3R0b206IDEwcHhcclxufVxyXG4ubmFtZUZpbHRlcntcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'news-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "qFgg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MyDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "qFgg":
/*!********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _raw_loader_my_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./my-dashboard.component.html */ "BZhf");
/* harmony import */ var _my_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-dashboard.component.css */ "JmHD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(dataService, formBuilder) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.newsStories = [];
        this.imagePath = '../assets/avatar.svg';
        this.latestNewsUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';
        this.askNewsUrl = 'https://hacker-news.firebaseio.com/v0/askstories.json';
        this.showNewsUrl = 'https://hacker-news.firebaseio.com/v0/showstories.json';
        this.jobNewsUrl = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
        this.displayedColumns = ['id', 'avatar', 'by', 'title', 'time', 'type', 'goTo', 'share', 'favorite', 'bookmark'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.range = this.formBuilder.group({
            username: '',
        });
    }
    MyDashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    };
    MyDashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    MyDashboardComponent.prototype.ngOnInit = function () {
        this.getStories(this.latestNewsUrl);
    };
    MyDashboardComponent.prototype.changeStoryType = function (val) {
        this.newsStories = [];
        this.storyType = val;
        if (val === 'Ask') {
            this.getStories(this.askNewsUrl);
        }
        else if (val === 'Show') {
            this.getStories(this.showNewsUrl);
        }
        else if (val === 'Job') {
            this.getStories(this.jobNewsUrl);
        }
        else {
            this.getStories(this.latestNewsUrl);
        }
    };
    MyDashboardComponent.prototype.convertTime = function (timestamp) {
        var a = new Date(timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    };
    MyDashboardComponent.prototype.getStories = function (newsUrl) {
        var _this = this;
        this.subscription = this.dataService.getNewStories(newsUrl).subscribe(function (data) {
            if (data) {
                data.forEach(function (storyId) {
                    _this.subscription2 = _this.dataService.getNewsItems(storyId).subscribe(function (res) {
                        _this.newsStories.push(res);
                        _this.dataSource.data = _this.newsStories;
                    }, function (error) {
                        console.error('error caught from getNewsItems in component', error);
                        _this.errorMessage = error;
                    });
                });
            }
        }, function (error) {
            console.error('error caught from getStories in component', error);
            _this.errorMessage = error;
        });
    };
    MyDashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    MyDashboardComponent.prototype.searchByUserName = function () {
        var _this = this;
        if (this.newsStories && this.newsStories.length > 0) {
            if (this.range.value.username) {
                this.dataSource.data = this.newsStories.filter(function (x) {
                    if (x && x.by != null) {
                        return x.by === _this.range.value.username;
                    }
                });
            }
        }
    };
    MyDashboardComponent.prototype.resetFilter = function () {
        this.range.patchValue({ 'username': null });
        this.newsStories = [];
        this.getStories(this.latestNewsUrl);
    };
    MyDashboardComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
    ]; };
    MyDashboardComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
    };
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-my-dashboard',
            template: _raw_loader_my_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_my_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "qFgg");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["MyDashboardComponent"] },
    { path: 'dashboard', component: _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["MyDashboardComponent"] }
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map