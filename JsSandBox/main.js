const {VM, VMScript} = require("vm2");
const fs = require("fs");

const tools = require(`${__dirname}/tools/tools.node`)  // 工具代码
const envs = require(`${__dirname}/envs/envs.node`)  // 环境代码

// 目标标识, 切换网站时更改
const need_debug_code = fs.readFileSync(`${__dirname}/code/yrx-64/64.js`, "utf-8")




const tools_code = tools.GetCode()
const envs_code = envs.GetCode()

const all_code = tools_code + envs_code + need_debug_code;

const vm = new VM({
    sandbox: {fs, process, setInterval, clearTimeout}
});
const script = new VMScript(all_code, "./debugJS.js");
const result = vm.run(script);
console.log(`JsSandBox: ${result}`);

