
// const OWNER_ADMIN_CMDS = [["remove", 'kick'], ['cmd', 'add']]
//  const cmdFilter = (messageBody) => {
//   if(messageBody.split(" ").length === 2){
//     const cmdByUser = messageBody.split(" ")[0]
//     return OWNER_ADMIN_CMDS.some((cmds) => cmds.some((cmd)=> cmd.includes(cmdByUser)))
//   }
//   else {
//     return false
//   }
// };
//
// const cmds = "cmd cmd"
//
// console.log(cmdFilter(cmds))

const sttr = `this is my name, "this is my cmd"`

const cmd = `!notes "machine dwdw dw dw"`

sttr.split(`"`)

console.log(cmd.split(`"`))
// ["this", "is", "my", "name"]
