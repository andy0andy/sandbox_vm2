NetworkInformation = function NetworkInformation(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(NetworkInformation)
sandbox_vm2.rename(NetworkInformation.prototype, "NetworkInformation")

Object.setPrototypeOf(NetworkInformation.prototype,EventTarget.prototype)
sandbox_vm2.defineProperty(NetworkInformation.prototype, 'onchange', undefined, true, true, undefined, function () {debugger},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(NetworkInformation.prototype)["onchange"].get, "get onchange");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(NetworkInformation.prototype)["onchange"].set, "set onchange");
sandbox_vm2.defineProperty(NetworkInformation.prototype, 'effectiveType', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(NetworkInformation.prototype)["effectiveType"].get, "get effectiveType");
sandbox_vm2.defineProperty(NetworkInformation.prototype, 'rtt', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(NetworkInformation.prototype)["rtt"].get, "get rtt");
sandbox_vm2.defineProperty(NetworkInformation.prototype, 'downlink', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(NetworkInformation.prototype)["downlink"].get, "get downlink");
sandbox_vm2.defineProperty(NetworkInformation.prototype, 'saveData', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(NetworkInformation.prototype)["saveData"].get, "get saveData");