sandbox_vm2.throwError = function throwError (name, message) {
    let e = new Error();

    e.name = name
    e.message = message;
    e.stack = `${name}: ${message}
    at snippet:///error:2:5`

    throw e;
}