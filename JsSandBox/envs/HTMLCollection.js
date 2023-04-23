HTMLCollection = function HTMLCollection(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(HTMLCollection)
sandbox_vm2.rename(HTMLCollection.prototype, "HTMLCollection")

// sandbox_vm2.defineProperty(HTMLCollection.prototype, 'length', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLCollection.prototype)["length"].get, "get length");
sandbox_vm2.defineProperty(HTMLCollection.prototype, 'item', function item(){debugger;}, true, true, true); sandbox_vm2.func_set_native(HTMLCollection.prototype.item)
sandbox_vm2.defineProperty(HTMLCollection.prototype, 'namedItem', function namedItem(){debugger;}, true, true, true); sandbox_vm2.func_set_native(HTMLCollection.prototype.namedItem)