
let myMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let myDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
let myDate = new Date();

document.getElementById("currentDate").innerHTML = myDate.getDate() + " " + myMonth[myDate.getMonth()] + " " 
                                                    + myDate.getFullYear() + ", " + myDay[myDate.getDay()];

let interval = setInterval(myTime, 50);

function myTime() {
    let myDate = new Date();
    document.getElementById("currentTime").innerHTML = myDate.toLocaleTimeString();
}

    


