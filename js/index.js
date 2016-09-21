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
            var elem = document.getElementById("buynow");
            var newtag = document.createElement("input");
            newtag.setAttribute("type","button");
            newtag.setAttribute("onclick","window.open(" + result.text + ", '_system')");
            newtag.setAttribute("id","startBuy");
            newtag.setAttribute("class","btn-primary");
            newtag.setAttribute("value","JETZT BESTELLEN");
            newtag.appendChild(document.createTextNode("click"));
            elem.appendChild(newtag);
        }, 
        function (start) {
            window.open(result.text, '_system');
        }, 
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}
        