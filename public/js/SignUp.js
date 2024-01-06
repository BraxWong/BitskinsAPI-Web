$.ajax({
  url: '/startDatabase',
  type: 'GET',
  success: function(data) {
    console.log(data);
    databaseLoggedOn = true;
  }
});

function directToLoginPage()
{
  alert("This email has already been registered, directing you to the login page");
  window.location.href = '/login';
}

function insertUserCredentialsToDB(dataToInsert)
{
  $.ajax({
    url: '/insertData',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(dataToInsert),
    success: function(data, textStatus, xhr) {
      alert("You account has been registered");
    },
    error: function(data, textStatus, xhr){
      alert("You account has not been registered");
    }
  })  
}

function sign_up(){
  var email = document.getElementById("Login-Email").value;
  var password = document.getElementById("Login-Password").value;
  if(password.length >= 8) {
    const dataToInsert = {
      email: email, 
      password: password 
    };
    $.ajax({
      url: '/findUser',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(dataToInsert),
      success: function(data, textStatus, xhr) {
        if(data.exists == true){
          directToLoginPage();
        } else {
         insertUserCredentialsToDB(dataToInsert); 
        }
      },
      error: function(xhr, textStatus) {
        console.log(xhr.status);
        alert(xhr.status);
      }
    });
  } else {
    alert("The password has to be at least 8 characters long");
  }
}
