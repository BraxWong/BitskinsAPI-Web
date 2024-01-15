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
