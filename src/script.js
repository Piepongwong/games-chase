class Shape {
    constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.chase = this.chase.bind(this);
    }

    chase(aShape){
        let lx = aShape.x - this.x ;
        let ly = aShape.y - this.y;
        let ls = Math.sqrt(Math.pow(Math.abs(lx),2)+ Math.pow(Math.abs(ly),2));
        this.x += lx/ls * this.speed; // cos * speed
        this.y += ly/ls * this.speed; // sin * speed
    }
}

class Game {
    constructor() {
        this.shapes = [];
    }

    addShape(aShape){
        this.shapes.push(aShape);
    }
}