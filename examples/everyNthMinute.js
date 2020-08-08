const { everyNthSecond } = require('../index')

function sayMyName (name = 'node-cron wrapper') {
  console.log(`Hi ${name}`)
}

// This will keep running indefinitely until stopped otherwise
// See examples/at.js on how to stop cron jobs based on time
everyNthSecond(4, sayMyName, 'Cronify')