
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var leftWall;
var rightWall
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	leftWall = new Ground(1000,600,20,120);
	rightWall = new Ground(1150,600,20,120);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2


	}

	ball = Bodies.circle(200,100,20, ball_options);
	World.add(world, ball);
	





	

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  leftWall.show();
  rightWall.show();

  ellipse(ball.position.x, ball.position.y, 20);
 // Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 80,y:-80});
		//Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0,y:-0.05});	
	}

	
}



