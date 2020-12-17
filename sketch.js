//Create variables here
var dog1,dog,happyDog1, happyDog, database,foodS,foodStock
function preload()
{
dog1=loadImage("images/doglmg.png")
happyDog1=loadImage("images/doglmg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog.addImage(dog1)
  happyDog.addImage(happyDog1)
  firebase=database
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}


  drawSprites();
  //add styles here 
  textSize(20)
  fill("red")
  stroke("black")
  text("food stock")
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food.x
  })
}

