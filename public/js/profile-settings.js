
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
  var error = false;
  if(!validateEmail(email, "email-label")){
    document.getElementById('email-hint').style.display = "block";
    error=true;
  } else {
    document.getElementById('email-hint').style.display = "none";
  }
  if(!valueValidation("last-name-label", last_name, "")){
    document.getElementById('last-name-hint').style.display = "block";
    error=true;
  } else {
    document.getElementById('last-name-hint').style.display = "none";
  } 
  if(!valueValidation("first-name-label", first_name, "")){
    document.getElementById('first-name-hint').style.display = "block";
    error=true;
  } else {
    document.getElementById('last-name-hint').style.display = "none";
  }
  if(!validatePhoneNumber(phone_number, "phone-number-label")){
    document.getElementById("phone-number-hint").style.display = "block";
    error=true;
  } else {
    document.getElementById("phone-number-hint").style.display = "none";
  }
  if(!error){
    document.getElementById("public-profile").style.display = "none";
    document.getElementById("account-settings").style.display = "block";
  }
}

function changeToNotification(){
  var api_key_text = document.getElementById("api-key-text");
  if(api_key_text.length != 64) {
    document.getElementById("api-key-hint").style.display="block";
  } else {
    document.getElementById("api-key-hint").style.display="none";
  }
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

function validatePhoneNumber(phoneNumber, element){
  const num = new libphonenumber.parsePhoneNumber(phoneNumber, 'GB');
  if(num.isPossible() && num.isValid()){
    document.getElementById(element).style.color="black";
    return true;
  }else{
    document.getElementById(element).style.color="red";
    return false;
  }
}
