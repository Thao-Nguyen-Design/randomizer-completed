let ellipseArray = [];
let squareArray = [];
let circleArray = [];
let lineArray = [];
let myFont;

let sunImg;
let earthImg;
let jupiterImg;
let marsImg;
let mercuryImg;
let neptuneImg;
let saturnImg;
let uranusImg;
let venusImg;


function preload() {
  myFont = loadFont("fonts/NEONLEDLight.ttf");
  sunImg = loadImage("images/sun.png");

  planets[0].img = loadImage("images/mercury.png")
  planets[1].img = loadImage("images/venus.png")
  planets[2].img = loadImage("images/earth.png")
  planets[3].img = loadImage("images/mars.png")
  planets[4].img = loadImage("images/jupiter.png")
  planets[5].img = loadImage("images/saturn.png")
  planets[6].img = loadImage("images/uranus.png")
  planets[7].img = loadImage("images/neptune.png")

}

let planets = [{
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


// let planetsImg = [mercuryImg, venusImg, earthImg, marsImg, jupiterImg,
//   saturnImg, uranusImg, neptuneImg
// ];

let angle = 0;
let x = 0;
let y;
let side;

// let randomShade;
let randomWeight;

let animating = "L0";

let startbutton;


function setup() {
  createCanvas(400, 400);
  // colorMode(HSB, 360, 100, 100, 1);
  background(230);
  textAlign(LEFT);
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  frameRate(90);
  rectMode(CORNER);
  // text("click to randomize\na pattern", width *0.1, height * 0.15);
  randomIndex = int(random(planets.length))


  for (let i = 0; i <= 200; i++) {
    circleArray[i] = new Stars(random(width * 0.001, width * 0.01))
  }

  for (let i = 0; i <= 3; i++) {
    ellipseArray[i] = new Path(random(360));
  }

  for (let i = 0; i <= 2; i++) {
    squareArray[i] = new ShapeA(random(width * 0.7, width * 0.8),
      random(360));
  }

  startbutton = select("#activateRandom")
  startbutton.mousePressed(startbuttonPressed);
  startbutton.class("randomizerButton");
}


function draw() {
  if (animating == "L0") {
    startscreen(width * 0.25);
  }  if (animating == "L1") {
    loadingscreen();
  }
    if (animating == "L2") {
      background(0);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].display();
        circleArray[i].move();

      }

      for (i = 0; i < ellipseArray.length; i++) {
        ellipseArray[i].display();
        ellipseArray[i].move();
      }

      for (i = 0; i < squareArray.length; i++) {
        squareArray[i].display();
      }
      textFont(myFont);
      textSize(55);
      fill(255);
      textAlign(LEFT);
      text(planets[randomIndex].name, width * 0.07, height * 0.15);
      image(planets[randomIndex].img, width / 2, height / 2, width * 0.4, height * 0.4);

  }
//   if (animating == "L3"){
// background(255);
//
//   }
}

function startscreen(size) {
  animating = "L0";
  background(0);
  image(sunImg, width / 2, height / 2, width * 0.4, height * 0.4)
  push();
  // translate(width/2, height/2);
  noFill();
  stroke(230);
  strokeWeight(1);
  // rotate(x);
  image(planets[0].img,
    width * 0.2, height * 0.2, size, size);
  image(planets[1].img,
    width * 0.5, height * 0.2, size, size);
  image(planets[2].img,
    width * 0.8, height * 0.2, size, size);
  image(planets[3].img,
    width * 0.2, height * 0.5, size, size);
  image(planets[4].img,
    width * 0.8, height * 0.5, size, size);
  image(planets[5].img,
    width * 0.2, height * 0.8, size, size);
  image(planets[6].img,
    width * 0.5, height * 0.8, size, size);
  image(planets[7].img,
    width * 0.8, height * 0.8, size, size);
    // x = x +1;
    pop();
}

function loadingscreen() {
  // clear();
  // background(0);
  noStroke(0);
  fill(random(255));
    rect(x, 0, width * 0.1, height);
  x = x + width * 0.1
  // rect(x, 0, width*0.1, height);
  if (x > height) {
    x = 0;
  }
}

function nightsky() {
  background(0);
}


function startbuttonPressed() {
  animating = "L1";
  setTimeout(randomizer, 2000);

}


function randomizer() {
  animating = "L2";
  planets.splice(randomIndex, 1);
  planets.push(planets[randomIndex]);

}

//
// function lines(pos1, pos2, pos3, pos4, randomWeight) {
//   push();
//   stroke(random(255));
//   strokeWeight(randomWeight);
//   line(pos1, pos2, pos3, pos4);
//   pop();
// }
//
// function triangles() {
//   push();
//   noFill();
//   scale(0.2);
//   stroke(random(255));
//   strokeWeight(20);
//   triangle(10, height * 0.2, width - 10, height * 0.2, width * 0.5,
//     height - 10);
//   triangle(10, height * 0.8, width - 10, height * 0.8, width * 0.5,
//     10);
//   pop();
// }
