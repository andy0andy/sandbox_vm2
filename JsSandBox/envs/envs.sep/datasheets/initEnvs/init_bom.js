/*
初始化bom对象，以便使用

*/

// 删除框架属性
delete global;
delete Buffer;
delete VMError;
delete GLOBAL;


// window
window = globalThis;
Object.setPrototypeOf(window, Window.prototype)

// 自带函数
window.atob = sandbox_vm2.memory["algs"]["base64"].base64decode;
window.btoa = sandbox_vm2.memory["algs"]["base64"].base64encode;

window = sandbox_vm2.proxy(window, "window");


// doucment
document = sandbox_vm2.memory?.bom?.document ? sandbox_vm2.memory?.bom?.document : {}
Object.setPrototypeOf(document, HTMLDocument.prototype);
document = sandbox_vm2.proxy(document, "document");


// navigator
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype)
navigator = sandbox_vm2.proxy(navigator, "navigator");

// location
location = sandbox_vm2.memory?.bom?.location ? sandbox_vm2.memory?.bom?.location : {};
Object.setPrototypeOf(location, Location.prototype);
location = sandbox_vm2.proxy(location, "location");

// performance
performance = {};
Object.setPrototypeOf(performance, Performance.prototype);
performance = sandbox_vm2.proxy(performance, "performance");





