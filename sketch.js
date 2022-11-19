var ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,690,1500,20)
	leftside = new Ground(900,620,20,120)
	rightside = new Ground(1100,620,20,120)

	//Create the Bodies Here.
	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	ball=Bodies.circle(50,50,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  ellipseMode(CENTER)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  leftside.show();
  rightside.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x : 85, y : -85})
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x : -85, y : -85})
	}
}

