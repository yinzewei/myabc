// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.showWindows(this.node);
    }

    // update (dt) {}

    showWindows(nt:cc.Node)
    {
                // 执行弹出动画
        let dismiss = function () {
            if (!nt) {
                return;
            }
            let cbFadeOut = cc.callFunc(onFadeOutFinish, this);
            let actionFadeOut = cc.sequence(cc.moveBy(0.3, cc.p(0,300)),cc.fadeTo(0.3, 0),cbFadeOut);
            nt.runAction(actionFadeOut);
        };
        
        // 弹出动画完成回调
        let onFadeOutFinish = function () {
            onDestroy();
        };
        
        let onDestroy = function () {
            if (nt != null) {
                nt.removeFromParent();
                nt = null;
            }

        };

        dismiss();
 
    }
}
