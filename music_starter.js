
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background('white');
  textFont('Verdana'); // please use CSS safe fonts
  
  angleMode(DEGREES);
  const midX = canvasWidth / 2;
  const midY = canvasHeight / 2;


  //Maps
  //let mapName = map(Variable, oldMin, oldMax, newMin, newMax)

  

  let sizeMap = map(bass, 0, 100, 200, 300);

  //Top left gold drum
  drumLegs(400, 120); //top left drum leg

  //Top right gold drum
  drumLegs(800, 120); //top left drum leg

  //Bottom left gold drum
  drumLegs(345, 415); //top left drum leg

  //Bottom right gold drum
  drumLegs(830, 415); //top left drum leg
  


  


  //base plates
  noStroke();
  fill(231, 175, 64);
  ellipse(midX - 150, midY - 100, sizeMap); // top left
  ellipse(midX + 250, midY - 100, sizeMap); // top right
  fill(231, 175, 64);
  ellipse(midX - 200, midY + 150, (sizeMap) * 0.9); // bottom left 
  ellipse(midX + 300, midY + 150, (sizeMap) * 0.9); // bottom right 
  

  orangePlateTopLeft(midX, midY, sizeMap);
  orangePlateBottomLeft(midX, midY, sizeMap);

  orangePlateTopLeft(midX + 400, midY, sizeMap);
  orangePlateBottomLeft(midX + 500, midY, sizeMap);
   

  

   textAlign(CENTER);
   textSize(vocal);
   strokeWeight(2)
   text(words, canvasWidth/2, canvasHeight/6);


}

function drumLegs(x, y) {

  fill("black")
  rect(x - 25 , y - 35, 30, 30);
  noStroke();

  fill("grey")
  rect(x - 20 , y - 30, 20, 20);
  noStroke();
  
  stroke("black");
  noFill()
  strokeWeight(15);
  
  line(x + 30, y + 60, x - 10, y - 20);
  strokeWeight(2);
  
  


}


function orangePlateTopLeft(midX, midY, sizeMap) {

  let spacing = 30;
  for (let i = 1; i <= 5; i++) {
    stroke(209, 148, 33);
    noFill();
    let diameter = sizeMap - i * spacing;
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

function orangePlateBottomLeft(midX, midY, sizeMap) {
  let spacing = 30;

  for (let i = 1; i <= 5; i++) {
    stroke(209, 148, 33);
    noFill();
    let diameter = sizeMap * 0.9 - i * spacing;
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

