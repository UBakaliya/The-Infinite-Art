let circles = [];

let ball;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 200, 200);
  for(let i = 0; i < 400; i++) {
    circles[i] = new p5.Vector(random(width), random(height));
  }
}

function draw() {
  for(let i = 0; i < circles.length; i++) {
 
    fill(random(0, 255), random(0, 255),random(0, 255), random(0, 255));
    noStroke();
    circles[i].y++;
    if(circles[i].y > height) {
      circles[i].y = 10;
    }

    circle(circles[i].x, circles[i].y, 4);
  }
}