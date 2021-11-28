//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var shelf;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  shelf = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,shelf);

  var rock_options = {
    restitution:0.3
  }
  rock = Bodies.circle(300,20,10,rock_options);
  World.add(world,rock);

  var ball_options = {
    restitution: 1.5,
    frictionAir:0.01
  } 
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(shelf.position.x,shelf.position.y,200,10);
  ellipse(rock.position.x,rock.position.y,20);
 
}

