let ellipseArray = [];
let squareArray = [];
let circleArray = [];

// let lineArray = [];
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
  planets[6].img= loadImage("images/uranus.png")
  planets[7].img = loadImage("images/neptune.png")

}

let planets = [
  {name: "mercury",
    img: mercuryImg},
  {name: "venus",
  img: venusImg},
  {name:"earth",
  img: earthImg},
  {name: "mars",
  img: marsImg},
  {name: "jupiter",
  img: jupiterImg},
  {name: "saturn",
  img: saturnImg},
  {name: "uranus",
  img: uranusImg},
  {name: "neptune",
  img: neptuneImg}
];


// let planetsImg = [mercuryImg, venusImg, earthImg, marsImg, jupiterImg,
//   saturnImg, uranusImg, neptuneImg
// ];


let x = 0;
let y;
let side;

let randomIndex;
// let randomShade;
let randomWeight;

let animating = false;


let startbutton;



function setup() {
  createCanvas(400, 400);
  // colorMode(HSB, 360, 100, 100, 1);
  background(240);
  textAlign(LEFT);
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  rectMode(CORNER);
  textSize(25);
  // text("click to randomize\na pattern", width *0.1, height * 0.15);
  randomIndex = int(random(planets.length));

  // startbutton = createButton("click to randomize");

  startbutton = select("#activateRandom")
  startbutton.mousePressed(startbuttonPressed);
  startbutton.class("randomizerButton");
}


function draw() {
  if (animating == true) {
    push();
    noStroke(0);
    fill(random(255));
    rect(x, 0, width * 0.1, height);
    x = x + width * 0.1
    // rect(x, 0, width*0.1, height);
    if (x > height) {
      x = 0;
    }
    pop();
  }

}

function randomizer() {
  animating = false;
  background(240);

  if (planets[0].name) {
    for (let i = int(random(3)); i <= 2; i++) {
      ellipseArray[i] = new ellipses(random(1, 4));
    }

    for (let i = int(random(3)); i <= 2; i++) {
      circleArray[i] = new circles(0, 0, random(1, 4));
    }

    for (let i = int(random(3)); i <= 2; i++) {
      circleArray[i] = new circles(random(width), random(height), random(1, 4));
    }


    // for (let i = int(random(4)); i <= 4; i++) {
    //   squareArray[i] = new squares(random(2, 7),
    //   random(width * 0.35, width * 0.9), random(360));
    // }

    // image(sunImg, width/2, height/2, width*0.4, height *0.4)

    //
    // lines(random(width), 0, width, random(height),
    //   random(2, 7));
    // lines(width, random(height), random(width), height,
    //     random(2, 7));
    // lines(random(width), height, 0, random(height),
    //         random(2, 7));
    // lines(0, random(height), random(width), 0,
    //     random(2, 7));
    //
    // triangles(10, height * 0.2, width - 10, height * 0.2, width*0.5,
    //   height -10, random(50, 100));
    // triangles(10, height * 0.8, width - 10, height * 0.8, width*0.5,
    //     10, random(50, 100));

    // sun();
    planetsFunction();
  } else {
    background(255);
    text("nothing left!", width * 0.1, height * 0.15)

  }
}

function startbuttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}

function planetsFunction() {
  push();
  textFont(myFont);
  textSize(50);
  fill(0);
  textAlign(LEFT);
  text(planets[randomIndex].name, width * 0.07, height * 0.15);
  image(planets[randomIndex].img, width/2, height/2, width * 0.4, height * 0.4);
  planets.splice(randomIndex, 1);
  pop();
}


function ellipses(randomWeight) {
  push();
  noFill();
  translate(width / 2, height / 2);
  stroke(0);
  rotate(random(360));
  strokeWeight(randomWeight);
  ellipse(0, 0, random(width * 0.3, width *0.5),
  random(width * 0.5, width*0.7));
  pop();
}


function circles(xPos, yPos, randomWeight) {
  push();
  noFill();
  translate(width / 2, height / 2);
  stroke(0);
  strokeWeight(randomWeight);
  circle(xPos, yPos, random(width * 0.5, width *0.7));
    pop();
}


function lines(pos1, pos2, pos3, pos4, randomWeight) {
  push();
  stroke(random(255));
  strokeWeight(randomWeight);
  line(pos1, pos2, pos3, pos4);
  pop();
}

function squares(randomWeight, side, rotation) {
  push();
  noFill();
  translate(width / 2, height / 2);
  rotate(rotation);
  rectMode(CENTER);
  stroke(random(255));
  strokeWeight(randomWeight);
  rect(0, 0, side, side);
  pop();
}

function triangles(pos1, pos2, pos3, pos4, pos5, pos6, randomShade) {
  push();
  noFill();
  stroke(randomShade);
  strokeWeight(5);
  triangle(pos1, pos2, pos3, pos4, pos5, pos6);
  pop();
}

function sun() {
  strokeWeight(5);
  circle(width / 2, height / 2, width * 0.2)
  scale
  triangles(10, height * 0.2, width - 10, height * 0.2, width * 0.5,
    height - 10, random(50, 100))
}
