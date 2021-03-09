const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;
var ground;
function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
  
var ground_options = {
  isStatic : true
}

ground = Bodies.rectangle(200, 100, 50, 70, ground_options);
World.add(world, ground);

}

function draw() {
  background(0); 

  rectMode(CENTER)
 rect(ground.position.x, ground.position.y, 50, 70 )
}