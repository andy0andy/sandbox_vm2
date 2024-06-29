// 保护伪造函数toString
;(() => {
    const $toString = Function.toString
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random()) + '').toString(36))
    const myToString = function (){
        return typeof this === 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    }
    function set_native(func, key, value){
        Object.defineProperty(func, key, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        })
    }
    delete Function.prototype.toString
    set_native(Function.prototype, "toString", myToString)
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }")
    globalThis.sandbox_vm2.func_set_native = (func, funcname) => {
        //todo 系统函数没名字 native code
        set_native(func, myFunction_toString_symbol, `function ${func.name || funcname || ''}() { [native code] }`)
    }
}).call(this)