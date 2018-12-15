webpackJsonp([2],{

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_spinner_spinner__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilProvider = (function () {
    function UtilProvider(toast, platform, modalController) {
        this.toast = toast;
        this.platform = platform;
        this.modalController = modalController;
        this.isSpinnerRunning = false;
    }
    UtilProvider.prototype.platformIs = function (platformName) {
        return this.platform.is(platformName);
    };
    UtilProvider.prototype.assign = function (item) {
        if (this.isEmpty(item))
            return null;
        return Object.assign({}, item);
    };
    UtilProvider.prototype.assignList = function (list) {
        var _this = this;
        var newList = [];
        list.forEach(function (item) {
            newList.push(_this.assign(item));
        });
        return newList;
    };
    UtilProvider.prototype.ifOffline = function () {
        this.error("Bu işlemi yapabilmek için internet bağlantısı gereklidir.");
        this.loaderEnd();
    };
    UtilProvider.prototype.timerStart = function (name) {
        console.time(name);
    };
    UtilProvider.prototype.timerEnd = function (name) {
        console.timeEnd(name);
    };
    UtilProvider.prototype.loaderStart = function (showPercentage) {
        if (showPercentage === void 0) { showPercentage = false; }
        if (!this.isSpinnerRunning) {
            this.spinner = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__components_spinner_spinner__["a" /* SpinnerComponent */], { showPercentage: showPercentage }, { enableBackdropDismiss: false, cssClass: this.getSelectedTheme() });
            this.spinner.present();
        }
        this.isSpinnerRunning = true;
    };
    UtilProvider.prototype.loaderEnd = function () {
        if (this.isSpinnerRunning)
            this.spinner.dismiss();
        this.isSpinnerRunning = false;
    };
    /* Message Utils  */
    UtilProvider.prototype.getDuration = function () {
        return 2 * 1000;
    };
    UtilProvider.prototype.success = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-success"
        });
        toast.present();
        // this.addMessage('success', 'Başarılı', message);
    };
    UtilProvider.prototype.info = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-info"
        });
        toast.present();
        //this.addMessage('info', 'Bilgi', message);
    };
    UtilProvider.prototype.warn = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-warn"
        });
        toast.present();
        //this.addMessage('warn', 'Uyarı', message);
    };
    UtilProvider.prototype.error = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-error"
        });
        toast.present();
        // this.messageService.add({severity: 'info', summary: 'Uyarı', detail: message});
        //this.addMessage('info', 'Uyarı', message);
    };
    UtilProvider.prototype.getSystemParam = function (param) {
        return this.getLocalStorageParam("systemParams", param);
    };
    UtilProvider.prototype.getSystemLabel = function (param) {
        return this.getLocalStorageParam("labels", param);
    };
    UtilProvider.prototype.getLocalStorageParam = function (type, param) {
        var value = "";
        var systemParams = localStorage.getItem(type);
        if (systemParams != null) {
            var paramList = JSON.parse(systemParams);
            paramList.forEach(function (item) {
                if (item.kod != null && item.kod == param) {
                    value = item.ad;
                }
            });
        }
        return value;
    };
    /* MESSAGE UTIL END */
    /* DATE UTILS START   */
    UtilProvider.prototype.dateFormatRegex = function (x, y) {
        if (y === void 0) { y = "dd-MM-yyyy"; }
        if (this.isEmpty(x))
            return "";
        x = new Date(x);
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(-2);
        });
        return y.replace(/(y+)/g, function (v) {
            return x
                .getFullYear()
                .toString()
                .slice(-v.length);
        });
    };
    UtilProvider.prototype.newDateTime = function (dateString) {
        if (this.isNotEmpty(dateString) && typeof dateString == "number")
            return dateString;
        if (this.isNotEmpty(dateString)) {
            var index = dateString.indexOf('.');
            if (index > -1)
                dateString = dateString.substr(0, index).replace(/-/g, "/");
            else
                dateString = dateString.replace(/-/g, "/");
            return new Date(dateString).getTime();
        }
        return null;
    };
    UtilProvider.prototype.addMinutes = function (dateStr, addition) {
        return new Date(dateStr.setTime(dateStr.getTime() + 1000 * 60 * addition));
    };
    UtilProvider.prototype.addDays = function (dateTime, addition) {
        if (addition === void 0) { addition = 1; }
        return dateTime + 24 * 60 * 60 * 1000 * addition;
    };
    UtilProvider.prototype.addDay = function (dateTime) {
        return this.addDays(dateTime, 1);
    };
    UtilProvider.prototype.getLocaleParameters = function (locale) {
        switch (locale) {
            case "TR": {
                return this.getTurkishLocale();
            }
            default: {
                return this.getTurkishLocale();
            }
        }
    };
    UtilProvider.prototype.getTurkishLocale = function () {
        return {
            firstDayOfWeek: 1,
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            today: 'Bugün',
            clear: 'Temizle'
        };
    };
    /* DATE UTIL END   */
    /* STRING UTIL START*/
    UtilProvider.prototype.translateTurkishCharacters = function (text) {
        var z = "";
        if (text != null && text != "") {
            var y = text.split("");
            for (var i = 0; y.length > i; i++) {
                switch (y[i]) {
                    case "Ç":
                        z += y[i].replace("Ç", "C");
                        break;
                    case "ç":
                        z += y[i].replace("ç", "c");
                        break;
                    case "Ğ":
                        z += y[i].replace("Ğ", "G");
                        break;
                    case "ğ":
                        z += y[i].replace("ğ", "g");
                        break;
                    case "İ":
                        z += y[i].replace("İ", "I");
                        break;
                    case "ı":
                        z += y[i].replace("ı", "i");
                        break;
                    case "Ö":
                        z += y[i].replace("Ö", "O");
                        break;
                    case "ö":
                        z += y[i].replace("ö", "o");
                        break;
                    case "Ş":
                        z += y[i].replace("Ş", "S");
                        break;
                    case "ş":
                        z += y[i].replace("ş", "s");
                        break;
                    case "Ü":
                        z += y[i].replace("Ü", "U");
                        break;
                    case "ü":
                        z += y[i].replace("ü", "u");
                        break;
                    default:
                        z += y[i];
                        break;
                }
            }
        }
        return z;
    };
    /* STRING UTIL END*/
    UtilProvider.prototype.isGreaterThan = function (mst, compared) {
        var result = false;
        if (this.isNotEmpty(mst) && this.isNotEmpty(compared)) {
            return mst > compared;
        }
        return result;
    };
    UtilProvider.prototype.isGreaterOrEqualThan = function (mst, compared) {
        var result = false;
        if (this.isNotEmpty(mst) && this.isNotEmpty(compared)) {
            return mst >= compared;
        }
        return result;
    };
    UtilProvider.prototype.isLessThan = function (mst, compared) {
        var result = false;
        if (this.isNotEmpty(mst) && this.isNotEmpty(compared)) {
            return mst < compared;
        }
        return result;
    };
    UtilProvider.prototype.isLessOrEqualThan = function (mst, compared) {
        var result = false;
        if (this.isNotEmpty(mst) && this.isNotEmpty(compared)) {
            return mst <= compared;
        }
        return result;
    };
    UtilProvider.prototype.isEmpty = function (item) {
        if (item != null)
            item = String(item);
        return item == "undefined" || typeof item == "undefined" || item == null || item == "";
    };
    UtilProvider.prototype.emptyIfNull = function (item) {
        if (this.isEmpty(item))
            item = "";
        return item;
    };
    UtilProvider.prototype.isNotEmpty = function (item) {
        return !this.isEmpty(item);
    };
    UtilProvider.prototype.isNotEmptyRows = function (res) {
        return (this.isNotEmpty(res) && this.isNotEmpty(res.rows) && res.rows.length > 0);
    };
    UtilProvider.prototype.getSelectedTheme = function () {
        return "blue-theme";
    };
    UtilProvider.prototype.getBackgroundImage = function () {
        return "assets/images/login-background.jpg";
    };
    UtilProvider.prototype.mailRegex = function () {
        return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    UtilProvider.prototype.passwordRegex = function () {
        return new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{6,}$");
    };
    UtilProvider.prototype.processResult = function (result) {
        var _this = this;
        result.errorMessages.forEach(function (mes) {
            _this.error(mes);
        });
        result.infoMessages.forEach(function (mes) {
            _this.info(mes);
        });
        return result.objects;
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anasayfa/anasayfa.module": [
		172
	],
	"../pages/login/login.module": [
		181
	],
	"../pages/register/register.module": [
		182
	],
	"../pages/todo-item/todo-item.module": [
		183
	],
	"../pages/todo-list/todo-list.module": [
		184
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnasayfaPageModule", function() { return AnasayfaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anasayfa__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AnasayfaPageModule = (function () {
    function AnasayfaPageModule() {
    }
    AnasayfaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__anasayfa__["a" /* Anasayfa */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__anasayfa__["a" /* Anasayfa */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], AnasayfaPageModule);
    return AnasayfaPageModule;
}());

