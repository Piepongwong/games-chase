class Shape {
    constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.chase = this.chase.bind(this);
        this.chasing = false;
        this.chasingShape = null;
        this.chaseStart = null;
    }

    chase(aShape){
        this.chasing = true;
        this.chasingShape = aShape;
        this.chaseStart = new Date();
    }

    moveTowards(){
        let lx = this.chasingShape.x - this.x ;
        let ly = this.chasingShape.y - this.y;
        let ls = Math.sqrt(Math.pow(Math.abs(lx),2)+ Math.pow(Math.abs(ly),2));
        
        this.x += lx/ls * this.speed * ((new Date() - this.chaseStart)/1000); // cos * speed
        this.y += ly/ls * this.speed * ((new Date() - this.chaseStart)/1000); // sin * speed

        // error margin for overshooting
        if(Math.abs(ls) < this.speed*2) {
            this.chasing = false;
            this.x = this.chasingShape.x;
            this.y = this.chasingShape.y;
        }
    }

    get position(){
        var fixThis = this;
        if(this.chasing){this.moveTowards();}
        return {
            x: fixThis.x, 
            y: fixThis.y
        };
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