
// ------------------ GLOBALS ------------------

let firstRun = true;
let DrumBackground;
let LegDrumStand;
let DrumStandLegs2;
let DrumSeat;
let KickDrum;
let ShoreBackground;
let backgroundVideo;
let Rotated3Leg;
let Rotated2Leg;
let GuySinging;
let Stage;
let StageLight;
let Guitar;
let tangerineAngle = 0;


// ------------------ MAIN DRAW ------------------

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(140, 180, 212);
  textFont('Verdana'); // please use CSS safe fonts
  
  angleMode(DEGREES);
  const midX = canvasWidth / 2;
  const midY = canvasHeight / 2;

  if(firstRun) {

   // Load drum kit assets

    KickDrum = loadImage('KickDrum.png');
    LegDrumStand = loadImage('LegDrumStand.png');
    DrumStandLegs2 = loadImage('DrumLegsStand2.png');
    Rotated2Leg = loadImage('Rotated2Leg.png');
    Rotated3Leg = loadImage('Rotated3Leg.png');
    DrumSeat = loadImage('DrumSeat.png');

    // stage assets
    Stage = loadImage('Stage.png');
    GuySinging = loadImage('GuySinging.png');
    StageLight = loadImage('StageLight.png');
    TVScreen = loadImage('TVScreen.png');

    // Guitar assets
    Guitar = loadImage('Guitar.png');

    firstRun = false;
  }

  drawDrumKit(midX - 400, midY - 150, vocal, drum, bass, words);
  StageDrawing();
  singer(midX + 700, midY + 450, vocal, 0.6);
  spotlight(1340,750, vocal);
  drawLines(midX, midY, drum);
  guitar(midX, midY, words, vocal, bass);
  Lyics(words);
  arm(bass);

  let rotationSpeed = map(vocal, 0, 100, 0.5, 10); // min 0.5°, max 10° per frame
  tangerineAngle += rotationSpeed;
  drawTangerine(1450, 150, 350);

  TangerineLabel();
  

}

// ------------------ DRUM KIT ------------------
function drawDrumKit(midX, midY, vocal, drum, bass, words, scaleFactor = 0.6) {

  push();                // start a new drawing state
  translate(midX, midY); // move the origin to midX, midY
  scale(scaleFactor);     // scale everything inside this block
  translate(-midX, -midY);

  image(Rotated2Leg, 400, 150);
  image(Rotated3Leg, -230, 130);
  image(KickDrum, 110, -50);
  image(DrumStandLegs2, 370, -150);
  image(LegDrumStand, -120, -120);
  image(DrumSeat, 150, 340);

  let goldPlateSize = map(bass, 0, 100, 200, 300);
  let redDrum = map(drum, 0, 100, 120, 150);

  creamyDrums(midX - 40, midY + 50, redDrum);
  creamyDrums(midX + 120, midY + 50, redDrum);


  
  //Cymbals (Bottom)
  noStroke();
  fill(168, 113, 2);
  ellipse(midX - 200, midY + 80, (goldPlateSize) * 0.9); // bottom left 
  ellipse(midX + 300, midY + 80, (goldPlateSize) * 0.9); // bottom right 

  orangePlateBottomLeft(midX, midY - 70, goldPlateSize); // bottom left lines
  orangePlateBottomLeft(midX + 500, midY - 70, goldPlateSize); // bottom right lines
  
  //Cymbals (Top)
  fill(231, 175, 64, 255);
  ellipse(midX - 150, midY - 100, goldPlateSize); // top left
  ellipse(midX + 250, midY - 100, goldPlateSize); // top right
  
  orangePlateTopLeft(midX, midY, goldPlateSize);
  orangePlateTopLeft(midX + 400, midY, goldPlateSize);

}


function orangePlateTopLeft(midX, midY, goldPlateSize) {

  let spacing = 30;
  for (let i = 1; i <= 5; i++) {
    stroke(205, 152, 50, 255);
    noFill();
    let diameter = goldPlateSize - i * spacing;
    ellipse(midX - 150, midY - 100, diameter);

  }


  // black circle
  fill("black");
  noStroke();
  ellipse(midX - 150, midY - 100, 15);
  
  //white cross lines in the middle
  noFill();
  strokeWeight(2);

  stroke("white");
  //line(midX - 150, midY - 110, midX - 150, midY - 90); //vertical (I like it with just one line but ill keep it there anyways)
  line(midX - 160, midY - 100, midX - 140, midY - 100); // horisontal

  //tiny white circle
  fill("white");
  noStroke();
  ellipse(midX - 150, midY - 100, 5);

}

