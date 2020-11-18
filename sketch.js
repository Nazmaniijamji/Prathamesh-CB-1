const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground1;
var sideL, sideR, sideC; 

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Ball(100, height/2, 25);
	ground1 = new Ground(width/2, height-5, 1000, 10);

	sideC = new RedBox1(595, 380, 150, 90);
	sideL = new RedBox1(520, 360, 60, 180);
	sideR = new RedBox1(680, 360, 60, 180);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  paper.display();
  ground1.display();

  sideC.display();
  sideL.display();
  sideR.display();

  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW)
    {
        Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
    }
}



