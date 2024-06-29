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




