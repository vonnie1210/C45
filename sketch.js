var bgImg, blueOrbImg, coinImg, ghostImg, ghostCatcherImg;
var catcher;
var ghost;
var bg;
var coin;
var orb;

function preload(){
    bgImg = loadImage("./assets/background.png");
    blueOrbImg = loadImage("./assets/blueOrb.png");
    coinImg = loadImage("./assets/coin.png");
    ghostImg = loadImage("./assets/ghost.PNG");
    ghostCatcherImg = loadImage("./assets/ghostCatching.PNG");
}

function setup() {
 createCanvas(1000,500);
 bg = createSprite(500,250);
 bg.addImage("bgImg", bgImg);
 bg.scale = 0.5;

 ghost = createSprite(800,375,20,20);
 ghost.scale = 0.2;
 ghost.addImage(ghostImg);

 catcher = createSprite(150,350,20,20);
 catcher.scale = 0.13;
 catcher.addImage(ghostCatcherImg);

}

function draw() {
    background(220);
    text(mouseX+","+mouseY,mouseX,mouseY);

    if(keyDown("RIGHT_ARROW")){
        catcher.x = catcher.x + 1;
    }
    drawSprites();
}