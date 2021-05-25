class SlingShot
{
    constructor(bodyA,pointB)
    {
        var options=
        {
        bodyA:bodyA,
        pointB:pointB,
        lenght:15,
        stiffness:0.03
        }
        this.sling=Matter.Constraint.create(options)
        World.add(world,this.sling)
        this.pointB=pointB
    }
    display()
    {
    if(this.sling.bodyA)
    {

     
      var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }
    fly()
    {
    this.sling.bodyA=null
    }

    attach(body)
    {
        this.sling.bodyA=body
    }

}