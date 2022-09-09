//Import node-cron and schedule a task:
const cron = require('node-cron')
// understanding syntax
cron.schedule('* 18 * * * *',()=>{
    console.log('running a task every second');
})

// using ranges
cron.schedule('1-20 34 * * * *',()=>{
    console.log('running');
})

// cron methods
const task = cron.schedule('1-20 34 * * * *',()=>{
    console.log('running', Math.random());
})

task.stop()
task.start()