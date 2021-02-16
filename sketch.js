var gardenImg,garden;
var cat,catImg1,catImg2,catImg3;
var rat,ratImg1,ratImg2,ratImg3;

function preload() {
    gardenImg=loadImage("images/garden.png")
    catImg1=loadImage("images/cat1.png");
    ratImg1=loadImage("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    ratImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadAnimation("images/cat4.png");
    ratImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(400,300,10,10);
    garden.addImage(gardenImg);

    cat=createSprite(700,500,10,10);
    cat.addImage(catImg1);
    cat.scale=0.17

    rat=createSprite(150,500,10,10);
    rat.addImage(ratImg1);
    rat.scale=0.10
    
}

function draw() {

    background(255);
    
    
    if(cat.x-rat.x<(cat.width-rat.width)/2){
    cat.velocityX=0
    cat.addAnimation("catLastImage",catImg3);
    cat.changeAnimation("catLastImage");
    rat.addAnimation("ratLastImage",ratImg3);
    rat.changeAnimation("ratLastImage");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      rat.addAnimation("mouseClapping",ratImg2);
      rat.changeAnimation("mouseClapping");
   }


}
