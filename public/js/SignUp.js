function sign_up(){
  $.ajax({
    url: '/startDatabase',
    type: 'GET',
    success: function(data) {
      console.log(data);
    }
  });
  const dataToInsert = {
    email: document.getElementById("Login-Email").value,
    password: document.getElementById("Login-Password").value
  };
  $.ajax({
	  url: '/insertData',
	  type: 'POST',
	  contentType: 'application/json',
  	data: JSON.stringify(dataToInsert),
	  success: function(data) {
      console.log(data);
	  },
	  error: function(error) {
      console.error(error);
	  }
  });
}

