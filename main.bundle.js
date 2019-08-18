webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<desktop></desktop>\r\n<taskbar></taskbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('hehe');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__window_window_component__ = __webpack_require__("../../../../../src/app/window/window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__desktop_desktop_component__ = __webpack_require__("../../../../../src/app/desktop/desktop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__taskbar_taskbar_component__ = __webpack_require__("../../../../../src/app/taskbar/taskbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__window_window_component__["a" /* WindowComponent */],
            __WEBPACK_IMPORTED_MODULE_5__desktop_desktop_component__["a" /* DesktopComponent */],
            __WEBPACK_IMPORTED_MODULE_6__taskbar_taskbar_component__["a" /* TaskbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_datepicker__["NgDatepickerModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".desktop-frame {\r\n    padding: 20px;\r\n}\r\n\r\n.icon {\r\n    margin: 0px 30px 30px 0px;\r\n    display: inline-block;\r\n    position: relative;\r\n    /*top: 250px;*/\r\n    color: #fff;\r\n    width: 110px;\r\n    height: 90px;\r\n    /*font-size: 14px;*/\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\r\n\r\n.icon:hover {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.icon .border {\r\n    width: 52px;\r\n    padding: 10px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    /*border: 1px solid #ccc;*/\r\n    box-shadow: 2px 1px 10px #666;\r\n    margin: 0px auto;\r\n}\r\n\r\n.icon .border img {\r\n    width: 30px;\r\n    height: auto;\r\n}\r\n\r\n\r\n/* Profile container */\r\n\r\n.profile {\r\n    margin: 20px 0;\r\n}\r\n\r\n\r\n/* Profile sidebar */\r\n\r\n.profile-sidebar {\r\n    padding: 0px 0 10px 0;\r\n    /*max-width: 30%;*/\r\n    width: 300px;\r\n    background: #fff;\r\n    position: absolute;\r\n    bottom: 57px;\r\n    box-shadow: 1px 0px 20px #777;\r\n    display: none;\r\n    z-index: 98;\r\n    /*border-radius: 10px;*/\r\n    /*background-color: #24c8a5;*/\r\n}\r\n\r\n.profile-top-half {\r\n    padding: 30px 20px 20px 20px;\r\n    /*border-radius: 10px;*/\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#24c8a5+0,ffffff+100 */\r\n    /*background: #24ABC8;*/\r\n    /* Old browsers */\r\n    /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom, #24ABC8 0%, #ffffff 90%);\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#24B4C8', endColorstr='#ffffff', GradientType=0);\r\n    /* IE6-9 */\r\n}\r\n\r\n.profile-userpic img {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n    height: 40%;\r\n    padding: 5px;\r\n    border: 2px solid #fff;\r\n    border-radius: 50% !important;\r\n}\r\n\r\n.profile-usertitle {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n    color: #555;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    /*margin-bottom: 7px;*/\r\n}\r\n\r\n.profile-usertitle-job {\r\n    /*text-transform: uppercase;*/\r\n    color: #777;\r\n    font-size: 14px;\r\n    /*font-weight: 600;*/\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.profile-userbuttons {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.profile-userbuttons .btn {\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    padding: 6px 15px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.profile-userbuttons .btn:last-child {\r\n    margin-right: 0px;\r\n}\r\n\r\n.profile-usermenu {\r\n    background-color: #fff;\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n/*.profile-usermenu ul li:first-child a {\r\n    height: 60px;\r\n    line-height: 60px;\r\n}*/\r\n\r\n.profile-usermenu ul li {\r\n    /*border-bottom: 1px solid #f0f4f7;*/\r\n    /*padding-left: 20px;*/\r\n}\r\n\r\n.profile-usermenu ul li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li a {\r\n    color: #333;\r\n    padding: 5px 15px 3px 15px;\r\n    /*line-height: 22px;*/\r\n    /*font-size: 14px;*/\r\n    /*font-weight: 500;    */\r\n}\r\n\r\n.profile-usermenu ul li a i {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n}\r\n\r\n.profile-usermenu ul li a:hover {\r\n    background-color: rgba(66, 186, 213, 1);\r\n    color: #fff;\r\n}\r\n\r\n.profile-usermenu ul li.active {\r\n    border-bottom: none;\r\n}\r\n\r\n\r\n/*.profile-usermenu ul li.active a {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n}*/\r\n\r\n.profile-usermenu ul li img {\r\n    height: 25px;\r\n    margin-bottom: 3px;\r\n    margin-right: 5px;\r\n    padding: 3px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/* Profile Content */\r\n\r\n.profile-content {\r\n    padding: 20px;\r\n    background: #fff;\r\n    min-height: 460px;\r\n}\r\n\r\n.control-buttons {\r\n    /*padding-top: 2px;*/\r\n    padding: 0px 20px 0px 20px;\r\n}\r\n\r\n.control-buttons a {\r\n    width: 60px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    padding: 6px 7px 2px 7px;\r\n}\r\n\r\n.control-buttons a i {\r\n    font-size: 16px;\r\n}\r\n\r\n.control-buttons a:hover {\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"welcome\">\r\n</div> -->\r\n<div class=\"desktop-frame\">\r\n    <a class=\"icon\" href='#'\r\n        onclick=\"show( '#immigration-dashboard', 'assets/icons/reading_ebook.svg', 'Old Changi Hospital' );loadIframeSource( '#immigration-dashboard iframe','https:\\/\\/isteven.github.io/och');\">\r\n        <div class=\"border\">\r\n            <img src='assets/icons/reading_ebook.svg' />\r\n        </div>\r\n        Old Changi Hospital\r\n    </a>\r\n\r\n    <a class=\"icon\" href='#'\r\n        onclick=\"show( '#ramp-management', 'assets/icons/refresh.svg', 'Bodies of Work' );loadIframeSource( '#ramp-management iframe','https:\\/\\/isteven.github.io/bow');\">\r\n        <div class=\"border\">\r\n            <img src='assets/icons/refresh.svg' />\r\n        </div>\r\n        Bodies of Work\r\n    </a>\r\n\r\n    <br />\r\n\r\n    <a class=\"icon\" href='#' onclick=\"show( '#term-service-level', 'assets/icons/area_chart.svg', 'MCCM' )\">\r\n        <div class=\"border\">\r\n            <img src='assets/icons/area_chart.svg' />\r\n        </div>\r\n        MCCM\r\n    </a>\r\n\r\n    <a class=\"icon\" href='#'\r\n        onclick=\"show( '#employee-database', 'assets/icons/contacts.svg', 'Angular Multi Select' )\">\r\n        <div class=\"border\">\r\n            <img src='assets/icons/contacts.svg' />\r\n        </div>\r\n        Angular Multi Select\r\n    </a>\r\n\r\n    <br />\r\n\r\n    <a class=\"icon\" href='#' onclick=\"show( '#insurance', 'assets/icons/globe.svg', 'Insurance ABCD' )\">\r\n        <div class=\" border\">\r\n            <img src='assets/icons/globe.svg' />\r\n        </div>\r\n        Insurance ABCD\r\n    </a>\r\n\r\n    <a class=\"icon\" href='#' onclick=\"show( '#tableau', 'assets/icons/calculator.svg', 'Tableau Dashboard' )\">\r\n        <div class=\"border\">\r\n            <img src='assets/icons/calculator.svg' />\r\n        </div>\r\n        Tableau Dashboard\r\n    </a>\r\n    <br />\r\n    <a class=\"icon\" href='#' onclick=\"show( '#readme', 'assets/icons/document.svg', 'Read Me First' )\">\r\n        <div class=\"border\">\r\n            <img src='assets/icons/document.svg' />\r\n        </div>\r\n        Read Me First\r\n    </a>\r\n\r\n    <window></window>\r\n</div>\r\n\r\n<div class=\"profile-sidebar\">\r\n    <!-- SIDEBAR USERPIC -->\r\n    <div class=\"profile-top-half\">\r\n        <div class=\"profile-userpic\">\r\n            <img src=\"assets/images/profile.png\" class=\"img-responsive\" alt=\"\">\r\n        </div>\r\n        <!-- END SIDEBAR USERPIC -->\r\n        <!-- SIDEBAR USER TITLE -->\r\n        <div class=\"profile-usertitle\">\r\n            <div class=\"profile-usertitle-name\">\r\n                Ignatius Steven\r\n            </div>\r\n            <div class=\"profile-usertitle-job\">\r\n                Administrator\r\n            </div>\r\n        </div>\r\n        <!-- END SIDEBAR USER TITLE -->\r\n        <!-- SIDEBAR BUTTONS \r\n        <div class=\"profile-userbuttons\">\r\n            <button type=\"button\" class=\"btn btn-default btn-sm\">\r\n                <i class=\"fa fa-user\"></i>&nbsp;&nbsp;\r\n                My Account\r\n            </button>\r\n        </div>\r\n        -->\r\n        <!-- <div class=\"profile-userbuttons\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Update Account</button>\r\n        </div> -->\r\n    </div>\r\n    <!-- END SIDEBAR BUTTONS -->\r\n    <!-- SIDEBAR MENU -->\r\n    <div class=\"profile-usermenu\">\r\n        <ul class=\"nav\">\r\n            <li class=\"active\">\r\n                <a href='#' onclick=\"show( '#immigration-dashboard', 'assets/icons/area_chart.svg', 'Old Changi Hospital' );\r\n                $('.profile-sidebar').slideToggle(400);\r\n                $('.start-button img').toggleClass('flip');\r\n                loadIframeSource( '#immigration-dashboard iframe','https:\\/\\/isteven.github.io/och');\r\n                \">\r\n                    <img src='assets/icons/reading_ebook.svg' />\r\n                    Old Changi Hospital\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href='#' onclick=\"show( '#ramp-management', 'assets/icons/refresh.svg', 'Bodies of Work' );\r\n                $('.profile-sidebar').slideToggle(400);\r\n                $('.start-button img').toggleClass('flip');\r\n                loadIframeSource( '#ramp-management iframe','https:\\/\\/isteven.github.io/bow');\">\r\n                    <img src='assets/icons/refresh.svg' />\r\n                    Bodies of Work\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href='#' onclick=\"show( '#term-service-level', 'assets/icons/area_chart.svg', 'MCCM' );\r\n                $('.profile-sidebar').slideToggle(400);\r\n                $('.start-button img').toggleClass('flip');\">\r\n                    <img src='assets/icons/area_chart.svg' />\r\n                    MCCM\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href='#' onclick=\"show( '#employee-database', 'assets/icons/contacts.svg', 'Angular Multi Select' );\r\n                $('.profile-sidebar').slideToggle(400);\r\n                $('.start-button img').toggleClass('flip');\">\r\n                    <img src='assets/icons/contacts.svg' />\r\n                    Angular Multi Select\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#\" onclick=\"show( '#insurance', 'assets/icons/globe.svg', 'Insurance ABCD' );\r\n                $('.profile-sidebar').slideToggle(400);\r\n                $('.start-button img').toggleClass('flip');\r\n                \">\r\n                    <img src='assets/icons/globe.svg' />\r\n                    Insurance ABCD\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\" #\" onclick=\"show( '#tableau', 'assets/icons/calculator.svg', 'Tableau Dashboard' );\r\n                $('.profile-sidebar').slideToggle(400);\r\n                $('.start-button img').toggleClass('flip');\r\n                \">\r\n                    <img src='assets/icons/calculator.svg' />\r\n                    Tableau Dashboard\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\" #\" onclick=\"show( '#readme', 'assets/icons/document.svg', 'Read Me First' );\r\n                            $('.profile-sidebar').slideToggle(400);\r\n                            $('.start-button img').toggleClass('flip');\r\n                            \">\r\n                    <img src='assets/icons/document.svg' />\r\n                    Read Me First\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <br />\r\n        <div class=\" control-buttons pull-right\">\r\n            <a href=\"#\" class=\"btn btn-default\">\r\n                <i class=\"fa fa-circle-o-notch\" style=\"color:rgb(22, 216, 222)\"></i>\r\n                <br />\r\n                Restart\r\n            </a>\r\n            <a href=\"#\" class=\"btn btn-default\">\r\n                <i class=\"fa fa-power-off\" style=\"color:#ff0000;\"></i>\r\n                <br />\r\n                Turn Off\r\n            </a>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesktopComponent = (function () {
    function DesktopComponent() {
    }
    DesktopComponent.prototype.ngOnInit = function () {
    };
    return DesktopComponent;
}());
DesktopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'desktop',
        template: __webpack_require__("../../../../../src/app/desktop/desktop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/desktop/desktop.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DesktopComponent);

//# sourceMappingURL=desktop.component.js.map

/***/ }),

