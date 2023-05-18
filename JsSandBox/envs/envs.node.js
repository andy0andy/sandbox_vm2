const fs = require("fs");

/*
环境代码
 */


function GetCode() {
    let code = ""

    // 按顺序排
    code += ReadCode("EventTarget.js");
    code += ReadCode("Node.js");
    code += ReadCode("Document.js");
    code += ReadCode("HTMLDocument.js");
    
    code += ReadCode("Element.js");
    code += ReadCode("HTMLElement.js");
    code += ReadCode("HTMLScriptElement.js");
    code += ReadCode("HTMLCollection.js");

    code += ReadCode("Location.js");

    code += ReadCode("EventCounts.js");
    code += ReadCode("Performance.js");

    code += ReadCode("NetworkInformation.js");

    code += ReadCode("Plugin.js");
    code += ReadCode("PluginArray.js");
    code += ReadCode("MimeType.js");
    code += ReadCode("MimeTypeArray.js");

    code += ReadCode("Window.js");
    code += ReadCode("Navigator.js");

    // 初始化对象
    code += ReadCode("initEnvs/init_dom.js");
    code += ReadCode("initEnvs/init_bom.js");


    code += ";debugger;\r\n\r\n"


    return code;
}

function ReadCode(name) {
    console.log(`加载envs: ${__dirname}/${name}`);
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n\r\n"
}


// 导出
module.exports = {
    GetCode
}
