class Rope{
constructor(body1,body2,offsetX,offsetY)
{
this.offsetX=offsetX
this.offsetY=offsetY
var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.offsetX,y:this.offsetY},
isStatic: false,
pointA:bodyA

}
this.rope = Constraint.create(options),
World.add (world,this.rope)

}
attach(body){
this.rope.bodyA = body
    }
    
fly(){
this.rope.bodyA = nell
    }

display(){

    if(this.body.rope.bodyA){

        var pointA_pos = this.bodyA.position;
        var PointB_pos = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }

 }
}