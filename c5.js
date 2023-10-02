const os = require('os')

console.log(os.userInfo())

console.log(`System time is ${os.uptime()}`);

const dt = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(dt)