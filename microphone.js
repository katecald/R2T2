"use strict";

const av = require("tessel-av");
const cp = require("child_process");
const Transform = require("stream").Transform;

class NopTransform extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
}

const nop = new NopTransform();
const mic = new av.Microphone();
// Make an aplay output
const aplay = cp.spawn('aplay', ['-r', 9600]);


// 1. Create an input with a rate of 9600
// 2. Pipe it through an instance of NopTransform,
//    wich actually does nothing.
// 3. Output to the aplay process
mic.listen(['-r', 9600]).pipe(nop).pipe(aplay.stdin);