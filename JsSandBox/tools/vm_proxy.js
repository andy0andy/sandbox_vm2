/*
hook 环境
 */



sandbox_vm2.proxy = function (obj, objname, type) {
    if (sandbox_vm2.config.proxy === false) {
        return obj
    }

    function getMethodHandler(WatchName) {
        let methodhandler = {
            apply(target, thisArg, argArray) {
                let result = Reflect.apply(target, thisArg, argArray)
                if (target.name !== "toString") {
                    if (target.name === "addEventListener") {
                        sandbox_vm2.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray[0]}], result is [${result}].`)
                    } else if (WatchName === "window.console") {
                    } else {
                        sandbox_vm2.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`)
                    }
                } else {
                    sandbox_vm2.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`)
                }
                return result
            },
            construct(target, argArray, newTarget) {
                var result = Reflect.construct(target, argArray, newTarget)
                sandbox_vm2.log(`[${WatchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`)
                return result;
            }
        }
        return methodhandler
    }

    function getObjhandler(WatchName) {
        let handler = {
            get(target, propKey, receiver) {
                // if (propKey === "constructor"){
                //     debugger;
                // }
                let result = Reflect.get(target, propKey, receiver)
                if (result instanceof Object) {
                    if (typeof result === "function") {
                        // sandbox_vm2.log(`[${WatchName}] getting propKey is [${propKey}] , it is function`)
                        return new Proxy(result, getMethodHandler(WatchName))
                    }
                    else {
                        sandbox_vm2.log(`[${WatchName}] getting propKey is [${propKey}], result is [${(result)}]`);
                    }
                    return new Proxy(result, getObjhandler(`${WatchName}.${propKey}`))
                }
                // if(typeof(propKey) !== "symbol" && propKey !== "toString"){
                if (typeof (propKey) !== "symbol") {
                    sandbox_vm2.log(`[${WatchName}] getting propKey is [${propKey?.description ?? propKey}], result is [${result}]`);
                }
                return result;
            },
            set(target, propKey, value, receiver) {
                if (value instanceof Object) {
                    sandbox_vm2.log(`[${WatchName}] setting propKey is [${propKey}], value is [${(value)}]`);
                } else {
                    sandbox_vm2.log(`[${WatchName}] setting propKey is [${propKey}], value is [${value}]`);
                }
                return Reflect.set(target, propKey, value, receiver);
            },
            has(target, propKey) {
                var result = Reflect.has(target, propKey);
                sandbox_vm2.log(`[${WatchName}] has propKey [${propKey}], result is [${result}]`)
                return result;
            },
            deleteProperty(target, propKey) {
                var result = Reflect.deleteProperty(target, propKey);
                sandbox_vm2.log(`[${WatchName}] delete propKey [${propKey}], result is [${result}]`)
                return result;
            },
            // getOwnPropertyDescriptor(target, propKey) {
            //     var result = Reflect.getOwnPropertyDescriptor(target, propKey);
            //     sandbox_vm2.log(`[${WatchName}] getOwnPropertyDescriptor  propKey [${propKey}] result is [${(result)}]`)
            //     return result;
            // },
            defineProperty(target, propKey, attributes) {
                var result = Reflect.defineProperty(target, propKey, attributes);
                sandbox_vm2.log(`[${WatchName}] defineProperty propKey [${propKey}] attributes is [${(attributes)}], result is [${result}]`)
                return result
            },
            getPrototypeOf(target) {
                var result = Reflect.getPrototypeOf(target)
                sandbox_vm2.log(`[${WatchName}] getPrototypeOf result is [${(result)}]`)
                return result;
            },
            setPrototypeOf(target, proto) {
                sandbox_vm2.log(`[${WatchName}] setPrototypeOf proto is [${(proto)}]`)
                return Reflect.setPrototypeOf(target, proto);
            },
            preventExtensions(target) {
                sandbox_vm2.log(`[${WatchName}] preventExtensions`)
                return Reflect.preventExtensions(target);
            },
            isExtensible(target) {
                var result = Reflect.isExtensible(target)
                sandbox_vm2.log(`[${WatchName}] isExtensible, result is [${result}]`)
                return result;
            },
            // ownKeys(target) {
            //     var result = Reflect.ownKeys(target)
            //     // sandbox_vm2.log(`[${WatchName}] invoke ownkeys, result is [${(result)}]`)
            //     debugger
            //     if (result.includes("VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL")){
            //         delete result[result.indexOf("VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL")]
            //     }
            //     sandbox_vm2.log(`[${WatchName}] invoke ownkeys`)
            //     return result
            // },
            // apply(target, thisArg, argArray) {
            //     let result = Reflect.apply(target, thisArg, argArray)
            //     sandbox_vm2.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`)
            //     return result
            // },
            // construct(target, argArray, newTarget) {
            //     var result = Reflect.construct(target, argArray, newTarget)
            //     sandbox_vm2.log(`[${WatchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`)
            //     return result;
            // }
        }
        return handler;
    }


    if (type === "method") {
        return new Proxy(obj, getMethodHandler(objname));
    }
    return new Proxy(obj, getObjhandler(objname));
}