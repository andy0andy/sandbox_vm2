sandbox_vm2.throwError = function throwError (name, message) {

    let e = newError(name, message);
    e.stack = `${name}: ${message}
    at snippet:///Script`;
    throw e

}

Error.prepareStackTrace = function (error, structuredStackTrace) {
    sandbox_vm2.log("异常打印： ", error)
    debugger;
    return error
};

function newError(name, message) {
    switch (name) {
        case "EvalError":
            return new EvalError(message);
        case "RangeError":
            return new RangeError(message);
        case "ReferenceError":
            return new ReferenceError(message);
        case "SyntaxError":
            return new SyntaxError(message);
        case "TypeError":
            return new TypeError(message);
        case "URIError":
            return new URIError(message);
        case "AggregateError":
            return new AggregateError(message);
        case "InternalError":
            return new InternalError(message);
        default:
            return new Error(message);
    }
}