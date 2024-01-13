let changeColorButton = document.querySelector("#change-color");
let changeShapeButton = document.querySelector("#change-Shape");
//random color generator
function randomColor(){
    let colorCode = "0123456789abcdef";
    let getColor = "#";
    for(let i=0; i<6; i++){
        let colorIndex = Math.floor(Math.random()*colorCode.length);
        getColor+=colorCode[colorIndex];
    }
    return getColor;
}
//circle target and color change
let circle = document.querySelector("#circle");
changeColorButton.addEventListener("click", function(e){
    let circleColor = randomColor();
    circle.style.backgroundColor = circleColor;
    console.log(e);
});
let Shape = document.querySelector(".shape");
let shapeArr = [ "square", "triangle", "tri", "tri-dow","diamond", "star-six", ""];
function randomShape(){
    let getShape = Math.floor(Math.random()*shapeArr.length)
    let getShapeId =  shapeArr[getShape];
    return getShapeId;
   
}
console.log(randomShape());
changeShapeButton.addEventListener("click", ()=>{
    let getshapes = randomShape();
    Shape.setAttribute("id" , getshapes);
});
//console.log(shapeArr);





