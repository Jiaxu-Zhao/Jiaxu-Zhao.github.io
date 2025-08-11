let symbols = "01bias偏見편견تحيزπρ";

function setup() {
  createCanvas(800, 600);
  background(0);
  textFont('monospace');
  textSize(16);
}

function draw() {
  background(0, 150);
  fill(0, 255, 70);
  for (let i = 0; i < width; i += 20) {
    let randChar = symbols.charAt(floor(random(symbols.length)));
    text(randChar, i, random(height));
  }
}
