var  shooterImg, shooterShootingImg, backGround, backGroundImg
var zombie, zombieImg, zombieGroup
var  heart1, heart2, heart3, heart1Img, heart2Img, heart3Img, bulletGroup
var bullets = 70
var score




function preload(){
shooterImg= loadImage("assets/shooter_2.png")
shooterShootingImg = loadImage("assets/shooter_3.png")
backGroundImg = loadImage("assets/bg.jpeg")
zombieImg = loadImage("assets/zombie.png")
heart1Img = loadImage("assets/heart_1.png")
heart2Img = loadImage("assets/heart_2.png")
heart3Img = loadImage("assets/heart_3.png")


}
function setup(){
    // creating a canvas
    createCanvas(windowWidth,windowHeight)
    // add bg image and creating a sprite
    backGround = createSprite(displayWidth/2 - 40, displayHeight/2 - 40, 20,20);
    backGround.addImage(backGroundImg);
    backGround.scale = 1.1
// add shooter image
    shooter = createSprite(displayWidth-1000, displayHeight-300, 50, 50);
    shooter.addImage(shooterImg);
    shooter.scale = 0.5
    shooter.setCollider("rectangle",0,0,300,300)
    shooter.debug = true

    //heart aprite
    heart1 = createSprite(displayWidth-150, 40, 20,20);
    heart1.addImage(heart1Img)
    heart1.scale = 0.25
    heart2 = createSprite(displayWidth-100, 40, 20,20);
    heart2.addImage(heart2Img)
    heart2.scale = 0.25
    heart3 = createSprite(displayWidth-200, 40, 20,20);
    heart3.addImage(heart3Img)
    heart3.scale = 0.25


    //zombie group
    zombieGroup = new Group();
    bulletGroup = new Group();

}

function draw(){
background("0");
fill("white")
text("x: "+ mouseX + " y: "+ mouseY, mouseX, mouseY);
//text("Score:"+score,20, 20 )
//move up
if(keyDown("UP_ARROW")||touches.length>0){
    shooter.y = shooter.y-10
}
// move down
if(keyDown("DOWN_ARROW")||touches.length>0){
    shooter.y= shooter.y+10
}

//change img to and fro
if(keyDown("SPACE")){
   
    bullet = createSprite(displayWidth- 1150, shooter.y-30, 20,20);
    bullet.velocityX =  20
    bulletGroup.add(bullet);

    shooter.depth = bullet.depth
    shooter.depth = shooter.depth+2
    
    shooter.addImage(shooterShootingImg)
    bullets = bullets-1
}else if(keyWentUp("SPACE")){
    shooter.addImage(shooterImg)
}
// destroy zombie by bullet
if(zombieGroup.isTouching(bulletGroup)){
    for(var i = 0; i<zombieGroup.length; i++){
        if(zombieGroup[i].isTouching(bulletGroup)){
            zombieGroup[i].destroy();
            bulletGroup.destroyEach();
        }
    }
}



// destroy zombie by shooter
if(zombieGroup.isTouching(shooter)){
    for(var i = 0; i<zombieGroup.length;i++){
        if(zombieGroup[i].isTouching(shooter)){
            zombieGroup[i].destroy();
        }
    }
}

enemy();

drawSprites();



}
function enemy(){
if(frameCount%50===0){
zombie = createSprite(random(500, 1100), random(100,500), 40, 40);
zombie.addImage(zombieImg);
zombie.scale = 0.25;
zombie.velocityX =  - 4
zombieGroup.add(zombie);
zombie.setCollider("rectangle", 0, 0, 400, 400);
zombie.debug = true
zombie.lifeTime = 400
}}

