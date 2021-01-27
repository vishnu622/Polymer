function validateForm() {   //created validation Function//

  var firstname = document.forms["myForm"]["uname"].value;    //declared variable for username//
  
  if (firstname == "" || firstname!="vishnu" || (!isNaN(firstname) )) {   //checking conditions//
	  
    alert("Name must be filled out & Enter correct Name");
	
	document.myForm.uname.select();
    return false;
  }
   

var a = document.myForm.psw.value;   //declared variable for password//
if(a=="" || a!="vishnu")
{
alert("Please Enter Your Password & Enter correct Password");
document.myForm.psw.focus();
return false;
}
if ((a.length < 4) || (a.length > 8))
{
alert("Your Password must be 4 to 8 Character and should be strong");
document.myForm.psw.select();
return false;
}

}