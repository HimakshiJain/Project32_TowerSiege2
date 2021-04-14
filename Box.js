class Box{
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color(this.body.position.x,this.body.position.y,200);
        this.visibility = 255;
        World.add(world, this.body);
    }

    score(){
        if(this.visibility < 0 && this.visibility >-105){
            score++
        }
    }

    display(){
        rectMode(CENTER)
        var angle = this.body.angle;
        push();
        if(this.body.speed < 7){
            fill(this.color) 
            rotate(angle);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
        } else {
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5;
        }
        pop();
    }
}