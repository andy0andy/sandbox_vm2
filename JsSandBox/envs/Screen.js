Screen = function Screen(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(Screen)
sandbox_vm2.rename(Screen.prototype, "Screen")

Object.setPrototypeOf(Screen.prototype,EventTarget.prototype)
sandbox_vm2.defineProperty(Screen.prototype, 'availWidth', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["availWidth"].get, "get availWidth");
sandbox_vm2.defineProperty(Screen.prototype, 'availHeight', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["availHeight"].get, "get availHeight");
sandbox_vm2.defineProperty(Screen.prototype, 'width', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["width"].get, "get width");
sandbox_vm2.defineProperty(Screen.prototype, 'height', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["height"].get, "get height");
sandbox_vm2.defineProperty(Screen.prototype, 'colorDepth', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["colorDepth"].get, "get colorDepth");
sandbox_vm2.defineProperty(Screen.prototype, 'pixelDepth', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["pixelDepth"].get, "get pixelDepth");
sandbox_vm2.defineProperty(Screen.prototype, 'availLeft', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["availLeft"].get, "get availLeft");
sandbox_vm2.defineProperty(Screen.prototype, 'availTop', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["availTop"].get, "get availTop");
sandbox_vm2.defineProperty(Screen.prototype, 'orientation', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["orientation"].get, "get orientation");

sandbox_vm2.defineProperty(Screen.prototype, 'onchange', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["onchange"].get, "get onchange");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["onchange"].set, "set onchange");
sandbox_vm2.defineProperty(Screen.prototype, 'isExtended', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Screen.prototype)["isExtended"].get, "get isExtended");