//# sourceMappingURL=anasayfa.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_User__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @since 2018/04/25
 */




var LoginProvider = (function () {
    function LoginProvider(api, http) {
        this.api = api;
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__entities_User__["a" /* User */]();
    }
    LoginProvider.prototype.auth = function (user) {
        var url = this.api.loginUrl(user);
        var header = this.api.getHeader();
        return this.http.get(url, { headers: header });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/**
 * @author malisahin
 * @since 14.09.2018
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = (function () {
    function SpinnerComponent(navParams) {
        this.navParams = navParams;
        this.showPercentage = false;
    }
    SpinnerComponent.prototype.ionViewDidLoad = function () {
        var showPercentage = this.navParams.get("showPercentage");
        this.start();
    };
    SpinnerComponent.prototype.ionViewWillLeave = function () {
        console.info("Percentage Info is Killed");
        this.end();
    };
    SpinnerComponent.prototype.start = function () {
        this.intervalId = setInterval(function () {
        }, 1000);
    };
    SpinnerComponent.prototype.end = function () {
        clearInterval(this.intervalId);
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/components/spinner/spinner.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title></ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n  style="background:rgba(25, 88, 132, 0.83)"\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content class="spinner">\n\n  <div style="width: 25%; margin-left: 35%; margin-top: 65%;">\n\n    <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n      viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n\n      <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n\n            c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">\n\n        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>\n\n      </path>\n\n\n\n      <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n\n            c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">\n\n        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>\n\n      </path>\n\n\n\n      <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n\n            L82,35.7z">\n\n        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>\n\n      </path>\n\n    </svg>\n\n  </div>\n\n  <div>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label style="font-size: 18px;color: #fff;text-align: center;">Lütfen Bekleyiniz</ion-label>\n\n        <ion-label style="font-size: 18px;color: #fff;text-align: center;" *ngIf="showPercentage">\n\n          {{downloadPercentage}}\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </div>\n\n</ion-content>\n\n\n\n<!--\n\n<ion-footer>\n\n</ion-footer>\n\n-->'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/components/spinner/spinner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_User__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_endpoint_user_endpoint__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * @author mali.sahin
 * @since 13.12.2018
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, util, logger, userEndpoint, userService, navParams) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.logger = logger;
        this.userEndpoint = userEndpoint;
        this.userService = userService;
        this.navParams = navParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__entities_User__["a" /* User */]();
        this.isUserValid = false;
        this.isUserValid = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        this.validateUser();
        if (this.isUserValid)
            this.userEndpoint.register(this.user)
                .subscribe(this.registerSuccess.bind(this), this.registerError.bind(this), this.registerComplete.bind(this));
    };
    RegisterPage.prototype.registerSuccess = function (result) {
        this.util.success("Registration is completed.");
        this.logger.success(result);
        this.userService.saveUser(result.objects[0]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.registerError = function (err) {
        this.logger.error(err);
    };
    RegisterPage.prototype.registerComplete = function () {
        this.logger.info("Complete");
    };
    RegisterPage.prototype.validateUser = function () {
        if (this.util.isEmpty(this.user.name)) {
            this.util.error("Name field is empty");
            this.isUserValid = false;
            return;
        }
        if (this.util.isEmpty(this.user.email)) {
            this.util.error("Email field is empty");
            this.isUserValid = false;
            return;
        }
        if (!this.util.mailRegex().test(this.user.email)) {
            this.util.error("Email format is wrong");
            this.isUserValid = false;
            return;
        }
        if (this.util.isEmpty(this.user.password)) {
            this.util.error("Password field is empty");
            this.isUserValid = false;
            return;
        }
        if (!this.util.passwordRegex().test(this.user.password)) {
            this.util.error("Password format is wrong. At least 6 char. 1-Capital, 1-lowercase, 1-number should be included.");
            this.isUserValid = false;
            return;
        }
        this.isUserValid = true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/register/register.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true">\n        <icon-header #header></icon-header>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content-background login-content" padding>\n\n    <div class="login-box">\n\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4>\n                <ion-input type="text" placeholder="User Name" name="email" [(ngModel)]="user.name"\n                           required></ion-input>\n            </ion-col>\n            <ion-col col-4></ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4>\n                <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="user.email" required></ion-input>\n            </ion-col>\n            <ion-col col-4></ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4>\n                <ion-input type="text" placeholder="Password" name="password" [(ngModel)]="user.password"\n                           required></ion-input>\n            </ion-col>\n\n            <ion-col col-4></ion-col>\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4></ion-col>\n\n            <ion-col col-2>\n                <button ion-button (click)="goBack()" round id="cancel-btn">\n                    Cancel\n                </button>\n            </ion-col>\n\n            <ion-col col-2>\n                <button ion-button (click)="register()" round id="register-btn">\n                    Register\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-col col-4></ion-col>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_endpoint_user_endpoint__["a" /* UserEndpoint */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEndpoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_User__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @author mali.sahin
 * @since 13.12.2018
 */
var UserEndpoint = (function () {
    function UserEndpoint(api, http) {
        this.api = api;
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__entities_User__["a" /* User */]();
    }
    UserEndpoint.prototype.register = function (user) {
        var url = this.api.registerUrl();
        var header = this.api.getHeader();
        return this.http.post(url, user, { headers: header });
    };
    UserEndpoint = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserEndpoint);
    return UserEndpoint;
}());

//# sourceMappingURL=user-endpoint.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_TodoList__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todo_list_endpoint_todo_list_endpoint__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @author mali.sahin
 * @since 15.12.2018
 */
var TodoListEditComponent = (function () {
    function TodoListEditComponent(viewController, util, todoListEndpoint) {
        this.viewController = viewController;
        this.util = util;
        this.todoListEndpoint = todoListEndpoint;
        this.todoList = new __WEBPACK_IMPORTED_MODULE_1__entities_TodoList__["a" /* TodoList */]();
    }
    TodoListEditComponent.prototype.validate = function () {
        if (this.util.isNotEmpty(this.todoList.name))
            this.save();
        else
            this.util.error("Alias can not be null");
    };
    TodoListEditComponent.prototype.save = function () {
        var _this = this;
        var call = this.todoListEndpoint.save(this.todoList);
        call.subscribe(function (res) {
            console.log(res);
            var objects = _this.util.processResult(res);
            if (objects.length > 0)
                _this.returnListPage();
        }, function (err) {
            console.log(err);
            _this.util.processResult(err.error);
        }, function () {
            console.log("Completed");
        });
    };
    TodoListEditComponent.prototype.returnListPage = function () {
        this.util.success("Todo List is saved.");
        this.closeModal();
    };
    TodoListEditComponent.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    TodoListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'todo-list-edit',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/components/todo-list-edit/todo-list-edit.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="false">\n        <icon-header #header></icon-header>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="content-background login-content" padding>\n\n\n    <div class="login-box">\n\n        <ion-grid>\n\n            <ion-row>\n                <ion-col col-4></ion-col>\n                <ion-col col-4>\n                    <ion-input style="width: 100%;" placeholder="Alias"\n                               [(ngModel)]="todoList.name"></ion-input>\n\n                </ion-col>\n                <ion-col col-4></ion-col>\n\n                <ion-col col-4></ion-col>\n                <ion-col col-4>\n                    <ion-textarea placeholder="Description" rows="10" cols="10" style="width: 100%; height: auto"\n                                  autosize\n                                  [(ngModel)]="todoList.description"></ion-textarea>\n\n                </ion-col>\n                <ion-col col-4></ion-col>\n            </ion-row>\n            <ion-row>\n\n                <ion-col col-4></ion-col>\n\n                <ion-col col-2>\n                    <button ion-button (click)="validate()"\n                            style="float: left;background-color: #32db64; width: 20%">\n                        <i class="fas fa-check"></i>\n                    </button>\n                </ion-col>\n\n                <ion-col col-2>\n                    <button ion-button (click)="closeModal()" icon-only\n                            style="float: right; background-color: #f53d3d; width: 20%">\n                        <i class="fas fa-times"></i>\n                    </button>\n\n                </ion-col>\n                <ion-col col-4></ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/components/todo-list-edit/todo-list-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_todo_list_endpoint_todo_list_endpoint__["a" /* TodoListEndpoint */]])
    ], TodoListEditComponent);
    return TodoListEditComponent;
}());

//# sourceMappingURL=todo-list-edit.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItemEndpoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @author mali.sahin
 * @since 13.12.2018
 */
var TodoItemEndpoint = (function () {
    function TodoItemEndpoint(api, http) {
        this.api = api;
        this.http = http;
        this.header = this.api.getHeader();
    }
    TodoItemEndpoint.prototype.save = function (todoItem) {
        this.url = this.api.saveItemUrl();
        return this.http.post(this.url, todoItem, { headers: this.header });
    };
    TodoItemEndpoint.prototype.list = function (listId) {
        this.url = this.api.findItemUrl(listId);
        return this.http.get(this.url, { headers: this.header });
    };
    TodoItemEndpoint.prototype.delete = function (itemId) {
        this.url = this.api.deleteItemUrl(itemId);
        return this.http.delete(this.url, { headers: this.header });
    };
    TodoItemEndpoint.prototype.update = function (todoItem) {
        this.url = this.api.updateItemUrl();
        return this.http.put(this.url, todoItem, { headers: this.header });
    };
    TodoItemEndpoint = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoItemEndpoint);
    return TodoItemEndpoint;
}());

//# sourceMappingURL=todo-item-endpoint.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_format_date_format__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__islem_tipi_islem_tipi__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__date_format_date_format__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_2__islem_tipi_islem_tipi__["a" /* IslemTipiPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__date_format_date_format__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_2__islem_tipi_islem_tipi__["a" /* IslemTipiPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_util__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author mali.sahin
 * @since 12.08.2018
 */
var DateFormatPipe = (function () {
    /**
     * Takes a number as time and convert to date.
     */
    function DateFormatPipe(util) {
        this.util = util;
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.util.isNotEmpty(value)) {
            var time = this.util.dateFormatRegex(new Date(value), "dd-MM-yyyy");
            //console.log("Formatted Date => " + time);
            return time;
        }
        return "";
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'FormatDate',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_util_util__["a" /* UtilProvider */]])
    ], DateFormatPipe);
    return DateFormatPipe;
}());

