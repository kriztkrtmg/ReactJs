let myArray =  ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]


let btn = document.getElementById("onAddPlace");
btn.addEventListener("click", addPlace);

let btnRemove = document.getElementById("onRemovePlace");
btnRemove.addEventListener("click", removePlace)


function addPlace() {
    let newPlace = document.getElementById("inputAdd").value;
    if(newPlace == ''){
        alert("Input Empty");
    }else{
        myArray.push(newPlace);
        document.getElementById("myFavouritePlace").innerHTML = "My Favourite Place : " + JSON.stringify(myArray) ;
        document.getElementById("arrayLength").innerHTML = "Length of array : " + myArray.length;
    }
    
}

function removePlace() {
    let copyArray = myArray.map(myArray => myArray.toLowerCase())
    
    let getIndex = copyArray.indexOf("kathmandu");
    if (getIndex > -1) {
        myArray.splice(getIndex, 1)
    }else {
        alert("There is no Kathmandu in the list.");
    }
    document.getElementById("myFavouritePlace").innerHTML = "My Favourite Place : " + JSON.stringify(myArray) ;
    document.getElementById("arrayLength").innerHTML = "Length of array : " + myArray.length;                                                      

}
