(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/WildScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '90566rKBFVO6KShXz4TkLKj', 'WildScene', __filename);
// Script/WildScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WildScene = /** @class */ (function (_super) {
    __extends(WildScene, _super);
    function WildScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playHp = null;
        _this.montytx = null;
        _this.Fangdajing = null;
        _this.Rank = null;
        _this.signlabel = null;
        _this.signlabela1 = null;
        _this.signlabela2 = null;
        _this.signlabela3 = null;
        _this.signlabela4 = null;
        _this.signlabela5 = null;
        _this.signlabelb1 = null;
        _this.signlabelb2 = null;
        _this.signlabelb3 = null;
        _this.signlabelb4 = null;
        _this.signlabelb5 = null;
        _this.preguankal = null;
        _this.preguankal2 = null;
        _this.preguankal3 = null;
        _this.preguankal4 = null;
        _this.preguankal5 = null;
        _this.preguankal6 = null;
        _this.preguankal7 = null;
        _this.preguankal8 = null;
        _this.preguankal9 = null;
        _this.preguankal10 = null;
        _this.preguankal11 = null;
        _this.preguankal12 = null;
        _this.preguankal13 = null;
        _this.preguankal14 = null;
        _this.preguankal15 = null;
        _this.preguankal16 = null;
        _this.preguankal17 = null;
        _this.preguankal18 = null;
        _this.preguankal19 = null;
        _this.preguankal20 = null;
        _this.preguankal21 = null;
        _this.preguankal22 = null;
        _this.preguankal23 = null;
        _this.preguankal24 = null;
        _this.preguankal25 = null;
        _this.preguankal26 = null;
        _this.preguankal27 = null;
        _this.preguankal28 = null;
        _this.preguankal29 = null;
        _this.preguankal30 = null;
        _this.mainCamera = null;
        _this.pPlayer = null;
        _this.nodePlayer = null;
        _this.xzgk = null;
        _this.jindutiao = null; //进度条
        _this.timeTxt = null; //时间显示文本
        _this.tileMap = null;
        _this.sign1 = null;
        _this.sign2 = null;
        _this.jiesuan = null;
        _this._miniScreenWidth = 0;
        _this._miniScreenHeight = 0;
        _this._cameraMaxX = 0;
        _this._cameraMaxY = 0;
        _this._jinduTime = 60;
        _this.playHpaabb = 50;
        _this._startguanka = false;
        _this.playhphuifutime = 60;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    WildScene.prototype.start = function () {
        this.signlabela1 = cc.find("Canvas/ui/selectone/adianpng/1/a");
        this.signlabela2 = cc.find("Canvas/ui/selectone/adianpng/2/a");
        this.signlabela3 = cc.find("Canvas/ui/selectone/adianpng/3/a");
        this.signlabela4 = cc.find("Canvas/ui/selectone/adianpng/4/a");
        this.signlabela5 = cc.find("Canvas/ui/selectone/adianpng/5/a");
        this.signlabelb1 = cc.find("Canvas/ui/selectone/adianpng/1/b");
        this.signlabelb2 = cc.find("Canvas/ui/selectone/adianpng/2/b");
        this.signlabelb3 = cc.find("Canvas/ui/selectone/adianpng/3/b");
        this.signlabelb4 = cc.find("Canvas/ui/selectone/adianpng/4/b");
        this.signlabelb5 = cc.find("Canvas/ui/selectone/adianpng/5/b");
        this.nodePlayer.getChildByName("return").active = true;
        this.nodePlayer.getChildByName("fangda").active = false;
        this.nodePlayer.getChildByName("next").active = false;
        this.init();
        /*
           (1) 监听对应的触摸事件: 像引擎底层注册一个回掉函数，当有触摸事件发生的时候掉这个回掉函数;
           cc.Node.EventType.TOUCH_START: 触摸开始
           cc.Node.EventType.TOUCH_MOVE: 触摸移动
           cc.Node.EventType.TOUCH_END: 触摸结束, (物体内部结束)
           cc.Node.EventType.TOUCH_CANCEL: 触摸结束, (物体外部结束)
          
          (2) 回掉函数的格式  function(t)  --> cc.Touch对象触摸事件对象 {触摸信息，事件信息}
          call --> this, this指向谁就是这个target;你要绑那个对象作为你回掉函数的this, 可以为空
         function () {}.bind(this);
         */
        // 移除
        //this.node.off(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this);
        // 移除target上所有的注册事件
        //this.node.targetOff(this);
        //cc.Node.EventType.TOUCH_START();
        // cc.macro.FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX = 1;
        //cc.macro.ENABLE_TILEDMAP_CULLING = true;
        this.jindutiao.progress = 1;
        //摄像机边界
        // this._cameraMaxX = this.tileMap.node.width / 2 - cc.winSize.width / 2;
        // this._cameraMaxY = this.tileMap.node.height / 2 - cc.winSize.height / 2;
        //this.updateCameraPosition(this.nodePlayer.position);
        if (parseInt(cc.sys.localStorage.getItem('playhp')) >= 0) {
            this.playHp.string = cc.sys.localStorage.getItem('playhp') + "/50";
            this.playHpaabb = parseInt(cc.sys.localStorage.getItem('playhp'));
            //this.goldsum.string = cc.sys.localStorage.getItem('goldsum');
        }
        else {
            cc.sys.localStorage.setItem('playhp', 50);
            this.playHp.string = "50/50";
        }
    };
    WildScene.prototype.init = function () {
        this.signlabela1.active = false;
        this.signlabela2.active = false;
        this.signlabela3.active = false;
        this.signlabela4.active = false;
        this.signlabela5.active = false;
        this.signlabelb1.active = true;
        this.signlabelb2.active = true;
        this.signlabelb3.active = true;
        this.signlabelb4.active = true;
        this.signlabelb5.active = true;
    };
    WildScene.prototype.hide = function () {
        cc.find("Canvas/ui/selectone/adianpng/1/a").active = false;
        cc.find("Canvas/ui/selectone/adianpng/2/a").active = false;
        cc.find("Canvas/ui/selectone/adianpng/3/a").active = false;
        cc.find("Canvas/ui/selectone/adianpng/4/a").active = false;
        cc.find("Canvas/ui/selectone/adianpng/5/a").active = false;
        cc.find("Canvas/ui/selectone/adianpng/1/b").active = true;
        cc.find("Canvas/ui/selectone/adianpng/2/b").active = true;
        cc.find("Canvas/ui/selectone/adianpng/3/b").active = true;
        cc.find("Canvas/ui/selectone/adianpng/4/b").active = true;
        cc.find("Canvas/ui/selectone/adianpng/5/b").active = true;
    };
    WildScene.prototype.misstime = function () {
        if (this._jinduTime > 0) {
            this._jinduTime -= 1;
        }
    };
    WildScene.prototype.update = function (dt) {
        if (this._startguanka) {
            this._jinduTime -= dt;
            this.showJindu(this._jinduTime);
        }
        if (this._jinduTime <= 0) {
            this.nodePlayer.getChildByName("return").active = true;
            this.nodePlayer.getChildByName("fangda").active = false;
            this.nodePlayer.getChildByName("next").active = false;
            // this.node.getChildByName("return").active = true;
            // this.node.getChildByName("fangda").active = true;
            // this.node.getChildByName("next").active = true;
            // this.node.parent.getChildByName("return").active = true;
            // this.node.parent.getChildByName("fangda").active = true;
            // this.node.parent.getChildByName("next").active = true;
        }
        // this.updateCameraPosition(this.nodePlayer.position);
        this.playhphuifutime = this.playhphuifutime - dt;
        if (this.playhphuifutime <= 0) {
            this.playhphuifutime = 60;
            if (this.playHpaabb < 50) {
                this.playHpaabb = this.playHpaabb + 1;
                cc.sys.localStorage.setItem('playhp', this.playHpaabb);
                this.playHp.string = this.playHpaabb + "/50";
            }
        }
    };
    WildScene.prototype.OffTime = function () {
        this._startguanka = false;
    };
    WildScene.prototype.OnTime = function () {
        this._startguanka = true;
    };
    WildScene.prototype.clickMove = function (event, data) {
        //this.nodePlayer.stopAllActions();
        //let offset = 200;
        // let target = this.nodePlayer.position;
        switch (data) {
            case "0":
                this.init();
                this.nodePlayer.active = true;
                this._startguanka = true;
                if (this.nodePlayer.getChildByName("succuss")) {
                    this.nodePlayer.getChildByName("succuss").destroy();
                }
                var p1 = Math.floor(Math.random() * (31 - 1) + 1);
                this.suijiGuanKa(p1);
                // cc.instantiate(this.preguankal).parent = this.nodePlayer
                //target = target.add(cc.v2(0, offset));
                break;
            case "1":
                this.xzgk.active = true;
                // target = target.add(cc.v2(0, -offset));
                break;
            case "2":
                // target = target.add(cc.v2(-offset, 0));
                break;
            case "3":
                this.pPlayer.active = true;
                //target = target.add(cc.v2(offset, 0));
                break;
            case "4":
                //target = target.add(cc.v2(offset, 0));
                this._startguanka = false;
                this.nodePlayer.active = false;
                this._jinduTime = 60;
                this.jindutiao.progress = 1;
                this.sign1.active = false;
                this.sign2.active = false;
                this.jiesuan.active = false;
                this.node.getChildByName("lose").active = false;
                this.node.getChildByName("sucusess").active = false;
                break;
            case "7":
                this.init();
                this.signlabel.string = "OOOOO";
                this.nodePlayer.active = true;
                this._startguanka = true;
                this._jinduTime = 60;
                this.jindutiao.progress = 1;
                var p2 = Math.floor(Math.random() * (31 - 1) + 1);
                this.suijiGuanKa(p2);
                this.nodePlayer.getChildByName("return").active = true;
                this.nodePlayer.getChildByName("fangda").active = false;
                this.nodePlayer.getChildByName("next").active = false;
                this.node.getChildByName("lose").active = false;
                this.node.getChildByName("sucusess").active = false;
                this.nodePlayer.getChildByName("succuss").destroy();
                // this.jindutiao.progress = 1;
                // let p2 = Math.floor(Math.random()*(9-1)+1);
                // this.suijiGuanKa(p2);
                //cc.instantiate(this.preguankal).parent = this.nodePlayer
                //target = target.add(cc.v2(0, offset));
                break;
            case "8":
                //this.init();
                var aprefab = this.nodePlayer.getChildByName("succuss").getComponent('guankaprefab1');
                aprefab.init();
                aprefab.SetSign();
                //cc.log("aaaaaaaaaaaaaaaaaaaaaa",aprefab);
                this.hide();
                this.playHpaabb = this.playHpaabb - 5;
                this.playHp.string = this.playHpaabb + "/50";
                cc.sys.localStorage.setItem('playhp', this.playHpaabb);
                this.nodePlayer.active = true;
                this._startguanka = true;
                this._jinduTime = 60;
                this.jindutiao.progress = 1;
                this.nodePlayer.getChildByName("return").active = true;
                this.nodePlayer.getChildByName("fangda").active = false;
                this.nodePlayer.getChildByName("next").active = false;
                this.node.getChildByName("lose").active = false;
                this.node.getChildByName("sucusess").active = false;
                this.init();
                break;
            case "9":
                //this.init();
                this.nodePlayer.active = true;
                this._startguanka = true;
                this._jinduTime = 90;
                this.jindutiao.progress = 1;
                this.nodePlayer.getChildByName("return").active = true;
                this.nodePlayer.getChildByName("fangda").active = false;
                this.nodePlayer.getChildByName("next").active = false;
                this.node.getChildByName("lose").active = false;
                this.node.getChildByName("sucusess").active = false;
                break;
            case "10":
                this.Rank.active = false;
                break;
            case "11":
                this.Rank.active = true;
                break;
            case "12":
                this.Fangdajing.active = true;
                break;
            case "13":
                this.Fangdajing.active = false;
                break;
            case "14":
                this.montytx.active = true;
                break;
            case "15":
                this.montytx.active = false;
                break;
            case "100":
                this.sign1.active = true;
                this.sign2.active = true;
                this.jiesuan.active = true;
                break;
            case "101":
                this.sign1.active = true;
                this.sign2.active = true;
                this.jiesuan.active = true;
                break;
            case "102":
                cc.log("aaaa102");
                break;
            case "103":
                cc.log("aaaa103");
                break;
            case "104":
                this.xzgk.active = false;
                break;
            case "1001":
                this.pPlayer.active = false;
                break;
        }
        // this.nodePlayer.angle = 90 - cc.misc.radiansToDegrees(target.sub(this.nodePlayer.position).signAngle(cc.v2(1,0)));
        // this.nodePlayer.runAction(cc.moveTo(1, target));
    };
    WildScene.prototype.showJindu = function (ti) {
        var tpy = ti / 60;
        //cc.log("aaaaaaaaaaa"+ti/60);
        this.jindutiao.progress = tpy;
        var tp = Math.floor(ti);
        if (tp <= 0) {
            this.timeTxt.string = "00:00";
            this.node.getChildByName("lose").active = true;
            this.OffTime();
        }
        else {
            this.timeTxt.string = "00:" + tp + "";
        }
    };
    WildScene.prototype.suijiGuanKa = function (ti) {
        switch (ti) {
            case 1:
                cc.instantiate(this.preguankal).parent = this.nodePlayer;
                break;
            case 2:
                cc.instantiate(this.preguankal2).parent = this.nodePlayer;
                break;
            case 3:
                cc.instantiate(this.preguankal3).parent = this.nodePlayer;
                break;
            case 4:
                cc.instantiate(this.preguankal4).parent = this.nodePlayer;
                break;
            case 5:
                cc.instantiate(this.preguankal5).parent = this.nodePlayer;
                break;
            case 6:
                cc.instantiate(this.preguankal6).parent = this.nodePlayer;
                break;
            case 7:
                cc.instantiate(this.preguankal7).parent = this.nodePlayer;
                break;
            case 8:
                cc.instantiate(this.preguankal8).parent = this.nodePlayer;
                break;
            case 9:
                cc.instantiate(this.preguankal9).parent = this.nodePlayer;
                break;
            case 10:
                cc.instantiate(this.preguankal10).parent = this.nodePlayer;
                break;
            case 11:
                cc.instantiate(this.preguankal11).parent = this.nodePlayer;
                break;
            case 12:
                cc.instantiate(this.preguankal12).parent = this.nodePlayer;
                break;
            case 13:
                cc.instantiate(this.preguankal13).parent = this.nodePlayer;
                break;
            case 14:
                cc.instantiate(this.preguankal14).parent = this.nodePlayer;
                break;
            case 15:
                cc.instantiate(this.preguankal15).parent = this.nodePlayer;
                break;
            case 16:
                cc.instantiate(this.preguankal16).parent = this.nodePlayer;
                break;
            case 17:
                cc.instantiate(this.preguankal17).parent = this.nodePlayer;
                break;
            case 18:
                cc.instantiate(this.preguankal18).parent = this.nodePlayer;
                break;
            case 19:
                cc.instantiate(this.preguankal19).parent = this.nodePlayer;
                break;
            case 20:
                cc.instantiate(this.preguankal20).parent = this.nodePlayer;
                break;
            case 21:
                cc.instantiate(this.preguankal21).parent = this.nodePlayer;
                break;
            case 22:
                cc.instantiate(this.preguankal22).parent = this.nodePlayer;
                break;
            case 23:
                cc.instantiate(this.preguankal23).parent = this.nodePlayer;
                break;
            case 24:
                cc.instantiate(this.preguankal24).parent = this.nodePlayer;
                break;
            case 25:
                cc.instantiate(this.preguankal25).parent = this.nodePlayer;
                break;
            case 26:
                cc.instantiate(this.preguankal26).parent = this.nodePlayer;
                break;
            case 27:
                cc.instantiate(this.preguankal27).parent = this.nodePlayer;
                break;
            case 28:
                cc.instantiate(this.preguankal28).parent = this.nodePlayer;
                break;
            case 29:
                cc.instantiate(this.preguankal29).parent = this.nodePlayer;
                break;
            case 30:
                cc.instantiate(this.preguankal30).parent = this.nodePlayer;
                break;
        }
    };
    WildScene.prototype.updateCameraPosition = function (target) {
        // if (target.x > this._cameraMaxX) {
        //     target.x = this._cameraMaxX;
        // }
        // if (target.x < -this._cameraMaxX) {
        //     target.x = -this._cameraMaxX;
        // }
        // if (target.y > this._cameraMaxY) {
        //     target.y = this._cameraMaxY;
        // }
        // if (target.y < -this._cameraMaxY) {
        //     target.y = -this._cameraMaxY;
        // }
        this.mainCamera.node.position = target;
    };
    __decorate([
        property(cc.Label)
    ], WildScene.prototype, "playHp", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "montytx", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "Fangdajing", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "Rank", void 0);
    __decorate([
        property(cc.Label)
    ], WildScene.prototype, "signlabel", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabela1", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabela2", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabela3", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabela4", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabela5", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabelb1", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabelb2", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabelb3", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabelb4", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "signlabelb5", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal2", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal3", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal4", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal5", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal6", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal7", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal8", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal9", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal10", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal11", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal12", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal13", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal14", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal15", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal16", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal17", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal18", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal19", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal20", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal21", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal22", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal23", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal24", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal25", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal26", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal27", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal28", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal29", void 0);
    __decorate([
        property(cc.Prefab)
    ], WildScene.prototype, "preguankal30", void 0);
    __decorate([
        property(cc.Camera)
    ], WildScene.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "pPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "nodePlayer", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "xzgk", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], WildScene.prototype, "jindutiao", void 0);
    __decorate([
        property(cc.Label)
    ], WildScene.prototype, "timeTxt", void 0);
    __decorate([
        property(cc.TiledMap)
    ], WildScene.prototype, "tileMap", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "sign1", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "sign2", void 0);
    __decorate([
        property(cc.Node)
    ], WildScene.prototype, "jiesuan", void 0);
    WildScene = __decorate([
        ccclass
    ], WildScene);
    return WildScene;
}(cc.Component));
exports.default = WildScene;

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
        //# sourceMappingURL=WildScene.js.map
        