const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world;
var engine;
var box1;
var ground2;
var box2;
function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new box(200,300,50,50)
  ground2=new ground(200,370,450,50)
  box2=new box(240,100,50,100)

}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground2.display()
  box1.display()
  box2.display()
}