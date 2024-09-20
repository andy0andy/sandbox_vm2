History = function History(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(History)
sandbox_vm2.rename(History.prototype, "History")
sandbox_vm2.defineProperty(History.prototype, 'length', undefined, true, true, undefined, function () {
    return sandbox_vm2?.memory?.bom?.history?.length;
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(History.prototype)["length"].get, "get length");
sandbox_vm2.defineProperty(History.prototype, 'scrollRestoration', undefined, true, true, undefined, function () {
    return sandbox_vm2?.memory?.bom?.history?.scrollRestoration;
},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(History.prototype)["scrollRestoration"].get, "get scrollRestoration");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(History.prototype)["scrollRestoration"].set, "set scrollRestoration");
sandbox_vm2.defineProperty(History.prototype, 'state', undefined, true, true, undefined, function () {
    return sandbox_vm2?.memory?.bom?.history?.state;
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(History.prototype)["state"].get, "get state");
sandbox_vm2.defineProperty(History.prototype, 'back', function back(){debugger;}, true, true, true); sandbox_vm2.func_set_native(History.prototype.back)
sandbox_vm2.defineProperty(History.prototype, 'forward', function forward(){debugger;}, true, true, true); sandbox_vm2.func_set_native(History.prototype.forward)
sandbox_vm2.defineProperty(History.prototype, 'go', function go(){debugger;}, true, true, true); sandbox_vm2.func_set_native(History.prototype.go)
sandbox_vm2.defineProperty(History.prototype, 'pushState', function pushState(){debugger;}, true, true, true); sandbox_vm2.func_set_native(History.prototype.pushState)
sandbox_vm2.defineProperty(History.prototype, 'replaceState', function replaceState(){debugger;}, true, true, true); sandbox_vm2.func_set_native(History.prototype.replaceState)