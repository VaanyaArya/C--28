class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB
        
        this.Sling = Constraint.create(options);
        World.add(world,this.Sling);
    }
    fly(){
        this.Sling.bodyA = null;
    }
    display(){
        if (this.Sling.bodyA!==null){
        var posA = this.Sling.bodyA.position;
        var posB = this.pointB;
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);

        }
        
    }
}