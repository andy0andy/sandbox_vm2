HTMLDocument = function HTMLDocument(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(HTMLDocument)
sandbox_vm2.rename(HTMLDocument.prototype, "HTMLDocument")

Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)
 


