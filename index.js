// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = sides.length
    }
    get countSides() {
        return this.count
    }

    get perimeter() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.sides.reduce(reducer, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] <= this.sides[2]) {
            return false;
        } else if (this.sides[0] + this.sides[2] <= this.sides[1]) {
            return false;
        } else if ((this.sides[1] + this.sides[2]) <= this.sides[0]){
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.sides.every(v => v === this.sides[0])){
            return true;
        } else {
            return false;
        }

    }

    get area(){
        return this.sides[0] * this.sides[0];
    }
}


done()
