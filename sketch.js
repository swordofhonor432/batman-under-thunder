var person,personImg
var thunder,thunderImg

function preload(){
    thunderImg=loadImage("3.png");
    personImg=loadImage("walking_8.png");
}

function setup(){
   canvas = createCanvas(500,800);
    person=createSprite(150,690);
    thunder=createSprite(250,100);
    person.addImage("person",personImg)
    thunder.addImage("thunder",thunderImg)
}

function draw(){
    background("black")
    person.scale=0.4;
    thunder.scale=0.5;
    drawSprites();
}   

