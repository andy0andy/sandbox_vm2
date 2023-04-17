const fs = require("fs");

/*
环境代码
 */


function GetCode() {
    let code = ""

    // 批量读取
    fs.readdirSync(`${__dirname}`).forEach((filename) => {
        if (filename !== "envs.node.js" && filename !== "ProxyObject.js"){
            code += ReadCode(filename);
        }
    })

    // 代理 hook
    code += ReadCode("ProxyObject.js")


    return code;
}

function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n"
}


// 导出
module.exports = {
    GetCode
}
