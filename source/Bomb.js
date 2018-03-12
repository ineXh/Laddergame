function Bomb(){
    this.create();
}
Bomb.prototype = Object.create(Ball.prototype);
Bomb.prototype.constructor = Ball;
Bomb.prototype.createSpecific = function(){
	/*this.sprite = createSprite(300, 150);
  	this.sprite.addImage(imgBomb);
  	this.sprite.visible = false;*/
  	this.sprite = createSprite(10, 10, 10, 10);
  	this.sprite.addAnimation("normal", 'Assets/bomb5.png', 'Assets/bomb6.png');
  	this.sprite.visible = false;

  	this.scaled = false;
}
Bomb.prototype.init = function(x, y, vx, vy){
	this.r = 1*pxPerMeter/2;//width/12/2;
	this.pos.x = x;
	this.pos.y = y;
  //this.sprite.position.x = this.pos.x;
  //this.sprite.position.y = this.pos.y;
	this.vel.x = vx;
	this.vel.y = vy;
	//this.scale = this.r*2/imgBomb.height;

	this.rotation = 0;
	this.sprite.visible = true;
	this.blow = false;
	blowAnimation.rewind();
  this.scale();
	//this.scale();

	//this.sprite.setSpeed(0, 0.01)
	//this.sprite.rotationSpeed = Math.PI
}

Bomb.prototype.scale = function(){
	if(this.scaled) return;
	if(this.sprite.height < 2) return;
	this.sprite.scale = this.r*2/this.sprite.height
	this.scaled = true;
}
Bomb.prototype.move = function(){
	//this.vel.add(this.accel);
	this.vel.add(gravity)
    //this.vel.mult(damping);
    //this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.pos.add(windSpeed);
    this.accel.mult(0);
    //this.pos.x = mouseX;
    bounce = this.stayinBorder();
    if(this.pos.y + this.r >= ground){
      bounce = true;
    	this.pos.y = ground - this.r;
    	this.vel.y = this.vel.y*wallDamp;
    	this.vel.x *= 0.99;
    }
    return bounce;
}
Bomb.prototype.update = function(){
	this.scale();
	if(!this.blow) bounce = this.move();
    if(bounce && this.sprite.visible){
      timing = false;
      calculateTime();
      calculateScore();
    	this.blow = true;
      blowAnimation.visible = true;
      animation(blowAnimation, this.pos.x, this.pos.y);
    	this.sprite.visible = false;
    	this.vel.x = this.vel.y = 0;
    }

    //this.rotation += this.vel.x/(this.r)
    this.sprite.rotationSpeed = this.vel.x;
    this.sprite.position.x = this.pos.x;
    this.sprite.position.y = this.pos.y;
	this.display();
	this.blowing();
}
Bomb.prototype.blowing = function(){
	if(!this.blow) return;
	//console.log('blowing')
	animation(blowAnimation, this.pos.x, this.pos.y);
	if(blowAnimation.getFrame () == 5){
		this.blow = false;
    blowAnimation.visible = false
	}
	//animation(blowAnimation, 200,200);
}
Bomb.prototype.display = function(){
	//fill(this.clr)
    //ellipse(this.pos.x, this.pos.y, this.r*2);
    /*imageMode(CENTER)
    push()
    translate(this.pos.x , this.pos.y)
    rotate(this.rotation)
    image(imgBomb, 0, 0, imgBomb.width*this.scale, this.r*2)
    pop()*/
}
Bomb.prototype.isDead = function(){

    return this.Dead;
}
Bomb.prototype.clean = function(){


}