function orangePlateBottomLeft(midX, midY, goldPlateSize) {
  let spacing = 30;

  for (let i = 1; i <= 5; i++) {
    stroke(209, 148, 33);
    noFill();
    let diameter = goldPlateSize * 0.9 - i * spacing;
    ellipse(midX - 200, midY + 150, diameter);
  }
  
  //little black circle
  fill("black");
  noStroke();
  ellipse(midX - 200, midY + 150, 15);
  
  //white lines in the middle
  noFill();
  strokeWeight(2);
  stroke("white");
  line(midX - 200, midY + 160, midX - 200, midY + 140); 
  //line(midX - 210, midY + 150, midX - 190, midY + 150);

  //tiny white circle
  fill("white");
  noStroke();
  ellipse(midX - 200, midY + 150, 5);



}

function creamyDrums(x, y, redDrum) {
  strokeWeight(5);
  stroke(200, 203, 218, 255); // grey drum outline
  fill(228, 31, 38, 255); //red
  ellipse(x, y - 40, redDrum - 20);

  strokeWeight(8);
  stroke(200, 203, 218, 255); // grey drum outline
  fill(249, 249, 237, 255); // lighter grey, bigger circle
  ellipse(x, y - 10, redDrum - 20);

  strokeWeight(2);
  noStroke();
  fill(216,216,208,255); // darkest grey small circle
  ellipse(x, y - 10, redDrum - 80); 


}

function spotlight(midX, midY, vocal) {
  //Spotlight
  noStroke();
let pulse = map(vocal, 0, 100, 0.8, 2); // scale with vocal intensity
let spotlightTopY = midY - 180; // top of the cone
let spotlightBottomY = midY + 220; // bottom of the cone
let spotlightTopWidth = 35; // narrow at top
let spotlightBottomWidth = 300; // wide at bottom

for (let y = spotlightTopY; y <= spotlightBottomY; y += 2) {
  let progress = map(y, spotlightTopY, spotlightBottomY, 0, 1);
  
  // Interpolate width from top to bottom
  let ellipseWidth = lerp(spotlightTopWidth, spotlightBottomWidth, progress) * pulse;
  
  // Make the ellipse taller near the top for smoother tapering
  let ellipseHeight = lerp(4, 12, progress);
  
  // Alpha fades from top (strong) to bottom (soft)
  let alpha = map(progress, 0, 1, 120, 0);
  
  fill(254,249,87,10, alpha);
  ellipse(midX, y, ellipseWidth, ellipseHeight);
  }
}

function singer(midX, midY, vocal, scaleFactor = 1) {

  push();
  translate(midX, midY);

  let stageLightWidth = 200; 
  let stageLightHeight = 200; 
  imageMode(CENTER);
  image(StageLight, 0, -250, stageLightWidth, stageLightHeight);

  push();
  scale(scaleFactor);
  image(GuySinging, 50, 20);
  pop();

  pop();



}

function drawLines(midX, midY, drum) {
  push();
  resetMatrix();
  stroke("black");
  strokeWeight(8);
  line(midX, 0, midX, canvasHeight);

  let numLines = map(drum, 0, 100, 0, 10); // max 15 lines
  let spacing = 15; // horizontal spacing from the main line

  for (let i = 1; i <= numLines; i++) {
    let alpha = map(i, 1, numLines, 200, 50); // fade effect
    stroke("black");
    strokeWeight(map(i, 1, numLines, 4, 1)); // thinner as it goes out

    // Left side vertical line
    line(midX - i * spacing, 0, midX - i * spacing, canvasHeight);

    // Right side vertical line
    line(midX + i * spacing, 0, midX + i * spacing, canvasHeight);
  }

  pop();

}

