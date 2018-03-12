var spiralPos = [];
function Spiral(){
    this.create();
}
Spiral.prototype = Object.create(Ball.prototype);
Spiral.prototype.constructor = Ball;
Spiral.prototype.init = function(x, y){
	this.r = width/10/2;
  	this.pos.x = x;
  	this.pos.y = y;
  	this.vel.x = windSpeed.x;//-width/200;
  	this.vel.y = 0;
  	if(spiralPos.length < 1){
  		for(var theta = 2.025*PI, r = 5*2.25*PI;
		    theta > -PI*1; theta -= 0.15, r-= 0.5){
		    x = r*Math.cos(theta)
		    y = r*Math.sin(theta)
		    spiralPos.push(new PVector(x, y));
		}
  	}
  	this.count = 0;
}

Spiral.prototype.update = function(){
  if(this.vel.x == 0) return;
	//this.vel.add(this.accel);
	//this.vel.add(gravity)
    //this.vel.mult(damping);
    //this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.accel.mult(0);
	this.display();
	if(this.pos.x < -width*0.1) this.pos.x = width*1.1
}
Spiral.prototype.display = function(){
var j = 0;
r = width/200;
  for(i in spiralPos){
    p = spiralPos[i];
    a = 155-this.count*6;//Math.floor(255- j*2)
    if(a < 0) break;
    //console.log(a)
    fill(0,a)
    stroke(0, a)
    ellipse(p.x +this.pos.x, -p.y+this.pos.y, r, r)
    ellipse(p.x +this.pos.x, -p.y+this.pos.y + height/10, r, r)
    j+=0.1; if(j > this.count) break;
  }
  this.count += 1;
  if(this.count>60) this.count = 0;
}
Spiral.prototype.isDead = function(){

    return this.Dead;
}
Spiral.prototype.clean = function(){


}