//# sourceMappingURL=date-format.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemPageModule", function() { return TodoItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_item__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodoItemPageModule = (function () {
    function TodoItemPageModule() {
    }
    TodoItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__todo_item__["a" /* TodoItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo_item__["a" /* TodoItemPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], TodoItemPageModule);
    return TodoItemPageModule;
}());

//# sourceMappingURL=todo-item.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListPageModule", function() { return TodoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_list__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodoListPageModule = (function () {
    function TodoListPageModule() {
    }
    TodoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__todo_list__["a" /* TodoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo_list__["a" /* TodoListPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], TodoListPageModule);
    return TodoListPageModule;
}());

//# sourceMappingURL=todo-list.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



/*
import * as jQuery from "jquery";
(window as any).$ = (window as any).jQuery = jQuery;
*/
Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_logger_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_anasayfa_anasayfa__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_anasayfa_anasayfa_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_header_header__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_intl__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_intl_locale_data_jsonp_en__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_intl_locale_data_jsonp_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_intl_locale_data_jsonp_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_pipes_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_cache__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_date_format_date_format__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_components_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_endpoint_user_endpoint__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_todo_list_endpoint_todo_list_endpoint__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_todo_item_endpoint_todo_item_endpoint__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_register_register_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_user_service_user_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_todo_list_todo_list_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_todo_item_todo_item_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_todo_list_todo_list__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_todo_item_todo_item__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anasayfa/anasayfa.module#AnasayfaPageModule', name: 'Anasayfa', segment: 'anasayfa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo-item/todo-item.module#TodoItemPageModule', name: 'TodoItemPage', segment: 'todo-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo-list/todo-list.module#TodoListPageModule', name: 'TodoListPage', segment: 'todo-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_anasayfa_anasayfa_module__["AnasayfaPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_29__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_todo_list_todo_list_module__["TodoListPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_todo_item_todo_item_module__["TodoItemPageModule"]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_anasayfa_anasayfa__["a" /* Anasayfa */],
                __WEBPACK_IMPORTED_MODULE_33__pages_todo_list_todo_list__["a" /* TodoListPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_todo_item_todo_item__["a" /* TodoItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_12__providers_logger_logger__["a" /* LoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_header_header__["a" /* HeaderProvider */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_date_format_date_format__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__providers_user_endpoint_user_endpoint__["a" /* UserEndpoint */],
                __WEBPACK_IMPORTED_MODULE_27__providers_todo_list_endpoint_todo_list_endpoint__["a" /* TodoListEndpoint */],
                __WEBPACK_IMPORTED_MODULE_28__providers_todo_item_endpoint_todo_item_endpoint__["a" /* TodoItemEndpoint */],
                __WEBPACK_IMPORTED_MODULE_30__providers_user_service_user_service__["a" /* UserService */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/**
 * @author malisahin
 * @date 2018-04-08
 */
var Constants = (function () {
    function Constants() {
    }
    Constants.USER_EMAIL = "USER_EMAIL";
    Constants.USER_PASSWORD = "USER_PASSWORD";
    return Constants;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoList; });
/**
 *  @author  mali.sahin
 *  @since  13.12.2018
 */
var TodoList = (function () {
    function TodoList() {
    }
    return TodoList;
}());

//# sourceMappingURL=TodoList.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItem; });
/**
 *  @author  mali.sahin
 *  @since  13.12.2018
 */
var TodoItem = (function () {
    function TodoItem() {
    }
    return TodoItem;
}());

//# sourceMappingURL=TodoItem.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_header_header__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_anasayfa_anasayfa__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(16);
/**
 * @author malisahin
 * @since 14.09.2018
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HeaderComponent = (function () {
    function HeaderComponent(nav, util, headerProvider, logger) {
        this.nav = nav;
        this.util = util;
        this.headerProvider = headerProvider;
        this.logger = logger;
        this.index = 1;
        this.duyuruSayisi = 0;
        this.uyariSayisi = 0;
        this.updateHeader();
    }
    HeaderComponent.prototype.ionViewDidLoad = function () {
        this.anaSayfa = __WEBPACK_IMPORTED_MODULE_3__pages_anasayfa_anasayfa__["a" /* Anasayfa */];
    };
    HeaderComponent.prototype.sayfayaGit = function (page, param) {
        this.nav.push(page, param);
    };
    HeaderComponent.prototype.closeApplicationConfirm = function () {
        this.headerProvider.closeApplicationConfirm(this.nav);
    };
    HeaderComponent.prototype.loadMesajSayilari = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HeaderComponent.prototype.updateHeader = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'icon-header',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/components/header/header.html"*/'<ion-grid>\n    <ion-row>\n\n        <ion-col col-7 col-sm-7 col-lg-7 col-md-7 col-xl-7>\n            <ion-buttons>\n                <button ion-button icon-only (click)="sayfayaGit(\'TodoListPage\',{})">\n                    <ion-icon name="home"></ion-icon>\n                </button>\n            </ion-buttons>\n        </ion-col>\n\n        <ion-col col-5 col-sm-5 col-lg-5 col-md-5 col-xl-5>\n            <ion-buttons style="float: right;">\n                <button ion-button icon-only (click)="closeApplicationConfirm()">\n                    <ion-icon name="exit"></ion-icon>\n                </button>\n            </ion-buttons>\n        </ion-col>\n\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_header_header__["a" /* HeaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemTipiPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @author mali.sahin
 * @since 13.09.2018
 */
var IslemTipiPipe = (function () {
    function IslemTipiPipe() {
    }
    /**
     * Islem tipine göre açıklama değerini döner
     */
    IslemTipiPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var explanation = value;
        switch (value) {
            case "KM":
                explanation = "Yol";
                break;
            case "MLZ":
                explanation = "Malzeme";
                break;
            case "ISC":
                explanation = "İşçilik";
                break;
            case "DGR":
                explanation = "Diğer";
                break;
            default:
                break;
        }
        return explanation;
    };
    IslemTipiPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'islemTipiPipe',
        })
    ], IslemTipiPipe);
    return IslemTipiPipe;
}());

