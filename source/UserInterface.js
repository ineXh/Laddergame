var inpDiv, inpDiv2;
var inp;
var throwVx = 0;
var stageDiv, highScoreDiv;
var highScores;
function myInputEvent() {
  throwVx = parseFloat(this.value())
  //console.log(throwVx)
  if(isNaN(throwVx)) throwVx = 0;
}

function UserInterface(){
	this.create();
}
UserInterface.prototype = {
	create: function(){
		inpDiv = createDiv('Vx:')
		inpDiv.style('position', 'absolute');
		inpDiv.style('z-index', '99');
		inpDiv.style('left', ''+ (width*0.35-25));
		inpDiv.style('top', ''+ height*0.08);
		inpDiv2 = createDiv('m/sec')
		inpDiv2.style('position', 'absolute');
		inpDiv2.style('z-index', '99');
		inpDiv2.style('left', ''+ (width*0.35+55));
		inpDiv2.style('top', ''+ height*0.08);
		inp = createInput('0.0');
		inp.style('position', 'absolute');
		inp.style('z-index', '99');
		inp.style('width', '50');
		inp.style('left', ''+ width*0.35);
		inp.style('top', ''+ height*0.08);
		inp.input(myInputEvent);

		x0 = width*0.35;
		w = width*0.125;
		g = width*0.025;
		x1 = x0 + w + g;
		x2 = x1 + w + g;

		stageDiv = createDiv('Stage: ' + stage)
		stageDiv.style('position', 'absolute');
		stageDiv.style('z-index', '99');
		stageDiv.style('left', ''+ (x1));
		stageDiv.style('top', ''+ height*0.08);

		highScores = JSON.parse(localStorage.getItem('hs'));
		if(highScores == null) highScores = {}
		hs = highScores[stage];
		if(hs == undefined) hs = '' + 0;
		highScoreDiv = createDiv('High Score: ' + hs)
		highScoreDiv.style('position', 'absolute');
		highScoreDiv.style('z-index', '99');
		highScoreDiv.style('left', ''+ (x2));
		highScoreDiv.style('top', ''+ height*0.08);

		climbButton = createButton('Climb');
		climbButton.position(x0, height*0.15);
		climbButton.style('width', ''+ w);
		climbButton.mousePressed(function(){character.climb()});

		prevStageButton = createButton('Prev Stage');
		prevStageButton.position(x1, height*0.15);
		prevStageButton.style('width', ''+ w);
		prevStageButton.mousePressed(function(){
			console.log('preStage')
			stage--;
			if(stage <= 1) stage = 1;
			stageDiv.elt.innerText = 'Stage: ' + stage
			loadStage(stage)
			userInterface.updateHiScore()
		});
		nextStageButton = createButton('Next Stage');
		nextStageButton.position(x2, height*0.15);
		nextStageButton.style('width', '' + w);
		nextStageButton.mousePressed(function(){
			stage++;
			if(stage > Object.keys(StageData).length) stage = 3;
			stageDiv.elt.innerText = 'Stage: ' + stage
			loadStage(stage)
			userInterface.updateHiScore()
		});
		resetScoreButton = createButton('Reset Scores');
		resetScoreButton.position(x2, height*0.2);
		resetScoreButton.style('width', '' + w);
		resetScoreButton.mousePressed(function(e){
			e.preventDefault()
			userInterface.resetHiScore()
		});
	},
	init: function(){
		switch(gameState){
			case constants.GameState.Title:
			break;
		}
	},
	updateHiScore: function(){
		highScores = JSON.parse(localStorage.getItem('hs'));
		if(highScores == null) highScores = {}
		hs = highScores[stage];
		if(hs == undefined) hs = '' + 0;
		highScoreDiv.elt.innerText = 'High Score: ' + hs
	},
	resetHiScore: function(){
		localStorage.removeItem('hs');
		highScores = {};
		this.updateHiScore();
	},
	update: function(){

	},
	pressed: function(){

	}, // end pressed
	displayScore: function(){

	},
	displayTime: function(){

	}
} // end UserInterface