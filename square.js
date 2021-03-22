class ShapeA {
  constructor(_side, _rotation) {
    this.shade = random(0, 150);
    this.weight = random(3, 7);
    this.rotation = _rotation;
    this.side = _side;

  }

  display() {

    push();
    noFill();
    translate(width / 2, height / 2);
    rotate(this.rotation);
    rectMode(CENTER);
    stroke(this.shade);
    strokeWeight(this.weight);
    rect(0, 0, this.side, this.side);
    pop();

  }

  move() {

  this.rotation--

  //   if (this.yPos <= height * 3) {
  //     this.yPos += 2;
  //
  //   } else {
  //     this.yPos = -height * 0.1;
  //   }
  // }

}
}
