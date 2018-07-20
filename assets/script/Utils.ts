import messageDialog from './MessageDialog';
interface CheckRet{
    ret:boolean,
    msg:string
}
interface message{
    title:string,
    text:string
}
export default class Utils {
    //检测用户名是否合法
    static check_usr(str:string):CheckRet{
        let c=<CheckRet>{};
        var b :RegExp=/^[a-zA-Z\d]\w{2,10}[a-zA-Z\d]$/;
        if (b.test(str)) {
            c.ret = true;
            c.msg = "用戶名合法";
        }
        else {
            c.ret = false;
            c.msg = "用戶名不合法";
        }

        return c;
    }
    
    
    //判断密码输入是否合法，一个是长度，一个是没有特殊字符
    static check_psw(str:string):CheckRet{
        let c=<CheckRet>{};
        if(str.length > 5 && str.length<21){
            c.ret = true;
            c.msg = "";
        }else {
            c.ret = false;
            c.msg = "密码长度不合规范";
        }
        var b:RegExp =/^[a-zA-Z\d]\w{2,10}[a-zA-Z\d]$/;
        if (b.test(str)) {
            c.ret = true;
            c.msg = "";
        }else {
            c.ret = false;
            c.msg = "密码字符不合规范";
        }

        return c;
    }

        
    //判断手机号码格式是否合法
    static check_tel(str:string):CheckRet{
        let c=<CheckRet>{};
        var regx=/^(?:13\d|15\d|18[123456789])-?\d{5}(\d{3}|\*{3})$/;
        if(regx.test(str)){
            c.ret = true;
            c.msg = "";
        }else{
            c.ret = false;
            c.msg = "手机号不合规范";
        }

        return c;
    }
    
        
    //判断邮箱地址格式是否合法
    static check_mail(str:string):CheckRet{
        let c=<CheckRet>{};
        var regm = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//验证Mail的正则表达式,^[a-zA-Z0-9_-]:开头必须为字母,下划线,数字,
        if (str.match(regm)){
            c.ret = true;
            c.msg = "";
            
        } else{
            c.ret = false;
            c.msg = "邮箱地址不合规范";
        }

        return c;
    }

    static showTips(title:string,text:string){
        messageDialog.getInstance().showTips({title:title,text:text})
    }
}