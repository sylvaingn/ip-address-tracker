var ip = "8.8.8.8";
var api_key = "at_FWBSkfb9I8gY2uxfpyLan6cWLmPdk";
jQuery(function () {
    jQuery.ajax({
        url: "https://geo.ipify.org/api/v1?apiKey=at_FWBSkfb9I8gY2uxfpyLan6cWLmPdk&ipAddress=8.8.8.8",
        dataType: "jsonp",
        data: { apiKey: api_key, ipAddress: ip },
        success: function (data) {
            $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
        }
    });
});