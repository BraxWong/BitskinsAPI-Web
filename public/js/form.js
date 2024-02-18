var account_dropdown = document.getElementsByClassName("account-dropdown-btn");
var profile_dropdown = document.getElementsByClassName("profile-dropdown-btn");
var affiliate_dropdown = document.getElementsByClassName("affiliate-dropdown-btn");
var two_factor_dropdown = document.getElementsByClassName("two-factor-dropdown-btn");
var api_dropdown = document.getElementsByClassName("api-dropdown-btn");
var config_dropdown = document.getElementsByClassName("config-dropdown-btn");
var market_dropdown = document.getElementsByClassName("market-dropdown-btn");
var pricing_dropdown = document.getElementsByClassName("pricing-dropdown-btn");
var market_item_dropdown = document.getElementsByClassName("market-items-dropdown-btn");
var buy_items_dropdown = document.getElementsByClassName("buy-items-dropdown-btn");
var withdraw_dropdown = document.getElementsByClassName("withdraw-dropdown-btn");
var delist_dropdown = document.getElementsByClassName("delist-dropdown-btn");
var relist_dropdown = document.getElementsByClassName("relist-dropdown-btn");
var update_price_dropdown = document.getElementsByClassName("update-price-dropdown-btn");
var item_history_dropdown = document.getElementsByClassName("item-history-dropdown-btn");
var receipt_dropdown = document.getElementsByClassName("receipt-dropdown-btn");
var all_available_skin_dropdown = document.getElementsByClassName("all-available-skins-dropdown-btn");
var all_insell_items_dropdown = document.getElementsByClassName("all-insell-items-dropdown-btn");
var steam_dropdown = document.getElementsByClassName("steam-dropdown-btn");
var steam_trades_dropdown = document.getElementsByClassName("steam-trades-dropdown-btn");
var wallet_dropdown = document.getElementsByClassName("wallet-dropdown-btn");
var bump_up_dropdown = document.getElementsByClassName("bump-up-dropdown-btn");
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
var dropdownarr = [account_dropdown, profile_dropdown, affiliate_dropdown, two_factor_dropdown, api_dropdown, config_dropdown, market_dropdown, pricing_dropdown, 
                   market_item_dropdown, buy_items_dropdown, withdraw_dropdown, delist_dropdown, relist_dropdown, update_price_dropdown, item_history_dropdown, 
                   receipt_dropdown, bump_up_dropdown, all_available_skin_dropdown, all_insell_items_dropdown, steam_dropdown, steam_trades_dropdown, wallet_dropdown, 
                   wallet_stats_dropdown, wallet_transactions_dropdown, wallet_reports_dropdown, wallet_deposit_dropdown, cryptocurrency_dropdown, binance_dropdown, 
                   giftcode_dropdown, zen_dropdown, card_dropdown, wallet_withdraw_dropdown, wallet_withdraw_cryptocurrency_dropdown, wallet_withdraw_binance_dropdown, visa_dropdown];
var form = document.getElementById("form");
var currentSchema = {};
var editor = "";
var currentURL = "/get-historic-rewards";
var type = "GET";

$.ajax({
  url: '/startDatabase',
  type: 'GET',
  success: function(data) {
    console.log(data);
    databaseLoggedOn = true;
  },
  error: function(xhr,status,error) {
    console.error(error);
  }
});
showForm(currentURL, type);

function returnUserData(){
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/userData',
      type: 'GET',
      success: function(data){
        resolve(data.apiKey);
      },
      error: function(xhr,status,error){
        reject(error);
      }
    });
  });
}

function showForm(url, type)
{
  $.ajax({
    url: currentURL,
    type: type,
    contentType: "application/json",
    success: function(data) {
      currentSchema = data;
      var config = {
        use_name_attributes: false,
        theme: 'bootstrap4',
        disable_edit_json: true,
        disable_properties: true,
        disable_collapse: true,
        schema: currentSchema 
      }
      editor = new JSONEditor(form, config);
      if(JSON.stringify(currentSchema).includes("API")){
        editor.on('ready', ()=> {
          try{
            returnUserData().then(data => {
              editor.setValue({"API": data});
            });
          } catch (error){
            console.error(error);
          }
        })
      } 
    }
  });
}


//                        ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
//                        ┃                             ┃
//                        ┃ SideNav Population Function ┃
//                        ┃                             ┃
//                        ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

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


