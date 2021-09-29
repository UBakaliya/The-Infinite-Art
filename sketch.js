let circles = [];

let ball;


let x = 220;
let y = 280;
let xspeed = 3;
let yspeed = 5;

let r = 20;
function setup() {
   alert('When you run the program it starts drawing lines vertically as it draws the lines it starts drawing circles with rectangles. As circles and rectangles move the lines overdraw on the previous drawing. It changes the position of the rectangle and circles everytime. focus was on color, lines ,circles  and rectangle')
  createCanvas(600, 600);
  background(50, 200, 200);
  for(let i = 0; i < 700; i++) {
    circles[i] = new p5.Vector(random(width), random(height));
  }
}

function draw() {

  for(let i = 0; i < circles.length; i++) {
    fill(random(150, 255), random(50, 255),random(10, 255), random(20, 255));
    noStroke();
    circles[i].y++;
    if(circles[i].y > height) {
      circles[i].y = 1;
      
      ellipse(x, y, r*1, r*100);
      rect(x, y, r*100, r*1);
  
    x += xspeed;
    y += yspeed;
    if (x > height - r || x < r) {
      xspeed = -xspeed;
    }
    if (y > width - r || y < r) {
      yspeed = -yspeed;
  }


}
      
    circle(circles[i].x, circles[i].y, 4);
      
    }

  }

