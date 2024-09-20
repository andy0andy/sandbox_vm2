XMLHttpRequest = function XMLHttpRequest(){
}
sandbox_vm2.func_set_native(XMLHttpRequest)
sandbox_vm2.rename(XMLHttpRequest.prototype, "XMLHttpRequest")

Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype)


// 设置属性参数 function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter) {...}


sandbox_vm2.defineProperty(XMLHttpRequest, 'UNSENT', 0, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest, 'OPENED', 1, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest, 'HEADERS_RECEIVED', 2, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest, 'LOADING', 3, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest, 'DONE', 4, false, true, false);


sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["onreadystatechange"].get, "get onreadystatechange");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["onreadystatechange"].set, "set onreadystatechange");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'readyState', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["readyState"].get, "get readyState");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'timeout', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["timeout"].get, "get timeout");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["timeout"].set, "set timeout");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'withCredentials', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["withCredentials"].get, "get withCredentials");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["withCredentials"].set, "set withCredentials");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'upload', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["upload"].get, "get upload");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'responseURL', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["responseURL"].get, "get responseURL");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'status', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["status"].get, "get status");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'statusText', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["statusText"].get, "get statusText");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'responseType', undefined, true, true, undefined, function () {return undefined},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["responseType"].get, "get responseType");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["responseType"].set, "set responseType");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'response', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["response"].get, "get response");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'responseText', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["responseText"].get, "get responseText");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'responseXML', undefined, true, true, undefined, function () {return undefined},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype)["responseXML"].get, "get responseXML");
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'UNSENT', 0, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'OPENED', 1, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'HEADERS_RECEIVED', 2, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'LOADING', 3, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'DONE', 4, false, true, false);
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'abort', function abort(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.abort)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'getAllResponseHeaders', function getAllResponseHeaders(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.getAllResponseHeaders)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'getResponseHeader', function getResponseHeader(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.getResponseHeader)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'open', function open(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.open)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'overrideMimeType', function overrideMimeType(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.overrideMimeType)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'send', function send(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.send)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'setRequestHeader', function setRequestHeader(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.setRequestHeader)

sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'setAttributionReporting', function setAttributionReporting(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.setAttributionReporting)
sandbox_vm2.defineProperty(XMLHttpRequest.prototype, 'setPrivateToken', function setPrivateToken(){debugger;}, true, true, true); sandbox_vm2.func_set_native(XMLHttpRequest.prototype.setPrivateToken)