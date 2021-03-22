class Path {
  constructor(_shade, _weight, _sizeX, _sizeY, _rotation) {
    this.shade = _shade;
    this.weight = _weight;
    this.sizeX = _sizeX;
    this.sizeY = _sizeY;
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
