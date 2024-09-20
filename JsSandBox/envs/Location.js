Location = function Location(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(Location)
sandbox_vm2.rename(Location.prototype, "Location")