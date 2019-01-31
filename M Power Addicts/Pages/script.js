var forma = document.registerform;
var message = document.getElementById("message");
var mistake = true;

function registrate() {

  var firstname = forma.firstname.value;
  var lastname = forma.lastname.value;
  var email = forma.email.value;
  var password1 = forma.password1.value;
  var password2 = forma.password2.value;

  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password1);
  console.log(password2);

if  ((firstname == "") || (lastname == "") || (email == "") ||
     (password1 == "") || (password2 == "")) {
        message.innerHTML = "all fields must be filled!";
        message.style = "visibility:visible";
      } else if (firstname.length < 3) {
        message.innerHTML = "first name too short";
      } else if (firstname.length > 15) {
        message.innerHTML = "first name too long";
      } else if (lastname.length < 3) {
         message.innerHTML = "last name too short";
       } else if (lastname.length > 15) {
         message.innerHTML = "last name too long";
      } else if (password1.length < 6 || password1.length > 15) {
        message.innerHTML = "the allowed length of the password is between 6 - 15 characters";
      } else if (password1 != password2) {
        message.innerHTML = "passwords doesnt match";
      } else {
        alert("successful registration");
        message.innerHTML = "successful registration";
      }

if(mistake == true)
message.style = "visibility:visible";
else
message.style = "visibility:hidden";
    }
