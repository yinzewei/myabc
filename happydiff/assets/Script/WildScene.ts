const { ccclass, property } = cc._decorator;

@ccclass
export default class WildScene extends cc.Component {

    @property(cc.Label)
    playHp: cc.Label = null;

    @property(cc.Node)
    montytx: cc.Node = null;

    @property(cc.Node)
    Fangdajing: cc.Node = null;

    @property(cc.Node)
    Rank: cc.Node = null;

    @property(cc.Label)
    signlabel: cc.Label = null;

    @property(cc.Node)
    signlabela1: cc.Node = null;
    @property(cc.Node)
    signlabela2: cc.Node = null;
    @property(cc.Node)
    signlabela3: cc.Node = null;
    @property(cc.Node)
    signlabela4: cc.Node = null;
    @property(cc.Node)
    signlabela5: cc.Node = null;

    @property(cc.Node)
    signlabelb1: cc.Node = null;
    @property(cc.Node)
    signlabelb2: cc.Node = null;
    @property(cc.Node)
    signlabelb3: cc.Node = null;
    @property(cc.Node)
    signlabelb4: cc.Node = null;
    @property(cc.Node)
    signlabelb5: cc.Node = null;

    @property(cc.Prefab)
    preguankal: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal2: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal3: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal4: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal5: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal6: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal7: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal8: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal9: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal10: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal11: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal12: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal13: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal14: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal15: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal16: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal17: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal18: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal19: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal20: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal21: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal22: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal23: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal24: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal25: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal26: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal27: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal28: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal29: cc.Prefab = null;

    @property(cc.Prefab)
    preguankal30: cc.Prefab = null;

    @property(cc.Camera)
    mainCamera: cc.Camera = null;

    @property(cc.Node)
    pPlayer: cc.Node = null;

    @property(cc.Node)
    nodePlayer: cc.Node = null;

    @property(cc.Node)
    xzgk: cc.Node = null;

    @property(cc.ProgressBar)
    jindutiao: cc.ProgressBar = null;//进度条

    @property(cc.Label)
    timeTxt: cc.Label = null;//时间显示文本

    @property(cc.TiledMap)
    tileMap: cc.TiledMap = null;

    @property(cc.Node)
    sign1: cc.Node = null;

    @property(cc.Node)
    sign2: cc.Node = null;

    @property(cc.Node)
    jiesuan: cc.Node = null;

    _miniScreenWidth: number = 0;
    _miniScreenHeight: number = 0;

    _cameraMaxX: number = 0;
    _cameraMaxY: number = 0;

    _jinduTime: number = 60;

    playHpaabb: number = 50;

    _startguanka:boolean = false;


