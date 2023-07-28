/*
初始化dom对象，以便使用

sandbox_vm2.memory["querySelector_element_list"]["#slideVerify > div > div > div"] = {}
Object.setPrototypeOf(sandbox_vm2.memory["querySelector_element_list"]["#slideVerify > div > div > div"], HTMLElement.prototype)
*/

// script 列表
script = {
    src: '/ckly-was-is-go-theere-my-Iewes-neede-worth-And-h'
}
Object.setPrototypeOf(script, HTMLScriptElement.prototype)
script_list = [script];
Object.setPrototypeOf(script_list, HTMLCollection.prototype);

sandbox_vm2.memory["dom"]["script_list"] = script_list;

