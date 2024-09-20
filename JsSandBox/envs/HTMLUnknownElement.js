HTMLUnknownElement = function HTMLUnknownElement(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(HTMLUnknownElement)
sandbox_vm2.rename(HTMLUnknownElement.prototype, "HTMLUnknownElement")

Object.setPrototypeOf(HTMLUnknownElement.prototype, HTMLElement.prototype)


// 设置属性参数 function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter) {...}