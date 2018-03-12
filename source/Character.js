function Character(){
    this.create();
}
Character.prototype = Object.create(Ball.prototype);
Character.prototype.constructor = Ball;
Character.prototype.init = function(x, y){
	this.r = 1.0*pxPerMeter/2;//width/10/2; //platform.thickness/2
	this.climbSpeed = height/100;
	this.sprite = createSprite(10, 10, 10, 10);
  	this.sprite.addAnimation("standing", 'Assets/girl/standing_0001.png', 'Assets/girl/standing_0002.png');
  	this.sprite.addAnimation("climbing", 'Assets/girl/climbing_0001.png', 'Assets/girl/climbing_0002.png');
  	this.sprite.addAnimation("facing", 'Assets/girl/facing_0001.png', 'Assets/girl/facing_0002.png');
  	this.pos.x = x;
  	this.pos.y = y;
  	this.vel.x = 0;
  	this.vel.y = 0;
  	this.scaled = false;
  	this.climbing = false;
  	this.onPlatform = false;
  	this.climbDir = 1;
}
Character.prototype.scale = function(){
	if(this.scaled) return;
	if(this.sprite.height < 2) return;
	this.sprite.scale = this.r*2/this.sprite.height
	this.scaled = true;
}
Character.prototype.climb = function(){
	if(!this.climbing){
		character.sprite.changeAnimation('climbing')
		this.climbing = true;
		this.climbDir *=-1;
		this.onPlatform = false;
	}
}
Character.prototype.climbProcess = function(){
	if(!this.climbing) return;
	this.vel.y = this.climbSpeed*this.climbDir;
	if(this.climbDir == -1  && this.pos.y + this.r <= platform.height){
		this.climbing = false;
		this.vel.y = 0;
		character.sprite.changeAnimation('standing')
		this.onPlatform = true;
	}else if(this.climbDir == 1  && this.pos.y + this.r >= ground){
		this.climbing = false;
		this.vel.y = 0;
		character.sprite.changeAnimation('standing')
		this.onPlatform = false;
	}
}
Character.prototype.throw = function(vx){
	// vx in m/sec, want px / frame
	if(this.climbing) return;
	if(timing) return;
	vx = vx*pxPerMeter/fr;
	//console.log('throw')
	showScore = false;
	thrownHeight = ground- this.pos.y-this.r;//platform.height;
	count = 0;
	timeStart = new Date();
	timing = true;
	character.sprite.changeAnimation('facing')
	character.sprite.mirrorX(-1);
	bomb.init(this.pos.x + this.r*2, this.pos.y, vx, 0) //width/80
	if(objects[constants.ObjectType.Bomb].length < 1)
	 objects[constants.ObjectType.Bomb].push(bomb);
}
Character.prototype.update = function(){
	this.scale();
	this.climbProcess();
	//this.vel.add(this.accel);
	//this.vel.add(gravity)
    //this.vel.mult(damping);
    //this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.accel.mult(0);
    //this.pos.x = mouseX;
    this.stayinBorder();

    // On Platform
    if(!this.climbing && this.pos.y + this.r < ground || this.onPlatform){
     this.pos.y = platform.height - this.r;
     this.climbDir = -1;
    }
 	if(this.climbing && this.climbDir == 1 &&
 		this.pos.y + this.r*0 <= platform.height)
 		this.pos.y = platform.height + this.r*0;
 	// On Ground
    if(this.pos.y + this.r >= ground){
    	this.pos.y = ground - this.r;
    	this.climbDir = 1;
    }
    this.sprite.position.x = this.pos.x
	this.sprite.position.y = this.pos.y
	this.display();
}
Character.prototype.display = function(){
	//
	push();
	scale(2.0);
	//animation(imgCharacter, 100, 100);
	pop();

	//animation(imgCharacter['stand'], this.pos.x, this.pos.y);
	//imageMode(CORNER);
	//image(imgCharacter['stand'][0], this.pos.x, this.pos.y, width/10, width/10);
}
Character.prototype.isDead = function(){

    return this.Dead;
}
Character.prototype.clean = function(){


}
