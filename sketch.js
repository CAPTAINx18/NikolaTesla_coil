const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2;

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    box1 = new SteveJobs_box(625, 100, 100, 40);

    box2 = new SteveJobs_box(600, 140, 60, 40);

    ground = new G(600, 585, 1200, 25);






   // box1 = new SteveJobs_box(200, 200, 20, 20);

   
}

function draw(){
    background("plum");
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();

}
