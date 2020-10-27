function validation()
{
	var name= document.getElementById("name").value;
	var password=document.getElementById("pwds").value;
	var repassword=document.getElementById("rePwd").value;
	var number=document.getElementById("mobi").value;
	if(name==null || name=="")
	{
		alert("name cant be blank");
		return false;
	}
	else if(number =="")
		{
		alert("mobile number cant be null");
		}
	else
	if(number.length!=10)
	{
		alert("mobile number most contain 10digits");
		return false;
	}	

	else
		if(password.length<5)
		{
			alert("password must be atlaest 8 character long");
			return false;
		}	
	else	if(password.search(/[a-z]/)<0)
		{
			alert("Your password must contain at least one uppercase letter.");
		}
	else 	if(password.search(/[A-Z]/)<0)
		{
			alert("Your password must contain at least one UpperCase letter.");
		}
	else	if(password.search(/[0-9]/)<0)
		{
			alert("Your password must contain at least one digit.");
		}
	else	if(password.search(/[@]/)<0)
		{
			alert("Your password must contain at least one @.");
		}
	
	else
		if (password==repassword) 
		{
			return true;
		}
		else
		{
			alert("password must be same");
			return false;
		}
		
	
}

