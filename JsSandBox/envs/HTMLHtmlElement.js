HTMLHtmlElement = function HTMLHtmlElement(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(HTMLHtmlElement)
sandbox_vm2.rename(HTMLHtmlElement.prototype, "HTMLHtmlElement")

Object.setPrototypeOf(HTMLHtmlElement.prototype,HTMLElement.prototype)
sandbox_vm2.defineProperty(HTMLHtmlElement.prototype, 'version', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLHtmlElement.prototype)["version"].get, "get version");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLHtmlElement.prototype)["version"].set, "set version");
