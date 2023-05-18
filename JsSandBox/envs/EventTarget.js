EventTarget = function EventTarget(){}
sandbox_vm2.func_set_native(EventTarget)
sandbox_vm2.rename(EventTarget.prototype, "EventTarget") 

sandbox_vm2.defineProperty(EventTarget.prototype, 'addEventListener', function addEventListener(type, callback) {
    if (!(type in sandbox_vm2.memory.events.listeners)) {
        sandbox_vm2.memory.events.listeners[type] = [];
    }
    sandbox_vm2.memory.events.listeners[type].push(callback);
}, true, true, true); sandbox_vm2.func_set_native(EventTarget.prototype.addEventListener)
sandbox_vm2.defineProperty(EventTarget.prototype, 'dispatchEvent', function dispatchEvent(event) {

    if (!(event.type in sandbox_vm2.memory.events.listeners)) {
        return;
    }
    var stack = sandbox_vm2.memory.events.listeners[event.type];
    // event.targetCache = this;
    for (var i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
    }
}, true, true, true); sandbox_vm2.func_set_native(EventTarget.prototype.dispatchEvent)
sandbox_vm2.defineProperty(EventTarget.prototype, 'removeEventListener', function removeEventListener(type, callback) {
    if (!(type in sandbox_vm2.memory.events.listeners)) {
        return;
    }
    var stack = sandbox_vm2.memory.events.listeners[type];
    for (var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack.splice(i, 1);
            return this.removeEventListener(type, callback);
        }
    }
}, true, true, true); sandbox_vm2.func_set_native(EventTarget.prototype.removeEventListener)