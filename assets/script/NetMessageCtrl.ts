import netControl from "./NetControl"
import { msg } from "./protocol/protocol"         
import netConfig from './NetConfig'

export default class NetMessageCtrl {

    private static instance:NetMessageCtrl = null;
    private netControl:netControl = null

    constructor(netControlIns:netControl){
        this.netControl = netControlIns;
        NetMessageCtrl.instance = this;
    }

    public static getInstance():NetMessageCtrl{
        return NetMessageCtrl.instance;
    }

    dealMessage(id: number,data: Uint8Array ){
        switch(id){
            case netConfig.ProtocolId.Test:
                this.dealTest(data)
                break;
            case netConfig.ProtocolId.UserResult:
                this.dealUserResult(data)
                break;
            default:
                break;
        }
    }

    dealTest(data: Uint8Array){
        console.log("get Test message!");
        let gameMsg = msg.Test.decode(data);
        console.log(gameMsg);
    }

    dealUserResult(data: Uint8Array){
        console.log("get UserResult message!");
        let gameMsg = msg.UserResult.decode(data);
        console.log(gameMsg);
    }

    sendMessage(xyName:string,data:{}){
        let protocolId = netConfig.ProtocolId[xyName];
        let message = msg[xyName].create(data);
        let buffer  = msg[xyName].encode(message).finish();
        //leaf 前两位为协议序号，故需包装一下
        let addtag_buffer = this.netControl.protoBufAddtag(protocolId,buffer);

        this.netControl.send(addtag_buffer.buffer);
        console.log("sendToWS");
    }

    sendHello(name: string){
        this.sendMessage("Test",{ Test:name });
        console.log("sendHello");
    }

    sendLogin(name: string, pwd: string){
        this.sendMessage("UserLogin",{ LoginName:name,LoginPW:pwd });
        console.log("sendLogin");
    }

    sendRegister(name: string, pwd: string){
        this.sendMessage("UserRegister",{ LoginName:name,LoginPW:pwd });
        console.log("sendRegister");
    }
}