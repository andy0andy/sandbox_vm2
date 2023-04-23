const fs = require("fs");

/*
环境代码
 */


function GetCode() {
    let code = ""

    code += ReadCode("EventTarget.js");
    code += ReadCode("Node.js");
    code += ReadCode("Document.js");
    code += ReadCode("HTMLDocument.js");
    
    code += ReadCode("Element.js");
    code += ReadCode("HTMLElement.js");
    code += ReadCode("HTMLScriptElement.js");
    code += ReadCode("HTMLCollection.js");

    code += ReadCode("Window.js");
    code += ReadCode("Navigator.js");

    code += ReadCode("initEnvs/init_bom.js");
    code += ReadCode("initEnvs/init_dom.js");


    code += ";debugger;\r\n\r\n"


    return code;
}

function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n\r\n"
}


// 导出
module.exports = {
    GetCode
}
