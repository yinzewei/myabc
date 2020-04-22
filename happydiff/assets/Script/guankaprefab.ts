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

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
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
        this.showUi(p1);
        this.showUi(p2);
        this.showUi(p3);
        this.showUi(p4);
        this.showUi(p5);
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

    clickMove(event, data) {
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
    }
    // update (dt) {},
}
