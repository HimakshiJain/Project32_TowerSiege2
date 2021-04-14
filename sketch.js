const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, slingshot;

var score = 0;

var backgroundImg;

function preload(){
    getBgImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590,1200,10);

    stand1 = new Ground(500,400,400,15);
    stand2 = new Ground(1000,300,300,15);

    box1 = new Box(400,360,50,70);
    box2 = new Box(450,360,50,70);
    box3 = new Box(500,360,50,70);
    box4 = new Box(550,360,50,70);
    box5 = new Box(600,360,50,70);

    box6 = new Box(425,290,50,70);
    box7 = new Box(475,290,50,70);
    box8 = new Box(525,290,50,70);
    box9 = new Box(575,290,50,70);
    
    box10 = new Box(450,220,50,70);
    box11 = new Box(500,220,50,70);
    box12 = new Box(550,220,50,70);

    box13 = new Box(475,150,50,70);
    box14 = new Box(525,150,50,70);

    box15 = new Box(925,260,50,70);
    box16 = new Box(975,260,50,70);
    box17 = new Box(1025,260,50,70);
    box18 = new Box(1075,260,50,70);

    box19 = new Box(950,190,50,70);
    box20 = new Box(1000,190,50,70);
    box21 = new Box(1050,190,50,70);

    box22 = new Box(975,120,50,70);
    box23 = new Box(1025,120,50,70);

    box24 = new Box(1000,50,50,70);

    polygon = new Polygon(250,300,70,70);

    slingshot = new SlingShot(polygon.body,{x:250,y:300});
}

function draw(){

    if(backgroundImg){
    background(backgroundImg);
    }

    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();

    box24.display();

    polygon.display();

    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();

    textSize(30);
    fill("white");
    text("Drag the hexagonal stone and release it, to launch it towards the blocks", 10,50);
    text("Press space for an extra chance",10,100);
    text("Score: " + score, 10, 550);

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

async function getBgImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 6 && hour <18){
        bg = "./yellow.jpg";

    } else {
        bg = "./black.png";
    }

    backgroundImg = loadImage(bg);

}