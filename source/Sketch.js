function preload() {
  preloadAssets();
}
var imgScale;

function setup() {

  window.scrollTo(0,1);
  document.body.style.overflow = 'hidden';

  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(800, 600);
  frameRate(fr);

  textAlign(CENTER);
  textSize(24);
  stageWidth = width;
  stageHeight = height;
  pxPerMeter = width/20/1.0;
  gravity.y = 9.8*pxPerMeter/fr/fr;
  windSpeed.x = -3*pxPerMeter/fr*0;
  setupAssets();
  stroke(color(0, 0, 0));
  strokeWeight(2);
  tree = new QuadTree(width, height);

  platform = new Platform();
  character = new Character();
  bomb = new Bomb();
  character.init(platform.width-platform.thickness/2, ground);
  dino = new Dino();
  //dino.init(platform.width+platform.thickness/2*1, ground);
  objects[constants.ObjectType.Dino].push(dino);
  /*for(var i = 0; i < 3; i++){
    ball = new Ball();
    objects[constants.ObjectType.Ball].push(ball);
    tree.insert(ball);
    ball.init(random(0, width), random(0, height));
  }*/
  wind = new Spiral();
  loadStage(stage);
  userInterface = new UserInterface();
} // end setup


function draw() {
  clear();
  background(255);
  count++;
  //fill(0,50)

  //tree.update();
  wind.update();
  stroke(color(0, 0, 0));
  strokeWeight(2);
  platform.update();
  character.update();
  /*for(var i = 0; i < tree.nodes[2].length; i++){
      if(tree.nodes[2][i].active) tree.nodes[2][i].draw();
  }
  for(i in objects[constants.ObjectType.Ball]){
    objects[constants.ObjectType.Ball][i].update();
  }*/
  for(objectType in objects){
    for(var i = 0; i < objects[objectType].length; i++){
      object = objects[objectType][i];
      object.update();
    }
  }
  drawSprites();

  if(timing){
    calculateTime()
    //text("" + count, width*0.9, height*0.3)
  }
  noFill()
  rectMode(CENTER)
  rect(width*0.9, height*0.15, width*0.125, height*0.2)
  fill(0);
  text("Timer", width*0.9, height*0.1)
  text("" + timeDuration + "s", width*0.9, height*0.2)
  if(showScore){
    text("" + score + " pts!", width*0.5, height*0.5)
  }
  if(showDescription){
    text("" + StageData[stage].description, width*0.5, height*0.5, width*0.4, height*0.5)
  }
  //text("" + mouseX + ", " + mouseY, width*0.9, height*0.9)
} // end draw
function calculateTime(){
  //timeDuration = Math.floor((new Date() - timeStart)/10)/100
  timeDuration = Math.floor(count/fr*100)/100;
}
function calculateScore(){
  switch(stage){
    case 1:
      //f (x) = a(x - h)2 + k, where (h, k) is the vertex of the parabola.
      a = -4;
      h = 4.9;
      k = 100;
      x = thrownHeight/pxPerMeter;
      score = Math.round(a*(x-h)*(x-h)+k);
    break;
    case 2:
      score= 100;
    break;
    case 3:
      score= 100;
    break;
    default:
      score= 100;
    break;
  }
  if(score < 5) score = 5;
  if((bomb.pos.x+bomb.r < dino.pos.x-dino.r) ||
     (bomb.pos.x-bomb.r > dino.pos.x+dino.r)) score = 0;
  showScore = true;
  showDescription = true;
  if(score > highScores[stage] || highScores[stage] == undefined){
   highScores[stage] = score;
   localStorage.setItem('hs', JSON.stringify(highScores));
   userInterface.updateHiScore();
  }
}
function loadStage(stageNum){
  fixedPlatformHeight = StageData[stageNum].fixedPlatformHeight;
  platform.setHeight(StageData[stageNum].platformHeight);
  windSpeed.x = StageData[stageNum].wind.x*pxPerMeter/fr;
  wind.init(width,height/2);
  dino.init(platform.width + platform.thickness/2 + StageData[stageNum].dino.x*pxPerMeter, ground);
}

function touchStarted(){
  //mouseClicked()
}
function mouseClicked() {
  character.throw(throwVx);
}
function touchMoved(){
  //mouseMoved()
  mouseDragged()
}
var direction = new PVector(0,0);
var count = 0;
function mouseDragged() {
  pmouseX = mouseX
  pmouseY = mouseY
  return false;
} // end mouseMoved

function mouseMoved() {

  return false;
}
function touchEnded(){
  mouseReleased()
}
function mouseReleased() {
  released = true;
  newTouch = true;
}
