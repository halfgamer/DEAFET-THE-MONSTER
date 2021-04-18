const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;


function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(300,800,150);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(800, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5=new Box(900,100,70,70)
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);
  box13=new Box(900,100,70,70)
  box14 = new Box(800, 100, 70, 70);
  box15 = new Box(800, 100, 70, 70);
  box16= new Box(800, 100, 70, 70);
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  


  hero.display();
  //rope.display();
  monster.display();
  movehero();
  push ();
  textSize(30)
  fill("green")
  text ("-OH NO ", this.x+100,this.y-250)
  pop ();
fill("blue")
  textSize(30)
  text("use the up,down ,left,right arrows to move the super hero,press the left mouse click to release the super hero",5,20);
  text ("press space to stop the movement of the super hero",5,40)
}
function movehero(){
if (keyCode=== LEFT_ARROW){
  Matter.Body.applyForce(hero.body,hero.body.position,{x:-150,y:0})
}
if (keyCode=== RIGHT_ARROW){
Matter.Body.applyForce(hero.body,hero.body.position,{x:150,y:0})
console.log("hello")
}
if (keyCode=== UP_ARROW){
  Matter.Body.applyForce(hero.body,hero.body.position,{x:0,y:-150})
}
if (keyCode=== DOWN_ARROW){
Matter.Body.applyForce(hero.body,hero.body.position,{x:0,y:150})
console.log("hello")
}
}
function  mouseReleased(){
 rope.fly();
}
