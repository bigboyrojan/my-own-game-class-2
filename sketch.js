
var  dolphin, shark, fish, blobfish;
var dolphinimg, sharkimg, fishimg, blobfishimg;
var house, houseimg;
var daybackground, nightbackground;
var daybackgroundimg, nightbackgroundimg;



var diceanimation1,diceanimation2,diceanimation3,diceanimation4,diceanimation5,diceanimation6;

var backgroundImage,line;

var trackimg;
function preload(){
dolphinimg = loadImage("images/gamedolphin.png");
sharkimg = loadImage("images/gameshark.png");
fishimg = loadImage("images/gamefish.png");
blobfishimg = loadImage("images/gameblobfish.png");
houseimg = loadImage("images/gamehouse.png");
daybackgroundimg = loadImage("images/gamedaybackground.PNG");
nightbackgroundimg = loadImage("images/gamenightbackground.PNG");
diceanimation1 = loadImage("images/dice1.PNG");
diceanimation2 = loadImage("images/dice2.PNG");
diceanimation3 = loadImage("images/dice3.PNG");
diceanimation4 = loadImage("images/dice4.PNG");
diceanimation5 = loadImage("images/dice5.PNG");
diceanimation6 = loadImage("images/dice6.PNG");
backgroundImage = loadImage("images/gamedaybackground.png");
}

function setup(){
createCanvas(1000,1000);
dolphin = createSprite(50,50,30,30);
dolphin.addImage(dolphinimg);
dolphin.scale = 0.35;
shark = createSprite(950,920,30,30);
shark.addImage(sharkimg);
shark.scale = 0.45;
shark.depth = 10;
fish = createSprite(50,950,30,30);
fish.addImage(fishimg);
fish.scale = 0.4;
blobfish = createSprite(950,50,30,30);
blobfish.addImage(blobfishimg);
blobfish.scale = 0.5;
house = createSprite(500,500,30,30);
house.addImage(houseimg);
house.scale = 0.75;
line = createSprite(500,577,200,5);
line.shapeColor = "black";
}
function draw(){
    background(backgroundImage);
  // createEdgeSprites();
  var edge = createEdgeSprites();
   blobfish.bounceOff(fish);
   blobfish.bounceOff(shark);
   blobfish.bounceOff(dolphin);
   fish.bounceOff(blobfish);
   fish.bounceOff(shark);
   fish.bounceOff(dolphin);
   shark.bounceOff(dolphin);
   shark.bounceOff(blobfish);
   shark.bounceOff(fish);
   dolphin.bounceOff(shark);
   dolphin.bounceOff(blobfish);
   dolphin.bounceOff(fish);
blobfish.bounceOff(edge[2]);
blobfish.bounceOff(edge[0]);
blobfish.bounceOff(edge[1]);
blobfish.bounceOff(edge[3]);
fish.bounceOff(edge[2]);
fish.bounceOff(edge[0]);
fish.bounceOff(edge[1]);
fish.bounceOff(edge[3]);
dolphin.bounceOff(edge[2]);
dolphin.bounceOff(edge[0]);
dolphin.bounceOff(edge[1]);
dolphin.bounceOff(edge[3]);
shark.bounceOff(edge[2]);
shark.bounceOff(edge[0]);
shark.bounceOff(edge[1]);
shark.bounceOff(edge[3]);

if(keyDown("UP")){
blobfish.y = blobfish.y+5;
}

if (keyDown("DOWN")){
blobfish.x= blobfish.x-5;
}

if(keyDown("RIGHT")){
blobfish.y=blobfish.y-5;
}

if(keyDown("LEFT")){
blobfish.x=blobfish.x+5;
}

if(keyDown("W")){
dolphin.x = dolphin.x-5;
}

if(keyDown("A")){
dolphin.y = dolphin.y+5;
}

if(keyDown("S")){
dolphin.x=dolphin.x+5;
}

if(keyDown("D")){
dolphin.y=dolphin.y-5;
}

if(keyDown("I")){
shark.x=shark.x+5;
}

if(keyDown("J")){
shark.y = shark.y-5;
}

if(keyDown("K")){
shark.x = shark.x-5;
}

if(keyDown("L")){
shark.y=shark.y+5;
}

if(keyDown("T")){
fish.y = fish.y+5;
}

if(keyDown("F")){
fish.x = fish.x+5;
}

if(keyDown("G")){
fish.y = fish.y-5;
}

if(keyDown("H")){
fish.x = fish.x-5
}


    console.log(shark.depth);
drawSprites();
}

