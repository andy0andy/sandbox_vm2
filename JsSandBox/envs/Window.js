Window = function Window(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(Window)
sandbox_vm2.rename(Window.prototype, "Window")

Object.setPrototypeOf(Window.prototype,EventTarget.prototype)
sandbox_vm2.defineProperty(Window, 'TEMPORARY', 0, false, true, false);
sandbox_vm2.defineProperty(Window, 'PERSISTENT', 1, false, true, false);
sandbox_vm2.defineProperty(Window.prototype, 'TEMPORARY', 0, false, true, false);
sandbox_vm2.defineProperty(Window.prototype, 'PERSISTENT', 1, false, true, false);



window = globalThis;
Object.setPrototypeOf(window, Window.prototype)


delete global;
delete Buffer;
delete VMError;
delete GLOBAL;


window.atob = sandbox_vm2.memory["algs"]["base64"].base64decode;
window.btoa = sandbox_vm2.memory["algs"]["base64"].base64encode;


window = sandbox_vm2.proxy(window, "window");


