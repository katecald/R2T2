var os = require('os');
var path = require('path');
var av = require('tessel-av');

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var speaker = new av.Speaker();

speaker.say(`
  Hello, this is ${os.hostname()}. 
  I'm going to say my A-B-C's now
`);

speaker.on('ended', function() {
  if (alphabet.length) {
    this.say(alphabet.shift());
  }
});