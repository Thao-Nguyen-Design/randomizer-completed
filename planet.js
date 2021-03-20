class Planets {
  constructor(_randomIndex) {
    this.planets = [{
        name: "mercury",
        img: mercuryImg
      },
      {
        name: "venus",
        img: venusImg
      },
      {
        name: "earth",
        img: earthImg
      },
      {
        name: "mars",
        img: marsImg
      },
      {
        name: "jupiter",
        img: jupiterImg
      },
      {
        name: "saturn",
        img: saturnImg
      },
      {
        name: "uranus",
        img: uranusImg
      },
      {
        name: "neptune",
        img: neptuneImg
      }
    ];


    this.randomIndex = _randomIndex;

}
  // }

  display() {
    textFont(myFont);
    textSize(55);
    fill(255);
    textAlign(LEFT);
    text(this.planets[this.randomIndex].name, width * 0.07, height * 0.15);
    image(this.planets[this.randomIndex].img, width/2, height/2, width * 0.4, height * 0.4);
    this.planets.splice(this.randomIndex, 1);

  }

//   move() {
//
//   this.rotation++
//
//   //   if (this.yPos <= height * 3) {
//   //     this.yPos += 2;
//   //
//   //   } else {
//   //     this.yPos = -height * 0.1;
//   //   }
//   // }
//
// }
}
