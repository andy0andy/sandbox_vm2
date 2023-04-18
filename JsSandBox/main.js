const {VM, VMScript} = require("vm2");
const fs = require("fs");

const tools = require(`${__dirname}/tools/tools.node`)
const envs = require(`${__dirname}/envs/envs.node`)


const need_debug_code = fs.readFileSync(`${__dirname}/code/datasheets.js`, "utf-8")
const tools_code = tools.GetCode()
const envs_code = envs.GetCode()

const all_code = tools_code + envs_code + need_debug_code;

const vm = new VM();
const script = new VMScript(all_code, "./debugJS.js");
console.log(vm.run(script));


