const spawn = require('child_process').spawn;
const path = require('path')

const jekyllDir = path.join(__dirname, '..', 'jekyll')

spawn('jekyll', ['serve', '--trace'], { stdio: 'inherit', cwd: jekyllDir });