//# sourceMappingURL=islem-tipi.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, logger) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.logger = logger;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.selectedTheme = "blue-theme";
        this.enableProductionMode();
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, page.param);
    };
    MyApp.prototype.ngAfterViewInit = function () {
    };
    MyApp.prototype.enableProductionMode = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n\n\n\n  <!--\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Pages</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n      <ion-list>\n\n        <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  -->\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__["a" /* LoggerProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**
 * @author malisahin
 * @date 2018-04-14
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerProvider = (function () {
    function LoggerProvider() {
        this.isLogEnabled = true;
    }
    LoggerProvider.prototype.info = function (res) {
        if (this.isLogEnabled)
            console.log("%c " + res, "color: #0096ff");
    };
    LoggerProvider.prototype.success = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.isLogEnabled) {
            optionalParams.push("color: #00ff4b");
            console.log.apply(console, ["%c " + message].concat(optionalParams));
        }
    };
    LoggerProvider.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.isLogEnabled)
            console.log(message, optionalParams);
    };
    LoggerProvider.prototype.dir = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.isLogEnabled)
            console.dir(message, optionalParams);
    };
    LoggerProvider.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.isLogEnabled)
            console.error(message, optionalParams);
    };
    LoggerProvider.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.isLogEnabled)
            console.warn(message, optionalParams);
    };
    LoggerProvider.prototype.table = function () {
        var res = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            res[_i] = arguments[_i];
        }
        if (this.isLogEnabled)
            console.table(res);
    };
    LoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoggerProvider);
    return LoggerProvider;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_User__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service_user_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_list_todo_list__ = __webpack_require__(90);
/**
 * @author malisahin
 * @since 2018-02-12
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var UserInfo = (function () {
    function UserInfo() {
        this.userCode = "";
        this.password = "";
    }
    return UserInfo;
}());
var LoginPage = (function () {
    function LoginPage(nav, util, logger, userService, loginProvider) {
        this.nav = nav;
        this.util = util;
        this.logger = logger;
        this.userService = userService;
        this.loginProvider = loginProvider;
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.showPassword = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__entities_User__["a" /* User */]();
        this.user.email = 'ali@ali.com';
        this.user.password = 'Shn123';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.logger.info("Login Page ionViewDidLoad");
    };
    LoginPage.prototype.login = function () {
        this.validateUser();
        this.saveUserInfo();
        if (this.isUserValid)
            this.loginProvider.auth(this.user)
                .subscribe(this.registerSuccess.bind(this), this.registerError.bind(this), this.registerComplete.bind(this));
    };
    LoginPage.prototype.registerSuccess = function (result) {
        this.logger.success(result);
        this.userService.saveUser(result.objects[0]);
        this.route();
    };
    LoginPage.prototype.registerError = function (err) {
        this.util.error(err.error.errorMessages[0]);
        this.logger.error(err.error.errorMessages[0]);
    };
    LoginPage.prototype.registerComplete = function () {
        this.logger.info("Complete");
    };
    LoginPage.prototype.route = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__todo_list_todo_list__["a" /* TodoListPage */]);
    };
    LoginPage.prototype.validateUser = function () {
        if (this.util.isEmpty(this.user.email)) {
            this.util.error("Email field is empty");
            this.isUserValid = false;
            return;
        }
        if (!this.util.mailRegex().test(this.user.email)) {
            this.util.error("Email format is wrong");
            this.isUserValid = false;
            return;
        }
        if (this.util.isEmpty(this.user.password)) {
            this.util.error("Password field is empty");
            this.isUserValid = false;
            return;
        }
        if (!this.util.passwordRegex().test(this.user.password)) {
            this.util.error("Password format is wrong. At least 6 char. 1-Capital, 1-lowercase, 1-number should be included.");
            this.isUserValid = false;
            return;
        }
        this.isUserValid = true;
    };
    LoginPage.prototype.downloadApplicationDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.showPassword ? "text" : "password";
    };
    LoginPage.prototype.checkLoginInfo = function () {
        if (this.util.isEmpty(this.user.email)) {
            this.util.warn("Email cannot be NULL");
            return false;
        }
        if (this.util.isEmpty(this.user.password)) {
            this.util.warn("Password cannot be NULL!!");
            return false;
        }
    };
    LoginPage.prototype.saveUserInfo = function () {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].USER_EMAIL, this.user.email);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].USER_PASSWORD, this.user.password);
    };
    LoginPage.prototype.startLoader = function () {
        this.util.loaderStart(false);
    };
    LoginPage.prototype.endLoader = function () {
        this.util.loaderEnd();
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/login/login.html"*/'<ion-header>\n\n\n\n</ion-header>\n\n<ion-content class="content-background login-content" padding>\n\n\n\n    <ion-grid>\n\n        <ion-row style=" margin-left: auto; margin-right: auto;">\n\n            <ion-col class="logo">\n\n                <ion-icon name="checkmark-circle"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n    <div class="login-box">\n\n\n\n        <ion-grid>\n\n\n\n            <ion-row>\n\n                <ion-col col-4></ion-col>\n\n                <ion-col col-4>\n\n                    <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="user.email"\n\n                               required></ion-input>\n\n                </ion-col>\n\n                <ion-col col-4></ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-4></ion-col>\n\n                <ion-col col-4>\n\n                    <ion-input [type]="passwordType" placeholder="Password" name="password" [(ngModel)]="user.password"\n\n                               required></ion-input>\n\n                </ion-col>\n\n\n\n                <ion-col col-4></ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-4></ion-col>\n\n                <ion-col col-4>\n\n                    <button ion-button class="submit-btn" (click)="login()" full type="submit" id="login-btn">\n\n                        Login\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col col-4></ion-col>\n\n\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-4></ion-col>\n\n                <ion-col col-2>\n\n                    <ion-checkbox [(ngModel)]="showPassword" name="showPassword"\n\n                                  (ionChange)=\'hideShowPassword()\'></ion-checkbox>\n\n                    <ion-label>Show Pasword</ion-label>\n\n                </ion-col>\n\n\n\n                <ion-col col-2>\n\n                    <button ion-button (click)="goRegisterPage()" round id="register-btn">\n\n                        Register\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-4></ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * @author malisahin
 * @email 13.12.2018
 */
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_user_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @since 14.09.2018
 */




var ApiProvider = (function () {
    function ApiProvider(util, userService) {
        this.util = util;
        this.userService = userService;
        //BASE_URL: string = "http://localhost:8080/";
        this.BASE_URL = "/";
        this.TODO_LIST_URL = this.BASE_URL + "todoList/";
        this.TODO_ITEM_URL = this.BASE_URL + "todoItem/";
    }
    ApiProvider.prototype.loginUrl = function (user) {
        return this.BASE_URL + "login/" + user.email + "/" + user.password;
    };
    ApiProvider.prototype.registerUrl = function () {
        return this.BASE_URL + "user/";
    };
    ApiProvider.prototype.findListUrl = function () {
        this.userId = this.userService.getUserId();
        return this.TODO_LIST_URL + this.userId + "/";
    };
    ApiProvider.prototype.updateListUrl = function () {
        return this.TODO_LIST_URL;
    };
    ApiProvider.prototype.deleteListUrl = function (todoId) {
        return this.TODO_LIST_URL + todoId + "/";
    };
    ApiProvider.prototype.saveListUrl = function () {
        return this.TODO_LIST_URL;
    };
    ApiProvider.prototype.getHeader = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
    };
    ApiProvider.prototype.findItemUrl = function (listId) {
        return this.TODO_ITEM_URL + "/" + listId + "/";
    };
    ApiProvider.prototype.updateItemUrl = function () {
        return this.TODO_ITEM_URL;
    };
    ApiProvider.prototype.deleteItemUrl = function (itemId) {
        return this.TODO_ITEM_URL + itemId + "/";
    };
    ApiProvider.prototype.saveItemUrl = function () {
        return this.TODO_ITEM_URL;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_3__user_service_user_service__["a" /* UserService */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_User__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @author mali.sahin
 * @since 13.12.2018
 */
var UserService = (function () {
    function UserService(util) {
        this.util = util;
        this.USER_KEY = "USER_KEY";
        console.log('Hello UserService Provider');
    }
    UserService.prototype.saveUser = function (user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    };
    UserService.prototype.getUser = function () {
        var localData = localStorage.getItem(this.USER_KEY);
        if (this.util.isNotEmpty(localData))
            return JSON.parse(localData);
        return new __WEBPACK_IMPORTED_MODULE_1__entities_User__["a" /* User */]();
    };
    UserService.prototype.getUserId = function () {
        return Number(this.getUser().id);
    };
    UserService.prototype.removeUser = function () {
        localStorage.removeItem(this.USER_KEY);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* UtilProvider */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_list_edit_todo_list_edit__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author malisahin
 * @since 14.09.2018
 */






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_list_edit_todo_list_edit__["a" /* TodoListEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_list_edit_todo_list_edit__["a" /* TodoListEditComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_list_edit_todo_list_edit__["a" /* TodoListEditComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anasayfa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_header_header__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * @author mali.sahin
 * @since 19.05.2018
 */
var Anasayfa = (function () {
    function Anasayfa(navCtrl, navParams, headerProvider, util, logger) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headerProvider = headerProvider;
        this.util = util;
        this.logger = logger;
        this.cagriSayisi = 0;
        this.duyuruSayisi = 0;
        this.uyariSayisi = 0;
        this.guncellemeSayisi = 10;
        this.logoPath = '';
        this.backGroundImage = this.util.getBackgroundImage();
        this.loadMesajSayilari();
    }
    Anasayfa.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Anasayfa.prototype.ionViewDidLoad = function () {
    };
    Anasayfa.prototype.sayfayaGit = function (page, param) {
        this.navCtrl.push(page, param);
    };
    Anasayfa.prototype.loadMesajSayilari = function () {
    };
    Anasayfa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-anasayfa',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/anasayfa/anasayfa.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true">\n        <icon-header #header></icon-header>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="home-content">\n\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n                <ion-card (click)="sayfayaGit(\'InnerDashboard\', {})">\n\n                    <ion-item>\n                        <div class="icon-box">\n                            <span><i class="fas fa-list-alt"></i></span>\n                        </div>\n                        <div class="text-box">\n                            <span>Denetim</span>\n                        </div>\n                    </ion-item>\n                    <div class="announcements">\n                        {{cagriSayisi}}\n                    </div>\n\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n    <ion-item float-left style="width: 40%">\n        <ion-label class="pull-left">MALI.SAHIN© 2018</ion-label>\n    </ion-item>\n    <ion-item float-right style="width: 60%">\n        <ion-label class="pull-right"></ion-label>\n    </ion-item>\n</ion-footer>'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/anasayfa/anasayfa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_header_header__["a" /* HeaderProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */]])
    ], Anasayfa);
    return Anasayfa;
}());

//# sourceMappingURL=anasayfa.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderProvider = (function () {
    function HeaderProvider(alert, logger, platform) {
        this.alert = alert;
        this.logger = logger;
        this.platform = platform;
    }
    HeaderProvider.prototype.closeApplicationConfirm = function (navController) {
        var alert = this.alert.create({
            title: "Are you sure to log out?",
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        navController.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
                    }
                }, {
                    text: "Cancel",
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    HeaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], HeaderProvider);
    return HeaderProvider;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_list_endpoint_todo_list_endpoint__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_todo_list_edit_todo_list_edit__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_item_todo_item__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * @author mali.sahin
 * @since 15.12.2018
 */
var TodoListPage = (function () {
    function TodoListPage(navCtrl, todoListEndpoint, modalController, util, navParams) {
        this.navCtrl = navCtrl;
        this.todoListEndpoint = todoListEndpoint;
        this.modalController = modalController;
        this.util = util;
        this.navParams = navParams;
        this.list = [];
        this.getList();
    }
    TodoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoListPage');
    };
    TodoListPage.prototype.getList = function () {
        var _this = this;
        var call = this.todoListEndpoint.list();
        call.subscribe(function (res) {
            _this.list = _this.util.processResult(res);
            console.log(res);
        }, function (err) {
            _this.util.processResult(err.error);
            console.error(err);
        }, function () {
            console.info("Completed");
        });
    };
    TodoListPage.prototype.goToDetail = function (todoList) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__todo_item_todo_item__["a" /* TodoItemPage */], { todoList: todoList });
        console.log(todoList);
    };
    TodoListPage.prototype.createNewOne = function () {
        var _this = this;
        var modal = this.modalController
            .create(__WEBPACK_IMPORTED_MODULE_3__components_todo_list_edit_todo_list_edit__["a" /* TodoListEditComponent */], {}, {
            cssClass: this.util.getSelectedTheme()
        });
        modal.onDidDismiss(function () {
            _this.getList();
        });
        modal.present();
    };
    TodoListPage.prototype.delete = function (todoList) {
        var call = this.todoListEndpoint.delete(todoList.id);
        this.onComplete(call);
    };
    TodoListPage.prototype.onComplete = function (call) {
        var _this = this;
        call.subscribe(function () {
            _this.getList();
        }, function (err) {
            _this.util.processResult(err.error);
            console.error(err);
        }, function () {
            console.info("Completed");
        });
    };
    TodoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-todo-list',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/todo-list/todo-list.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <icon-header #header></icon-header>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content-background login-content" padding>\n\n    <ion-title class="page-title">To Do Lists</ion-title>\n\n    <div style="width: 100%; height: 100px;">\n        <ion-grid>\n            <ion-col>\n                <button ion-button icon-only large (click)="createNewOne()">\n                    <ion-icon name="add-circle"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-grid>\n\n    </div>\n    <div style="height: 100%; width: 25%; float: left"></div>\n    <div style="height: 100%; width: 25%; float: left">\n\n        <ion-col col-4 *ngFor="let item of list">\n            <ion-card (click)="goToDetail(item)" class="card-list">\n\n                <ion-card-header>{{item.name}}</ion-card-header>\n                <ion-card-content>\n                    <ion-item class="p-0">\n                        <b class="card-header-ios">Description: </b> {{item.description}}\n                        <button ion-button icon-only danger (click)="changeCreateStatus()"\n                                style="float:right;  background-color: #f53d3d; width: 20%">\n                            <i class="fas fa-times"></i>\n                        </button>\n                    </ion-item>\n                </ion-card-content>\n\n\n            </ion-card>\n        </ion-col>\n    </div>\n\n    <div style="height: 100%; width: 25%; float: left"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/todo-list/todo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_todo_list_endpoint_todo_list_endpoint__["a" /* TodoListEndpoint */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TodoListPage);
    return TodoListPage;
}());

