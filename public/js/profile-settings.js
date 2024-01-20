var emailAddressInput = document.getElementById("email-text");
$.ajax({
    url: "/currentUser",
    type: 'GET',
    success: function(data) {
      console.log(data);
      emailAddressInput.value = data;
    },
    error: function(data) {
      console.log(data);
    }
});

function changeToAccountSettings(){
  var last_name = document.getElementById('last-name-text').value;
  var first_name = document.getElementById('first-name-text').value;
  var phone_number = document.getElementById('phone-number-text').value;
  var email = document.getElementById('email-text').value;
  var errorText = ""
  if(!validateEmail(email, "email-label")){
    errorText+="Please insert a valid email address";
  }
  if(!valueValidation("last-name-label", last_name, "")){
    errorText+="Last name can't be empty";
  } 
  if(!valueValidation("first-name-label", first_name, "")){
    errorText+="First name can't be empty";
  }
  if(!valueValidation("phone-number-label", phone_number, "")){
    errorText+="Phone number can't be empty";
  }
  console.log(errorText);
}

function valueValidation(element, currentValue, invalidValue){
  if(currentValue == invalidValue){
    document.getElementById(element).style.color="red";
    return false;
  } else {
    document.getElementById(element).style.color="black";
    return true;
  }
}

const validateEmail = (email, element) => {
  var validEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if(!validEmail){
    document.getElementById(element).style.color="red";
  } else {
    document.getElementById(element).style.color="black";
  }
  return validEmail;
};