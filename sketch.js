
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(500, 400, 30)
	bob2 = new Bob(560, 400, 30)
	bob3 = new Bob(620, 400, 30)
	bob4 = new Bob(440, 400, 30)
	bob5 = new Bob(380, 400, 30)
	
	roof1 = new roof(500, 100, 500, 10)

	rope1 = new Rope(bob1.body, roof1.body, 0,0)
	rope2 = new Rope(bob2.body, roof1.body, 60,0)
	rope3 = new Rope(bob3.body, roof1.body, 120,0)
	rope4 = new Rope(bob4.body, roof1.body, -60,0)
	rope5 = new Rope(bob5.body, roof1.body, -120,0)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("yellow");
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	
	roof1.display()

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-20 , y: -20})
	}
}