function guitar(midX, midY, words, vocal,bass, scaleFactor = 1.4) {
   push();
  scale(scaleFactor);

  image(Guitar, -100, 400);

  stroke(192, 192, 192);
  strokeWeight(2);

 let numStrings = 6;      // total number of strings
  let spacing = 6;        // vertical distance between strings
  let baseY = 590;         // middle string y position

  for (let i = -(numStrings-1)/2; i <= (numStrings-1)/2; i++) {
    let y = baseY + i * spacing;

    // Bend amount based on vocal, always positive for downward bend
    let bend = abs(map(bass, 0, 100, 0, 10) * sin(frameCount * 0.3 + i * 0.2));

    // Move the bend point toward the left (e.g., 25% along the string)
    let bendX = lerp(20, 450, 0.20);

    // Draw the string with bend
    beginShape();
    vertex(20, y);        // left end
    vertex(bendX, y + bend); // bend point toward left
    vertex(450, y);       // right end
    endShape();
  }

  pop();

}

function Lyics(words) {
  push();
  fill("black");
  textSize(30);

  let lyricsX =  1670; // change this for horizontal position
  let lyricsY = 750; // change this for vertical position

  text(words, lyricsX, lyricsY);
  pop();

}

function arm(bass) {
fill(200, 150, 100);
  push();
  
  // Move origin to shoulder
  translate(80, 680);
  
  // Map vocal (0-100) to strumming angle (-20 to +20 degrees)
  let strum = map(bass, 0, 100, -20, 20);
  
  // Rotate upper arm
  rotate(70 + strum); 
  
  // Upper arm
  rect(0, 0, 100, 25);
  
  // Move to elbow
  translate(100, 5);
  rotate(-10); // slight bend at elbow
  
  // Lower arm (can also add small strum motion here)
  rotate(strum / 2); // optional: makes lower arm follow a bit
  rect(0, 0, 60, 20);
  
  // Move to wrist
  translate(60, -5);
  rotate(-10); // rotate palm slightly
  
  // Palm
  rect(0, 0, 40, 30, 5);
  
  pop();
  
}


function StageDrawing(x, y, size, scaleFactor = 0.5) {
  let TVWidth = 350;
  let TVHeight = 350;

  push();

  

  //darker stage part
  fill(50, 30, 20);
  rect(900, 960, 1100, 100)

  

  //stage background
  fill(211, 215, 227);
  rect(900, 460, 1100, 500)

  //stage top bit
  fill("black");
  rect(900, 460, 1100, 10)



  //screen background
  image(TVScreen, 1500, 650, TVWidth, TVHeight);







}


function drawTangerine(x, y, size) {
  push();
  translate(x, y);
  rotate(tangerineAngle)
  angleMode(DEGREES);

  // Outer rind
  fill(243, 189, 66);
  stroke(200, 100, 20);
  strokeWeight(4);
  ellipse(0, 0, size);

  // Inner pulp base
  noStroke();
  fill(253, 235, 158);
  ellipse(0, 0, size - 30);

  let numSegments = 8;
  let segmentAngle = 360 / numSegments;
  let outerRadius = size - 60;

  // Segment arcs
  for (let i = 0; i < numSegments; i++) {
    let start = i * segmentAngle + 2;
    let end = (i + 1) * segmentAngle - 2;

    fill(255, 139, 0);
    stroke(255, 200, 100);
    strokeWeight(1);
    arc(0, 0, outerRadius, outerRadius, start, end, PIE);
  }

  // Seeds clustered near center
  fill(255, 255, 200);
  noStroke();
  let seedsPerSlice = 4;
  let seedRadius = 8;
  let seedDistance = 8; // how far from center

  for (let i = 0; i < numSegments; i++) {
    let midAngle = i * segmentAngle + segmentAngle / 2.9;

    for (let j = 0; j < seedsPerSlice; j++) {
      let r = seedDistance + j * 40 + (-2, 2); // slight radial variation
      let a = midAngle + (-5, 5); // slight angular variation

      let sx = cos(a) * r;
      let sy = sin(a) * r;

      push();
      translate(sx, sy);
      rotate(a);
      ellipse(3, 3, seedRadius * 1, seedRadius); // vertical orientation
      pop();
    }
  }

  // Inner circle
  noStroke();
  fill(253, 235, 158);
  ellipse(0, 0, size - 320);

  pop();
}

function TangerineLabel() {
  push();
  textAlign(CENTER, BOTTOM);      // center horizontally, bottom vertically
  textSize(40);                    // adjust size
  fill("white");                   // text color
  text("Tangerine by Naoh Richardson", 1450, 150 - 200); // x, y above the tangerine
  pop();

}
