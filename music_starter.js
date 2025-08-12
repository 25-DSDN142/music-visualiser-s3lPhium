
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background('white');
  textFont('Verdana'); // please use CSS safe fonts
  
  angleMode(DEGREES);
  const midX = canvasWidth / 2;
  const midY = canvasHeight / 2;


  //Maps
  //let mapName = map(Variable, oldMin, oldMax, newMin, newMax)

  

  let goldPlateSize = map(bass, 0, 100, 220, 250);
  let redDrum = map(drum, 0, 100, 120, 150);

  //Top left gold drum
  drumLegs(400, 120); //top left drum leg

  //Top right gold drum
  drumLegs(800, 120); //top left drum leg

  //Bottom left gold drum
  drumLegs(345, 415); //top left drum leg

  //Bottom right gold drum
  drumLegs(830, 415); //top left drum leg
  

  
  creamyDrums(midX - 20, midY, redDrum);
  creamyDrums(midX + 120, midY, redDrum);


  //base plates
  noStroke();
  fill(231, 175, 64, 255);
  ellipse(midX - 150, midY - 100, goldPlateSize); // top left
  ellipse(midX + 250, midY - 100, goldPlateSize); // top right
  fill(231, 175, 64);
  ellipse(midX - 200, midY + 150, (goldPlateSize) * 0.9); // bottom left 
  ellipse(midX + 300, midY + 150, (goldPlateSize) * 0.9); // bottom right 
  

  orangePlateTopLeft(midX, midY, goldPlateSize);
  orangePlateBottomLeft(midX, midY, goldPlateSize);

  orangePlateTopLeft(midX + 400, midY, goldPlateSize);
  orangePlateBottomLeft(midX + 500, midY, goldPlateSize);
  

  

   textAlign(CENTER);
   textSize(vocal);
   strokeWeight(2)
   text(words, canvasWidth/2, canvasHeight/6);


}

function drumLegs(x, y) {

  fill("black");
  stroke("grey");
  rect(x - 25 , y - 35, 30, 30);
  noStroke();

  fill("grey");
  rect(x - 20 , y - 30, 20, 20);
  noStroke();
  
  stroke("black");
  noFill();
  strokeWeight(15);
  line(x + 30, y + 35, x - 10, y - 20);
  
  strokeWeight(2);
  
  


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








//Drum Set

//Top Left Gold
  



  
 
  //ellipse(midX, midY, sizeMap);
   //fill(206,145,62);

   //stroke(drumStr);
  //strokeWeight(drumStr/6);

  //Bottom Left Gold






// textFont('Verdana'); // please use CSS safe fonts
// rectMode(CENTER)
// textSize(24);




















// let bar_spacing = height / 10;
// let bar_height = width / 12;
//let bar_pos_x = width / 2;
// changes
// vocal bar is red
// fill(200, 0, 0);
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
// fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
// drum bar is green
// fill(0, 200, 0);
// ellipse(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
// fill(0);
// text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
// bass bar is blue
// fill(50, 50, 240);
// rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
// fill(0);
// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
// other bar is white
// fill(200, 200, 200);
// rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
// fill(0);
// text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
// fill(255, 255, 0);

//display "words"

