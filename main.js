// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [200, 500, 350, 400, 580, 170, 225, 325, 100, 550, 250, 300, 600, 50, 275];


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

do {
    myArray.push(1)
} while (myArray.length < 100)

myArray = myArray.map(num => 300)


document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {

    console.log(event.code)
    if (event.code == "Space") {
        myArray =  myArray.map(num => 300 +  Math.floor((Math.random() * (6 + 5) - 5)))
    } else if (event.code == "KeyR") {
        myArray = myArray.map(num => 300)
    }             
}

 