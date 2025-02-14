$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 620, 1300, 10, "grey");
    createPlatform(100, 500, 1300, 10, "grey");
    createPlatform(0, 380, 1300, 10, "grey");
    createPlatform(100, 260, 1300, 10, "grey");
    createPlatform(0, 140, 1300, 10, "grey");

    // TODO 3 - Create Collectables
    createCollectable("ruby", 1330, 670, 0, 0);
    createCollectable("ruby", 1330, 425, 0, 0);
    createCollectable("ruby", 50, 550, 0, 0);
    createCollectable("ruby", 50, 310, 0, 0);
    createCollectable("ruby", 1330, 197, 0, 0);
    createCollectable("ruby", 50, 80, 0, 0);

    
    // TODO 4 - Create Cannons
    createCannon("top", 250, 1000);
    createCannon("top", 450, 900);
    createCannon("top", 650, 1000);
    createCannon("top", 850, 900);
    createCannon("top", 1050, 1000);
    createCannon("top", 1250, 900);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
