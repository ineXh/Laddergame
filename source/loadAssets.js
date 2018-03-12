var scoreFont
var robotoFont
var moonBG
var imgCharacter;// = {}
var imgBlow = []
var imgDust = []
var imgDmg = []
var imgDino = []
var imgPlay;
var imgGo;
var soundButton;
var img;
var imgBomb;
var blowAnimation;
var imgIndex = 0;
var tile_sprite_sheet;
//var tile_frames;
//var imgNames = ["Assets/cow_emoji.png"]
//String[] imgNames = {"battlecruiser.jpg", "face.jpg", "egg.jpg"};
/*tile_frames = [{
    "name": "box.png",
    "frame": {
      "x": "70",
      "y": "0",
      "width": "70",
      "height": "70"
    }
  }];*/

var preloadAssets = function(){
	imgLadder = loadImage('Assets/Fixed_Ladder.png')

  	//tile_frames = loadJSON('Assets/tiles.json');
  	tile_sprite_sheet = loadSpriteSheet('Assets/tiles_spritesheet.png', tile_frames);
  	blowAnimation = loadAnimation("Assets/blow/1.png", "Assets/blow/6.png");
  	blowAnimation.looping = false;
  	for(var i = 1; i <= 2; i++) imgDino[i-1] = loadImage("Assets/dino/" + i + ".png");
	//img = loadImage(imgNames[imgIndex]);
	/*scoreFont = loadFont('Assets/ataurusp.ttf');
	robotoFont = loadFont('Assets/Roboto-Regular.ttf');
	moonBG = loadImage("Assets/surface1.png");
	imgPlay = loadImage("Assets/play_196.png");
	imgGo = loadImage("Assets/go_196.png");
	for(var i = 1; i <= 2; i++) imgCharacter1[i-1] = loadImage("Assets/1/" + i + ".png");
	for(var i = 0; i <= 4; i++) imgDust[i] = loadImage("Assets/dust/" + i + ".png");
	for(var i = 1; i <= 7; i++) imgDmg[i-1] = loadImage("Assets/dmg1/" + i + ".png");
	for(var i = 1; i <= 6; i++) imgBlow[i-1] = loadImage("Assets/blow/" + i + ".png");

	soundButton = loadSound('Assets/gamestart.wav');
	soundButton.setVolume(0.5);*/
	console.log('loaded')
} // end preloadAssets

var setupAssets = function(){
	//imgBomb = loadImage("Assets/bomb2.png");
} // end prelsetupAssetsoadAssets