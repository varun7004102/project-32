const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25
var polygon,string
var backgroundImage
var score = 0;
function preload(){
getBackgroundImage()

}
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(750,220,220,20)
    ground2 = new Ground(400,300,300,20)
    block1 = new Block(280,270,40,40)
    block2 = new Block(320,270,40,40)
    block3 = new Block(360,270,40,40)
    block4 = new Block(400,270,40,40)
    block5 = new Block(440,270,40,40)
    block6 = new Block(480,270,40,40)
    block7 = new Block(520,270,40,40)
    block8 = new Block(320,230,40,40)
    block9 = new Block(360,230,40,40)
    block10 = new Block(400,230,40,40)
    block11 = new Block(440,230,40,40)
    block12 = new Block(480,230,40,40)
    block13 = new Block(360,190,40,40)
    block14 = new Block(400,190,40,40)
    block15 = new Block(440,190,40,40)
    block16 = new Block(400,150,40,40)

    block17 = new Block(670,190,40,40)
    block18 = new Block(710,190,40,40)
    block19 = new Block(750,190,40,40)
    block20 = new Block(790,190,40,40)
    block21 = new Block(830,190,40,40)
    block22 = new Block(710,150,40,40)
    block23 = new Block(750,150,40,40)
    block24 = new Block(790,150,40,40)
    block25 = new Block(750,110,40,40)
    polygon = new Polygon(100,100,30)
    string = new String(polygon.body,{x:100,y:100})

    Engine.run(engine);

}
function draw() {
    if(backgroundImage)
    background(backgroundImage); 
    textSize(35)
    fill("white")
    text("score " + score, 750,40)
    Engine.update(engine);
    polygon.display();

    ground1.display(); 
    ground2.display(); 
    fill("white");
    block1.display();
    block1.score();
    fill("white");
    block2.display();
    block2.score();
    fill("white");
    block3.display();
    block3.score();
    fill("white");
    block4.display();
    block4.score();
    fill("white");
    block5.display();
    block5.score();
    fill("white");
    block6.display();
    block6.score();
    fill("white");
    block7.display();
    block7.score();
    fill("pink");
    block8.display();
    block8.score();
    fill("pink");
    block9.display();
    block9.score();
    fill("pink");
    block10.display();
    block10.score();
    fill("pink");
    block11.display();
    block11.score();
    fill("pink");
    block12.display();
    block12.score();
    fill("white");
    block13.display();
    block13.score();
    fill("white");
    block14.display();
    block14.score();
    fill("white");
    block15.display();
    block15.score();
    fill("pink");
    block16.display();
    block16.score();

    block17.display();
    block17.score();
    fill("pink");
    block18.display();
    block18.score();
    fill("pink");
    block19.display();
    block19.score();
    fill("pink");
    block20.display();
    block20.score();
    fill("pink");
    block21.display();
    block21.score();
    fill("white");
    block22.display();
    block22.score();
    fill("white");
    block23.display();
    block23.score();
    fill("white");
    block24.display();
    block24.score();
    fill("white");
    block25.display();
    block25.score();
    polygon.display();
    string.display();

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
    }
    function mouseReleased(){
    string.fly()
    }
    function keyPressed(){
        if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100})
        string.attach(polygon.body) 
        }   
        }
        async function getBackgroundImage(){
            var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
            var responseJSON = await response.json();
            console.log(responseJSON);
            var datetime  =responseJSON.datetime;
                var hour = datetime.slice(11,13)
            if(hour>=06 && hour<=19){
            bg = "bg1.jpeg"
            
            }
            else{
            bg = "bg2.jpeg"
            
            }
            backgroundImage = loadImage(bg)
            }