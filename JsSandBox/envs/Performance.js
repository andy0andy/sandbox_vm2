Performance = function Performance(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(Performance)
sandbox_vm2.rename(Performance.prototype, "Performance")

Object.setPrototypeOf(Performance.prototype,EventTarget.prototype)
sandbox_vm2.defineProperty(Performance.prototype, 'timeOrigin', undefined, true, true, undefined, function () {
    return parseFloat((new Date().getTime() + Math.random()).toFixed(1))
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["timeOrigin"].get, "get timeOrigin");
sandbox_vm2.defineProperty(Performance.prototype, 'onresourcetimingbufferfull', undefined, true, true, undefined, function () {return null},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["onresourcetimingbufferfull"].get, "get onresourcetimingbufferfull");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["onresourcetimingbufferfull"].set, "set onresourcetimingbufferfull");
sandbox_vm2.defineProperty(Performance.prototype, 'clearMarks', function clearMarks(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.clearMarks)
sandbox_vm2.defineProperty(Performance.prototype, 'clearMeasures', function clearMeasures(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.clearMeasures)
sandbox_vm2.defineProperty(Performance.prototype, 'clearResourceTimings', function clearResourceTimings(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.clearResourceTimings)
sandbox_vm2.defineProperty(Performance.prototype, 'getEntries', function getEntries(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.getEntries)
sandbox_vm2.defineProperty(Performance.prototype, 'getEntriesByName', function getEntriesByName(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.getEntriesByName)
sandbox_vm2.defineProperty(Performance.prototype, 'getEntriesByType', function getEntriesByType(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.getEntriesByType)
sandbox_vm2.defineProperty(Performance.prototype, 'mark', function mark(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.mark)
sandbox_vm2.defineProperty(Performance.prototype, 'measure', function measure(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.measure)
sandbox_vm2.defineProperty(Performance.prototype, 'now', function now(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.now)
sandbox_vm2.defineProperty(Performance.prototype, 'setResourceTimingBufferSize', function setResourceTimingBufferSize(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.setResourceTimingBufferSize)
sandbox_vm2.defineProperty(Performance.prototype, 'toJSON', function toJSON(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Performance.prototype.toJSON)

sandbox_vm2.defineProperty(Performance.prototype, 'timing', undefined, true, true, undefined, function () {return {}},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["timing"].get, "get timing");
sandbox_vm2.defineProperty(Performance.prototype, 'navigation', undefined, true, true, undefined, function () {return {}},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["navigation"].get, "get navigation");
sandbox_vm2.defineProperty(Performance.prototype, 'memory', undefined, true, true, undefined, function () {return {}},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["memory"].get, "get memory");
sandbox_vm2.defineProperty(Performance.prototype, 'eventCounts', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.performance?.eventCounts;

    if(rtn){
        Object.setPrototypeOf(rtn, EventCounts.prototype);
        return rtn;
    }

    return {}
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Performance.prototype)["eventCounts"].get, "get eventCounts");