/*
自动获取浏览器环境
*/

function dump_obj_self(obj, obj_name){

    function getcode(obj, objName, objkey, objDescriptor) {
        let value = obj[objkey]
        if (objDescriptor["value"] !== undefined) {
            // function
            if (objkey === "constructor") {
                return ""
            } else if (typeof objDescriptor["value"] === "function") {
                return `sandbox_vm2.defineProperty(${objName}, '${objkey}', function ${objkey}(){debugger;}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']}); sandbox_vm2.func_set_native(${objName}.${objkey})`
            } else if (typeof objDescriptor["value"] === "number" || typeof objDescriptor["value"] === "boolean" || typeof objDescriptor["value"] === "undefined") {
                return `sandbox_vm2.defineProperty(${objName}, '${objkey}', ${objDescriptor["value"]}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
            } else if (typeof objDescriptor["value"] === "string") {
                return `sandbox_vm2.defineProperty(${objName}, '${objkey}', '${objDescriptor["value"]}', ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
            } else if (typeof objDescriptor["value"] === "object") {
                if (objDescriptor["value"] instanceof Array) {
                    return `sandbox_vm2.defineProperty(${objName}, '${objkey}', [], ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                } else if (objDescriptor["value"] === null) {
                    return `sandbox_vm2.defineProperty(${objName}, '${objkey}', null, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                } else {
                    return `sandbox_vm2.defineProperty(${objName}, '${objkey}', {}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                }
            } else {
                debugger;
            }
        } else {
            let tempcode = `sandbox_vm2.defineProperty(${objName}, '${objkey}', undefined, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']}, `
            let getter;
            let setter;
            if (objDescriptor["get"]) {
                let codevalue;
                if (typeof value === "string") {
                    codevalue = `'${value}'`
                } else if (typeof value === "number" || typeof value === "boolean" || typeof value === "undefined") {
                    codevalue = `${value}`
                } else if (typeof value === "object") {
                    if (value instanceof Array) {
                        codevalue = "[]"
                    } else if (value === null) {
                        codevalue = "null"
                    } else {
                        codevalue = "{}"
                    }
                } else {
                    debugger;
                }
                tempcode += `function () {return ${codevalue}},`
                getter = true
            }
            if (objDescriptor["set"]) {
                tempcode += `function (value) {debugger}`
                setter = true
            }
            tempcode += `);`
            if (getter) {
                tempcode += `sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(${objName})["${objkey}"].get, "get ${objkey}");`
            }
            if (setter) {
                tempcode += `sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(${objName})["${objkey}"].set, "set ${objkey}");`
            }
            return tempcode
        }
    }

    // ============

    code = "\n\n"
    buildin_names = ['length', 'name', 'arguments', 'caller', 'prototype']

    obj_OwnPropertyNames = Object.getOwnPropertyNames(obj)
    if (obj_OwnPropertyNames.length === 0) {
        return code
    }   

    obj_Descriptors = Object.getOwnPropertyDescriptors(obj)
    for (const obj_key in obj_Descriptors){
        if (buildin_names.indexOf(obj_key) != -1){
            continue
        }

        code += getcode(obj, obj_name, obj_key, obj_Descriptors[obj_key]) + "\r\n"
    }

    return code
}

function dump_obj_prototype(obj, obj_name){

    function getcode(obj, objName, objkey, objDescriptor) {
        if (obj) {
            let value = obj[objkey]
            if (objDescriptor["value"] !== undefined) {
                // function
                if (objkey === "constructor") {
                    return ""
                } else if (typeof objDescriptor["value"] === "function") {
                    return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', function ${objkey}(){debugger;}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']}); sandbox_vm2.func_set_native(${objName}.prototype.${objkey})`
                } else if (typeof objDescriptor["value"] === "number" || typeof objDescriptor["value"] === "boolean" || typeof objDescriptor["value"] === "undefined") {
                    return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', ${objDescriptor["value"]}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                } else if (typeof objDescriptor["value"] === "string") {
                    return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', '${objDescriptor["value"]}', ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                } else if (typeof objDescriptor["value"] === "object") {
                    if (objDescriptor["value"] instanceof Array) {
                        return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', [], ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                    } else if (objDescriptor["value"] === null) {
                        return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', null, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                    } else {
                        return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', {}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                    }
                } else {
                    debugger;
                }
            } else {
                let tempcode = `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', undefined, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']}, `
                let getter;
                let setter;
                if (objDescriptor["get"]) {
                    let codevalue;
                    if (typeof value === "string") {
                        codevalue = `'${value}'`
                    } else if (typeof value === "number" || typeof value === "boolean" || typeof value === "undefined") {
                        codevalue = `${value}`
                    } else if (typeof value === "object") {
                        if (value instanceof Array) {
                            codevalue = "[]"
                        } else if (value === null) {
                            codevalue = "null"
                        } else {
                            codevalue = "{}"
                        }
                    } else {
                        debugger;
                    }
                    tempcode += `function () {return ${codevalue}},`
                    getter = true
                }
                if (objDescriptor["set"]) {
                    tempcode += `function (value) {debugger}`
                    setter = true
                }
                tempcode += `);`
                if (getter) {
                    tempcode += `sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(${objName}.prototype)["${objkey}"].get, "get ${objkey}");`
                }
                if (setter) {
                    tempcode += `sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(${objName}.prototype)["${objkey}"].set, "set ${objkey}");`
                }
                return tempcode
            }
        } else {
            if (objDescriptor["value"] !== undefined) {
                // function
                if (objkey === "constructor") {
                    return ""
                } else if (typeof objDescriptor["value"] === "function") {
                    return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', function ${objkey}(){debugger;}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']}); sandbox_vm2.func_set_native(${objName}.prototype.${objkey})`
                } else if (typeof objDescriptor["value"] === "number" || typeof objDescriptor["value"] === "boolean" || typeof objDescriptor["value"] === "undefined") {
                    return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', ${objDescriptor["value"]}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                } else if (typeof objDescriptor["value"] === "string") {
                    return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', '${objDescriptor["value"]}', ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                } else if (typeof objDescriptor["value"] === "object") {
                    if (objDescriptor["value"] instanceof Array) {
                        return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', [], ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                    } else if (objDescriptor["value"] === null) {
                        return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', null, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                    } else {
                        return `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', {}, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']});`
                    }
                } else {
                    debugger;
                }
            } else {
                let tempcode = `sandbox_vm2.defineProperty(${objName}.prototype, '${objkey}', undefined, ${objDescriptor['configurable']}, ${objDescriptor['enumerable']}, ${objDescriptor['writable']}, `
                let getter;
                let setter;
                if (objDescriptor["get"]) {
                    tempcode += `function () {debugger},`
                    getter = true
                }
                if (objDescriptor["set"]) {
                    tempcode += `function (value) {debugger}`
                    setter = true
                }
                tempcode += `);`
                if (getter) {
                    tempcode += `sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(${objName}.prototype)["${objkey}"].get, "get ${objkey}");`
                }
                if (setter) {
                    tempcode += `sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(${objName}.prototype)["${objkey}"].set, "set ${objkey}");`
                }
                return tempcode
            }
        }

    }

    // ============

    code = "\n\n"
    buildin_names = ['length', 'name', 'arguments', 'caller', 'prototype']

    obj_OwnPropertyNames = Object.getOwnPropertyNames(obj)
    if (obj_OwnPropertyNames.length === 0) {
        return code
    }   

    obj_Descriptors = Object.getOwnPropertyDescriptors(obj.prototype)
    for (const obj_key in obj_Descriptors){
        if (buildin_names.indexOf(obj_key) != -1){
            continue
        }

        code += getcode(obj, obj_name, obj_key, obj_Descriptors[obj_key]) + "\r\n"
    }

    return code
}


function dump_env(obj){
    // 脱环境 
    // obj: eg. Ducument

    let reg = /function (.*?)\(\)/
    let obj_name = reg.exec(obj + "")[1]
    let obj_father = Object.getPrototypeOf(obj);
    let obj_father_name = reg.exec(obj_father + "")[1]
    
    // 环境代码
    let code = `${obj_name} = function ${obj_name}(){`

    // 有些环境不可new
    try {
        new obj()
        code += `
        debugger;
}`
    } catch (e) {
        if (e.message === "Illegal constructor") {
            code += `
            sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}`
        }else {
            console.error(e)
            debugger
        }
    }

    code += `
sandbox_vm2.func_set_native(${obj_name})
sandbox_vm2.rename(${obj_name}.prototype, "${obj_name}")
`
    if (obj_father_name) {
        code += `\nObject.setPrototypeOf(${obj_name}.prototype, ${obj_father_name}.prototype)\n\n`
    }
 
    // obj
    code += '\n// 设置属性参数 function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter) {...}\n'
    code += dump_obj_self(obj, obj_name)


    // obj.prototype
    code += dump_obj_prototype(obj, obj_name)
    
    
    console.log(code)
}