Event = function Event(type){
            // sandbox_vm2.log("need 1 argument required! call new Event argmuents is " + arguments)
    this.type = type
}
sandbox_vm2.func_set_native(Event)
sandbox_vm2.rename(Event.prototype, "Event")
sandbox_vm2.defineProperty(Event, 'NONE', 0, false, true, false);
sandbox_vm2.defineProperty(Event, 'CAPTURING_PHASE', 1, false, true, false);
sandbox_vm2.defineProperty(Event, 'AT_TARGET', 2, false, true, false);
sandbox_vm2.defineProperty(Event, 'BUBBLING_PHASE', 3, false, true, false);
// sandbox_vm2.defineProperty(Event.prototype, 'type', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["type"].get, "get type");
sandbox_vm2.defineProperty(Event.prototype, 'target', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["target"].get, "get target");
sandbox_vm2.defineProperty(Event.prototype, 'currentTarget', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["currentTarget"].get, "get currentTarget");
sandbox_vm2.defineProperty(Event.prototype, 'eventPhase', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["eventPhase"].get, "get eventPhase");
sandbox_vm2.defineProperty(Event.prototype, 'bubbles', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["bubbles"].get, "get bubbles");
sandbox_vm2.defineProperty(Event.prototype, 'cancelable', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["cancelable"].get, "get cancelable");
sandbox_vm2.defineProperty(Event.prototype, 'defaultPrevented', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["defaultPrevented"].get, "get defaultPrevented");
sandbox_vm2.defineProperty(Event.prototype, 'composed', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["composed"].get, "get composed");
sandbox_vm2.defineProperty(Event.prototype, 'timeStamp', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["timeStamp"].get, "get timeStamp");
sandbox_vm2.defineProperty(Event.prototype, 'srcElement', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["srcElement"].get, "get srcElement");
sandbox_vm2.defineProperty(Event.prototype, 'returnValue', undefined, true, true, undefined, function () {debugger},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["returnValue"].get, "get returnValue");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["returnValue"].set, "set returnValue");
sandbox_vm2.defineProperty(Event.prototype, 'cancelBubble', undefined, true, true, undefined, function () {debugger},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["cancelBubble"].get, "get cancelBubble");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Event.prototype)["cancelBubble"].set, "set cancelBubble");
sandbox_vm2.defineProperty(Event.prototype, 'NONE', 0, false, true, false);
sandbox_vm2.defineProperty(Event.prototype, 'CAPTURING_PHASE', 1, false, true, false);
sandbox_vm2.defineProperty(Event.prototype, 'AT_TARGET', 2, false, true, false);
sandbox_vm2.defineProperty(Event.prototype, 'BUBBLING_PHASE', 3, false, true, false);
sandbox_vm2.defineProperty(Event.prototype, 'composedPath', function composedPath(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Event.prototype.composedPath)
sandbox_vm2.defineProperty(Event.prototype, 'initEvent', function initEvent(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Event.prototype.initEvent)
sandbox_vm2.defineProperty(Event.prototype, 'preventDefault', function preventDefault(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Event.prototype.preventDefault)
sandbox_vm2.defineProperty(Event.prototype, 'stopImmediatePropagation', function stopImmediatePropagation(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Event.prototype.stopImmediatePropagation)
sandbox_vm2.defineProperty(Event.prototype, 'stopPropagation', function stopPropagation(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Event.prototype.stopPropagation)