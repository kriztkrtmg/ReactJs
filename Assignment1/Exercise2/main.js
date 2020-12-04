

let btn = document.getElementById("btnToCalculate");
btn.addEventListener("click", calcCircumference);

function calcCircumference() {
    
    let rad = document.getElementById("inputRadius").value;
    if(rad == ''){
        alert("Input Empty");
    }else {
        result = 2 * Math.PI * rad;
        console.log(typeof(result))
        document.getElementById("outputResult").innerHTML = "Circumference of radius " + rad + " is : " + result.toFixed(2) + "cm";
    }
    

}


