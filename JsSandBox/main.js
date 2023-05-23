const {VM, VMScript} = require("vm2");
const fs = require("fs");

const tools = require(`${__dirname}/tools/tools.node`)  // 工具代码
const envs = require(`${__dirname}/envs/envs.node`)  // 环境代码

// 目标标识, 切换网站时更改
const flag = "datasheets"

const tools_code = tools.GetCode(flag)
const envs_code = envs.GetCode(flag)
const need_debug_code = fs.readFileSync(`${__dirname}/code/${flag}.js`, "utf-8")


const all_code = tools_code + envs_code + need_debug_code;

const vm = new VM({
    sandbox: {flag, fs, fetch, setTimeout, clearTimeout}
});
const script = new VMScript(all_code, "./debugJS.js");
console.log(vm.run(script));


