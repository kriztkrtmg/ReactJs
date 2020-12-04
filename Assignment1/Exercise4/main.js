
let btn = document.getElementById("onClickTip");
btn.addEventListener("click", tipCalculator);


function tipCalculator() {
    let totalAmount = document.getElementById("totalAmount").value;
    let tipPercentage =  document.getElementById("tipPercentage").value;
    tip = (tipPercentage * totalAmount) / 100;
    document.getElementById("tipResult").innerHTML = "Tip to give : Nrs " + tip + " /-"; 
}