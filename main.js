var express = require('express');
var axios = require('axios');
var app = express();
var fs = require('fs');
var database = require('./public/js/Node/database.js');
var update_account = require('./public/schemas/update_account.schema.json');
var update_tradelink = require('./public/schemas/update_tradelink_schema.json');
var bitSkins_api = require('./public/schemas/api.schema.json');
var historic_rewards = require('./public/schemas/historic_rewards.schema.json');
var modify_affiliate_code = require('./public/schemas/set_change_affiliate_code.schema.json');
var bitSkins_auth_token = require('./public/schemas/auth_token.schema.json');
var verify_2FA_creation = require('./public/schemas/verify_2FA_creation.schema.json');
var disable_2FA = require('./public/schemas/disable_2FA.schema.json');
var verify_2FA_disable = require('./public/schemas/verify_disable_2FA.schema.json');
var get_sales = require('./public/schemas/get_sales.schema.json');
var get_pricing_summary = require('./public/schemas/get_pricing_summary.json');
var tf2_market = require('./public/schemas/tf2_market.schema.json');
var dota2_market = require('./public/schemas/dota2_market.schema.json');
var cs2_market = require('./public/schemas/cs2_market.schema.json');
var rust_market = require('./public/schemas/rust_market.schema.json');
var user_store = require('./public/schemas/user_store.schema.json');
var get_item_details = require('./public/schemas/get_item_details.schema.json');
var search_skin = require('./public/schemas/search_skin.schema.json');
var filters = require('./public/schemas/filters.schema.json');
var buy_single_item = require('./public/schemas/buy_single_item.schema.json');
var buy_multiple_items = require('./public/schemas/buy_multiple_items.schema.json');
var buy_bulk_items = require('./public/schemas/buy_bulk_items.schema.json');
var withdraw_single_item = require('./public/schemas/withdraw_single_item.schema.json');
var withdraw_multiple_items = require('./public/schemas/withdraw_multiple_items.schema.json');
var delist_single_item = require('./public/schemas/delist_single_item.schema.json');
var delist_multiple_items = require('./public/schemas/delist_multiple_items.schema.json');
var relist_single_item = require('./public/schemas/relist_single_item.schema.json');
var relist_multiple_items= require('./public/schemas/relist_multiple_items.schema.json');
var update_single_item = require('./public/schemas/update_single_item.schema.json');
var update_multiple_items = require('./public/schemas/update_multiple_items.schema.json');
var get_item_history = require('./public/schemas/get_item_history.schema.json');
var get_items_history = require('./public/schemas/get_items_history.schema.json');
var get_receipt = require('./public/schemas/get_receipt.schema.json');
var bump_single_item = require('./public/schemas/bump_single_item.schema.json');
var get_bumped_items = require('./public/schemas/get_bumped_items.schema.json');
var enable_bumping = require('./public/schemas/enable_bumping.schema.json');
var disable_bumping = require('./public/schemas/disable_bumping.schema.json');
var buy_bump_packages = require('./public/schemas/buy_bump_packages.schema.json');
var schemas_array = [update_account, update_tradelink, bitSkins_api, historic_rewards, modify_affiliate_code, bitSkins_auth_token,
                     verify_2FA_creation, disable_2FA, verify_2FA_disable, get_sales, get_pricing_summary, tf2_market, dota2_market,
                     cs2_market, rust_market, user_store, get_item_details, search_skin, filters, buy_single_item, buy_multiple_items,
                     buy_bulk_items, withdraw_single_item, withdraw_multiple_items, delist_single_item, delist_multiple_items,
                     relist_single_item, relist_multiple_items, update_single_item, update_multiple_items, get_items_history,
                     get_item_details, get_receipt, bump_single_item, get_bumped_items, enable_bumping, disable_bumping, buy_bump_packages];
const kill = require('kill-port')

app.use('/public', express.static(__dirname + '/public'));
app.use('/', database);
console.log("You are in the right place");

app.get('/main', function(request, response) {
  fs.readFile("public/html/main.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/contact-us', function(request, response) {
  fs.readFile("public/html/contact-us.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/login', function(request, response) {
  fs.readFile("public/html/Login.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/forgot-password', function(request, response) {
  fs.readFile("public/html/forgot-password.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
})

app.get('/signup', function(request, response) {
  fs.readFile("public/html/SignUp.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  })
})

app.get('/profile-settings', function(request, response) {
  fs.readFile("public/html/profile-settings.html", function(err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  })
})

app.post('/get-schema', function(request, response) {
  var array_index = JSON.parse(request.body.num);
  if(array_index <= schemas_array.length - 1) {
    response.header("Content-Type", 'application/json');
    response.status(200).json(schemas_array[array_index]);
  } else {
    response.status(500).json({error: "The schema is not found"});
  }
});

app.listen(8080, "127.0.0.1", () => {
  process.on('exit', () => {
    // Kill the port when the process is about to exit
    kill(8080, 'tcp')
      .then(console.log)
      .catch(console.log);
  });
  
  process.on('SIGINT', () => {
    process.exit(0);
  });
});


