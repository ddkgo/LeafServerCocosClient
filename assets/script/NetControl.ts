const {ccclass, property} = cc._decorator;
//定义全局的变量
import  * as onfire from "./libs/onfire/onfire.js"; //处理事件的类库          
import {netConfig} from './NetConfig'

@ccclass
export class netControl extends cc.Component {

    private _sock:WebSocket = null  //当前的webSocket的对象
    
    connect(){
        if(this._sock ==null || this._sock.readyState!==1){
            //当前接口没有打开
            //重新连接
            this._sock = new WebSocket(netConfig.host+":"+netConfig.port)
            this._sock.onopen = this._onOpen.bind(this);
            this._sock.onclose = this._onClose.bind(this);
            this._sock.onmessage = this._onMessage.bind(this);
        }
        return this;
    }

    _onOpen(){
        onfire.fire("onopen")
    }
    _onClose(err){
        onfire.fire("onclose",err)
        let self = this
        let reVar = setInterval(function(){
            // 先对重连过后的Websocket进行判断，如果重连成功则断开循环
            if(self._sock.readyState == 1){
                clearInterval(reVar)
            }
            self._sock = new WebSocket(netConfig.host+":"+netConfig.port)
        }, 5000)    //每5秒尝试一次重连
    }
    _onMessage(obj){
        onfire.fire("onmessage",obj)
    }

    send(msg){
        if(this._sock.readyState == 1){
            this._sock.send(msg);
        }
    }

    protoBufAddtag(tag: number,buffer: Uint8Array){
        let addtag_buffer=new Uint8Array(buffer.length+2)
        let tagBinary = this.binary(tag,2)
        addtag_buffer.set(tagBinary,0)
        addtag_buffer.set(buffer.subarray(0,buffer.length),2)

        return addtag_buffer
    }

    parseProtoBufId(obj,callback:Function){
        let blob:Blob = obj.data
        let reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onload = function(e) {
            let unit16 = new Uint16Array(e.target.result)
            let id = unit16[0]
            console.log("receive message id = "+id)
            let dataUnit8Array = new Uint8Array(e.target.result)
            dataUnit8Array = dataUnit8Array.slice(2)
            
            callback(id,dataUnit8Array)
        }
        
    }

    binary (num:number, Bits:number) {
        let resArry = []
        let xresArry = []
        let i=0;
        for(;num>0;){
            resArry.push(num % 2)
            num=num/2
            i++;
        }
        for(let j=i-1;j>=0;j--)
            xresArry.push(resArry[j])

        if (Bits < xresArry.length) {
            console.log("位数小于二进制位数")
        }      
        if (Bits) {
            for(let r = xresArry.length; r < Bits; r++) {
                xresArry.unshift(0)
            }
        }
        //return xresArry.join().replace(/,/g, '');
        return xresArry
    }
}