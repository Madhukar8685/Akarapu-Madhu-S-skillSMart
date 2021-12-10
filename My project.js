function validation()
 {
   var name = document.getElementById("name").value;
   var subject = document.getElementById("phone").value;
   var phone = document.getElementById("password").value;
   var email = document.getElementById("email").value;
   var error_message = document.getElementById("error_message");
   var text;
   error_message.style.padding = "10px";
   if (name.length < 5)
   {
     text = "please enter valid name";
     error_message.innerHTML = text;
     return false;
   }

   if (isNaN(phone) || phone.length != 10)
   {
     text = "please enter valid phone number";
     error_message.innerHTML = text;
     return false;
   }
     if (password.length < 10)
      {
        text = "please enter correct password";
        error_message.innerHTML = text;
        return false;
      }
   if (email.indexOf("@") == -1 || email.length < 6)
   {
     text = "please enter valid email";
     error_message.innerHTML = text;
     return false;
   }
  
   alert("Registered successfully");
   return true;
 }
 
 
 
 // like js 
   function likeButton()
   {
     let heart = document.querySelector('.heart');
     let likes = document.querySelector('.likes');
     if (heart.match("far fa-heart"))
     {
       heart= "fas fa-heart";
       likes.innerHTML = "144 likes";
     }
     else {
       heart= "far fa-heart";
       likes.innerHTML = "143 likes";
     }
   }