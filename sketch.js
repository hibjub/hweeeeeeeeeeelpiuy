
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
//var rope1,rope2,rope3,rope4,rope5;
var platform;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(320,400,30);
	ball2 = new Ball(360,400,30);
	ball3 = new Ball(400,400,30);
	ball4 = new Ball(440,400,30);
  ball5 = new Ball(480,400,30);

  platform = new Platform(400,250,200,30);

  rope1 = new String(ball1.body,platform.body,30);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  platform.display();

  rope1.display();
 
}



