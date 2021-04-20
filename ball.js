class Ball{
    constructor(x, y, radius, options){
        var options = {
         isStatic:false,
         "restituition": 0.3,
         "friction":0.5,
         "density":1
    }
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius)
        pop();
    }
}