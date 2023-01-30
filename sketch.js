let canvas;
let button;

let food = 0;
let feeding = false;

let hungry = 0;
let full = 1;
let tamaState = hungry;

let tamaX;
let tamaY;
let tamaDiam;

function setup() {

  canvas = createCanvas(500, 500);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  tamaX = width/2;
  tamaY = height/2;
  tamaDiam = width/3;

  addGUI();
  addGUI2();
  addGUI3();
}

function draw() {
  background(244, 132, 95);
  
  //Drawing
  noStroke();

  //manage state of Tama
  if(tamaState == hungry){
    fill(189, 224, 254);

    //manage switching to full state
    if(tamaDiam > width/2){
      tamaState = full;
    }

  }else if(tamaState == full){
    //full color
    fill(255, 217, 136);

    //manage returning to hungry state
    if(tamaDiam > width/3){
      if(frameCount % 2 == 0) tamaDiam--; // reduce every second frame
    }else{
      tamaState = hungry;
    }
  }

  //draw Tama and closed mouth
  circle(tamaX,tamaY,tamaDiam);
  //fill(255, 242, 225);
  circle(tamaX-tamaDiam/2,tamaY - tamaDiam/2, tamaDiam/3);
  circle(tamaX+tamaDiam/2,tamaY - tamaDiam/2, tamaDiam/3);
  fill(255, 110, 74);
  let mouthOffset = tamaDiam/2;
  rect(tamaX-mouthOffset/2,tamaY,mouthOffset,3);


  if(food > 0 ){

    //Tama Eat
    if(frameCount % 30 < 15 && tamaState == hungry){
      eatFood();
    }

    //draw food
    fill(100);
    circle(tamaX,tamaY+food,food);

  }else if(feeding){
    //manage button state, only do this once IF the button is inactive
    feeding = false;
    button.html("FEED");
    button.removeClass("inactive");
  }
  

}
// function touching(){
//   if()
// }

function eatFood(){

  //draw open mouth
  fill(0);
  circle(tamaX,tamaY,tamaDiam/2);

  //reduce food & grow Tama
  food --;
  tamaDiam++;

}

function addGUI()
{

  //add a button
  button = createButton("FEED");

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}
function addGUI2()
{

  //add a button
  button = createButton("TOUCH");

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  // button.mousePressed(handleButtonPress2); 

}

function addGUI3()
{

  //add a button
  button = createButton("CLEAN");

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  // Adding a mouse pressed event listener to the button 
  // button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    if(!feeding){
      //set food to random value
      food = random(40,60);
      feeding = true;

      //manage button state
      button.html("FEEDING");
      button.addClass("inactive");
    }
  
  function handleButtonPress2()
{
    
    }
  

    
}

