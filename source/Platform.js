function Platform(){
	this.create();
}
Platform.prototype = {
	create: function(){
		this.pos = new PVector(0, 0)
		this.height = height*3/4;

		this.thickness = 1*pxPerMeter;//width/12; // 1 meter
		this.width = this.thickness*6;//width/3;
		/*this.slider = createSlider(0, 360, 60, 40);
		this.slider.position(100, 200);
		this.slider.style('width', this.height + 'px');*/
		ground = stageHeight-this.thickness;
		//this.slider.style('transform', 'rotate(90deg)');
	},
	init: function(x, y){
		this.pos.x = x;
		this.pos.y = y;

	},
	clean: function(){
		this.img = null;
	},
	update: function(){
		this.display();
	},
	drawArrow: function(){
		tip = 10;
		length = ground-this.height;
		// return;
		push();
		translate(this.width/2, this.height)
		if(length > tip*8){
			beginShape();
			vertex(0, 0);
			vertex(2*tip, 4*tip);
			vertex(tip, 4*tip);
			vertex(tip, length-4*tip);
			vertex(2*tip, length-4*tip);
			vertex(0, length);
			vertex(-2*tip, length-4*tip);
			vertex(-tip, length-4*tip);
			vertex(-tip, 4*tip);
			vertex(-2*tip, 4*tip);
			endShape(CLOSE);
		}
		text(""+ Math.floor(length/pxPerMeter*10)/10 + 'm', -50, length/2)
		pop();
	},
	// Input (meters)
	setHeight: function(inHeight){
		//inHeight = (ground - platform.height) / pxPerMeter
		platform.height = ground-inHeight*pxPerMeter
	},
	display: function(){

		if(!fixedPlatformHeight){
			platform.height = mouseY
			/*// round Platform height to nearest 0.1 m
			newHeightMeter = (ground - mouseY) / pxPerMeter
			roundedHeightMeter = Math.floor(newHeightMeter*10) / 10;
			platform.height = ground-roundedHeightMeter*pxPerMeter*/
		}


		if(platform.height > ground) platform.height = ground;
		imageMode(CORNER);
		//Platform
		for (var x = 0; x < this.width; x += this.thickness) {
			tile_sprite_sheet.drawFrame('grass.png', x, this.height, this.thickness, this.thickness);
		}
		//Ground
		for (var x = 0; x < width; x += this.thickness) {
			tile_sprite_sheet.drawFrame('grass.png', x, stageHeight-this.thickness, this.thickness, this.thickness);
		}
		//ladder
		tile_sprite_sheet.drawFrame('laddertop.png', this.width - this.thickness, this.height, this.thickness, this.thickness);
		for (var y = this.height+this.thickness; y < stageHeight-this.thickness; y += this.thickness) {
			tile_sprite_sheet.drawFrame('laddermid.png', this.width - this.thickness, y, this.thickness, this.thickness);
		}
		fill(0,0, 0)
		this.drawArrow();
		/*rectMode(CORNER); // Default rectMode is CORNER
		fill(0);
		//rect(0, this.height, width/2, this.thickness);
		//rect(0, stageHeight-this.thickness, width, this.thickness);

  		image(imgLadder, width/2 - width/10*0.9, this.height, width/10, this.height);*/
	}
} // end Button