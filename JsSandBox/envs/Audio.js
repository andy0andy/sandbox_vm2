Audio = function Audio(){
    let a = "<audio preload=\"auto\"></audio>";
    Object.setPrototypeOf(a, HTMLAudioElement.prototype);
    return a;
}
sandbox_vm2.func_set_native(Audio)
sandbox_vm2.rename(Audio.prototype, "Audio")