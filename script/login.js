document.getElementById("login-btn")
.addEventListener("click",function(){
      const numberInput=document.getElementById("input-number");
      const contactNumber=numberInput.value;
      console.log(contactNumber);

      const inputPin=document.getElementById("input-pin");
      const pin=inputPin.value;
      console.log(pin);

      if(contactNumber == "01715545684" && pin == "1234"){
 alert("login successful");
 window.location.href = "home.html";
      }
else{
      alert("Login Failed");
      return;
}


});