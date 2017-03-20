var av = require('tessel-av');
var mp3 = path.join(__dirname, 'im_blue.mp3');
var sound = new av.Speaker(mp3);

sound.play();

sound.on('ended', function(seconds) {
  sound.play();
});
