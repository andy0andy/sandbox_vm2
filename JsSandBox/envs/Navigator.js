Navigator = function Navigator() {
    sandbox_vm2.throwError("TypeError", "Illegal constructor");
}
sandbox_vm2.func_set_native(Navigator);
sandbox_vm2.rename(Navigator.prototype, "Navigator");



navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype)

navigator = sandbox_vm2.proxy(navigator, "navigator");