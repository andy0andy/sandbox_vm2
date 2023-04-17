sandbox_vm2.defineProperty = function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter) {
    let attr = {
        configurable: configurable,
        enumerable: enumerable,
    }
    if (writable !== undefined){
        attr["writable"] = writable;
    }
    if (value !== undefined){
        attr["value"] = value;
    }
    if (getter !== undefined){
        attr["get"] = getter;
    }
    if (setter !== undefined){
        attr["set"] = setter;
    }

    Object.defineProperty(obj, key, attr);
}

