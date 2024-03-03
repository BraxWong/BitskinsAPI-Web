var express = require("express");
var axios = require("axios");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var database = require("./public/js/Node/database.js");
var update_account = require("./public/schemas/update_account.schema.json");
var update_tradelink = require("./public/schemas/update_tradelink_schema.json");
var bitSkins_api = require("./public/schemas/api.schema.json");
var historic_rewards = require("./public/schemas/historic_rewards.schema.json");
var modify_affiliate_code = require("./public/schemas/set_change_affiliate_code.schema.json");
var bitSkins_auth_token = require("./public/schemas/auth_token.schema.json");
var verify_2FA_creation = require("./public/schemas/verify_2FA_creation.schema.json");
var disable_2FA = require("./public/schemas/disable_2FA.schema.json");
var verify_2FA_disable = require("./public/schemas/verify_disable_2FA.schema.json");
var get_sales = require("./public/schemas/get_sales.schema.json");
var get_pricing_summary = require("./public/schemas/get_pricing_summary.json");
var tf2_market = require("./public/schemas/tf2_market.schema.json");
var dota2_market = require("./public/schemas/dota2_market.schema.json");
var cs2_market = require("./public/schemas/cs2_market.schema.json");
var rust_market = require("./public/schemas/rust_market.schema.json");
var user_store = require("./public/schemas/user_store.schema.json");
var get_item_details = require("./public/schemas/get_item_details.schema.json");
var search_skin = require("./public/schemas/search_skin.schema.json");
var filters = require("./public/schemas/filters.schema.json");
var buy_single_item = require("./public/schemas/buy_single_item.schema.json");
var buy_multiple_items = require("./public/schemas/buy_multiple_items.schema.json");
var buy_bulk_items = require("./public/schemas/buy_bulk_items.schema.json");
var withdraw_single_item = require("./public/schemas/withdraw_single_item.schema.json");
var withdraw_multiple_items = require("./public/schemas/withdraw_multiple_items.schema.json");
var delist_single_item = require("./public/schemas/delist_single_item.schema.json");
var delist_multiple_items = require("./public/schemas/delist_multiple_items.schema.json");
var relist_single_item = require("./public/schemas/relist_single_item.schema.json");
var relist_multiple_items = require("./public/schemas/relist_multiple_items.schema.json");
var update_single_item = require("./public/schemas/update_single_item.schema.json");
var update_multiple_items = require("./public/schemas/update_multiple_items.schema.json");
var get_item_history = require("./public/schemas/get_item_history.schema.json");
var get_items_history = require("./public/schemas/get_items_history.schema.json");
var get_receipt = require("./public/schemas/get_receipt.schema.json");
var bump_single_item = require("./public/schemas/bump_single_item.schema.json");
var get_bumped_items = require("./public/schemas/get_bumped_items.schema.json");
var enable_bumping = require("./public/schemas/enable_bumping.schema.json");
var disable_bumping = require("./public/schemas/disable_bumping.schema.json");
var buy_bump_packages = require("./public/schemas/buy_bump_packages.schema.json");
var get_steam_inventory = require("./public/schemas/get_steam_inventory.schema.json");
var deposit_steam_items = require("./public/schemas/deposit_steam_items.schema.json");
var get_steam_trades = require("./public/schemas/get_steam_trades.schema.json");
var get_active_steam_trades = require("./public/schemas/get_active_steam_trades.schema.json");
var get_wallet_transactions = require("./public/schemas/get_wallet_transactions.schema.json");
var get_wallet_pending_transactions = require("./public/schemas/get_wallet_pending_transactions.schema.json");
var get_wallet_reports = require("./public/schemas/get_wallet_reports.schema.json");
var generate_wallet_report = require("./public/schemas/generate_wallet_report.schema.json");
var download_wallet_report = require("./public/schemas/download_wallet_report.schema.json");
var deposit_binance = require("./public/schemas/deposit_binance.schema.json");
var get_litecoin_address = require("./public/schemas/get_litecoin_address.schema.json");
var get_bitcoin_address = require("./public/schemas/get_bitcoin_address.schema.json");
var use_gift_code = require("./public/schemas/use_gift_code.schema.json");
var deposit_zen = require("./public/schemas/deposit_zen.schema.json");
var add_card = require("./public/schemas/add_card.schema.json");
var deposit_card = require("./public/schemas/deposit_card.schema.json");
var withdraw_bitcoin = require("./public/schemas/withdraw_bitcoin.schema.json");
var withdraw_litecoin = require("./public/schemas/withdraw_litecoin.schema.json");
var withdraw_ethereum = require("./public/schemas/withdraw_ethereum.schema.json");
var withdraw_binance = require("./public/schemas/withdraw_binance.schema.json");
var withdraw_visa = require("./public/schemas/withdraw_visa.schema.json");
var schemas_array = [
  update_account,
  update_tradelink,
  bitSkins_api,
  historic_rewards,
  modify_affiliate_code,
  bitSkins_auth_token,
  verify_2FA_creation,
  disable_2FA,
  verify_2FA_disable,
  get_sales,
  get_pricing_summary,
  tf2_market,
  dota2_market,
  cs2_market,
  rust_market,
  user_store,
  get_item_details,
  search_skin,
  filters,
  buy_single_item,
  buy_multiple_items,
  buy_bulk_items,
  withdraw_single_item,
  withdraw_multiple_items,
  delist_single_item,
  delist_multiple_items,
  relist_single_item,
  relist_multiple_items,
  update_single_item,
  update_multiple_items,
  get_items_history,
  get_item_details,
  get_receipt,
  bump_single_item,
  get_bumped_items,
  enable_bumping,
  disable_bumping,
  buy_bump_packages,
  get_steam_inventory,
  deposit_steam_items,
  get_steam_trades,
  get_active_steam_trades,
  get_wallet_transactions,
  get_wallet_pending_transactions,
  get_wallet_reports,
  generate_wallet_report,
  download_wallet_report,
  deposit_binance,
  get_litecoin_address,
  get_bitcoin_address,
  use_gift_code,
  deposit_zen,
  add_card,
  deposit_card,
  withdraw_bitcoin,
  withdraw_litecoin,
  withdraw_ethereum,
  withdraw_binance,
  withdraw_visa,
];
const kill = require("kill-port");

