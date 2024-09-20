HTMLAudioElement = function HTMLAudioElement(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(HTMLAudioElement)
sandbox_vm2.rename(HTMLAudioElement.prototype, "HTMLAudioElement")

Object.setPrototypeOf(HTMLAudioElement.prototype,HTMLMediaElement.prototype)