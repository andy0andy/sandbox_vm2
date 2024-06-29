const fs = require("fs");

/*
整合代码，工具js
*/

function all_sub_filepath(cur_file){
    /*
    获取目录下所有子文件路径
     */

    let path_list = [];

    // 批量读取
    fs.readdirSync(cur_file).forEach((filename) => {
        if(!filename.startsWith(cur_file)){
            filename = `${cur_file}/${filename}`
        }
        let fsStats = fs.statSync(filename);

        if (fsStats.isFile()) {
            filename = filename.replaceAll(__dirname + "/", "")
            path_list.push(filename)
        } else if (fsStats.isDirectory()) {
            path_list.push(...all_sub_filepath(filename))
        }
    })

    return path_list;
}

function GetCode() {
    let code = ""

    code += ReadCode("tools.config.js")     // 配置
    code += ReadCode("tools.memory.js")     // 对象默认值

    all_sub_filepath(__dirname).forEach((filename) => {

        if (!filename.startsWith("tools.")){
            code += ReadCode(filename);
        }
        
    })


    return code;

}


function ReadCode(name) {
    console.log(`加载tools: ${__dirname}/${name}`);
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n\r\n"
}


// 导出
module.exports = {
    GetCode
}
