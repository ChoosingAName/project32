const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15
var box16, box17, box18, box19, box20, box21, box22, box23, box24, box25
var platform, platform2;
var cannonthing, slingshot;
var background1
var bg
var esomething, lightimage, darkimage


function preload(){
    gettime()
}

function setup(){
    canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(375, 325, 350, 10);
    platform2 = new Ground(750,200,300,10)

    box1 = new Box(460,300,50,75);
    box2 = new Box(425,300,50,75);
    box3 = new Box(395,300,50,75)
    box4 = new Box(345,300,50,75)
    box5 = new Box(285,300,50,75)
    box6 = new Box(245,300,50,75)
    box7 = new Box(285,205,50,75)
    box8 = new Box(335,205,50,75)
    box9 = new Box(385,205,50,75)
    box10 = new Box(435,205,50,75)
    box11 = new Box(485,205,50,75)
    box12 = new Box(380,100,50,75)
    box13 = new Box(330,100,50,75)
    box14 = new Box(490,300,50,75)
    box15 = new Box(430,100,50,75)
    box16 = new Box(630,100,50,75)
    box17 = new Box(680,100,50,75)
    box18 = new Box(730,100,50,75)
    box19 = new Box(780,100,50,75)
    box20 = new Box(830,100,50,75)
    box21 = new Box(680,20,50,75)
    box22 = new Box(730,20,50,75)
    box23 = new Box(780,20,50,75)
    box24 = new Box(730,-70,50,75) 
    box25 = new Box(375,20,50,75)  

  
    cannonthing = new Ball(100,10,30,10)

    slingshot = new SlingShot(cannonthing.body,{x:200, y:100});
}

function draw(){
    if(bg)
    background(bg)
    else{   
    background("white")
    }
    Engine.update(engine);
    strokeWeight(4);
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    slingshot.display();
    ground.display();
    platform.display()
    platform2.display()
    cannonthing.display()
}

function mouseDragged(){
    Matter.Body.setPosition(cannonthing.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode > 0 && keyCode < 127)
    slingshot.attach(cannonthing.body);
}

async function gettime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York")
    var responsejson = await response.json()
    var hour = responsejson.datetime.slice(11,13)
    console.log(responsejson)
    if(hour >= 06 && hour <= 18){
        bg = loadImage("light.jpg");
    }
    else{
        bg = loadImage("dark.jpg");
    }
    
}



