(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Github Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanged($event)\"></ion-searchbar>\n\n  <!-- Item Labels -->\n<ion-item>\n  <ion-label>{{count}} repository results</ion-label>\n</ion-item>\n\n  <ion-list>\n \n    <ion-item button *ngFor=\"let item of (results | async)\" [routerLink]=\"['/', 'movies', item.imdbID]\">\n      <ion-label text-wrap color=\"primary\">\n        {{ item.full_name }}\n        <h3>{{ item.description }}</h3>\n        <h3>Updated on {{ item.updated_at }}</h3>\n      </ion-label>\n \n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'movie'\" name=\"videocam\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'series'\" name=\"tv\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'game'\" name=\"logo-game-controller-b\"></ion-icon>\n \n    </ion-item>\n \n  </ion-list>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HomePage = class HomePage {
    /**
     * Constructor of our first page
     * @param movieService The movie Service to get data
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.searchTerm = '';
        this.type = _services_data_service__WEBPACK_IMPORTED_MODULE_1__["SearchType"].all;
        this.count = '0';
        this.baseUrl = "https://api.github.com/search/repositories?per_page=5&q=react";
    }
    ngOnInit() { }
    searchChanged() {
        console.log('----- searchChanged');
        // Call our service function which returns an Observable
        this.results = this.dataService.searchData(this.searchTerm, this.type);
        console.log('----- this.results', this.results);
        this.count = '0';
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: SearchType, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// Typescript custom enum for search types (optional)
var SearchType;
(function (SearchType) {
    SearchType["all"] = "";
    SearchType["movie"] = "movie";
    SearchType["series"] = "series";
    SearchType["episode"] = "episode";
})(SearchType || (SearchType = {}));
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        // url = 'https://api.github.com/search/repositories?per_page=5&q=react';
        this.url = 'https://api.github.com/search/repositories';
    }
    /**
    * Get data from the OmdbApi
    * map the result to return only the results that we need
    *
    * @param {string} title Search Term
    * @param {SearchType} type movie, series, episode or empty
    * @returns Observable with the search results
    */
    searchData(title, type) {
        console.log('----- searchData from ' + this.url);
        console.log('----- searchData title ' + title);
        console.log('----- searchData type ' + type);
        // // return this.http.get('${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}').pipe(
        // return this.http.get('${this.url}?per_page=5&q=react').pipe(
        //     map(results => results['Search'])
        // );
        let urlPost = this.url + '?per_page=10&q=' + title;
        console.log('----- urlPost', urlPost);
        return this.http.get(urlPost).pipe(
        // map(results => console.log('----- results',results['total_count']))
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => results['items']));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map