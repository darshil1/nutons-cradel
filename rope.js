class Rope {
    constructor(body1, body2, offsetx, offsetY) {
        this.offsetX = offsetx
        this.offsetY = offsetY
        var options = {

            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke("red")
        strokeWeight(5);
        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetx
        var Anchor2Y = pointB.y + this.offsetY
        // stroke("red")
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }





}