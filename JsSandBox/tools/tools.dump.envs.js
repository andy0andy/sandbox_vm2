
/*
自动获取浏览器环境
 */


function getOwnPropertyDescriptors(obj, isSelf) {
    let obj_keys = Object.getOwnPropertyNames(obj)
    if (obj_keys.length === 0) {
        isSelf.flag = false
        return getOwnPropertyDescriptors(Object.getPrototypeOf(obj))
    } else {
        return Object.getOwnPropertyDescriptors(obj)
    }
}

function enum_obj_descriptors(obj, objName, obj_Descriptors) {
    let code = ""

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

    for (const objkey in obj_Descriptors) {
        if (objkey === "length" || objkey === "name" || objkey === "arguments" || objkey === "caller" || objkey === "prototype") {
            continue
        }
        code += getcode(obj, objName, objkey, obj_Descriptors[objkey]) + "\r\n"
    }
    return code

}

function enum_obj_proto_descriptors(obj, objName, obj_Descriptors) {
    let code = ""

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

    for (const objkey in obj_Descriptors) {
        code += getcode(obj, objName, objkey, obj_Descriptors[objkey]) + "\r\n"
    }
    return code
}

function dump_main(obj, objName) {
    let code = ""
    let isSelf = {
        "flag": true
    }
    let obj_Descriptors = getOwnPropertyDescriptors(obj, isSelf)
    if (isSelf.flag) {
        code += enum_obj_descriptors(obj, objName, obj_Descriptors)
    } else {
        //code += enum_obj_proto_descriptors(obj, objName, obj_Descriptors)
    }
    return code
}

function dump_obj_proto(obj_proto, objName, obj) {
    let code = ""
    let obj_Descriptors = getOwnPropertyDescriptors(obj_proto, {})
    code += enum_obj_proto_descriptors(obj, objName, obj_Descriptors)
    return code
}

function get_obj_env_code(obj, objName) {
    console.log(dump_main(obj, objName))
}

function get_env_code(obj_proto, obj) {
    let reg = /function (.*?)\(\)/
    let obj_proto_name = reg.exec(obj_proto + "")[1]
    let code = `${obj_proto_name} = function ${obj_proto_name}(){`
    try {
        new obj_proto()
        code += `debugger;
}`
    } catch (e) {
        if (e.message === "Illegal constructor") {
            code += `
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}`
        } else if (e.message.includes("1 argument required, but only 0 present.")) {
            code += `
    console.log("need 1 argument required! call new ${obj_proto_name} argmuents is " + arguments)
}`
        } else if (e.message.includes("2 arguments required, but only 0 present.")) {
            code += `
    console.log("need 2 argument required! call new ${obj_proto_name} argmuents is " + arguments)
}`
        } else {
            console.error(e)
            debugger
        }
    }

    let obj_proto_father_name = reg.exec(Object.getPrototypeOf(obj_proto) + "")[1]
    code += `
sandbox_vm2.func_set_native(${obj_proto_name})
sandbox_vm2.rename(${obj_proto_name}.prototype, "${obj_proto_name}")
`
    if (obj_proto_father_name) {
        code += `\nObject.setPrototypeOf(${obj_proto_name}.prototype,${obj_proto_father_name}.prototype)\n`
    }
    code += dump_main(obj_proto, obj_proto_name)
    code += dump_obj_proto(obj_proto.prototype, obj_proto_name, obj)

    console.log(code)
}