//# sourceMappingURL=todo-list.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListEndpoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_user_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @author mali.sahin
 * @since 13.12.2018
 */
var TodoListEndpoint = (function () {
    function TodoListEndpoint(api, userService, http) {
        this.api = api;
        this.userService = userService;
        this.http = http;
        this.header = this.api.getHeader();
    }
    TodoListEndpoint.prototype.save = function (todoList) {
        todoList.userId = this.userService.getUserId();
        this.url = this.api.saveListUrl();
        return this.http.post(this.url, todoList, { headers: this.header });
    };
    TodoListEndpoint.prototype.list = function () {
        var url = this.api.findListUrl();
        var header = this.api.getHeader();
        return this.http.get(url, { headers: header });
    };
    TodoListEndpoint.prototype.delete = function (todoId) {
        this.url = this.api.deleteListUrl(todoId);
        return this.http.delete(this.url, { headers: this.header });
    };
    TodoListEndpoint.prototype.update = function (todoList) {
        this.url = this.api.updateListUrl();
        return this.http.put(this.url, todoList, { headers: this.header });
    };
    TodoListEndpoint = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoListEndpoint);
    return TodoListEndpoint;
}());

//# sourceMappingURL=todo-list-endpoint.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_TodoItem__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todo_item_endpoint_todo_item_endpoint__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @author mali.sahin
 * @since 15.10.2018
 */
