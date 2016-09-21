var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "Sie sitzen an  " + result.text + "<br>bitte nehmen Sie nun Ihre Bestellung vor";
            resultDiv.innerHTML = s;
        document.getElementById("startScan").value = "" + result.text ;
        document.getElementById("startScan").id = 'table';
            var elem = document.getElementById("buynow");
            var newtag = document.createElement("input");
            newtag.setAttribute("type","button");
            newtag.setAttribute("id","startBuy");
            newtag.setAttribute("class","btn-primary");
            newtag.setAttribute("onclick","window.location.href='" + result.text + "'");

        }, 
        function (start) {
            window.open(result.text, '_system');
        }, 
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}
        