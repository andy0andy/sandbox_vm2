Plugin = function Plugin(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(Plugin)
sandbox_vm2.rename(Plugin.prototype, "Plugin")
sandbox_vm2.defineProperty(Plugin.prototype, 'name', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Plugin.prototype)["name"].get, "get name");
sandbox_vm2.defineProperty(Plugin.prototype, 'filename', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Plugin.prototype)["filename"].get, "get filename");
sandbox_vm2.defineProperty(Plugin.prototype, 'description', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Plugin.prototype)["description"].get, "get description");
sandbox_vm2.defineProperty(Plugin.prototype, 'length', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Plugin.prototype)["length"].get, "get length");
sandbox_vm2.defineProperty(Plugin.prototype, 'item', function item(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Plugin.prototype.item)
sandbox_vm2.defineProperty(Plugin.prototype, 'namedItem', function namedItem(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Plugin.prototype.namedItem)