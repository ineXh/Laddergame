var PI = Math.PI;
var count = 0;
var timeStart = 0;
var timeDuration = 0;
var timing = false;
var showTime = true;
var showScore = false;
var showDescription = true;
var thrownHeight = 0;
var fixedPlatformHeight = false;
var stage = 1;
var tree_id = 0;
var wallDamp = -0.5;
var fr = 30;
var bg = null;
var platform;
var character;
var dino;
var ground;
var pxPerMeter;
var gravity = new PVector(0, 1)
var windSpeed = new PVector(0, 0)

var gameState = constants.GameState.Title;
var userInterface = null;
var gamePlay = null;

var pool = {}
pool[constants.ObjectType.Ball] = [];
pool[constants.ObjectType.Box] = [];
pool[constants.ObjectType.GiantTriangle] = [];
pool[constants.ObjectType.Character] = [];
pool[constants.ObjectType.Particle] = [];

var objects = {}
objects[constants.ObjectType.Ball] = [];
objects[constants.ObjectType.Box] = [];
objects[constants.ObjectType.GiantTriangle] = [];
objects[constants.ObjectType.Bomb] = [];
objects[constants.ObjectType.Character] = [];
objects[constants.ObjectType.Dino] = [];
objects[constants.ObjectType.Particle] = [];