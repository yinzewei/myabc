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

    @property(cc.Node)
    giftmoney: cc.Node = null;

    @property(cc.Label)
    time: cc.Label = null;

    @property(cc.Label)
    goldsum:cc.Label = null;

    @property(cc.Label)
    moneylabel:cc.Label = null;

    @property(cc.Button)
    moneybut:cc.Button = null;

    @property(cc.Label)
    moneybutlabel:cc.Label = null;

    @property
    Gold: number = 0;

    @property
    text: string = 'hello';

    @property
    moneytime: number = 20;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(parseInt(cc.sys.localStorage.getItem('goldsum')) >= 0)
        {
            this.goldsum.string = cc.sys.localStorage.getItem('goldsum');
        }else{
            cc.sys.localStorage.setItem('goldsum',0);
            this.goldsum.string = 0 + "";
        }
        
       
        this.moneylabel.string = "倒计时00："+this.moneytime + "";
        if(parseInt(cc.sys.localStorage.getItem('moneynum')) >= 0)
        {
            this.goldsum.string = cc.sys.localStorage.getItem('moneynum');
        }else{
            cc.sys.localStorage.setItem('moneynum',0);
            this.moneybutlabel.string = 0 + "";
        }
        //this.moneybutlabel.string = cc.sys.localStorage.getItem('moneynum');
        if(parseInt(this.moneybutlabel.string)>0)
        {
            this.moneybut.interactable = true;
        }else{
            this.moneybut.interactable = false;
        }

       // (1)单个数据的存储
// cc.sys.localStorage.setItem(key, value)
// cc.sys.localStorage.getItem(key)
//存储
// cc.sys.localStorage.setItem('gold', 100);
// //读取
// var g = cc.sys.localStorage.getItem('gold');

    }

    update (dt) {
        this.moneytime = this.moneytime - dt;
        let moneyp1 = Math.floor(this.moneytime);
        this.moneylabel.string = "倒计时00："+moneyp1 + ""
        if(this.moneytime <=0)
        {
            cc.log("money");
            this.moneytime = 20;
            let moneyp2 = parseInt(cc.sys.localStorage.getItem('moneynum')) + 1;
            this.moneybutlabel.string =  moneyp2 + "";
            cc.sys.localStorage.setItem('moneynum', moneyp2);
        }
        if(parseInt(this.moneybutlabel.string)>0)
        {
            this.moneybut.interactable = true;
        }else{
            this.moneybut.interactable = false;
        }
    }

    timeShowUI(ti:number)
    {
        let time1 = Math.floor(ti/60);
        let time2 = Math.floor(time1/60);
    }

    clickMove(event, data) {
        switch(data)
        {
            case 'money':
                let moneyp4 = parseInt(cc.sys.localStorage.getItem('moneynum'))
                if(moneyp4 <=0)
                {
                    this.moneybut.interactable = false;
                }else{
                    this.giftmoney.active = true;
                }
                break;
            case 'hide':
                let moneyp3 = parseInt(cc.sys.localStorage.getItem('moneynum')) - 1;
               
                cc.sys.localStorage.setItem('moneynum', moneyp3);
                this.moneybutlabel.string =  moneyp3 + "";
                this.giftmoney.active = false;
                let goldsump1 = parseInt(cc.sys.localStorage.getItem('goldsum')) + 1;
                this.goldsum.string = goldsump1 + "";
                cc.sys.localStorage.setItem('goldsum',goldsump1);
                break;

        }
    }
}
