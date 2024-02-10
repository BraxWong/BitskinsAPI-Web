var account_dropdown = document.getElementsByClassName("account-dropdown-btn");
var config_dropdown = document.getElementsByClassName("config-dropdown-btn");
var market_dropdown = document.getElementsByClassName("market-dropdown-btn");
var steam_dropdown = document.getElementsByClassName("steam-dropdown-btn");
var steam_trades_dropdown = document.getElementsByClassName("steam-trades-dropdown-btn");
for(var i = 0; i < account_dropdown.length; ++i) {
  account_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
for(var i = 0; i < config_dropdown.length; ++i) {
  config_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
for(var i = 0; i < market_dropdown.length; ++i) {
  market_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
for(var i = 0; i < steam_dropdown.length; ++i) {
  steam_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
for(var i = 0; i < steam_trades_dropdown.length; ++i) {
  steam_trades_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
