
if (typeof omgage_checkJS == 'undefine') {
  var omgage_checkJS = 1;
    var omg_age_verifier_shopName = Shopify.shop;
    var rootlinkAgeVerifier = "https://apps.omegatheme.com/age-verifier";

    if (typeof $ == "undefined") {
        javascript: (function (e, s) {
            e.src = s;
            e.onload = function () {
                $ = jQuery.noConflict();
                //omgage_init();
            };
            document.head.appendChild(e);
        })(
            document.createElement("script"),
            "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
        );
    } else {
        //omgage_init();
    }
}
