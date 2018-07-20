import messageDialog from './MessageDialog';
const {ccclass, property} = cc._decorator

@ccclass
export default class PersistRootHelp extends cc.Component{
    @property(cc.Prefab)
    tipDialog: cc.Prefab = null;

    private static instance:PersistRootHelp = null;
    private messageDialogIns:messageDialog

    public static getInstance():PersistRootHelp{
        return PersistRootHelp.instance;
    }

    onLoad(){
        PersistRootHelp.instance = this

        this.initTipDialog()
    }

    onBtnPanel(){
        this.node.parent.active = false
    }

    initTipDialog(){
        this.node.addChild(cc.instantiate(this.tipDialog))
        "tipsNode"
        this.messageDialogIns = this.node.getChildByName("tipsNode").getChildByName('dialogctrl').getComponent('MessageDialog')
        this.messageDialogIns.Hide()
    }
}