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
        fs.stat(`${__dirname}/${filename}`, function(err, stat){
            if(err){
                console.log("文件不存在！");
             }else{
                if (stat.isFile()){
                    if (!filename.startsWith("tools.")){
                        code += ReadCode(filename);
                    }
                }else if(stat.isDirectory()){
                    console.log(filename)
                }
               
             }
        })
    })

    return code;

}

GetCode()

function ReadCode(name) {
    console.log(`加载 ${__dirname}/${filename}`);
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n\r\n"
}


// 导出
module.exports = {
    GetCode
}
