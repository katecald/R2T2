const av = require("tessel-av");
const mic = new av.Microphone();

// Initialize the microphone input
mic.listen();
// This will automattically pipe the current
// input to an available output.
mic.monitor();