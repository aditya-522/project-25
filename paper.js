 class paper{

constructor(x,y,radius){

var options={
    isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

}
this.x=x
this.y=y
this.radius=radius
this.body=Bodies.circle(this.x,this.y,this.radius,options)
World.add(world,this.body)
this.image=loadImage("paper.png")
}
display(){
var pos=this.body.positon
var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("purple")
        image(this.image,0,0,this.radius,this.radius);
        pop();





}


}