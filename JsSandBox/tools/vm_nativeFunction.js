// 保护伪造函数toString

const $toString = Function.toString
const sandboxFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random()) + '').toString(36))
const sandboxToString = function () {
    return typeof this === 'function' && this[sandboxFunction_toString_symbol] || $toString.call(this)
}

function set_native(func, key, value) {
    Object.defineProperty(func, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: value
    })
}

delete Function.prototype.toString
set_native(Function.prototype, "toString", sandboxToString)
set_native(Function.prototype.toString, sandboxFunction_toString_symbol, "function toString() { [native code] }")
sandbox_vm2.func_set_native = (func) => {
    set_native(func, sandboxFunction_toString_symbol, `function ${func.name || ''}() { [native code] }`)
}



