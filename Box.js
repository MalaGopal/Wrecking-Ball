class Box{
    constructor(x,y,w,h){
        var options = {
            restitution : 0.5,
            density : 1.0,
            friction : 0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        stroke("green");
        strokeWeight(4)
                rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}