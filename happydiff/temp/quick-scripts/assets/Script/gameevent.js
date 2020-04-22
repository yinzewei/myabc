(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameevent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '978b0PL2gpCXamb1bprdqhP', 'gameevent', __filename);
// Script/gameevent.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
            console.log("cc.Node.EventType.TOUCH_START called,", t.type);
            // this 函数里面的this,
            // 停止事件传递
            //t.stopPropagationImmediate();
            var _pos = t.getLocation();
            console.log("posx", _pos.x, "posY:", _pos.y);
            //var apos = this.node.con(_pos)
            //console.log("aposx",apos.x,"aposy",apos.y);
            var self = this;
            cc.loader.loadRes("miss", cc.Prefab, function (error, prefab) {
                if (error) {
                    cc.error(error);
                    return;
                }
                var tmiss = cc.instantiate(prefab);
                tmiss.parent = cc.find("Canvas");
                //console.log("abcposx",_pos.x,"posY:",_pos.y);
                console.log("tmiss.position+", tmiss.position);
                var pos = tmiss.convertToNodeSpaceAR(_pos);
                tmiss.position = pos; //new cc.Vec2(_pos.x,_pos.y);
                cc.find("Canvas").getComponent("WildScene").misstime();
                //tipAlert._alert.setScale(100);
                //tipAlert._alert.scaleTo(1000,1000);
                //tmiss.node.position = _pos;
            });
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (t) {
            console.log("cc.Node.EventType.TOUCH_MOVE called,", t.type);
            var _pos = t.getLocation();
            //console.log("posx",_pos.x,"posY:",_pos.y);
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function (t) {
            console.log("cc.Node.EventType.TOUCH_END called,", t.type);
            var _pos = t.getLocation();
            //console.log("posx",_pos.x,"posY:",_pos.y);
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (t) {
            // console.log("cc.Node.EventType.TOUCH_CANCEL called,", t.type);
            var _pos = t.getLocation();
            //console.log("posx",_pos.x,"posY:",_pos.y);
        }, this.node);
    };
    NewClass.prototype.start = function () {
        // this.node.convertToWorldSpace
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
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
        //# sourceMappingURL=gameevent.js.map
        