/***/ "../../../../../src/app/taskbar/taskbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".taskbar {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    /*height: 35px;*/\r\n    line-height: 24px;\r\n    /* Vertically center the text there */\r\n    /*background-color: #005f88;*/\r\n    margin: 0 auto;\r\n    border-top: 1px solid #ccc;\r\n    padding: 5px 8px 8px 90px;\r\n    font-size: 14px;\r\n    z-index: 99;\r\n}\r\n\r\n.taskbar .start-button {\r\n    padding: 7px;\r\n    /*border: 1px solid #999;*/\r\n    border-radius: 50%;\r\n    background-color: #eee;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 12px;\r\n    line-height: 15px;\r\n    background: rgb(255,255,255); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(238,238,238,1) 36%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cccccc', endColorstr='#eeeeee',GradientType=0 ); /* IE6-9 */\r\n    box-shadow: -1px -1px 4px #ccc;\r\n    border: 1px solid #fff;\r\n}\r\n\r\n.taskbar .start-button img {\r\n    /*height: 40px;\r\n    width: 38px;*/\r\n    /*position: absolute;*/\r\n    /*border: 1px solid red;*/\r\n    /*width: 100%;*/\r\n    height: 35px;\r\n    width: 35px;\r\n    -webkit-transition: -webkit-transform 0.3s ease-in;\r\n}\r\n\r\n.taskbar .btn {\r\n    font-size: 12px;\r\n    padding: 1px 4px;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: none;\r\n    /*line-height: 30px;*/\r\n    margin-right: 10px;\r\n}\r\n\r\n.taskbar .btn img {\r\n    height: 15px;\r\n    /*margin-top: 2px;*/\r\n}\r\n\r\n.taskbar .clock {\r\n    line-height: 24px;\r\n    color: #fff;\r\n}\r\n\r\n.taskbar .flip { -webkit-transform: rotate(180deg); transform: rotate(180deg);}\r\n\r\n.info-bar {\r\n    position: fixed;\r\n    padding: 0px 15px;\r\n    text-align: center;\r\n    color: #ccc;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    height: 22px;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/taskbar/taskbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"taskbar\">\r\n    <a class='start-button'>\r\n        <img src=\"assets/images/flux2.png\"/>\r\n    </a>\r\n    <span class=\"minimized-windows-list text-muted\" style='display: inline-block'>\r\n        <!-- Place sticky footer content here.\r\n        <button type=\"button\" class=\"btn btn-secondary \">\r\n            <img src='assets/icons/area_chart.svg'/>\r\n            Imigration Dashboard\r\n        </button>\r\n        -->\r\n        <!-- <button type=\"button\" class=\"btn btn-secondary\">\r\n            <img src='assets/icons/biotech.svg'/>Biotech\r\n        </button> -->\r\n\r\n    </span>\r\n    <!-- <div id=\"calendar\" class=\"fc-calendar-container\"></div> -->\r\n\r\n    <div class=\"right-side pull-right\">\r\n        <div id=\"clock\" class=\"clock\"></div>\r\n    </div>\r\n    <div class=\"info-bar\">\r\n        Extra space here to accomodate browser's tooltip when you hover an anchor element.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/taskbar/taskbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskbarComponent = (function () {
    function TaskbarComponent() {
        this.date_time = function (id) {
            var date = new Date;
            var year = date.getFullYear();
            var month = date.getMonth();
            var months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
            var d = date.getDate();
            var day = date.getDay();
            var days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
            var h = date.getHours();
            if (h < 10) {
                h = "0" + h;
            }
            var m = date.getMinutes();
            if (m < 10) {
                m = "0" + m;
            }
            var s = date.getSeconds();
            if (s < 10) {
                s = "0" + s;
            }
            var result = '' + days[day] + ', ' + months[month] + ' ' + d + ' ' + year + ' - ' + h + ':' + m + ':' + s;
            document.getElementById(id).innerHTML = result;
            return true;
        };
    }
    TaskbarComponent.prototype.ngOnInit = function () {
        var that = this;
        setInterval(function () {
            that.date_time('clock');
        }, 1000);
    };
    return TaskbarComponent;
}());
TaskbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'taskbar',
        template: __webpack_require__("../../../../../src/app/taskbar/taskbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/taskbar/taskbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaskbarComponent);

//# sourceMappingURL=taskbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/window/window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window-comp {\r\n    border: 1px solid #dddddd;\r\n    background: #f4f4f4;\r\n    color: #444445;\r\n    display: block;\r\n    width: 1000px;\r\n    height: 640px;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n    /*margin: 20px 0px 0px 20px;*/\r\n    position: absolute;\r\n    top: 20px;\r\n    box-shadow: 2px 2px 5px #333;\r\n    /*left: 40px;*/\r\n    z-index: 2;\r\n}\r\n\r\n.window-comp .title-bar {\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f7f7f7+0,cccccc+100 */\r\n    background: #f7f7f7;\r\n    /* Old browsers */\r\n    /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom, #f7f7f7 0%, #cccccc 100%);\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#cccccc', GradientType=0);\r\n    /* IE6-9 */\r\n    /*padding: px 7px;*/\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    color: #000;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    padding: 3px 7px;\r\n}\r\n\r\n.window-comp .title-bar:hover {\r\n    cursor: move;\r\n}\r\n\r\n.window-comp .title-bar .control-buttons {\r\n    display: inline-block;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    height: 100%;\r\n    /*font-size: 14px;*/\r\n    /*float: right;*/\r\n    /*width: 50%;*/\r\n    /*border: 1px solid red;*/\r\n}\r\n\r\n.window-comp .title-bar .control-buttons a {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    color: #000;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.window-comp .menu-bar {\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0px;\r\n    border-bottom: 1px solid #ddd ;\r\n    padding: 2px 0px;\r\n    font-size: 12px;\r\n    /*height: 55px;*/\r\n    /*overflow: hidden;*/\r\n}\r\n\r\n.window-comp .menu-bar ul {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.window-comp .menu-bar li {\r\n    display: inline-block;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.window-comp .menu-bar li a {\r\n    padding: 3px 7px 3px 7px;\r\n    color: #000;\r\n    /*margin-right: 10px;*/\r\n}\r\n\r\n.window-comp .menu-bar li a:hover {\r\n    background-color: rgb(51, 147, 208);\r\n    color: #fff;\r\n    /*margin-right: 10px;*/\r\n}\r\n\r\n\r\n.window-comp .content {\r\n    font-size: 13px;\r\n    padding: 7px 7px;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    height: calc( 100% - 46px );\r\n    display: block;\r\n}\r\n\r\n.window-comp .minimize {\r\n    opacity: 0;\r\n    /*position: absolute;*/\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%);\r\n}\r\n\r\n.skyflux-readme {\r\n    list-style-type: decimal;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/window/window.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Immigration Dashboard -->\r\n\r\n<div id=\"immigration-dashboard\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        Old Changi Hospital\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\"\r\n                onclick=\"minimize( '#immigration-dashboard', 'assets/icons/reading_ebook.svg', 'Old Changi Hospital' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#immigration-dashboard' )\">o</a>\r\n            <a href=\"#\"\r\n                onclick=\"closeWindow( '#immigration-dashboard' );unloadIframeSource('#immigration-dashboard iframe');\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <iframe id=\"inlineFrameExample\" title=\"Inline Frame Example\" width=\"100%\" height=\"100%\"\r\n            src=\"https://isteven.github.io/och\">\r\n        </iframe>\r\n        <!-- <object type=\"text/html\" data=\"https://isteven.github.io/och\" width=\"100%\" height=\"100%\">\r\n        </object> -->\r\n        <!--\r\n        <div id=\"chart\">\r\n            <div id=\"chart-content\"></div>\r\n            <br />\r\n            Lorem Ipsum\r\n            <Br />\r\n        </div>\r\n-->\r\n    </div>\r\n</div>\r\n\r\n<!-- Ramp Management -->\r\n<div id=\"ramp-management\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        Bodies of Work\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\" onclick=\"minimize( '#ramp-management', 'assets/icons/refresh.svg', 'App 2' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#ramp-management' )\">o</a>\r\n            <a href=\"#\" onclick=\"closeWindow( '#ramp-management' );unloadIframeSource('#ramp-management iframe');\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <iframe id=\"inlineFrameExample\" title=\"Inline Frame Example\" width=\"100%\" height=\"100%\"\r\n            src=\"https://isteven.github.io/bow\">\r\n        </iframe>\r\n    </div>\r\n</div>\r\n\r\n<!-- Terminal Service Level -->\r\n<div id=\"term-service-level\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        MCCM\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\" onclick=\"minimize( '#term-service-level', 'assets/icons/area_chart.svg', 'App 3' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#term-service-level' )\">o</a>\r\n            <a href=\"#\" onclick=\"closeWindow( '#term-service-level' )\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <a onclick=\"loadImage('#term-service-level .portoImages','assets/images/mccm-1.jpg')\">1</a>\r\n        <a onclick=\"loadImage('#term-service-level .portoImages','assets/images/mccm-2.jpg')\">2</a>\r\n        <a onclick=\"loadImage('#term-service-level .portoImages','assets/images/mccm-3.jpg')\">3</a>\r\n        <img class=\"portoImages\" src=\"assets/images/mccm-1.jpg\" style=\"width:100%; height:auto\" />\r\n    </div>\r\n</div>\r\n\r\n<!-- Employee Database -->\r\n<div id=\"employee-database\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        Angular Multi Select\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\" onclick=\"minimize( '#employee-database', 'assets/icons/contacts.svg', 'App 4' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#employee-database' )\">o</a>\r\n            <a href=\"#\" onclick=\"closeWindow( '#employee-database' )\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <iframe id=\"inlineFrameExample\" title=\"Inline Frame Example\" width=\"100%\" height=\"100%\"\r\n            src=\"http://isteven.github.io/angular-multi-select\">\r\n        </iframe>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- Employee Database -->\r\n<div id=\"insurance\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        Insurance ABCD\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\" onclick=\"minimize( '#insurance', 'assets/icons/advance.svg', 'App 4' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#insurance' )\">o</a>\r\n            <a href=\"#\" onclick=\"closeWindow( '#insurance' )\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <a onclick=\"loadImage('#insurance .portoImages','assets/images/abcd-insurance-1.jpg')\">1</a>\r\n        <a onclick=\"loadImage('#insurance .portoImages','assets/images/abcd-insurance-2.jpg')\">2</a>\r\n        <a onclick=\"loadImage('#insurance .portoImages','assets/images/abcd-insurance-3.jpg')\">3</a>\r\n        <a onclick=\"loadImage('#insurance .portoImages','assets/images/abcd-insurance-4.jpg')\">4</a>\r\n        <img class=\"portoImages\" src=\"assets/images/abcd-insurance-1.jpg\" style=\"width:100%; height:auto\" />\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- Employee Database -->\r\n<div id=\"tableau\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        Tablaeu Dashboard\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\" onclick=\"minimize( '#tableau', 'assets/icons/database.svg', 'App 4' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#tableau' )\">o</a>\r\n            <a href=\"#\" onclick=\"closeWindow( '#tableau' )\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <a onclick=\"loadImage('#tableau .portoImages','assets/images/tableau-portal-1.jpg')\">1</a>\r\n        <a onclick=\"loadImage('#tableau .portoImages','assets/images/tableau-portal-2.jpg')\">2</a>\r\n        <a onclick=\"loadImage('#tableau .portoImages','assets/images/tableau-portal-3.jpg')\">3</a>\r\n        <img class=\"portoImages\" src=\"assets/images/tableau-portal-1.jpg\" style=\"width:100%; height:auto\" />\r\n\r\n    </div>\r\n</div>\r\n\r\n<div id=\"readme\" class=\"window-comp\">\r\n    <div class=\"title-bar\">\r\n        Read Me First\r\n        <div class=\"control-buttons pull-right\">\r\n            <a href=\"#\" onclick=\"minimize( '#readme', 'assets/icons/document.svg', 'App 4' )\">_</a>\r\n            <a href=\"#\" onclick=\"maximize( '#readme' )\">o</a>\r\n            <a href=\"#\" onclick=\"closeWindow( '#readme' )\">x</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a>File</a>\r\n            </li>\r\n            <li>\r\n                <a>Edit</a>\r\n            </li>\r\n            <li>\r\n                <a>Help</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        Welcome to the HypertextOS.\r\n        <br />\r\n        <br />\r\n        There are 6 pre-installed applications here, where in each you can see my portfolio. These are:\r\n        <ul class=\"skyflux-readme\">\r\n            <li>Old Changi Hospital: a web based game</li>\r\n            <li>Bodies of Work: another web based game</li>\r\n            <li>MCCM: a campaign management application (screenshots only)</li>\r\n            <li>Angular Multi Select: AngularJs 1 multi select directive</li>\r\n            <li>Insurance ABCD: a web-based application to calculate insurance premium, returns & benefits (screenshots\r\n                only)</li>\r\n            <li>Tableau Dashboard: a web-based application running on top of Tableau REST API (screenshots only)</li>\r\n        </ul>\r\n        <br />\r\n        These are prepared for demo purpose, so in case glitches occur please refresh by pressing CTRL+F5 or CTRL+R in\r\n        most modern browsers.\r\n        <br />\r\n        <br />\r\n        Cheers & have a good day ahead.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/window/window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowComponent = (function () {
    function WindowComponent() {
    }
    WindowComponent.prototype.ngOnInit = function () {
    };
    return WindowComponent;
}());
WindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'window',
        template: __webpack_require__("../../../../../src/app/window/window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/window/window.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WindowComponent);

//# sourceMappingURL=window.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map