Window = function Window() {
    sandbox_vm2.throwError("TypeError", "Illegal constructor");

};
sandbox_vm2.func_set_native(Window);
sandbox_vm2.rename(Window.prototype, "Window")

Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;

delete global;
delete Buffer;
delete VMError;
delete GLOBAL;


window = globalThis;
Object.setPrototypeOf(window, Window.prototype)
window.atob = sandbox_vm2.base64.decode
window.btoa = sandbox_vm2.base64.encode


