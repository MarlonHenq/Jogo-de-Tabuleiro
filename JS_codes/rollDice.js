function randomNumber(min, max) { //Dice 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function rolldice(){
    number = randomNumber(1, 6)
    alert("Dado: " + number)
}