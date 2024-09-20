HTMLCanvasElement = function HTMLCanvasElement(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(HTMLCanvasElement)
sandbox_vm2.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement")

Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype)


// 设置属性参数 function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter) {...}


 

sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'width', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["width"].get, "get width");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["width"].set, "set width");
sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'height', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["height"].get, "get height");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["height"].set, "set height");
sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'captureStream', function captureStream(){debugger;}, true, true, true); sandbox_vm2.func_set_native(HTMLCanvasElement.prototype.captureStream)
sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'getContext', function getContext(arg1){
    let res = {}
    if (arg1 === "webgl2"){
        Object.setPrototypeOf(res, WebGL2RenderingContext.prototype)
        
    }else if (arg1 === "2d"){
        res = Object.assign(res, sandbox_vm2.memory?.bom?.CanvasRenderingContext2D);
        Object.setPrototypeOf(res, CanvasRenderingContext2D.prototype)
    }else{
        debugger;
    }

    return res;
}, true, true, true); sandbox_vm2.func_set_native(HTMLCanvasElement.prototype.getContext)
sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'toBlob', function toBlob(){debugger;}, true, true, true); sandbox_vm2.func_set_native(HTMLCanvasElement.prototype.toBlob)
sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'toDataURL', function toDataURL(){debugger;}, true, true, true); sandbox_vm2.func_set_native(HTMLCanvasElement.prototype.toDataURL)
sandbox_vm2.defineProperty(HTMLCanvasElement.prototype, 'transferControlToOffscreen', function transferControlToOffscreen(){debugger;}, true, true, true); sandbox_vm2.func_set_native(HTMLCanvasElement.prototype.transferControlToOffscreen)

