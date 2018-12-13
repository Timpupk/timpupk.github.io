var v = []; 
var font; 
var points = [];

function preload() {
  font = loadFont('font.TTF');
}

function setup() {
  createCanvas(window.innerWidth, window.innerWidth);

  points = font.textToPoints('Sparticles', width/16+height/16, 200, 100, {
    sampleFactor: 1
  });

  for (var i = 0; i < points.length; i ++){
    v.push({x:random(0, width), y:random(0, height), sz:2, m:5, a:0, tx:points[i].x, ty:points[i].y});
  }
}
function draw() {
  background(250);

  for (var i = 0; i < v.length; i ++){
    var ve = v[i];

    strokeWeight(ve.sz);
    stroke(200, 0, 0);
    point(ve.x, ve.y); 

    ve.x-=ve.m*sin(ve.a);
    ve.y-=ve.m*cos(ve.a);

    ve.a = -atan2(ve.ty-ve.y, ve.tx-ve.x)-90;

    if (ve.x == ve.tx && ve.y == ve.ty){ve.m = 0;}else{
      ve.m = map(dist(ve.x, ve.y, ve.tx, ve.ty), 0, width/2+height/2, 0.01, 10);
    }
  }
} 
