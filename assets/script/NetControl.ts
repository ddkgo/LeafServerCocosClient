import  * as onfire from "./libs/onfire/onfire.js"; //处理事件的类库          
import netConfig from './NetConfig.js'

export default class netControl {

    private _sock:WebSocket = null  //当前的webSocket的对象
    
    connect(){
        if(this._sock ==null || this._sock.readyState!==1){
            //当前接口没有打开
            //重新连接
            this._sock = new WebSocket(netConfig.host+":"+netConfig.port);
            this._sock.onopen = this._onOpen.bind(this);
            this._sock.onclose = this._onClose.bind(this);
            this._sock.onmessage = this._onMessage.bind(this);
            this._sock.binaryType = "arraybuffer";
        }
        return this;
    }

    _onOpen(){
        onfire.fire("onopen");
    }
    _onClose(err){
        onfire.fire("onclose",err);
        let self = this;
        let reVar = setInterval(function(){
            // 先对重连过后的Websocket进行判断，如果重连成功则断开循环
            if(self._sock.readyState == 1){
                clearInterval(reVar);
            }
            self._sock = new WebSocket(netConfig.host+":"+netConfig.port);
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
        let addtag_buffer=new Uint8Array(buffer.length+2);
        let tagBinary = this.IntToUint8Array(tag,16);
        let tagUnit8 = new Uint8Array(tagBinary);

        addtag_buffer.set(tagUnit8,0);
        addtag_buffer.set(buffer.subarray(0,buffer.length),2);

        return addtag_buffer;
    }

    parseProtoBufId(obj: MessageEvent) :{id:number,data:Uint8Array}  {
        let arrayBuffer:ArrayBuffer = obj.data;
        let dataUnit8Array = new Uint8Array(arrayBuffer);
        let id = this.Uint8ArrayToInt(dataUnit8Array.slice(0,2));
        console.log("receive message id = "+id);
        dataUnit8Array = dataUnit8Array.slice(2);
        
        return {id: id,data:dataUnit8Array};
    }

    IntToUint8Array (num: number, Bits: number) :number[]{
        let resArry = [];
        let xresArry = [];
        let binaryStr:string = num.toString(2);
        for(let i=0;i<binaryStr.length;i++)
            resArry.push(parseInt(binaryStr[i]));

        if (Bits) {
            for(let r = resArry.length; r < Bits; r++) {
                resArry.unshift(0);
            }
        }

        let  resArryStr= resArry.join("");
        for(let j=0;j<Bits;j+=8)
            xresArry.push(parseInt(resArryStr.slice(j,j+8),2));

        return xresArry;
    }

    /**
     * Uint8Array[]转int
     * 相当于二进制加上4位。同时，使用|=号拼接数据，将其还原成最终的int数据
     * @param uint8Ary Uint8Array类型数组
     * @return int数字
     */
    Uint8ArrayToInt(uint8Ary:Uint8Array){
        let retInt:number =0;
        for(let i= 0;i<uint8Ary.length;i++)
            retInt|=(uint8Ary[i] << (8*(uint8Ary.length-i-1)));

        return retInt;
   }
}