// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

let ted = (sketch) => {
  let teddy;
  let teddyColor;
  let colored = false;
  let backgroundColor;

  sketch.preload = () => {
    // Load model with normalise parameter set to true will affect translate
    teddy = sketch.loadModel("./assets/3d-models/teddy.obj", false);
  };

  sketch.setup = () => {
    sketch.createCanvas(
      window.innerWidth - 5,
      window.innerHeight - 5,
      sketch.WEBGL
    );

    backgroundColor = sketch.color(10, 10, 10);
  };

  sketch.draw = () => {
    sketch.background(backgroundColor);
    sketch.smooth();
    sketch.noStroke();

    sketch.ambientLight(108, 108, 108);
    sketch.directionalLight(128, 128, 128, 0, 0, -1);

    sketch.ambientMaterial(194, 42, 132);

    if (colored) {
      sketch.ambientMaterial(teddyColor);
    }

    sketch.camera(
      0.1 * (sketch.mouseX - sketch.windowWidth / 2),
      0.2 * (sketch.mouseY - sketch.windowHeight / 2),
      250 + 0.04 * sketch.abs(sketch.mouseX - sketch.windowWidth / 2)
    );

    sketch.rotateX(sketch.PI - sketch.radians(30));
    sketch.rotateY(sketch.PI + sketch.radians(10));

    sketch.translate(0, -50, 40);

    sketch.model(teddy);
  };

  sketch.colorize = () => {
    teddyColor = sketch.color(
      sketch.random(40, 255),
      sketch.random(40, 255),
      sketch.random(40, 255)
    );
    backgroundColor = sketch.color(
      sketch.random(40),
      sketch.random(40),
      sketch.random(40)
    );
    colored = true;
  };

  sketch.mousePressed = () => {
    sketch.colorize();
  };

  sketch.keyPressed = () => {
    sketch.colorize();
  };

  sketch.windowResized = () => {
    sketch.resizeCanvas(window.innerWidth - 5, window.innerHeight - 5);
  };
};

let teddySketch = new p5(ted, "sketch-placeholder");
