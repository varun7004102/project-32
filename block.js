class Block{
    constructor(x,y,width,height){
       var option = {
        
        isStatic:false
       }
       this.Visiblity = 255
       this.body = Bodies.rectangle(x,y,width,height,option);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        console.log(this.body.speed)
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;  
       push();
       translate(pos.x,pos.y);  
       rotate(angle);
       rectMode(CENTER)   
       rect(0,0,this.width,this.height) 
       pop();
        }
        else{
                                       
          World.remove(world, this.body);
          push()
          this.Visiblity=this.Visiblity-5
          tint(255,this.Visiblity)
          pop()
        }
        


}
score(){
  if(this.Visiblity < 0 && this.Visiblity > -1005){
    score++
  }
}
}
    
    
    