var TodoItemPage = (function () {
    function TodoItemPage(navCtrl, util, navParams, modalController, todoItemEndpoint) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.navParams = navParams;
        this.modalController = modalController;
        this.todoItemEndpoint = todoItemEndpoint;
        this.list = [];
        this.createStatus = false;
        this.createStatus = false;
        this.todoList = this.navParams.get("todoList");
        this.todoItem = new __WEBPACK_IMPORTED_MODULE_2__entities_TodoItem__["a" /* TodoItem */]();
        this.todoItem.listId = this.todoList.id;
        this.getList();
    }
    TodoItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoItemPage');
    };
    TodoItemPage.prototype.getList = function () {
        var _this = this;
        var call = this.todoItemEndpoint.list(this.todoList.id);
        call.subscribe(function (res) {
            _this.list = _this.util.processResult(res);
            console.log(res);
        }, function (err) {
            _this.util.processResult(err.error);
            console.error(err);
        }, function () {
            console.info("Completed");
        });
    };
    TodoItemPage.prototype.delete = function (todoItem) {
        var call = this.todoItemEndpoint.delete(todoItem.id);
        this.onComplete(call);
    };
    TodoItemPage.prototype.onComplete = function (call) {
        var _this = this;
        call.subscribe(function () {
            _this.getList();
        }, function (err) {
            _this.util.processResult(err.error);
            console.error(err);
        }, function () {
            console.info("Completed");
        });
    };
    TodoItemPage.prototype.changeCreateStatus = function () {
        this.createStatus = !this.createStatus;
    };
    TodoItemPage.prototype.createNewOne = function () {
        this.changeCreateStatus();
    };
    TodoItemPage.prototype.save = function () {
        if (this.util.isEmpty(this.todoItem.explanation)) {
            this.util.error("Explanation cannot be empty");
            return;
        }
        var call = this.todoItemEndpoint.save(this.todoItem);
        this.onComplete(call);
        this.changeCreateStatus();
    };
    TodoItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-todo-item',template:/*ion-inline-start:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/todo-item/todo-item.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <icon-header #header></icon-header>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content-background login-content" padding>\n\n    <ion-title class="page-title">{{todoList.description}}</ion-title>\n\n    <div style="width: 100%; height: 100px;">\n        <ion-grid>\n            <ion-col *ngIf="!createStatus">\n                <button ion-button icon-only large (click)="createNewOne()">\n                    <ion-icon name="add-circle"></ion-icon>\n                </button>\n            </ion-col>\n\n            <ion-row *ngIf="createStatus">\n                <ion-col col-3></ion-col>\n                <ion-col col-4>\n                    <ion-input [(ngModel)]="todoItem.explanation" placeholder="To Do"></ion-input>\n                </ion-col>\n                <ion-col col1>\n                    <button ion-button icon-only (click)="save()"\n                            style="background-color: #32db64; width: 50%">\n                        <i class="fas fa-check"></i>\n                    </button>\n                </ion-col>\n\n                <ion-col col1>\n                    <button ion-button icon-only danger (click)="changeCreateStatus()"\n                            style="background-color: #f53d3d; width: 50%">\n                        <i class="fas fa-times"></i>\n                    </button>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n    </div>\n    <div style="height: 100%; width: 25%; float: left"></div>\n    <div style="height: 100%; width: 25%; float: left">\n\n        <ion-col col-4 *ngFor="let item of list">\n            <ion-card class="card-list">\n\n                <ion-card-content>\n                    <ion-item class="p-0">\n                        <b class="card-header-ios">{{item.explanation}}</b>\n                        <button ion-button icon-only (click)="delete(item)" color="danger"\n                                style="float: right; background-color:#bd362f; width: 20%">\n                            <i class="fas fa-trash-alt" style="margin-right:0"></i>\n                        </button>\n                    </ion-item>\n\n                </ion-card-content>\n\n\n            </ion-card>\n        </ion-col>\n    </div>\n\n    <div style="height: 100%; width: 25%; float: left"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/mehmetalisahinogullari/Documents/PROJELER/todo-app-ionic/src/pages/todo-item/todo-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_todo_item_endpoint_todo_item_endpoint__["a" /* TodoItemEndpoint */]])
    ], TodoItemPage);
    return TodoItemPage;
}());

//# sourceMappingURL=todo-item.js.map

/***/ })

},[233]);
//# sourceMappingURL=main.js.map