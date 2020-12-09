class Polygon{
    constructor(x, y,r) {
        var options = {
          isStatic:false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
       
        this.x=x;
        this.y=y;
        this.r=r
        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
      }
}
