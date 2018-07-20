import netControl from "./NetControl"
import  * as onfire from "./libs/onfire/onfire"
import NetMessageCtrl from './NetMessageCtrl';
const {ccclass, property} = cc._decorator

@ccclass
export default class Lobby extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    regNode: cc.Node = null;

    @property(cc.Node)
    loginNode: cc.Node = null;

    @property(cc.Node)
    PersistRootNode: cc.Node = null;

    @property
    text: string = 'hello';

    private msssageFire
    private netControl:netControl = null
    private netMessageCtrl:NetMessageCtrl = null

    onLoad(){
        this.netControl = new netControl();
        this.netMessageCtrl = new NetMessageCtrl(this.netControl);    

        cc.game.addPersistRootNode(this.PersistRootNode);
    }

    start () {
        // init logic
        this.label.string = this.text;

        this.netControl.connect();
        this.msssageFire=onfire.on("onmessage",this.onMessage.bind(this));
    }

    onMessage(obj: MessageEvent){
        if(obj.data instanceof ArrayBuffer){
            //leaf 前两位为协议序号，需要解一下啊协议序号
            let retdata = this.netControl.parseProtoBufId(obj);  
            let id = retdata.id;
            let data = retdata.data;
            this.netMessageCtrl.dealMessage(id,data);
        }
    }
    
    onDestroy(){
        onfire.un(this.msssageFire);
    
    }

    onBtnSendHello(){
        this.netMessageCtrl.sendHello("ddk");
    }

    onBtnRegister(){
        this.regNode.active = true;
    }

    onBtnLogin(){
        this.loginNode.active = true;
    }
    
}
