function Dino(){
    this.create();
}
Dino.prototype = Object.create(Character.prototype);
Dino.prototype.constructor = Character;
Dino.prototype.init = function(x, y){
	this.r = platform.thickness/2;
  	this.pos.x = x;
  	this.pos.y = y;
  	this.vel.x = 0;
  	this.vel.y = 0;
  	this.scaled = false;
  	this.clr = color(getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255));
}
Dino.prototype.scale = function(){
	if(this.scaled) return;
	if(this.sprite.height < 2) return;
	this.sprite.scale = this.r*2/this.sprite.height
	this.scaled = true;
}

Dino.prototype.update = function(){
	//this.scale();
	//this.vel.add(this.accel);
	//this.vel.add(gravity)
    //this.vel.mult(damping);
    //this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.accel.mult(0);
    //this.pos.x = mouseX;
    //this.stayinBorder();

 	// On Ground
    if(this.pos.y + this.r >= ground){
    	this.pos.y = ground - this.r;
    }
	this.display();
}
Dino.prototype.display = function(){
	imageMode(CENTER);
	tint(this.clr)
	if(count%10 < 5 ) image(imgDino[0], this.pos.x, this.pos.y, this.r*2, this.r*2);
	else image(imgDino[1], this.pos.x, this.pos.y, this.r*2, this.r*2);
	noTint();
}
Dino.prototype.isDead = function(){

    return this.Dead;
}
Dino.prototype.clean = function(){


}
