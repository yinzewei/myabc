"use strict";
cc._RF.push(module, '33db1h5f8NIxrb1Mssp1yTh', 'money');
// Script/money.ts

// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.giftmoney = null;
        _this.time = null;
        _this.goldsum = null;
        _this.moneylabel = null;
        _this.moneybut = null;
        _this.moneybutlabel = null;
        _this.Gold = 0;
        _this.text = 'hello';
        _this.moneytime = 20;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    NewClass.prototype.start = function () {
        if (parseInt(cc.sys.localStorage.getItem('goldsum')) >= 0) {
            this.goldsum.string = cc.sys.localStorage.getItem('goldsum');
        }
        else {
            cc.sys.localStorage.setItem('goldsum', 0);
            this.goldsum.string = 0 + "";
        }
        this.moneylabel.string = "倒计时00：" + this.moneytime + "";
        if (parseInt(cc.sys.localStorage.getItem('moneynum')) >= 0) {
            this.goldsum.string = cc.sys.localStorage.getItem('moneynum');
        }
        else {
            cc.sys.localStorage.setItem('moneynum', 0);
            this.moneybutlabel.string = 0 + "";
        }
        //this.moneybutlabel.string = cc.sys.localStorage.getItem('moneynum');
        if (parseInt(this.moneybutlabel.string) > 0) {
            this.moneybut.interactable = true;
        }
        else {
            this.moneybut.interactable = false;
        }
        // (1)单个数据的存储
        // cc.sys.localStorage.setItem(key, value)
        // cc.sys.localStorage.getItem(key)
        //存储
        // cc.sys.localStorage.setItem('gold', 100);
        // //读取
        // var g = cc.sys.localStorage.getItem('gold');
    };
    NewClass.prototype.update = function (dt) {
        this.moneytime = this.moneytime - dt;
        var moneyp1 = Math.floor(this.moneytime);
        this.moneylabel.string = "倒计时00：" + moneyp1 + "";
        if (this.moneytime <= 0) {
            cc.log("money");
            this.moneytime = 20;
            var moneyp2 = parseInt(cc.sys.localStorage.getItem('moneynum')) + 1;
            this.moneybutlabel.string = moneyp2 + "";
            cc.sys.localStorage.setItem('moneynum', moneyp2);
        }
        if (parseInt(this.moneybutlabel.string) > 0) {
            this.moneybut.interactable = true;
        }
        else {
            this.moneybut.interactable = false;
        }
    };
    NewClass.prototype.timeShowUI = function (ti) {
        var time1 = Math.floor(ti / 60);
        var time2 = Math.floor(time1 / 60);
    };
    NewClass.prototype.clickMove = function (event, data) {
        switch (data) {
            case 'money':
                var moneyp4 = parseInt(cc.sys.localStorage.getItem('moneynum'));
                if (moneyp4 <= 0) {
                    this.moneybut.interactable = false;
                }
                else {
                    this.giftmoney.active = true;
                }
                break;
            case 'hide':
                var moneyp3 = parseInt(cc.sys.localStorage.getItem('moneynum')) - 1;
                cc.sys.localStorage.setItem('moneynum', moneyp3);
                this.moneybutlabel.string = moneyp3 + "";
                this.giftmoney.active = false;
                var goldsump1 = parseInt(cc.sys.localStorage.getItem('goldsum')) + 1;
                this.goldsum.string = goldsump1 + "";
                cc.sys.localStorage.setItem('goldsum', goldsump1);
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "giftmoney", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "time", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "goldsum", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "moneylabel", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "moneybut", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "moneybutlabel", void 0);
    __decorate([
        property
    ], NewClass.prototype, "Gold", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property
    ], NewClass.prototype, "moneytime", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();