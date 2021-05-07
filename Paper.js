class Paper {
    constructor(x,y,radius){
        var options_paper = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = radius;
        this.image = loadImage("paper.png");
        this.image.scale = 4;
        this.body = Bodies.circle(x,y,radius,options_paper);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //angle = this.angle;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        stroke(230);
        fill(230)
        //circle(0, 0, this.r);
        image(this.image,0,0,this.r+30,this.r+30)
        pop()
    }
}