//OS module
const { log } = require("console");
const os = require("os");
//access to all methods and properties provided by module
//info about current user
const user = os.userInfo();
console.log(user);

//return the system uptime is sec
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
