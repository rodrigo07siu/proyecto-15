
 var PLAY = 1;//Declarar la variable para PLAY,END 
 var END = 0;//inicializar el valor para la variable
 var gameState = PLAY;//Asignar el valor de gameState como PLAY
 var redBalloon;
 var blueBalloon;
 var pinkBalloon;
 var greenBalloon;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear el fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 redB= new Group();
 
  arrowGroup= new Group();

  
}



function draw() {
 background(0);
//Agregar la condición para gameState=PLAY
  if (gameState === PLAY){
  //mover el arco
  bow.y = World.mouseY

  //mover el fondo
    scene.velocityX = -3

  if (keyDown("space")) {
    createArrow();
     }
     if (scene.x < 0){
      scene.x = scene.width/8;
    }
  


}

   function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1

}

//Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1:redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
  
   //Liberar la flecha al presionar la barra espaciadora
  
  
  //crear enemigos continuamente
  

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();

    gameState=END; 


}
 if (gameState === END){               //escribir una condición para END state (estado END)
 
   arrowGroup.destroyEach();
 
 scene.velocityX = 0;
 }         
 //Agregar el código para destruir el arco 
 //establecer la velocidad del fondo como 0
 





 
  
  drawSprites();
text("puntuacion:",30,50)//Agregar el texto de la condición para que se muestre la puntuación.
}


