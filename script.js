//get all elements
let colorContainer = document.getElementById('wave');


//variable for global scope
let colorList


//function to refresh color
function refreshColor(){

fetch("https://random-flat-colors.vercel.app/api/random?count=49")
.then((response) => response.json())
.then((data) => {
    
    colorList = data.colors;
    let randomNo =Math.floor( Math.random() * 49);

    let chosenColor = colorList[randomNo]
    colorContainer.style.backgroundColor = chosenColor;
    
    
})}


//function to toggle level
let a = 0;
function toggleLevel(){
    
    if(a===0){
    colorContainer.classList.add("waves")
    a=1;
    }
    
    else{
        colorContainer.classList.remove("waves");
        a=0;
    }
    // console.log(a)
}


