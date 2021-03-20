class Stars {
  constructor(_size) {
    this.fill = random(255);
    this.xPos = random(width);
    this.yPos = random(height);
    this.size = _size;

  }

  display() {
      push();
      fill(this.fill);
      noStroke();
      // scale(random(0.1, 1));
      circle(this.xPos, this.yPos, this.size);
      pop();
    }


move() {
this.fill = this.fill-1

if (this.fill <=0){
this.fill = 255;

}
}

}
