abstract class Figure {
    abstract x: number;
    abstract y: number;
    abstract getArea(): void;
}
class Rectangle extends Figure{     
    constructor(public x: number, public y: number, public width: number, public height: number){ 
        super();
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(10, 10, 20, 25)
someFigure.getArea();