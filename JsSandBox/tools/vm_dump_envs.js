
/*
自动获取浏览器环境
 */


function getOwnPropertyDescriptors(obj, isSelf) {
    /*
    递归遍历获取对象的对象描述符
    所有的，包括原型链上的
    ? 属性和原型 只能脱一个
     */

    let obj_kys = Object.getOwnPropertyNames(obj);
    if (obj_kys.length === 0){
        isSelf.flag = false;
        return getOwnPropertyDescriptors(Object.getPrototypeOf(obj));
    }else{
        return Object.getOwnPropertyDescriptors(obj);
    }
}


function enum_obj_descriptors(obj, obj_name, obj_descriptors) {
    let code = "";

    function getcode(obj, obj_name, obj_key){
        let value = obj[obj_key];
        switch (typeof value) {
            case "string":
                return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', '${value}', true, true, true)`;
            case "function":
                return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', function ${obj_key}(){debugger;}, true, true, true); sandbox_vm2.func_set_native(${obj_name}.${obj_key});`;
            case "number":
                return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', ${value}, true, true, true)`;
            case "boolean":
                return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', ${value}, true, true, true)`;
            case "undefined":
                return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', ${value}, true, true, true)`;
            case "object":
                if (value instanceof Array){
                    return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', [], true, true, true)`;
                }else if(value === null){
                    return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', null, true, true, true)`;
                }else{
                    return `sandbox_vm2.defineProperty(${obj_name}, '${obj_key}', {}, true, true, true)`;
                }
            default:
                debugger;
        }
    }

    for(const obj_key in obj_descriptors){
        code += getcode(obj, obj_name, obj_key) + "\r\n";
    }


    return code;
}


function enum_obj_proto_descriptors(obj, obj_name, obj_descriptors) {
    let code = "";

    function getcode(obj, obj_name, obj_key){
        let value = obj[obj_key];
        switch (typeof value) {
            case "string":
                return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', '${value}', true, true, true)`;
            case "function":
                if (obj_key === "constructor"){
                    return "";
                }
                return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', function ${obj_key}(){debugger;}, true, true, true); sandbox_vm2.func_set_native(${obj_name}.prototype.${obj_key});`;
            case "number":
                return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', ${value}, true, true, true)`;
            case "boolean":
                return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', ${value}, true, true, true)`;
            case "undefined":
                return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', ${value}, true, true, true)`;
            case "object":
                if (value instanceof Array){
                    return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', [], true, true, true)`;
                }else if(value === null){
                    return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', null, true, true, true)`;
                }else{
                    return `sandbox_vm2.defineProperty(${obj_name}.prototype, '${obj_key}', {}, true, true, true)`;
                }
            default:
                debugger;
        }
    }

    for(const obj_key in obj_descriptors){
        code += getcode(obj, obj_name, obj_key) + "\r\n";
    }


    return code;
}

function dump_main(obj, obj_name) {
    let code = "";
    var isSelf = {
        "flag": true
    }

    let obj_descriptors = getOwnPropertyDescriptors(obj, isSelf);
    if (isSelf.flag){
        code += enum_obj_descriptors(obj, obj_name, obj_descriptors);
    }else {
        code += enum_obj_proto_descriptors(obj, obj_name, obj_descriptors);
    }

    console.log(code)
}

function dump_obj_proto(obj, obj_proto, obj_name) {
    let code = "";
    let obj_descriptors = getOwnPropertyDescriptors(obj_proto, {});
    code += enum_obj_proto_descriptors(obj, obj_name, obj_descriptors);
    console.log(code)
}
