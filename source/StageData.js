/* Stage 600 x 800
character width/10 = r*2 = character height ~= 1.0m
pxPerMeter ~= 30/1.0
*/
// StageData in meters
var StageData = {
	1: {
		description: 'Aim for 1.0 sec to hit Dino (Tip: climb up the ladder)',
		fixedPlatformHeight: false,
		wind: {x: 0, y: 0},
		dino: {x: 0}
	},
	2: {
		description: 'Adjust Vx to hit Dino',
		fixedPlatformHeight: true,
		platformHeight: 5,
		wind: {x: 0, y: 0},
		dino: {x: 3}
	},
	3: {
		description: 'Adjust Vx to hit Dino (Tip: wind speed is 3 m/sec)',
		fixedPlatformHeight: true,
		platformHeight: 5,
		wind: {x: -3, y: 0},
		dino: {x: 3}
	},
}