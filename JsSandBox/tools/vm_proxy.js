
/*
hook 环境
 */

sandbox_vm2.proxy = function (obj, objname, type) {
    function getMethodHandler(WatchName) {
    let methodhandler = {
        apply(target, thisArg, argArray) {
            let result = Reflect.apply(target, thisArg, argArray)
            console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`)
            return result
        },
        construct(target, argArray, newTarget) {
            var result = Reflect.construct(target, argArray, newTarget)
            console.log(`[${WatchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`)
            return result;
        }
    }
    return methodhandler
}

    function getObjhandler(WatchName) {
    let handler = {
        get(target, propKey, receiver) {
            let result = Reflect.get(target, propKey, receiver)
            if (result instanceof Object) {
                if (typeof result === "function") {
                    console.log(`[${WatchName}] getting propKey is [${propKey}] , it is function`)
                    return new Proxy(result,getMethodHandler(WatchName))
                } else {
                    console.log(`[${WatchName}] getting propKey is [${propKey}], result is [${(result)}]`);
                }
                return new Proxy(result, getObjhandler(`${WatchName}.${propKey}`))
            }
            if(typeof(propKey) !== "symbol" && propKey !== "toString") {
                console.log(`[${WatchName}] getting propKey is [${propKey?.description ?? propKey}], result is [${result}]`);
            }
            return result;
        },
        set(target, propKey, value, receiver) {
            if (value instanceof Object) {
                console.log(`[${WatchName}] setting propKey is [${propKey}], value is [${(value)}]`);
            } else {
                console.log(`[${WatchName}] setting propKey is [${propKey}], value is [${value}]`);
            }
            return Reflect.set(target, propKey, value, receiver);
        },
        has(target, propKey) {
            var result = Reflect.has(target, propKey);
            console.log(`[${WatchName}] has propKey [${propKey}], result is [${result}]`)
            return result;
        },
        deleteProperty(target, propKey) {
            var result = Reflect.deleteProperty(target, propKey);
            console.log(`[${WatchName}] delete propKey [${propKey}], result is [${result}]`)
            return result;
        },
        getOwnPropertyDescriptor(target, propKey) {
            var result = Reflect.getOwnPropertyDescriptor(target, propKey);
            console.log(`[${WatchName}] getOwnPropertyDescriptor  propKey [${propKey}] result is [${(result)}]`)
            return result;
        },
        defineProperty(target, propKey, attributes) {
            var result = Reflect.defineProperty(target, propKey, attributes);
            console.log(`[${WatchName}] defineProperty propKey [${propKey}] attributes is [${(attributes)}], result is [${result}]`)
            return result
        },
        getPrototypeOf(target) {
            var result = Reflect.getPrototypeOf(target)
            console.log(`[${WatchName}] getPrototypeOf result is [${(result)}]`)
            return result;
        },
        setPrototypeOf(target, proto) {
            console.log(`[${WatchName}] setPrototypeOf proto is [${(proto)}]`)
            return Reflect.setPrototypeOf(target, proto);
        },
        preventExtensions(target) {
            console.log(`[${WatchName}] preventExtensions`)
            return Reflect.preventExtensions(target);
        },
        isExtensible(target) {
            var result = Reflect.isExtensible(target)
            console.log(`[${WatchName}] isExtensible, result is [${result}]`)
            return result;
        },
        ownKeys(target) {
            var result = Reflect.ownKeys(target)
            console.log(`[${WatchName}] invoke ownkeys, result is [${(result)}]`)
            return result
        },
        // apply(target, thisArg, argArray) {
        //     let result = Reflect.apply(target, thisArg, argArray)
        //     console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`)
        //     return result
        // },
        // construct(target, argArray, newTarget) {
        //     var result = Reflect.construct(target, argArray, newTarget)
        //     console.log(`[${WatchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`)
        //     return result;
        // }
    }
    return handler;
}

    if (sandbox_vm2.config.proxy === false){
        return obj;
    }

    if (type === "method"){
        return new Proxy(obj, getMethodHandler(objname));
    }
    return new Proxy(obj, getObjhandler(objname));

}


