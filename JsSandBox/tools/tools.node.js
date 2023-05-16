const fs = require("fs");

/*
整合代码，工具js
 */


function GetCode() {
    let code = ""

    code += ReadCode("tools.config.js")     // 配置
    code += ReadCode("tools.memory.js")     // 共享内存

    // 批量读取
    fs.readdirSync(`${__dirname}`).forEach((filename) => {
        let fsStats = fs.statSync(`${__dirname}/${filename}`);
           
        if (fsStats.isFile()){
            if (!filename.startsWith("tools.")){
                code += ReadCode(filename);
            }
        }else if(fsStats.isDirectory()){
            console.log(filename)
        }
        
    })

    return code;

}

function ReadCode(name) {
    console.log(`加载 ${__dirname}/${name}`);
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n\r\n"
}


// 导出
module.exports = {
    GetCode
}
