function decodeErrorCode(errorcode) {
  switch (errorcode) {
    case "GLO_000":
      return "BitSkins Internal Error. Please Try Again Later.";
    case "GLO_001":
      return "The Action You Have Performed Is Not Allowed.";
    case "GLO_002":
      return "Access Denied.";
    case "GLO_003":
      return "BitSkins Validator Error.";
    case "GLO_004":
      return "BitSkinsAPI-Web Error. Please Contact Us For More Information.";
    case "GLO_005":
      return "The Token You Have Provided Is Invalid.";
    case "GLO_006":
      return "Please Provide Your Token.";
    case "GLO_007":
      return "Access Denied (ACL)";
    case "GLO_008":
      return "BitSkins Connection Timeout. Please Try Again Later.";
    case "GLO_009":
      return "Please Provide A Valid BitSkins API Key.";
    case "GLO_010":
      return "Not Found. Please Try Again Later.";
    case "GLO_011":
      return "The Value You Have Provided Is Invalid. Please Try Again.";
    case "GLO_012":
      return "The Token You Have Provided Has Expired. Please Direct To BitSkins To Obtain A New Token.";
    case "GLO_013":
      return "BitSkins Service Is Not Available. Please Try Again Later.";
    case "GLO_014":
      return "Please Provide Your 2 Factor Authentication Code.";
    case "GLO_015":
      return "Please Provide A Valid BitSkins API Key.";
    case "MUT_001":
      return "You Have Made Too Many Request To BitSkins. Please Try Again Later.";
    case "MUT_002":
      return "An Exclusive Lock Has Been Applied To Your BitSkins Account. Please Contact BitSkins Customer Service For More Information.";
    case "ACC_001":
      return "Your BitSkins Account Has Been Banned. Please Contact BitSkins Customer Service For More Information.";
    case "ACC_02":
      return "Your BitSkins Account Has Been Blocked. Please Contact BitSkins Customer Service For More Information.";
    case "ACC_03":
      return "Wrong Login Or Password. Please Try Again.";
    case "ACC_04":
      return "Wrong Login. Please Try Again.";
    case "ACC_05":
      return "Wrong Password. Please Try Again.";
    case "ACC_06":
      return "The Email Address You Have Provided Is not Assigned. Please Try Again";
    case "ACC_07":
      return "The Same Password Has Been Used. Please Provide A Different Password.";
    case "ACC_08":
      return "The 2 Factor Authentication Code You Have Provided Is Invalid. Please Try Again.";
    case "ACC_09":
      return "2 Factor Authentication Code Has Not Been Created. Please Try Again Later.";
    case "ACC_010":
      return "A 2 Factor Authentication Code Has Already Created.";
    case "ACC_011":
      return "2FA Limit Has Been Reached. Please Try Again Later.";
    case "ACC_012":
      return "The Account You Have Provided Does Not Exist. Please Contact BitSkins Customer Service For More Information.";
    case "ACC_013":
      return "The Account You Have Provided Has Been Migrated. Please Contact BitSkins Customer Service For More Information.";
    case "ACC_014":
      return "Password Need To Have 8 To 64 Characters And At Least One: Uppercase, Lowercase, Number, Special.";
    case "ACC_015":
      return "This BitSkins Account Has Been Permanently Deleted. Please Contact BitSkins Customer Service For More Information.";
    case "ACC_016":
      return "Entered Email Is The Same As The One Already Set Up. Please Use A Different One If You Want To Change It.";
    case "BSA_001":
      return "You Have Not Created An API Key. Please Direct To BitSkin To Create One.";
    case "BSA_002":
      return "You Have Already Created An API Key.";
    case "BSA_003":
      return "Your BitSkins Account Deletion Has Already Started.";
    case "BSA_004":
      return "External Withdraw Is Currently Not Availble. Please Contact BitSkins Customer Service For More Information.";
    case "BSA_005":
      return "KYC Wrong Step";
    case "BSA_006":
      return "KYC Required";
    case "BSA_007":
      return "The Action You Have Performed Is Not Permitted. Please Try Again Later.";
    case "API_001":
      return "The API Key Is Missing. Please Try Again.";
    case "API_002":
      return "The API Secret Is Missing. Please Try Again.";
    case "API_003":
      return "The IP Address Is Wrong. Please Direct To BitSkins To Register Your Current IP Address.";
    case "API_004":
      return "The IP Address Is Private. Please Direct To BitSkins To Register Your Current IP Address.";
    case "API_005":
      return "The API Key You Have Provided Is Invalid. Please Try Again.";
    case "REC_001":
      return "The Item You Are Looking For Is Not Found. Please Try Again.";
    case "REC_002":
      return "The Item You Are Looking For Is Not Owned. Please Try Again.";
    case "REC_003":
      return "The Item You Are Looking For Is Owned By You. Please Try Again.";
    case "REC_004":
      return "Already Exists";
    case "REC_005":
      return "Not Exists";
    case "REC_006":
      return "Not Updated";
    case "REC_007":
      return "Forbidden";
    case "PAY_001":
      return "The Card You Have Provided Has Low Score. Please Contact Your Card Provided For More Inforamtion.";
    case "PAY_002":
      return "The Card You Have Provided Has Payment Issue. Please Contact Your Card Provided For More Information.";
    case "AUTH_001":
      return "Failed To Authenticat. Please Try Again.";
    case "AUTH_002":
      return "Not Valid Identity. Please Try Again.";
    case "AUTH_003":
      return "Authentication Failed. Please Try Again.";
    case "IPN_001":
      return "Verification Issue. Please Try Again.";
    case "BSM_001":
      return "The Item You Have Request Has Wrong Item Status. Please Try Again.";
    case "BSM_002":
      return "The Item You Have Request Has Already Been Queued. Please Try Again.";
    case "BSM_003":
      return "You Have Reached The Max Price Limit. Please Try Again.";
    case "BSM_004":
      return "The Item You Have Requested Is Not Available. Please Try Again.";
    case "BSM_005":
      return "The Plan You Are Looking For Is Not Found. Please Try Again.";
    case "BSM_006":
      return "The Item You Have Requested Is Not Found. Please Try Again.";
    case "BSM_007":
      return "You Have Reached The Item Limit. Please Try Again.";
    case "BSM_008":
      return "The Instance Sell Functionality Has Been Disabled.";
    case "BSM_009":
      return "The Price You Have Set Is Too Low. Please Try Again.";
    case "BSM_010":
      return "BitSkins' Withdrawal Queue Is Currently Full. Please Try Again In Few Minutes";
    case "BSS_001":
      return "You Have Provided An Invalid Steam Trade Link. Please Direct To Steam To Obtain A Valid Trade Link.";
    case "BSS_002":
      return "You Have A Private Steam Inventory. Please Try Again.";
    case "BSS_003":
      return "BitSkins Is Not Able To Check For Steam Trade Ban. Please Try Again Later.";
    case "BSS_004":
      return "BitSkins Is Not Ablt To Check For Steam Trade Escrow. Please Try Again Later.";
    case "BSS_005":
      return "Your Steam Account Has Been Vac Banned...";
    case "BSS_006":
      return "You Steam Account Has A Community Ban...";
    case "BSS_007":
      return "Your Steam Account Has An Economy Ban...";
    case "BSS_008":
      return "You Have A Private Steam Account. Please Try Again.";
    case "BSS_009":
      return "You are using email Steam Guard which is not enough to trade with our bots. You have to active mobile Steam Guard to be able to trade with our bots";
    case "BSS_010":
      return "You Have Provided An Invalid Token. Please Try Again.";
    case "BSS_011":
      return "We Are Missing Your Steam Trade Link. Please Try Again.";
    case "BSS_012":
      return "We Are Missing Your Steam ID. Please Try Again.";
    case "BSS_013":
      return "No Connection With Steam, Servers May Be Down. Please Try Again Later.";
    case "BSS_014":
      return "You Need To Set Up Your Steam Account Before Interacting With BitSkins. Please Try Again Later.";
    case "BSS_015":
      return "You must enable Steam Guard before you can participate in a trade. Enable Steam Guard from the Steam Client Settings window";
    case "BSB_001":
      return "The Bot Is Not Found. Please Try Again Later.";
    case "BSB_002":
      return "The Bot Is Not Available. Please Try Again Later.";
    case "BSW_001":
      return "BitSkins Is Unable To Transfer Your Funds. Please Try Again Later.";
    case "BSW_002":
      return "Your BitSkins Wallet Funds Is Negative...";
    case "BSW_003":
      return "Your BitSkins Wallet Funds Is Positive.";
    case "BSW_004":
      return "Your Card Scoring Is Too Low. Please Contact Your Card Provider For More Information.";
    case "BSW_005":
      return "You Do Not Have Enough BitSkins Wallet Funds To Perform This Action. Please Try Again Later.";
    case "BSW_006":
      return "You Have Reached The KYC Limit. Please Try Again Later.";
    case "BSW_007":
      return "You Have Reached The Service Window Limit. Please Try Again Later.";
    case "BSW_008":
      return "You Have Reached The Amount Limit. Please Try Again Later.";
    case "BSW_009":
      return "You Have Provided An Invalid Crypto Wallet Address. Please Try Again.";
    case "BSW_010":
      return "The Card You Have Provided Is Not Found. Please Try Again.";
    case "BSW_011":
      return "BitSkins Is Unable To Process Your Transaction. Please Contact BitSkins Customer Service For More Information.";
    case "BSW_012":
      return "Only The Past Month Is Accepted.";
    case "BSW_013":
      return "This Action Only Accepts VISA Cards. Please Try Again.";
    case "BSGC_001":
      return "The Gift Card You Have Provided Is Not Found. Please Try Again.";
    case "BSGC_002":
      return "The Gift Card You Have Provided Has Been Used.";
    case "BSGC_003":
      return "The Code You Have Provided Is Your Own.";
    case "BAFF_001":
      return "Same Code.";
    case "BAFF_002":
      return "The Code You Have Provided Is Already Taken.";
    case "BAFF_003":
      return "Your Affiliation Code Is Not Activated.";
    case "BAFF_004":
      return "You Do Not Have Enough Funds To Perform This Action.";
    case "BSSOC_001":
      return "Unable To Create Chat.";
    case "BSSUP_001":
      return "Wrong Status";
    case "BSSUP_002":
      return "You Have Reached The Ticket Limit. Please Try Again Later.";
    case "BAM_STEAM_015":
      return "BitSkins' Bots Have Lost Connection With Steam. Please Try Again Later.";
    default:
      return `${errorcode} Unknown. Please Contact BitSkins Customer Service For More Information.`;
  }
}
