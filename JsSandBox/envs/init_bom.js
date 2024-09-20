/*
初始化bom对象，以便使用

*/

// 删除框架属性
delete global;
delete Buffer;
delete VMError;
delete GLOBAL;
delete require;


// window
window = globalThis;
Object.setPrototypeOf(window, Window.prototype)

// 自带函数
window.atob = sandbox_vm2.memory["algs"]["base64"].base64decode;
window.btoa = sandbox_vm2.memory["algs"]["base64"].base64encode;

// 特殊使用
window.top = window;

window = sandbox_vm2.proxy(window, "window");
 

// doucment
document = sandbox_vm2.memory?.bom?.document ? sandbox_vm2.memory?.bom?.document : {}
Object.setPrototypeOf(document, HTMLDocument.prototype);
document = sandbox_vm2.proxy(document, "document");


// navigator
navigator = sandbox_vm2.memory?.bom?.navigator ? sandbox_vm2.memory?.bom?.navigator : {};
Object.setPrototypeOf(navigator, Navigator.prototype)
navigator = sandbox_vm2.proxy(navigator, "navigator");

// location
location = sandbox_vm2.memory?.bom?.location ? sandbox_vm2.memory?.bom?.location : {};
Object.setPrototypeOf(location, Location.prototype);
location = sandbox_vm2.proxy(location, "location");

// performance
performance = {};
performance = sandbox_vm2.memory?.bom?.performance ? sandbox_vm2.memory?.bom?.performance : {};
Object.setPrototypeOf(performance, Performance.prototype);
performance = sandbox_vm2.proxy(performance, "performance");


// localStorage
localStorage = {}
localStorage = sandbox_vm2.memory?.bom?.localStorage ? sandbox_vm2.memory?.bom?.localStorage : {};
Object.setPrototypeOf(localStorage, Storage.prototype);
localStorage = sandbox_vm2.proxy(localStorage, "localStorage");

// sessionStorage
sessionStorage = sandbox_vm2.memory?.bom?.sessionStorage ? sandbox_vm2.memory?.bom?.sessionStorage : {};
Object.setPrototypeOf(sessionStorage, Storage.prototype);
sessionStorage = sandbox_vm2.proxy(sessionStorage, "sessionStorage");

// Screen
screen = sandbox_vm2.memory?.bom?.screen ? sandbox_vm2.memory?.bom?.screen : {};
Object.setPrototypeOf(screen, Screen.prototype);
screen = sandbox_vm2.proxy(screen, "screen");

// History
history = sandbox_vm2.memory?.bom?.history ? sandbox_vm2.memory?.bom?.history : {};
Object.setPrototypeOf(history, History.prototype);
history = sandbox_vm2.proxy(history, "history");


