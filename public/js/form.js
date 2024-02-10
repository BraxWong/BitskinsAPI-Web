var account_dropdown = document.getElementsByClassName("account-dropdown-btn");
var config_dropdown = document.getElementsByClassName("config-dropdown-btn");
var market_dropdown = document.getElementsByClassName("market-dropdown-btn");
var steam_dropdown = document.getElementsByClassName("steam-dropdown-btn");
var steam_trades_dropdown = document.getElementsByClassName("steam-trades-dropdown-btn");
var wallet_dropdown = document.getElementsByClassName("wallet-dropdown-btn");
var wallet_stats_dropdown = document.getElementsByClassName("wallet-stats-dropdown-btn");
var wallet_transactions_dropdown = document.getElementsByClassName("wallet-transactions-dropdown-btn");
var wallet_reports_dropdown = document.getElementsByClassName("wallet-reports-dropdown-btn");
var wallet_deposit_dropdown = document.getElementsByClassName("wallet-deposit-dropdown-btn");
var cryptocurrency_dropdown = document.getElementsByClassName("cryptocurrency-dropdown-btn");
var binance_dropdown = document.getElementsByClassName("binance-dropdown-btn");
var giftcode_dropdown = document.getElementsByClassName("giftcode-dropdown-btn");
var zen_dropdown = document.getElementsByClassName("zen-dropdown-btn");
var card_dropdown = document.getElementsByClassName("card-dropdown-btn");
var wallet_withdraw_dropdown = document.getElementsByClassName("wallet-withdraw-dropdown-btn");
var wallet_withdraw_cryptocurrency_dropdown = document.getElementsByClassName("wallet-withdraw-cryptocurrency-dropdown-btn");
var wallet_withdraw_binance_dropdown = document.getElementsByClassName("wallet-withdraw-binance-dropdown-btn");
var visa_dropdown = document.getElementsByClassName("visa-dropdown-btn");
var dropdownarr = [account_dropdown, config_dropdown, market_dropdown, steam_dropdown, steam_trades_dropdown, wallet_dropdown, wallet_stats_dropdown, wallet_transactions_dropdown,
                   wallet_reports_dropdown, wallet_deposit_dropdown, cryptocurrency_dropdown, binance_dropdown, giftcode_dropdown, zen_dropdown, card_dropdown, wallet_withdraw_dropdown,
                   wallet_withdraw_cryptocurrency_dropdown, wallet_withdraw_binance_dropdown, visa_dropdown];

for(var i = 0; i < dropdownarr.length; ++i) {
  for(var j = 0; j < dropdownarr[i].length; ++j){
    dropdownarr[i][j].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if(dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}
