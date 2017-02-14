function setup() {
  createCanvas(600, 600);
  background(187, 184, 175);
}

function draw() {
  //rect() x="-0.5" y="0.5" class="st1" width="600" height="599.7"/>
  noStroke();

  // class="st1" cx="266.5" cy="229.9" r="186.2"/>
  fill(234, 226, 207);
	ellipse(266, 230, 371, 371);

  //<polygon class="st1" points="600,415.2 -0.5,81.7 0,295.4 555.5,600.4 599.5,600.2 	"/>
  fill(0, 0, 0, 60);
  beginShape();
  vertex(600, 415);
  vertex(0, 82);
  vertex(0, 296);
  vertex(556, 600);
  vertex(600, 600);
  endShape(CLOSE);

  //<polygon class="st1" points="258.1,600.4 442.3,600.1 599.5,239.1 599.5,0.5 518,0.5 	"/>
  fill(0, 0, 0, 60);
  beginShape();
  vertex(258, 600);
  vertex(442, 600);
  vertex(600, 239);
  vertex(600, 0);
  vertex(518, 0);
  endShape(CLOSE);

	//<polygon class="st1" points="162,600.2 599.5,18.7 599.5,296 375.7,600 	"/>
  fill(255, 0, 0, 60);
  beginShape();
  vertex(162, 600);
  vertex(600, 19);
  vertex(600, 296);
  vertex(376, 600);
  endShape(CLOSE);

	//<polygon class="st1" points="-0.5,132.1 502.3,600.1 599.5,600.2 599.5,437 116.2,0.5 -0.5,0.5 	"/>
  fill(255, 0, 0, 60);
  beginShape();
  vertex(0, 132);
  vertex(502, 600);
  vertex(600, 600);
  vertex(600, 437);
  vertex(116, 0);
  vertex(0, 0);
  endShape(CLOSE);
}
