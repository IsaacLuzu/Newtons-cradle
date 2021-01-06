
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobObject6,bobObject7,roofObject,rope1,rope2,rope3,rope4,rope5,rope6,rope7
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	bobObject1 = new Bob

	bobObject2 = new Bob

	bobObject3 = new Bob

	bobObject4 = new Bob

	bobObject5 = new Bob
	
	bobObject6 = new Bob

	bobObject7 = new Bob

	roofObject = new roof

	rope1 = new Rope(bobObject1.body.roofObject.body,-bobDiameter*2,0)

	rope2 = new Rope(bobObject2.body.roofObject.body,-bobDiameter*2,0)

	rope3 = new Rope(bobObject3.body.roofObject.body,-bobDiameter*2,0)

	rope4 = new Rope(bobObject4.body.roofObject.body,-bobDiameter*2,0)

	rope5 = new Rope(bobObject5.body.roofObject.body,-bobDiameter*2,0)

	rope6 = new Rope(bobObject6.body.roofObject.body,-bobDiameter*2,0)

	rope7 = new Rope(bobObject7.body.roofObject.body,-bobDiameter*2,0)


	engine = Engine.create();
	world = engine.world;
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  bobObject7.display();

  groundObject.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();
 rope7.display();

roofObject.display();

 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