app.use("/public", express.static(__dirname + "/public"));
app.use("/", database);
app.use(bodyParser.json());
console.log("You are in the right place");

app.get("/main", function (request, response) {
  fs.readFile("public/html/main.html", function (err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
});

app.get("/contact-us", function (request, response) {
  fs.readFile("public/html/contact-us.html", function (err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
});

app.get("/login", function (request, response) {
  fs.readFile("public/html/Login.html", function (err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
});

app.get("/forgot-password", function (request, response) {
  fs.readFile("public/html/forgot-password.html", function (err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
});

app.get("/signup", function (request, response) {
  fs.readFile("public/html/SignUp.html", function (err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
});

app.get("/profile-settings", function (request, response) {
  fs.readFile("public/html/profile-settings.html", function (err, text) {
    response.setHeader("Content-Type", "text/html");
    response.end(text);
  });
});

app.post("/get-schema", function (request, response) {
  var array_index = JSON.parse(request.body.num);
  if (array_index <= schemas_array.length - 1) {
    response.header("Content-Type", "application/json");
    response.status(200).json(schemas_array[array_index]);
  } else {
    response.status(500).json({ error: "The schema is not found" });
  }
});

app.post("/send-form", function (request, response) {
  if(request.body.type === "GET")
  {
    axios
      .get("https://api.bitskins.com" + request.body.url, {
        headers: {
          "content-type": "application/json",
          "x-apikey": request.body.form.API,
        },
      })
      .then((result) => response.send(result.data))
      .catch((error) => response.send(error.response.data));
  } else {
    axios.post("https://api.bitskins.com" + request.body.url, request.body.form, {
      "headers": {
        "content-type": "application/json",
        "x-apikey": request.body.form.API,
      },
    })
    .then(result => console.log('Request success', result.data))
    .catch(error => console.error('Request failed', error.response.data));
  }
});

app.listen(8080, "127.0.0.1", () => {
  process.on("exit", () => {
    // Kill the port when the process is about to exit
    kill(8080, "tcp").then(console.log).catch(console.log);
  });

  process.on("SIGINT", () => {
    process.exit(0);
  });
});
