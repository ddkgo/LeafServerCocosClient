interface message{
    title:string,
    text:string
}
const {ccclass, property} = cc._decorator

@ccclass
export default class MessageDialog extends cc.Component{
    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Label)
    text: cc.Label = null;

    private static instance:MessageDialog = null;

    public static getInstance():MessageDialog{
        return MessageDialog.instance;
    }

    onLoad(){
        MessageDialog.instance = this
    }

    onBtnPanel(){
        this.Hide()
    }

    showTips(msg :message){
        this.title.string = msg.title
        this.text.string = msg.text
        this.node.parent.active = true
    }

    Hide(){
        this.node.parent.active = false
    }
}