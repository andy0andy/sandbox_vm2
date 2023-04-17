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
    code += ReadCode("HTMLDivElement.js");

    code += ReadCode("initElement/init_element.js");

    code += ReadCode("Navigator.js");
    code += ReadCode("Window.js");


    // 代理 hook
    code += ReadCode("ProxyObject.js");

    code += ";debugger;\r\n"


    return code;
}

function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`, "utf-8") + "\r\n"
}


// 导出
module.exports = {
    GetCode
}
