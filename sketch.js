var bob1, bob2, bob3, bob4, bob5
var platform;
var rope1, rope2, rope3, rope4, rope5
var world, engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 400);

	bob1 = new Bob(235, 300);
	bob2 = new Bob(255, 300);
	bob3 = new Bob(275, 300);
	bob4 = new Bob(295, 300);
	bob5 = new Bob(315, 300);
	platform = new Ground(275, 200, 120, 10);
	rope1 = new Rope(bob1.body, {x:235, y:200});
	rope2 = new Rope(bob2.body, {x:255, y:200});
	rope3 = new Rope(bob3.body, {x:275, y:200});
    rope4 = new Rope(bob4.body, {x:295, y:200});
    rope5 = new Rope(bob5.body, {x:315, y:200});

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  background(220);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  platform.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob5.body, bob5.body.position,{x:9999999999999999999999999, y:0})
		console.log("Aziz")
	}
}


