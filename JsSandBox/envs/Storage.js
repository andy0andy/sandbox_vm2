Storage = function Storage(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(Storage)
sandbox_vm2.rename(Storage.prototype, "Storage")
sandbox_vm2.defineProperty(Storage.prototype, 'length', undefined, true, true, undefined, function () {
    let keys = Object.keys(sandbox_vm2.memory.bom.localStorage);
    return keys.length;
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Storage.prototype)["length"].get, "get length");
sandbox_vm2.defineProperty(Storage.prototype, 'clear', function clear(){
    delete sandbox_vm2.memory.bom.localStorage;
    sandbox_vm2.memory.bom.localStorage = {}; 
}, true, true, true); sandbox_vm2.func_set_native(Storage.prototype.clear)
sandbox_vm2.defineProperty(Storage.prototype, 'getItem', function getItem(keyName){
    return sandbox_vm2.memory.bom.localStorage[keyName];
}, true, true, true); sandbox_vm2.func_set_native(Storage.prototype.getItem)
sandbox_vm2.defineProperty(Storage.prototype, 'key', function key(index){
    let keys = Object.keys(sandbox_vm2.memory.bom.localStorage);
    return sandbox_vm2.memory.bom.localStorage[keys[index]];
}, true, true, true); sandbox_vm2.func_set_native(Storage.prototype.key)
sandbox_vm2.defineProperty(Storage.prototype, 'removeItem', function removeItem(keyName){
    delete sandbox_vm2.memory.bom.localStorage[keyName];
}, true, true, true); sandbox_vm2.func_set_native(Storage.prototype.removeItem)
sandbox_vm2.defineProperty(Storage.prototype, 'setItem', function setItem(keyName, keyValue){
    sandbox_vm2.memory.bom.localStorage[keyName] = keyValue;

}, true, true, true); sandbox_vm2.func_set_native(Storage.prototype.setItem)