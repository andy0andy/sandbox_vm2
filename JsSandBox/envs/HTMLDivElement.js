HTMLDivElement = function HTMLDivElement(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(HTMLDivElement)
sandbox_vm2.rename(HTMLDivElement.prototype, "HTMLDivElement")

Object.setPrototypeOf(HTMLDivElement.prototype,HTMLElement.prototype)
sandbox_vm2.defineProperty(HTMLDivElement.prototype, 'align', undefined, true, true, undefined, function () {return ''},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLDivElement.prototype)["align"].get, "get align");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLDivElement.prototype)["align"].set, "set align");