    playhphuifutime:number = 60;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.signlabela1 = cc.find("Canvas/ui/selectone/adianpng/1/a")
        this.signlabela2 = cc.find("Canvas/ui/selectone/adianpng/2/a")
        this.signlabela3 = cc.find("Canvas/ui/selectone/adianpng/3/a")
        this.signlabela4 = cc.find("Canvas/ui/selectone/adianpng/4/a")
        this.signlabela5 = cc.find("Canvas/ui/selectone/adianpng/5/a")
        this.signlabelb1 = cc.find("Canvas/ui/selectone/adianpng/1/b")
        this.signlabelb2 = cc.find("Canvas/ui/selectone/adianpng/2/b")
        this.signlabelb3 = cc.find("Canvas/ui/selectone/adianpng/3/b")
        this.signlabelb4 = cc.find("Canvas/ui/selectone/adianpng/4/b")
        this.signlabelb5 = cc.find("Canvas/ui/selectone/adianpng/5/b")


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
        if(parseInt(cc.sys.localStorage.getItem('playhp')) >= 0)
        {
            this.playHp.string = cc.sys.localStorage.getItem('playhp')+"/50";
            this.playHpaabb = parseInt(cc.sys.localStorage.getItem('playhp'))
            //this.goldsum.string = cc.sys.localStorage.getItem('goldsum');
        }else{
            cc.sys.localStorage.setItem('playhp',50);
            this.playHp.string = "50/50";
        }
        

        
    }

    init()
    {
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
    }

    hide()
    {
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
    }

    public misstime()
    {
        if(this._jinduTime>0)
        {
            this._jinduTime -= 1; 
        }
    }

    update(dt)
    {
       if(this._startguanka)
        {
        this._jinduTime -= dt;
        
        this.showJindu(this._jinduTime);
        }

        if(this._jinduTime <=0)
        {
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
       if(this.playhphuifutime <=0)
       {
        this.playhphuifutime = 60;
        if(this.playHpaabb < 50)
        {
        this.playHpaabb = this.playHpaabb + 1;
        cc.sys.localStorage.setItem('playhp',this.playHpaabb );
        this.playHp.string = this.playHpaabb + "/50";
        }
       }
    }
    public OffTime()
    {
        this._startguanka = false;
    }

    public OnTime()
    {
        this._startguanka = true;
    }

    clickMove(event, data) {
        //this.nodePlayer.stopAllActions();

        //let offset = 200;
       // let target = this.nodePlayer.position;
        switch (data) {
            case "0":
                this.init();
                this.nodePlayer.active = true;
                this._startguanka = true;
                if(this.nodePlayer.getChildByName("succuss"))
                {
                    this.nodePlayer.getChildByName("succuss").destroy();
                }
                let p1 = Math.floor(Math.random()*(31-1)+1);
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
                    this.signlabel.string = "OOOOO"
                    this.nodePlayer.active = true;
                    this._startguanka = true;
                    this._jinduTime = 60;
                    this.jindutiao.progress = 1;
                    let p2 = Math.floor(Math.random()*(31-1)+1);
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
                var aprefab =  this.nodePlayer.getChildByName("succuss").getComponent('guankaprefab1')
                aprefab.init()
                aprefab.SetSign();
                //cc.log("aaaaaaaaaaaaaaaaaaaaaa",aprefab);
                this.hide();
                
                this.playHpaabb = this.playHpaabb - 5;
                this.playHp.string = this.playHpaabb+"/50";
                cc.sys.localStorage.setItem('playhp',this.playHpaabb);
               
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
    }

    showJindu( ti: number ) {
        let tpy = ti/60;
        //cc.log("aaaaaaaaaaa"+ti/60);
        this.jindutiao.progress = tpy;
        let tp = Math.floor(ti);
        if(tp<=0)
        {
            this.timeTxt.string = "00:00";
            this.node.getChildByName("lose").active = true;
            this.OffTime();
        }else{
        this.timeTxt.string = "00:" + tp + "";
        }
    }

    suijiGuanKa(ti:number){
        switch(ti)
        {
            case 1:
                cc.instantiate(this.preguankal).parent = this.nodePlayer
                break;
            case 2:
                cc.instantiate(this.preguankal2).parent = this.nodePlayer
                break;
            case 3:
                cc.instantiate(this.preguankal3).parent = this.nodePlayer
                break;
            case 4:
                cc.instantiate(this.preguankal4).parent = this.nodePlayer
                break;
            case 5:
                cc.instantiate(this.preguankal5).parent = this.nodePlayer
                break;
            case 6:
                cc.instantiate(this.preguankal6).parent = this.nodePlayer
                break;
            case 7:
                cc.instantiate(this.preguankal7).parent = this.nodePlayer
                break;
            case 8:
                cc.instantiate(this.preguankal8).parent = this.nodePlayer
                break;
                case 9:
                    cc.instantiate(this.preguankal9).parent = this.nodePlayer
                    break;
                    case 10:
                        cc.instantiate(this.preguankal10).parent = this.nodePlayer
                        break;
                        case 11:
                            cc.instantiate(this.preguankal11).parent = this.nodePlayer
                            break;
                            case 12:
                                cc.instantiate(this.preguankal12).parent = this.nodePlayer
                                break;
                                case 13:
                                    cc.instantiate(this.preguankal13).parent = this.nodePlayer
                                    break;
                                    case 14:
                                        cc.instantiate(this.preguankal14).parent = this.nodePlayer
                                        break;
                                        case 15:
                                            cc.instantiate(this.preguankal15).parent = this.nodePlayer
                                            break;
                                            case 16:
                                                cc.instantiate(this.preguankal16).parent = this.nodePlayer
                                                break;
                                                case 17:
                                                    cc.instantiate(this.preguankal17).parent = this.nodePlayer
                                                    break;
                                                    case 18:
                                                        cc.instantiate(this.preguankal18).parent = this.nodePlayer
                                                        break;
                                                        case 19:
                                                            cc.instantiate(this.preguankal19).parent = this.nodePlayer
                                                            break;
                                                            case 20:
                                                                cc.instantiate(this.preguankal20).parent = this.nodePlayer
                                                                break;
                                                                case 21:
                                                            cc.instantiate(this.preguankal21).parent = this.nodePlayer
                                                            break;
                                                            case 22:
                                                            cc.instantiate(this.preguankal22).parent = this.nodePlayer
                                                            break;
                                                            case 23:
                                                            cc.instantiate(this.preguankal23).parent = this.nodePlayer
                                                            break;
                                                            case 24:
                                                            cc.instantiate(this.preguankal24).parent = this.nodePlayer
                                                            break;
                                                            case 25:
                                                            cc.instantiate(this.preguankal25).parent = this.nodePlayer
                                                            break;
                                                            case 26:
                                                            cc.instantiate(this.preguankal26).parent = this.nodePlayer
                                                            break;
                                                            case 27:
                                                            cc.instantiate(this.preguankal27).parent = this.nodePlayer
                                                            break;
                                                            case 28:
                                                            cc.instantiate(this.preguankal28).parent = this.nodePlayer
                                                            break;
                                                            case 29:
                                                            cc.instantiate(this.preguankal29).parent = this.nodePlayer
                                                            break;
                                                            case 30:
                                                            cc.instantiate(this.preguankal30).parent = this.nodePlayer
                                                            break;
        }
    }

    updateCameraPosition(target: cc.Vec2) {
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
    }

   


}