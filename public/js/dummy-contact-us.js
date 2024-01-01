//╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
//┃                                                                              ┃
//┃   Since the real contact-us.js cannot be displayed due to public API-key,    ┃
//┃     email service and form are present. I made this dummy script you can     ┃
//┃                              have a look at it.                              ┃
//┃                                                                              ┃
//╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


//╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
//┃                                                                                 ┃
//┃                                 Please check                                    ┃
//┃https://www.emailjs.com/docs/tutorial/creating-contact-form/ for more information┃
//┃                                                                                 ┃
//╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


emailjs.init('YOUR_PUBLIC_KEY');
document.getElementById('contact-form').addEventListener('submit', function(event) {
  var emailAddr = document.getElementById("Form-Email").value;
  if(validateEmail(emailAddr))
  {
    console.log("SUBMIT BUTTON CLICKED.");
    event.preventDefault();
    emailjs.sendForm('FORM_SERVICE','FORM', this)
    .then(function() {
      displayAlert('success-alert');
    }, function(error) {
        displayAlert('error-alert');
    });
  }
  else
  {
    console.log("Your email address is invalid.");
  }
});

function displayAlert(alertID){
  var alert = document.getElementById(alertID);
  alert.style.display = 'block';
}

function validateEmail(emailAddr){
  return emailAddr.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
