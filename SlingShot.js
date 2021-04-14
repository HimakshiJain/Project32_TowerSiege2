class SlingShot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(object){
        this.sling.bodyA = object;
    }

    display(){
        if(this.sling.bodyA){
            push();
            stroke(255,255,255);
            strokeWeight(3);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
            pop();
        }        
    }
}