import NetMessageCtrl  from './NetMessageCtrl';
import Utils from './Utils';
const {ccclass, property} = cc._decorator

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    Name: cc.EditBox = null;

    @property(cc.EditBox)
    Pwd: cc.EditBox = null;

    onLoad(){
    }

    onBtnPanel(){
        this.node.parent.active = false
    }

    onBtnComfirm(){
        var name = this.Name.string;
        var pwd = this.Pwd.string;
        if(name && pwd){
            let check = Utils.check_usr(name)
            let checkPwd = Utils.check_psw(name)
            if(check.ret){
                if(checkPwd.ret){
                    NetMessageCtrl.getInstance().sendLogin(name,pwd);
                }
                Utils.showTips("提示",checkPwd.msg)
            }
            else{
                Utils.showTips("提示",check.msg)
            }
        }
        else{
            Utils.showTips("提示","请输入完整登陆数据")
        }
    }
}
