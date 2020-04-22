// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    sign1: cc.Node = null;

    @property(cc.Node)
    sign2: cc.Node = null;

    @property(cc.Node)
    sign3: cc.Node = null;

    @property(cc.Node)
    sign4: cc.Node = null;

    @property(cc.Node)
    sign5: cc.Node = null;

    @property(cc.Node)
    sign6: cc.Node = null;

    @property(cc.Node)
    sign7: cc.Node = null;

    @property(cc.Node)
    sign8: cc.Node = null;

    @property(cc.Node)
    sign9: cc.Node = null;

    @property(cc.Node)
    sign10: cc.Node = null;

    @property(cc.Node)
    png1: cc.Node = null;

    @property(cc.Node)
    png2: cc.Node = null;

    @property(cc.Node)
    png3: cc.Node = null;

    @property(cc.Node)
    png4: cc.Node = null;

    @property(cc.Node)
    png5: cc.Node = null;

    @property(cc.Node)
    png6: cc.Node = null;

    @property(cc.Node)
    png7: cc.Node = null;

    @property(cc.Node)
    png8: cc.Node = null;

    @property(cc.Node)
    png9: cc.Node = null;

    @property(cc.Node)
    png10: cc.Node = null;

    @property(cc.Node)
    pngb1: cc.Node = null;

    @property(cc.Node)
    pngb2: cc.Node = null;

    @property(cc.Node)
    pngb3: cc.Node = null;

    @property(cc.Node)
    pngb4: cc.Node = null;

    @property(cc.Node)
    pngb5: cc.Node = null;

    @property(cc.Node)
    pngb6: cc.Node = null;

    @property(cc.Node)
    pngb7: cc.Node = null;

    @property(cc.Node)
    pngb8: cc.Node = null;

    @property(cc.Node)
    pngb9: cc.Node = null;

    @property(cc.Node)
    pngb10: cc.Node = null;

    @property(cc.Node)
    signa1: cc.Node = null;

    @property(cc.Node)
    signa2: cc.Node = null;

    @property(cc.Node)
    signa3: cc.Node = null;

    @property(cc.Node)
    signa4: cc.Node = null;

    @property(cc.Node)
    signa5: cc.Node = null;

    @property(cc.Node)
    signa6: cc.Node = null;

    @property(cc.Node)
    signa7: cc.Node = null;

    @property(cc.Node)
    signa8: cc.Node = null;

    @property(cc.Node)
    signa9: cc.Node = null;

    @property(cc.Node)
    signa10: cc.Node = null;


    @property(cc.Node)
    signb1: cc.Node = null;

    @property(cc.Node)
    signb2: cc.Node = null;

    @property(cc.Node)
    signb3: cc.Node = null;

    @property(cc.Node)
    signb4: cc.Node = null;

    @property(cc.Node)
    signb5: cc.Node = null;

    @property(cc.Node)
    signb6: cc.Node = null;

    @property(cc.Node)
    signb7: cc.Node = null;

    @property(cc.Node)
    signb8: cc.Node = null;

    @property(cc.Node)
    signb9: cc.Node = null;

    @property(cc.Node)
    signb10: cc.Node = null;

    @property
    text: string = 'hello';

    @property
    sign: number = 0;

    @property
    private ap1: number = 0;
    @property
    private ap2: number = 0;
    @property
    private ap3: number = 0;
    @property
    private ap4: number = 0;
    @property
    private ap5: number = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }


    start () {
        this.node.name = "succuss";
        this.sign1 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b1");
        this.sign2 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b2");
        this.sign3 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b3");
        this.sign4 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b4");
        this.sign5 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b5");
        this.sign6 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b6");
        this.sign7 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b7");
        this.sign8 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b8");
        this.sign9 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b9");
        this.sign10 = this.node.getChildByName("bg").getChildByName("1").getChildByName("b10");
        this.signa1 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b1");
        this.signa2 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b2");
        this.signa3 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b3");
        this.signa4 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b4");
        this.signa5 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b5");
        this.signa6 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b6");
        this.signa7 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b7");
        this.signa8 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b8");
        this.signa9 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b9");
        this.signa10 = this.node.getChildByName("bg").getChildByName("2").getChildByName("b10");
        this.png1 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c1");
        this.png2 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c2");
        this.png3 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c3");
        this.png4 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c4");
        this.png5 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c5");
        this.png6 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c6");
        this.png7 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c7");
        this.png8 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c8");
        this.png9 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c9");
        this.png10 = this.node.getChildByName("bg").getChildByName("1").getChildByName("c10");
        this.pngb1 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c1");
        this.pngb2 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c2");
        this.pngb3 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c3");
        this.pngb4 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c4");
        this.pngb5 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c5");
        this.pngb6 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c6");
        this.pngb7 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c7");
        this.pngb8 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c8");
        this.pngb9 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c9");
        this.pngb10 = this.node.getChildByName("bg").getChildByName("2").getChildByName("c10");
        this.sign1.active = false;
        this.sign2.active = false;
        this.sign3.active = false;
        this.sign4.active = false;
        this.sign5.active = false;
        this.sign6.active = false;
        this.sign7.active = false;
        this.sign8.active = false;
        this.sign9.active = false;
        this.sign10.active = false;
        this.signa1.active = false;
        this.signa2.active = false;
        this.signa3.active = false;
        this.signa4.active = false;
        this.signa5.active = false;
        this.signa6.active = false;
        this.signa7.active = false;
        this.signa8.active = false;
        this.signa9.active = false;
        this.signa10.active = false;
        this.RandButong();
       

    }

    public SetSign()
    {
        this.sign = 0;
    }
    RandButong()
    {
        let p1 = Math.floor(Math.random()*(8-1)+1);
        let p2 = 101;
        let p3 = 102;
        let p4 = 103;
        let p5 = 104;
        switch(p1)
        {
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
        
       
        cc.log("p1",p1);
        cc.log("p1",p2);
        cc.log("p1",p3);
        cc.log("p1",p4);
        cc.log("p1",p5);
        this.ap1 = p1;
        this.ap2 = p2;
        this.ap3 = p3;
        this.ap4 = p4;
        this.ap5 = p5;
        this.showUi(p1);
        this.showUi(p2);
        this.showUi(p3);
        this.showUi(p4);
        this.showUi(p5);
    }

    public init()
    {
        this.hideUi(this.ap1);
        this.hideUi(this.ap2);
        this.hideUi(this.ap3);
        this.hideUi(this.ap4);
        this.hideUi(this.ap5);
    }

    hideUi(v:number)
    {
        switch(v)
        {
            case 1:
                this.png1.active = false;
                this.pngb1.active = false;
                this.sign1.active = true;
                this.signa1.active = true;
                this.sign1.getComponent(cc.Button).interactable = true;
                this.signa1.getComponent(cc.Button).interactable = true;
                break;
            case 2:
                this.png2.active = false;
                this.pngb2.active = false;
                this.sign2.active = true;
                this.signa2.active = true;
                this.sign2.getComponent(cc.Button).interactable = true;
                this.signa2.getComponent(cc.Button).interactable = true;
                break;
            case 3:
                this.png3.active = false;
                this.pngb3.active = false;
                this.sign3.active = true;
                this.signa3.active = true;
                this.sign3.getComponent(cc.Button).interactable = true;
                this.signa3.getComponent(cc.Button).interactable = true;
                break;
            case 4:
                this.png4.active = false;
                this.pngb4.active = false;
                this.sign4.active = true;
                this.signa4.active = true;
                this.sign4.getComponent(cc.Button).interactable = true;
                this.signa4.getComponent(cc.Button).interactable = true;
                break;
            case 5:
                this.png5.active = false;
                this.pngb5.active = false;
                this.sign5.active = true;
                this.signa5.active = true;
                this.sign5.getComponent(cc.Button).interactable = true;
                this.signa5.getComponent(cc.Button).interactable = true;
                break;
            case 6:
                this.png6.active = false;
                this.pngb6.active = false;
                this.sign6.active = true;
                this.signa6.active = true;
                this.sign6.getComponent(cc.Button).interactable = true;
                this.signa6.getComponent(cc.Button).interactable = true;
                break;
            case 7:
                this.png7.active = false;
                this.pngb7.active = false;
                this.sign7.active = true;
                this.signa7.active = true;
                this.sign7.getComponent(cc.Button).interactable = true;
                this.signa7.getComponent(cc.Button).interactable = true;
                break;
        }
    }


    showUi(v:number){
        switch(v)
        {
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
    }

    showRead(_pos:cc.Vec2)
    {
        var self = this;
                cc.loader.loadRes("read",cc.Prefab, function (error, prefab){
                    if (error){
                        cc.error(error);
                        return;
                    }
                    var tmiss = cc.instantiate(prefab);
                   
                  
                    tmiss.parent = cc.find("Canvas");
                    //console.log("abcposx",_pos.x,"posY:",_pos.y);
                    console.log("tmiss.position+",tmiss.position);
                   
                   // var pos =  _pos//tmiss.convertToNodeSpaceAR(_pos);
                    tmiss.position = _pos;//new cc.Vec2(_pos.x,_pos.y);
                    //cc.find("Canvas").getComponent("WildScene").misstime();
                    //tipAlert._alert.setScale(100);
                    //tipAlert._alert.scaleTo(1000,1000);
                    //tmiss.node.position = _pos;
                    
                });
    }

    moveReadPos()
    {
        switch(this.sign)
        {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;

        }
    }

    clickMove(event, data) {
        switch (data) {
            case "1":
                this.sign1.getComponent(cc.Button).interactable = false;
                this.signa1.getComponent(cc.Button).interactable = false;
                this.png1.active = true;
                this.pngb1.active = true;
                this.sign = this.sign + 1;
                this.showRead(this.sign1.position);
                break;
            case "2":
                this.sign2.getComponent(cc.Button).interactable = false;
                this.signa2.getComponent(cc.Button).interactable = false;
                this.png2.active = true;
                this.pngb2.active = true;
                this.sign = this.sign + 1;
                this.showRead(this.sign2.position);
                break;
                case "3":
                    this.sign3.getComponent(cc.Button).interactable = false;
                this.signa3.getComponent(cc.Button).interactable = false;
                    this.png3.active = true;
                    this.pngb3.active = true;
                    this.sign = this.sign + 1;
                    this.showRead(this.sign3.position);
                    break;
                    case "4":
                        this.sign4.getComponent(cc.Button).interactable = false;
                this.signa4.getComponent(cc.Button).interactable = false;
                        this.png4.active = true;
                        this.pngb4.active = true;
                        this.sign = this.sign + 1;
                        this.showRead(this.sign4.position);
                        break;
                        case "5":
                            this.sign5.getComponent(cc.Button).interactable = false;
                this.signa5.getComponent(cc.Button).interactable = false;
                            this.png5.active = true;
                            this.pngb5.active = true;
                            this.sign = this.sign + 1;
                            this.showRead(this.sign5.position);
                            break;
                            case "6":
                                this.sign6.getComponent(cc.Button).interactable = false;
                this.signa6.getComponent(cc.Button).interactable = false;
                                this.png6.active = true;
                                this.pngb6.active = true;
                                this.sign = this.sign + 1;
                                this.showRead(this.sign6.position);
                                break;
                                case "7":
                                    this.sign7.getComponent(cc.Button).interactable = false;
                this.signa7.getComponent(cc.Button).interactable = false;
                                    this.png7.active = true;
                                    this.pngb7.active = true;
                                    this.sign = this.sign + 1;
                                    this.showRead(this.sign7.position);
                                break;
        }
    }
    update (dt) {
        if(this.sign == 1)
        {
            this.node.parent.getChildByName("adianpng").getChildByName("1").getChildByName("a").active = true;
            this.node.parent.getChildByName("adianpng").getChildByName("1").getChildByName("b").active = false;
            //t.string = "XOOOO"
        }

        if(this.sign == 2)
        {
            this.node.parent.getChildByName("adianpng").getChildByName("2").getChildByName("a").active = true;
            this.node.parent.getChildByName("adianpng").getChildByName("2").getChildByName("b").active = false;
           // var t =this.node.parent.getChildByName("dian").getComponent(cc.Label);
           // t.string = "XXOOO"
        }

        if(this.sign == 3)
        {
            this.node.parent.getChildByName("adianpng").getChildByName("3").getChildByName("a").active = true;
            this.node.parent.getChildByName("adianpng").getChildByName("3").getChildByName("b").active = false;
            //var t =this.node.parent.getChildByName("dian").getComponent(cc.Label);
            //t.string = "XXXOO"
        }

        if(this.sign == 4)
        {
            this.node.parent.getChildByName("adianpng").getChildByName("4").getChildByName("a").active = true;
            this.node.parent.getChildByName("adianpng").getChildByName("4").getChildByName("b").active = false;
            //var t =this.node.parent.getChildByName("dian").getComponent(cc.Label);
            //t.string = "XXXXO"
        }
        

        if(this.sign == 5)
        {
            this.node.parent.getChildByName("adianpng").getChildByName("5").getChildByName("a").active = true;
            this.node.parent.getChildByName("adianpng").getChildByName("5").getChildByName("b").active = false;
            // var t =this.node.parent.getChildByName("dian").getComponent(cc.Label);
            // t.string = "XXXXX"
            
            cc.log("恭喜你过关了");
            this.node.parent.getChildByName("return").active = true;
            this.node.parent.getChildByName("fangda").active = false;
            this.node.parent.getChildByName("next").active = false;

            this.node.parent.parent.parent.getChildByName("sucusess").active = true;
            this.node.name = "succuss";
            cc.find("Canvas").getComponent("WildScene").OffTime();
        }
    }
}
