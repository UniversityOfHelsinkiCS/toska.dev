const path = require('path')
const spawn = require('child_process').spawn

// Installs node modules for each
const services = ['root', 'jami', 'tuomo', 'mikko', 'terho']

services.forEach(service => {
  const appPath = path.join(__dirname, service)

  spawn('npm', ['ci'], { cwd: appPath, stdio: 'inherit' })
})