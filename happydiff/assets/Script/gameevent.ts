// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,
            function(t) {
               console.log("cc.Node.EventType.TOUCH_START called,", t.type);
               
               // this 函数里面的this,
                // 停止事件传递
                //t.stopPropagationImmediate();
                var _pos = t.getLocation();
                console.log("posx",_pos.x,"posY:",_pos.y);
                //var apos = this.node.con(_pos)
                //console.log("aposx",apos.x,"aposy",apos.y);
                var self = this;
                cc.loader.loadRes("miss",cc.Prefab, function (error, prefab){
                    if (error){
                        cc.error(error);
                        return;
                    }
                    var tmiss = cc.instantiate(prefab);
                   
                  
                    tmiss.parent = cc.find("Canvas");
                    //console.log("abcposx",_pos.x,"posY:",_pos.y);
                    console.log("tmiss.position+",tmiss.position);
                   
                    var pos =  tmiss.convertToNodeSpaceAR(_pos);
                    tmiss.position = pos;//new cc.Vec2(_pos.x,_pos.y);
                    cc.find("Canvas").getComponent("WildScene").misstime();
                    //tipAlert._alert.setScale(100);
                    //tipAlert._alert.scaleTo(1000,1000);
                    //tmiss.node.position = _pos;
                    
                });

            }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t){
           console.log("cc.Node.EventType.TOUCH_MOVE called,", t.type);
           var _pos = t.getLocation();
           //console.log("posx",_pos.x,"posY:",_pos.y);
        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_END,
            function(t) {
                console.log("cc.Node.EventType.TOUCH_END called,", t.type);
                var _pos = t.getLocation();
                //console.log("posx",_pos.x,"posY:",_pos.y);
            },
            this.node);

       this.node.on(cc.Node.EventType.TOUCH_CANCEL,
            function(t) {
               // console.log("cc.Node.EventType.TOUCH_CANCEL called,", t.type);
                
                var _pos = t.getLocation();
                //console.log("posx",_pos.x,"posY:",_pos.y);
            },
           this.node);
    }

    start () {
       // this.node.convertToWorldSpace
    }

  

    // update (dt) {}
}
