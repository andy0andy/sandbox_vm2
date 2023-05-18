PluginArray = function PluginArray(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(PluginArray)
sandbox_vm2.rename(PluginArray.prototype, "PluginArray")
sandbox_vm2.defineProperty(PluginArray.prototype, 'length', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(PluginArray.prototype)["length"].get, "get length");
sandbox_vm2.defineProperty(PluginArray.prototype, 'item', function item(){debugger;}, true, true, true); sandbox_vm2.func_set_native(PluginArray.prototype.item)
sandbox_vm2.defineProperty(PluginArray.prototype, 'namedItem', function namedItem(){debugger;}, true, true, true); sandbox_vm2.func_set_native(PluginArray.prototype.namedItem)
sandbox_vm2.defineProperty(PluginArray.prototype, 'refresh', function refresh(){debugger;}, true, true, true); sandbox_vm2.func_set_native(PluginArray.prototype.refresh)