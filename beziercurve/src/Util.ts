import {Vector2D} from "./Vector2D";

export function lerp(vec1: Vector2D, vec2: Vector2D, t: number) {
    let x = (1 - t) * vec1.x + (t * vec2.x);
    let y = (1 - t) * vec1.y + (t * vec2.y);
    return new Vector2D(x, y);
}

export function quadraticCurve(vec1: Vector2D, vec2: Vector2D, vec3: Vector2D, t: number) {
    let temp1 = lerp(vec1, vec2, t);
    let temp2 = lerp(vec2, vec3, t);
    return lerp(temp1, temp2, t);
}