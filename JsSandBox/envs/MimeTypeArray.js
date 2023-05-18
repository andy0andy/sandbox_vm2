MimeTypeArray = function MimeTypeArray(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(MimeTypeArray)
sandbox_vm2.rename(MimeTypeArray.prototype, "MimeTypeArray")
sandbox_vm2.defineProperty(MimeTypeArray.prototype, 'length', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(MimeTypeArray.prototype)["length"].get, "get length");
sandbox_vm2.defineProperty(MimeTypeArray.prototype, 'item', function item(){debugger;}, true, true, true); sandbox_vm2.func_set_native(MimeTypeArray.prototype.item)
sandbox_vm2.defineProperty(MimeTypeArray.prototype, 'namedItem', function namedItem(){debugger;}, true, true, true); sandbox_vm2.func_set_native(MimeTypeArray.prototype.namedItem)