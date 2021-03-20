class Path {
  constructor(_rotation) {
    this.shade = random(100, 255);
    this.weight = random(1, 3);
    this.sizeX = random(width * 0.3, width *0.35);
    this.sizeY = random(width * 0.5, width*0.7);
    this.rotation = _rotation;

  }

  display() {

      push();
      noFill();
      translate(width / 2, height / 2);
      stroke(this.shade);
      rotate(this.rotation);
      strokeWeight(this.weight);
      ellipse(0, 0, this.sizeX, this.sizeY);
      pop();

  }

  move() {
    this.rotation++

  //   if (this.yPos <= height * 3) {
  //     this.yPos += 2;
  //
  //   } else {
  //     this.yPos = -height * 0.1;
  //   }
  // }

}
}
