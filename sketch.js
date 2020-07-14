const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinko,particles;
var backgroundImg,platform;

var gameState = "onDiv";
var bg = "sprites/bg1.png";
var score = 0;

var gameState="";
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  div=new Division(100,100,50,50);

}
    


function draw() {
  background(255,255,255); 
  
div.display();
  drawSprites();
    
}

