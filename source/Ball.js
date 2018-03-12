function Ball(){
	this.create();
}
Ball.prototype = {
	create: function(){
		this.tree_nodes = [];
		this.tree_update_time = 2;
		this.tree_update_count = 0;
		this.id = tree_id++;

		this.pos = new PVector(0, 0)
		//this.vel = new PVector(0, 0)
		this.vel = new PVector(Math.random()*width/10,Math.random()*height/10);
		this.accel = new PVector(0, 0)
		this.maxSpeed = 5;
		this.r = width/20;
		this.clr = color(getRandomInt(0,255), getRandomInt(0,255), getRandomInt(0,255))
		this.border = true;
		if(this.createSpecific) this.createSpecific();
	},
	init: function(x, y){
		this.pos.x = x;
		this.pos.y = y;
	},
	clean: function(){
		this.img = null;
	},
	update: function(){
		this.move();
    	update_tree(tree, this);
		this.display();
	},
	move: function(time){
	    this.vel.add(this.accel);
	    //this.vel.mult(damping);
	    this.vel.limit(this.maxSpeed);
	    this.pos.add(this.vel);
	    this.accel.mult(0);
	    if(this.border)   this.stayinBorder();
	},
	display: function(){
		fill(this.clr)
    	ellipse(this.pos.x, this.pos.y, this.r*2);
		//if(!this.img) return;
		//noTint();
		//imageMode(CENTER);
		//image(this.img, this.pos.x, this.pos.y, this.r*2, this.r*2);
	},
	stayinBorder : function(){
	bounce = false;
    if (this.pos.x - this.r < 0) {
      this.pos.x = this.r;
      this.vel.x = this.vel.x*wallDamp;
      bounce = true;
    }
    if (this.pos.x + this.r > stageWidth) {
      //println(this.vel);
      this.vel.x = this.vel.x*wallDamp;
      this.pos.x = stageWidth - this.r;
      bounce = true;
    }
    if (this.pos.y -this. r < 0) {
      this.vel.y = this.vel.y*wallDamp;
      this.pos.y = this.r;
      //bounce = true;
    }
    if (this.pos.y + this.r > stageHeight) {
      this.vel.y = this.vel.y*wallDamp;
      this.pos.y = stageHeight - this.r;
      bounce = true;
    }
    return bounce;
  }, // end stayinBorder
  applyForce : function(force) {
    // We could add mass here if we want A = F / M
    //console.log(this);
    //console.log("this.accel: ");
    //console.log(this.accel);
    this.accel.add(force);
  },
  getBound(){
    this.left = this.pos.x - this.r;
    this.right = this.pos.x + this.r;
    this.top = this.pos.y - this.r;
    this.bot = this.pos.y + this.r;
  },
} // end Button