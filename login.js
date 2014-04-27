/**
 * 自动登录的脚本
 * 
 */

//同一个域,解决IFRAME的安全限制
try{
	document.domain='xiaomi.com';
}catch(e){
}
var frameWin = document.getElementById("miniLoginFrame").contentWindow;
if (frameWin != null) {
	try {
		setTimeout(function(){
			var documentFrame = frameWin.document;
			
			var txtUsr = documentFrame.getElementById("miniLogin_username");
			txtUsr.value = "{username}";
			var txtPwd = documentFrame.getElementById("miniLogin_pwd");
			txtPwd.value = "{password}";

			setTimeout(function(){
				var btnLogin = documentFrame.getElementById("message_LOGIN_IMMEDIATELY");
				btnLogin.click();	
			}, 0);
		}, 500);
	} catch(e){
		
	}
}
