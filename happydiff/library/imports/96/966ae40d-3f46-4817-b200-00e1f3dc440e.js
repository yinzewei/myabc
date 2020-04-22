"use strict";
cc._RF.push(module, '966aeQNP0ZIF7IAAOHz3EQO', 'alert');
// Script/alert.js

"use strict";

var tipAlert = {
    _alert: null, //prefab
    _animSpeed: 0.3 //弹窗动画速度
};

/**
 * @param tipStr
 * @param leftStr
 * @param rightStr
 * @param callback
 */
var show = function show(tipStr, leftStr, rightStr, callback) {
    cc.loader.loadRes("tipAlert", cc.Prefab, function (error, prefab) {
        if (error) {
            cc.error(error);
            return;
        }
        tipAlert._alert = cc.instantiate(prefab);
        cc.director.getScene().addChild(tipAlert._alert, 3);
        cc.find("tipAlert/content/top/tip").getComponent(cc.Label).string = tipStr;
        cc.find("tipAlert/content/bottom/left_btn/leftbtn").getComponent(cc.Label).string = leftStr;
        cc.find("tipAlert/content/bottom/right_btn/rightbtn").getComponent(cc.Label).string = rightStr;
        if (callback) {
            cc.find("tipAlert/content/bottom/left_btn").on('click', function (event) {
                dismiss();
                callback(leftStr);
            }, this);

            cc.find("tipAlert/content/bottom/right_btn").on('click', function (event) {
                dismiss();
                callback(rightStr);
            }, this);
        }
        //设置parent 为当前场景的Canvas ，position跟随父节点
        tipAlert._alert.parent = cc.find("Canvas");
        //tipAlert._alert.setScale(100);
        //tipAlert._alert.scaleTo(1000,1000);
        startFadeIn();
    });
};

// 执行弹进动画
var startFadeIn = function startFadeIn() {
    //动画
    tipAlert._alert.setScale(2);
    tipAlert._alert.opacity = 0;
    var cbFadeIn = cc.callFunc(onFadeInFinish, this);
    var actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 255), cc.scaleTo(tipAlert._animSpeed, 1.0)), cbFadeIn);
    tipAlert._alert.runAction(actionFadeIn);
};

// 弹进动画完成回调
var onFadeInFinish = function onFadeInFinish() {};

// 执行弹出动画
var dismiss = function dismiss() {
    if (!tipAlert._alert) {
        return;
    }
    var cbFadeOut = cc.callFunc(onFadeOutFinish, this);
    var actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 0), cc.scaleTo(tipAlert._animSpeed, 2.0)), cbFadeOut);
    tipAlert._alert.runAction(actionFadeOut);
};

// 弹出动画完成回调
var onFadeOutFinish = function onFadeOutFinish() {
    onDestroy();
};

var onDestroy = function onDestroy() {
    if (tipAlert._alert != null) {
        tipAlert._alert.removeFromParent();
        tipAlert._alert = null;
    }
};

module.exports = {
    show: show
};

cc._RF.pop();