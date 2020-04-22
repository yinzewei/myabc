(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/guankaprefab.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea8e81B90dNFJasTCDK3dSW', 'guankaprefab', __filename);
// Script/guankaprefab.ts

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
        _this.label = null;
        _this.sign1 = null;
        _this.sign2 = null;
        _this.sign3 = null;
        _this.sign4 = null;
        _this.sign5 = null;
        _this.sign6 = null;
        _this.sign7 = null;
        _this.png1 = null;
        _this.png2 = null;
        _this.png3 = null;
        _this.png4 = null;
        _this.png5 = null;
        _this.png6 = null;
        _this.png7 = null;
        _this.pngb1 = null;
        _this.pngb2 = null;
        _this.pngb3 = null;
        _this.pngb4 = null;
        _this.pngb5 = null;
        _this.pngb6 = null;
        _this.pngb7 = null;
        _this.signa1 = null;
        _this.signa2 = null;
        _this.signa3 = null;
        _this.signa4 = null;
        _this.signa5 = null;
        _this.signa6 = null;
        _this.signa7 = null;
        _this.signb1 = null;
        _this.signb2 = null;
        _this.signb3 = null;
        _this.signb4 = null;
        _this.signb5 = null;
        _this.signb6 = null;
        _this.signb7 = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {},
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    NewClass.prototype.start = function () {
        this.sign1.active = false;
        this.sign2.active = false;
        this.sign3.active = false;
        this.sign4.active = false;
        this.sign5.active = false;
        this.sign6.active = false;
        this.sign7.active = false;
        this.signa1.active = false;
        this.signa2.active = false;
        this.signa3.active = false;
        this.signa4.active = false;
        this.signa5.active = false;
        this.signa6.active = false;
        this.signa7.active = false;
        this.RandButong();
    };
    NewClass.prototype.RandButong = function () {
        var p1 = Math.floor(Math.random() * (8 - 1) + 1);
        var p2 = 101;
        var p3 = 102;
        var p4 = 103;
        var p5 = 104;
        switch (p1) {
            case 1:
                p2 = p1 + 1;
                p3 = p2 + 1;
                p4 = p3 + 1;
                p5 = p4 + 1;
                break;
            case 2:
                p2 = p1 + 1;
                p3 = p2 + 1;
                p4 = p3 + 1;
                p5 = p4 + 1;
                break;
            case 3:
                p2 = p1 + 1;
                p3 = p2 + 1;
                p4 = p3 + 1;
                p5 = p4 + 1;
                break;
            case 4:
                p2 = p1 + 1;
                p3 = p2 + 1;
                p4 = p3 + 1;
                p5 = 1;
                break;
            case 5:
                p2 = p1 + 1;
                p3 = p2 + 1;
                p4 = 1;
                p5 = 2;
                break;
            case 6:
                p2 = p1 + 1;
                p3 = 1;
                p4 = 2;
                p5 = 3;
                break;
            case 7:
                p2 = 1;
                p3 = 2;
                p4 = 3;
                p5 = 4;
                break;
        }
        cc.log("p1", p1);
        cc.log("p1", p2);
        cc.log("p1", p3);
        cc.log("p1", p4);
        cc.log("p1", p5);
        this.showUi(p1);
        this.showUi(p2);
        this.showUi(p3);
        this.showUi(p4);
        this.showUi(p5);
    };
    NewClass.prototype.showUi = function (v) {
        switch (v) {
            case 1:
                this.sign1.active = true;
                this.signa1.active = true;
                break;
            case 2:
                this.sign2.active = true;
                this.signa2.active = true;
                break;
            case 3:
                this.sign3.active = true;
                this.signa3.active = true;
                break;
            case 4:
                this.sign4.active = true;
                this.signa4.active = true;
                break;
            case 5:
                this.sign5.active = true;
                this.signa5.active = true;
                break;
            case 6:
                this.sign6.active = true;
                this.signa6.active = true;
                break;
            case 7:
                this.sign7.active = true;
                this.signa7.active = true;
                break;
        }
    };
    NewClass.prototype.clickMove = function (event, data) {
        switch (data) {
            case "1":
                this.png1.active = true;
                this.pngb1.active = true;
                break;
            case "2":
                this.png2.active = true;
                this.pngb2.active = true;
                break;
            case "3":
                this.png3.active = true;
                this.pngb3.active = true;
                break;
            case "4":
                this.png4.active = true;
                this.pngb4.active = true;
                break;
            case "5":
                this.png5.active = true;
                this.pngb5.active = true;
                break;
            case "6":
                this.png6.active = true;
                this.pngb6.active = true;
                break;
            case "7":
                this.png7.active = true;
                this.pngb7.active = true;
                break;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sign7", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "png7", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pngb7", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signa7", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb5", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb6", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "signb7", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=guankaprefab.js.map
        