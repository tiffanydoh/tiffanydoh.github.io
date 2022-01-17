alert("I am connected")

var foundBomb = Math.floor(Math.random() * 8)
var foundTreasure = Math.floor(Math.random() * 8)
var counter = 5
//var randomNum = Math.floor(Math.random() * 8)
const treasure = (id) => {
  counter = counter - 1
  console.log("id:", id)
if(foundBomb === id){
 alert("Oh no, found Bomb! Keep Trying!")
document.getElementById(id).innerHTML = "&#x2620"
} else if (foundTreasure === id) {
  alert("Found Treasure!")
 document.getElementById(id).innerHTML = "&#x1f308"
} else {
  alert("Nothing Here. Try again!")
  document.getElementById(id).innerHTML = "&#x1f332"

if (counter === 0) {
  alert("Game Over!")
}



}
}
