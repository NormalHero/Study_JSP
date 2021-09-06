/**
 * 회원가입 폼 value를 확인하는 자바스크립트
 */
function sendit(){
	var frm = document.joinForm;
	var userid = frm.userid;
	var userpw = frm.userpw;
	var userpw_re = frm.userpw_re;
	var username = frm.username;
	var userphone = frm.userphone;
	var userhobby = frm.userhobby;
	
	if( userid.value == "" ){
		alert("아이디를 입력하세요!");
		userid.focus();
		return false;
	}
	
	if( userid.value.length <= 4 || userid.value.length >= 16 ){
		alert("아이디는 5자이상, 16자 미만으로 입력하세요");
		userid.focus();
		return false;
	}
	
	if( userpw.value == "" ){
		alert("비밀번호를 입력하세요!");
		userpw.focus();
		return false;
	} else{
		if( userpw.value.length < 8 ){
			alert("비밀번호는 8자 이상으로 입력하세요!");
			userpw.focus();
			return false;
		}
	}
	
	if( userpw.value != userpw_re.value ){
		alert("비밀번호 확인을 다시하세요!");
		userpw_re.focus();
		return false;
	}
	
	if( username.value == "" ){
		alert("이름을 입력하세요!");
		username.focus();
		return false;
	}
	
	if( userphone.value == "" ){
		alert("휴대폰 번호를 입력하세요!");
		userphone.focus();
		return false;
	}
	
	var cnt = 0;
	for(var i = 0; i<userhobby.length; i++){
		if(userhobby[i].checked){
			cnt++;
		}
	}
	if(cnt == 0){
		alert("취미를 1개이상 체크하세요!");
		return false;
	}
	
	frm.submit();	
}

function checkId( userid ){
	if( userid == "" ){
		alert("아이디를 입력해주세요.");
	} else {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "idcheck.jsp?userid="+userid,true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if( xhr.readyState == 4 ){
				if( xhr.status == 200 || xhr.status == 201 ){
					if( xhr.responseText.trim() == "ok" ){
						document.getElementById("text").innerHTML = "사용할 수 있는 아이디입니다.";
					} else {
						document.getElementById("text").innerHTML = "중복된 아이디입니다.";
					}
				}
			}
		}
		
	}
	
}


















