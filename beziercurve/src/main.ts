import './style.css'


import p5 from "p5"
import {Vector2D} from "./Vector2D";

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
    }
    p.draw = () => {
        let vec = new Vector2D(200, 100);

        p.background(220);
        p.stroke("red");
        p.strokeWeight(10);
        p.point(vec.x, vec.y);
    }
}

new p5(sketch)
