
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, dustbin1, ground1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(200,450,40)
dustbin1=new dustbin(660,650)
ground1=new ground(400,670,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper1.display();
 dustbin1.display();
 ground1.display();
}
function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

}





}


