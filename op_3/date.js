var form = document.getElementById("form");
form.addEventListener("submit", onsubmit)
function onsubmit(event) {
    event.preventDefault();

    var nu = Date.now();
    var eenDag = 86400000;
    var factuurdatum = document.getElementById("factuurdatum").value;

    var vandaag = new Date(nu);
    document.getElementById("vandaag").innerHTML = "Vandaag is: " + vandaag;

    var factuurdatum = new Date(factuurdatum);
    document.getElementById("factuurdatum").innerHTML = "Factuurdatum is: " + factuurdatum;

    var termijn = new Date(factuurdatum.getTime() + eenDag * 30);
    document.getElementById("termijn").innerHTML = "Betaal voor: " + termijn;

    var verschil = Math.abs(vandaag - termijn);
    var dagen = verschil / eenDag;

    if (vandaag > termijn) {
        alert("Meld incassobureau");
        document.getElementById("dagen").style.color = "red";
        document.getElementById("dagen").innerHTML = "Meld incassobureau";
    } else {
        document.getElementById("dagen").innerHTML = "Dagen over: " + dagen.toFixed();
        document.getElementById("dagen").style.color = "green";
    }
}

