let numerals = ["I", "II", "III", "IV", "V", "VI", "VII",
  "VIII", "IX", "X", "XI", "XII"
];
let circleArray = [];
let squareArray = [];
// let lineArray = [];

let x = 0;
let y;
let side;

let randomIndex;
// let randomShade;
let randomWeight;

let animating = false;

let myFont;

function preload() {
  myFont = loadFont("Minaisgone3D.ttf");
}

function setup() {
  createCanvas(400, 400);
  // colorMode(HSB, 360, 100, 100, 1);
  background(240);
  textAlign(LEFT);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  rectMode(CORNER);
  textSize(25);
  text("click to randomize\na pattern", width *0.1, height * 0.15);
  randomIndex = int(random(numerals.length));

}


function draw() {
  if (animating == true) {
    push();
    noStroke(0);
    fill(random(255));
    rect(x, 0, width *0.1, height);
    x = x+ width *0.1
    // rect(x, 0, width*0.1, height);
    if(x > height) {
       x = 0;
     }
     pop();
  }

}

function randomizer() {
  animating = false;
  background(255);

  if (numerals[0]){
  for (let i = int(random(3)); i <= 3; i++) {
    circleArray[i] = new circles(random(2, 7));
  }

  for (let i = int(random(4)); i <= 4; i++) {
    squareArray[i] = new squares(random(2, 7),
    random(width * 0.35, width * 0.9), random(360));
  }

  lines(random(width), 0, width, random(height),
    random(2, 7));
  lines(width, random(height), random(width), height,
      random(2, 7));
  lines(random(width), height, 0, random(height),
          random(2, 7));
  lines(0, random(height), random(width), 0,
      random(2, 7));

  // triangles(random(width), 0, random(width), height, 0, random(height),
  //   random(2, 7), random(50, 100));

romanNumerals();
}
else{
  background(255);
text("nothing left!", width * 0.1, height *0.15)

}
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}

function romanNumerals() {
  push();
  textFont(myFont);
  textSize(100);
  fill(0);
  textAlign(CENTER);
  text(numerals[randomIndex], width * 0.5, height * 0.6);
  numerals.splice(randomIndex, 1);
  pop();
}


function circles(randomWeight) {
  push();
  noFill();
  stroke(random(255));
  strokeWeight(randomWeight);
  ellipse(random(width), random(height),
    random(width * 0.1, width * 0.3));
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
translate (width/2, height/2);
rotate(rotation);
  rectMode(CENTER);
  stroke(random(255));
  strokeWeight(randomWeight);
  rect(0, 0, side, side);
  pop();
}

// function triangles(pos1, pos2, pos3, pos4, pos5, pos6,
//   randomWeight, randomShade) {
//   push();
//   noFill();
//   stroke(randomShade);
//   strokeWeight(randomWeight);
//   triangle(pos1, pos2, pos3, pos4, pos5, pos6);
//   pop();
// }
