const fs = require("fs");

/*
环境代码
 */


function GetCode() {
    let code = ""

    // 按顺序排
    
    code += ReadCode("EventTarget.js");
    code += ReadCode("Node.js");

    code += ReadCode("Element.js");
    code += ReadCode("HTMLElement.js");
    code += ReadCode("HTMLScriptElement.js");
    code += ReadCode("HTMLCollection.js");
    code += ReadCode("HTMLDivElement.js");
    code += ReadCode("HTMLHtmlElement.js");
    code += ReadCode("HTMLHeadElement.js");
    code += ReadCode("Event.js");
    code += ReadCode("HTMLMediaElement.js");
    code += ReadCode("HTMLAudioElement.js");
    code += ReadCode("Audio.js");
    code += ReadCode("HTMLBodyElement.js");
    code += ReadCode("WebGL2RenderingContext.js");
    code += ReadCode("CanvasRenderingContext2D.js");
    code += ReadCode("HTMLCanvasElement.js");
    code += ReadCode("HTMLUnknownElement.js");

    code += ReadCode("Document.js");
    code += ReadCode("HTMLDocument.js");

    code += ReadCode("Location.js");
    code += ReadCode("Storage.js");

    code += ReadCode("EventCounts.js");
    code += ReadCode("Performance.js");

    code += ReadCode("NetworkInformation.js");

    code += ReadCode("Plugin.js");
    code += ReadCode("PluginArray.js");
    code += ReadCode("MimeType.js");
    code += ReadCode("MimeTypeArray.js");

    code += ReadCode("XMLHttpRequestEventTarget.js");
    code += ReadCode("XMLHttpRequest.js");
    code += ReadCode("FormData.js")
    code += ReadCode("Screen.js");

    code += ReadCode("History.js"); 

    code += ReadCode("Window.js");
    code += ReadCode("Navigator.js");

    // 初始化对象
    code += ReadCode(`init_dom.js`);
    code += ReadCode(`init_bom.js`);
 
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
