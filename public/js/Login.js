function login()
{
  const data = {
    email: document.getElementById("Login-Email").value,
    password: document.getElementById("Login-Password").value
  };

  $.ajax({
    url: '/userLogin',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function(data, textStatus, xhr) {
      if(data.success == true) {
        window.location.href = "../html/profile-settings.html"
      } else {
      }
    },
    error: function (data, textStatus, xhr) {
       alert("Error while logging in: " + data);

//           ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
//           ┃                                                      ┃
//           ┃ TODO:Using bootstrap alert to notify users of errors ┃
//           ┃                                                      ┃
//           ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

    }
  });
}
