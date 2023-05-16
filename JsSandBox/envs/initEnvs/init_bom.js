/*
初始化dom对象，以便使用

*/

// 删除框架属性
delete global;
delete Buffer;
delete VMError;
delete GLOBAL;


// window
window = globalThis;
Object.setPrototypeOf(window, Window.prototype)

window.atob = sandbox_vm2.memory["algs"]["base64"].base64decode;
window.btoa = sandbox_vm2.memory["algs"]["base64"].base64encode;

window = sandbox_vm2.proxy(window, "window");



// doucment
document = {}
Object.setPrototypeOf(document, HTMLDocument.prototype);
document = sandbox_vm2.proxy(document, "document");


// navigator
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype)
navigator = sandbox_vm2.proxy(navigator, "navigator");