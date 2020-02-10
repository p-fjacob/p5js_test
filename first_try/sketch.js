let sine;
let freq = 400;

function setup() {
  createCanvas(440, 440);
  // create and start the sine oscillator
  sine = new p5.SinOsc();
  sine.start();
}

function draw() {
  background(0);
  // Map mouseX value from 20Hz to 440Hz for frequency
  let hertz = map(mouseX, 0, width, 20.0, 440.0);
  sine.freq(hertz);
  //Draw the wave to visualize the frequency of the sound
  stroke(204);
  for (let x = 0; x < width; x++) {
    let angle = map(x, 0, width, 0, TWP_PI * hertz);
    let sinValue = sin(angle) * 120;
    line(x, 0, x, height/2 + sinValue);
  } 
}