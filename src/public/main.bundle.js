webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_board_component__ = __webpack_require__("../../../../../src/board/board-component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__board_board_component__["a" /* BoardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__board_board_component__ = __webpack_require__("../../../../../src/board/board-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__board_list_list_component__ = __webpack_require__("../../../../../src/board/list/list-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__board_card_card_component__ = __webpack_require__("../../../../../src/board/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("../../../../../src/navigation/navigation-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toggle_input_toggle_input_component__ = __webpack_require__("../../../../../src/toggle-input/toggle-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__board_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__board_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__toggle_input_toggle_input_component__["a" /* ToggleInputComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/board/board-component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"mb-3\">\n    <app-toggle-input \n      id=\"board-title\" \n      [title]=\"title\" \n      (titleUpdated$)=\"updateBoardTitle($event)\">\n    </app-toggle-input>\n  </div>\n  \n  <div class=\"row\">\n    <app-list\n      *ngFor=\"let list of lists\" \n      [updatedList$]=\"updatedList$\"\n      [list]=\"list\">\n    </app-list>\n    <div>\n      <app-toggle-input \n        id=\"add-list\" \n        [title]=\"'Add List'\"\n        (titleUpdated$)=\"addNewList($event)\">\n      </app-toggle-input>\n    </div>\n  </div>\n</div>\n\n<!-- <div class='wrapper'>\n    <div class='container' [dragula]='\"first-bag\"'>\n      <div>You can move these elements between these two containers</div>\n      <div>Moving them anywhere else isn't quite possible</div>\n      <div>There's also the possibility of moving elements around in the same container, changing their position</div>\n    </div>\n    <div class='container' [dragula]='\"first-bag\"'>\n      <div>This is the default use case. You only need to specify the containers you want to use</div>\n      <div>More interactive use cases lie ahead</div>\n      <div>Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a></div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "../../../../../src/board/board-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toggle-input-title, :host ::ng-deep app-toggle-input#add-list span, :host ::ng-deep app-toggle-input#board-title span {\n  color: #fff;\n  font-size: 24px;\n  display: inline-block;\n  padding: 8px 24px;\n  border-radius: 5px;\n  cursor: pointer; }\n  .toggle-input-title:hover, :host ::ng-deep app-toggle-input#add-list span:hover, :host ::ng-deep app-toggle-input#board-title span:hover {\n    background-color: #993725; }\n  .toggle-input-input, :host ::ng-deep app-toggle-input#add-list input, :host ::ng-deep app-toggle-input#board-title input {\n  color: white;\n  font-size: 24px;\n  display: inline-block;\n  padding: 8px 24px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  background-color: #993725; }\n  :host ::ng-deep app-toggle-input#add-list span {\n  font-size: 16px; }\n  :host ::ng-deep app-toggle-input#add-list input {\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/board/board-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardComponent = /** @class */ (function () {
    function BoardComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.isEditTitle = false;
        this.title = 'James Board';
        this.lists = [];
        this.updatedList$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.updatedList$.subscribe(function (x) { return _this.listUpdated(x); });
        this.lists = [
            {
                id: 1,
                title: 'James Board List',
                cards: [
                    {
                        id: 1,
                        title: 'Some Test Checklist',
                        resources: []
                    },
                    {
                        id: 2,
                        title: 'Another Checklist',
                        resources: []
                    }
                ]
            },
            {
                id: 2,
                title: 'James List',
                cards: [
                    {
                        id: 1,
                        title: 'Some Test Checklist',
                        resources: []
                    },
                    {
                        id: 2,
                        title: 'Another Checklist',
                        resources: []
                    }
                ]
            },
            {
                id: 3,
                title: 'Board List',
                cards: [
                    {
                        id: 1,
                        title: 'Some Test Checklist',
                        resources: []
                    },
                    {
                        id: 2,
                        title: 'Another Checklist',
                        resources: []
                    }
                ]
            },
        ];
    }
    BoardComponent.prototype.updateBoardTitle = function (title) {
        this.title = title;
    };
    BoardComponent.prototype.listUpdated = function (list) {
        var listIndex = this.lists.findIndex(function (l) { return l.id === list.id; });
        this.lists.splice(listIndex, 1, list);
    };
    BoardComponent.prototype.addNewList = function (title) {
        console.log(title);
        this.lists.push({
            id: this.lists.length + 1,
            title: title,
            cards: []
        });
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-board',
            template: __webpack_require__("../../../../../src/board/board-component.html"),
            styles: [__webpack_require__("../../../../../src/board/board-component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "../../../../../src/board/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 item-container\">\n  <span>{{card.title}}</span>\n</div>"

/***/ }),

/***/ "../../../../../src/board/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toggle-input-title {\n  color: #fff;\n  font-size: 24px;\n  display: inline-block;\n  padding: 8px 24px;\n  border-radius: 5px;\n  cursor: pointer; }\n  .toggle-input-title:hover {\n    background-color: #993725; }\n  .toggle-input-input {\n  color: white;\n  font-size: 24px;\n  display: inline-block;\n  padding: 8px 24px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  background-color: #993725; }\n  .item-container {\n  border-radius: 5px;\n  padding: 16px 8px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  cursor: pointer; }\n  .item-container:hover {\n    border: 1px solid #b04532; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/board/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/board/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/board/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/board/list/list-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\">\n  <div class=\"list-header\">\n    <app-toggle-input \n      id=\"list-toggle-input\" \n      [title]=\"list.title\" \n      (titleUpdated$)=\"updateListTitle($event)\">\n    </app-toggle-input>  </div>\n  <div class=\"mt-3\">\n    <div [dragula]='list.id' [dragulaModel]='list.cards'>\n      <app-card\n        *ngFor=\"let card of list.cards; let i = index;\" \n        [card]=\"card\">\n      </app-card>\n    </div>\n    <a href=\"#\" class=\"d-flex p-2\" (click)=\"addCard()\">\n      Add Card\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/board/list/list-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toggle-input-title, :host ::ng-deep app-toggle-input#list-toggle-input span {\n  color: #fff;\n  font-size: 24px;\n  display: inline-block;\n  padding: 8px 24px;\n  border-radius: 5px;\n  cursor: pointer; }\n  .toggle-input-title:hover, :host ::ng-deep app-toggle-input#list-toggle-input span:hover {\n    background-color: #993725; }\n  .toggle-input-input, :host ::ng-deep app-toggle-input#list-toggle-input input {\n  color: white;\n  font-size: 24px;\n  display: inline-block;\n  padding: 8px 24px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  background-color: #993725; }\n  .list-container {\n  width: 250px;\n  padding: 16px 8px;\n  margin: 0 16px;\n  border-radius: 5px;\n  background-color: #eee; }\n  .list-header {\n  font-weight: bold; }\n  :host ::ng-deep app-toggle-input#list-toggle-input span {\n  font-size: 20px;\n  color: #333; }\n  :host ::ng-deep app-toggle-input#list-toggle-input span:hover {\n    background-color: #ccc; }\n  :host ::ng-deep app-toggle-input#list-toggle-input input {\n  font-size: 20px;\n  color: #333;\n  background-color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/board/list/list-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.list = {};
        dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value);
        });
        dragulaService.over.subscribe(function (value) {
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
    }
    ListComponent.prototype.addCard = function () {
        this.list.cards.push({
            id: Math.floor(Math.random() * 100),
            title: 'Another One',
            resources: []
        });
    };
    ListComponent.prototype.updateListTitle = function (title) {
        this.list.title = title;
    };
    ListComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    ListComponent.prototype.onDrop = function (args) {
        if (args[0] === this.list.id) {
            this.updatedList$.next(this.list);
        }
    };
    ListComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    ListComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */])
    ], ListComponent.prototype, "updatedList$", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/board/list/list-component.html"),
            styles: [__webpack_require__("../../../../../src/board/list/list-component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/navigation/navigation-component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"d-flex justify-content-between align-items-center\">\n  <div>\n    <button class=\"btn text-white bg-clear-white btn-highlight\">\n      <i class=\"fa fa-trello mr-2\"></i>\n      <span>\n        Boards\n      </span>\n    </button>\n  </div>\n  <div class=\"d-flex align-items-center text-white\">\n    <i class=\"fa fa-lg fa-trello mr-2\"></i>\n    <h4 class=\"m-0\">Trello</h4>\n  </div>\n  <div class=\"text-white\">\n    Profile\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/navigation/navigation-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  height: 60px;\n  padding: 0 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #333; }\n\nbutton {\n  width: 150px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/navigation/navigation-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/navigation/navigation-component.html"),
            styles: [__webpack_require__("../../../../../src/navigation/navigation-component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/toggle-input/toggle-input.component.html":
/***/ (function(module, exports) {

module.exports = "<span \n  *ngIf=\"!isEditTitle\" \n  class=\"title-container\" \n  (click)=\"toggleEdit()\">\n  {{title}}\n</span>\n<input \n  *ngIf=\"isEditTitle\"\n  class=\"input-box\"\n  type=\"text\" \n  [value]=\"title\" \n  (keyup.enter)=\"updateTitle($event.target.value)\">    "

/***/ }),

/***/ "../../../../../src/toggle-input/toggle-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/toggle-input/toggle-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleInputComponent = /** @class */ (function () {
    function ToggleInputComponent() {
        this.title = '';
        this.titleUpdated$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.isEditTitle = false;
    }
    ToggleInputComponent.prototype.toggleEdit = function () {
        this.isEditTitle = !this.isEditTitle;
    };
    ToggleInputComponent.prototype.updateTitle = function (title) {
        this.titleUpdated$.next(title);
        this.toggleEdit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToggleInputComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */])
    ], ToggleInputComponent.prototype, "titleUpdated$", void 0);
    ToggleInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toggle-input',
            template: __webpack_require__("../../../../../src/toggle-input/toggle-input.component.html"),
            styles: [__webpack_require__("../../../../../src/toggle-input/toggle-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleInputComponent);
    return ToggleInputComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map