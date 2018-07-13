import {netControl} from "./NetControl"
import  * as onfire from "./libs/onfire/onfire"
import { msg } from "./protocol/protocol.js"
const {ccclass, property} = cc._decorator

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private msssageFire
    private netControl:netControl = null
    private proto

    onLoad(){
        this.netControl = new netControl()    
    }

    start () {
        // init logic
        this.label.string = this.text;

        this.netControl.connect();
        this.msssageFire=onfire.on("onmessage",this.onMessage.bind(this))
    }

    OnBtnSendHello(){
        this.sendHello("ddk")
    }

    sendHello(name : string){
        let protocolId = 0
        let message = msg.Hello.create({ id:0,name:name })
        let buffer  = msg.Hello.encode(message).finish()
        //leaf 前两位为协议序号，故需包装一下
        let addtag_buffer = this.netControl.protoBufAddtag(protocolId,buffer)

        this.netControl.send(addtag_buffer);
        console.log("sendToWS");
    }

    onMessage(obj){
        //leaf 前两位为协议序号，需要解一下啊协议序号
        this.netControl.parseProtoBufId(obj,this.OnGameMessage.bind(this))  
    }

    OnGameMessage(id: number,data: Uint8Array){
        if(id===0){
            console.log("get Hello message!");
            let gameMsg = msg.Hello.decode(data)
            console.log(gameMsg)
        }
    }


    
    onDestroy(){
        onfire.un(this.msssageFire);
    
    }
}
