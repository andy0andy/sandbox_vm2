const fs = require("fs");

/*
整合代码，工具js
 */


function GetCode() {
    let code = ""

    code += ReadCode("tools.config.js")

    // 批量读取
    fs.readdirSync(`${__dirname}`).forEach((filename) => {
        if (filename !== "tools.node.js" && filename !== "tools.config.js"){
            code += ReadCode(filename);
        }
    })

    return code;

}

function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n"
}


// 导出
module.exports = {
    GetCode
}
