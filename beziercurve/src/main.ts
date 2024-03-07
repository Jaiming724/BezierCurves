import './style.css'


import p5 from "p5"
import {Vector2D} from "./Vector2D";
import {lerp, quadraticCurve} from "./Util";

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(600, 600);
    }
    p.draw = () => {
        let vec1 = new Vector2D(10, 400);
        let vec2 = new Vector2D(400, 300);
        let vec3 = new Vector2D(100, 300);
        let control1 = new Vector2D(0, 0);
        control1.x = p.mouseX;
        control1.y = p.mouseY;

        p.background(220);
        p.stroke("red");
        p.strokeWeight(10);
        p.stroke("red");
        p.point(vec1.x, vec1.y);
        p.point(vec2.x, vec2.y);
        p.stroke("blue");

        p.point(vec3.x, vec3.y);
        p.point(control1.x, control1.y);
       // console.log("starting point testing")
        console.log("")
        for (let i = 0; i <= 1; i += 0.01) {
            let temp = quadraticCurve(vec1, vec3, control1, i);
            let temp2 = quadraticCurve(vec3, control1, vec2, i);
            let final = lerp(temp, temp2, i);
            p.stroke("yellow");

            p.point(final.x, final.y);
            //console.log(final.x+","+final.y)
        }
    }
}

new p5(sketch)
