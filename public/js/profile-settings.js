var emailAddressInput = document.getElementById("email-text");
const dropdownMenu = document.querySelectorAll(".dropdown-content a");
var dropdown_button_text = document.getElementById("dropdown-btn-text");
var countryISO = "";
dropdownMenu.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    var areaCode = this.getAttribute('area-code');
    countryISO = this.getAttribute('country');
    dropdown_button_text.innerText = areaCode;
  });
});

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
    document.getElementById("public-profile-nav").classList.remove("active");
    document.getElementById("public-profile-nav").classList.add("text-white");
    document.getElementById("account-settings-nav").classList.remove("text-white")
    document.getElementById("account-settings-nav").classList.add("active")
  } 
}

function changeToNotification(){
  var api_key_text = document.getElementById("api-key-text").value;
  console.log(api_key_text.length);
  if(api_key_text.length != 64) {
    document.getElementById("api-key-hint").style.display="block";
  } else {
    document.getElementById("api-key-hint").style.display="none";
    document.getElementById("account-settings").style.display="none";
    document.getElementById("Notifications-div").style.display="";
    document.getElementById("account-settings-nav").classList.remove("active");
    document.getElementById("account-settings-nav").classList.add("text-white");
    document.getElementById("notification-nav").classList.remove("text-white");
    document.getElementById("notification-nav").classList.add("active");
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

function insertUserSettings()
{
  var lastName = document.getElementById("last-name-text").value;
  var firstName = document.getElementById("first-name-text").value;
  var phoneNumber = document.getElementById("phone-number-text").value;
  var emailAddress = document.getElementById("email-text").value;
  var apiKey = document.getElementById("api-key-text").value;
  var authToken = document.getElementById("auth-token-text").value;
  var emailAlerts = document.getElementById("email-checkbox").checked; 
  var phoneAlerts = document.getElementById("phone-checkbox").checked;
  const dataToInsert = {
      lastName: lastName,
      firstName: firstName,
      phoneNumber: phoneNumber,
      email: emailAddress,
      apiKey: apiKey,
      authToken: authToken,
      enableEmailAlerts: emailAlerts,
      enablePhoneAlerts: phoneAlerts
  };
  $.ajax({
    url: '/insertUserData',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(dataToInsert),
    success: function(data, textStatus, xhr) {
      alert("Your Account Settings Have Been Saved");
    },
    error: function(data, textStatus, xhr){
      alert("Your Account Settings Have Not Been Saved");
    }
  })
}


