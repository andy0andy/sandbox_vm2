Navigator = function Navigator(){
            sandbox_vm2.throwError("TypeError", "Illegal constructor")
}
sandbox_vm2.func_set_native(Navigator)
sandbox_vm2.rename(Navigator.prototype, "Navigator")
sandbox_vm2.defineProperty(Navigator.prototype, 'vendorSub', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.vendorSub;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["vendorSub"].get, "get vendorSub");
sandbox_vm2.defineProperty(Navigator.prototype, 'productSub', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.productSub;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["productSub"].get, "get productSub");
sandbox_vm2.defineProperty(Navigator.prototype, 'vendor', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.vendor;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["vendor"].get, "get vendor");
sandbox_vm2.defineProperty(Navigator.prototype, 'maxTouchPoints', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.maxTouchPoints;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["maxTouchPoints"].get, "get maxTouchPoints");
sandbox_vm2.defineProperty(Navigator.prototype, 'scheduling', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["scheduling"].get, "get scheduling");
sandbox_vm2.defineProperty(Navigator.prototype, 'userActivation', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["userActivation"].get, "get userActivation");
sandbox_vm2.defineProperty(Navigator.prototype, 'doNotTrack', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["doNotTrack"].get, "get doNotTrack");
sandbox_vm2.defineProperty(Navigator.prototype, 'geolocation', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["geolocation"].get, "get geolocation");
sandbox_vm2.defineProperty(Navigator.prototype, 'connection', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.connection;
    if(rtn){
        Object.setPrototypeOf(rtn, NetworkInformation.prototype)
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["connection"].get, "get connection");
sandbox_vm2.defineProperty(Navigator.prototype, 'plugins', undefined, true, true, undefined, function () {
    plugins = []
    if (sandbox_vm2.memory?.bom?.plugins){
        for (let i = 0; i < sandbox_vm2.memory?.bom?.plugins.length; i++) {
            
            mimetype_0 = sandbox_vm2.memory?.bom?.plugins[i]['0']; 
            Object.setPrototypeOf(mimetype_0, MimeType.prototype);

            mimetype_1 = sandbox_vm2.memory?.bom?.plugins[i]['1']; 
            Object.setPrototypeOf(mimetype_1, MimeType.prototype);

            plugin = sandbox_vm2.memory?.bom?.plugins[i];
            plugin["0"] = mimetype_0;
            plugin["1"] = mimetype_1;
            Object.setPrototypeOf(plugin, Plugin.prototype);

            plugins.push(plugin);
        }
    }
    Object.setPrototypeOf(plugins, PluginArray.prototype);

    return plugins;

},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["plugins"].get, "get plugins");
sandbox_vm2.defineProperty(Navigator.prototype, 'mimeTypes', undefined, true, true, undefined, function () {
    let mimeTypes = sandbox_vm2.memory?.bom?.navigator?.mimeTypes;
    if(mimeTypes){
        let rtn = [];
        for (let i=0;i< mimeTypes.length;i++){
            let mimeType = mimeTypes[i];
            Object.setPrototypeOf(mimeType, MimeType.prototype)
            rtn.push(mimeType)
        }

        Object.setPrototypeOf(rtn, MimeTypeArray.prototype)
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["mimeTypes"].get, "get mimeTypes");
sandbox_vm2.defineProperty(Navigator.prototype, 'pdfViewerEnabled', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["pdfViewerEnabled"].get, "get pdfViewerEnabled");
sandbox_vm2.defineProperty(Navigator.prototype, 'webkitTemporaryStorage', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["webkitTemporaryStorage"].get, "get webkitTemporaryStorage");
sandbox_vm2.defineProperty(Navigator.prototype, 'webkitPersistentStorage', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["webkitPersistentStorage"].get, "get webkitPersistentStorage");
sandbox_vm2.defineProperty(Navigator.prototype, 'hardwareConcurrency', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.hardwareConcurrency;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["hardwareConcurrency"].get, "get hardwareConcurrency");
sandbox_vm2.defineProperty(Navigator.prototype, 'cookieEnabled', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.cookieEnabled;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["cookieEnabled"].get, "get cookieEnabled");
sandbox_vm2.defineProperty(Navigator.prototype, 'appCodeName', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.appCodeName;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["appCodeName"].get, "get appCodeName");
sandbox_vm2.defineProperty(Navigator.prototype, 'appName', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.appName;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["appName"].get, "get appName");
sandbox_vm2.defineProperty(Navigator.prototype, 'appVersion', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.appVersion;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["appVersion"].get, "get appVersion");
sandbox_vm2.defineProperty(Navigator.prototype, 'platform', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.platform;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["platform"].get, "get platform");
sandbox_vm2.defineProperty(Navigator.prototype, 'product', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.product;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["product"].get, "get product");
sandbox_vm2.defineProperty(Navigator.prototype, 'userAgent', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.userAgent;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["userAgent"].get, "get userAgent");
sandbox_vm2.defineProperty(Navigator.prototype, 'language', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.language;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["language"].get, "get language");
sandbox_vm2.defineProperty(Navigator.prototype, 'languages', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.languages;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["languages"].get, "get languages");
sandbox_vm2.defineProperty(Navigator.prototype, 'onLine', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.onLine;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["onLine"].get, "get onLine");
sandbox_vm2.defineProperty(Navigator.prototype, 'webdriver', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.webdriver;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["webdriver"].get, "get webdriver");
sandbox_vm2.defineProperty(Navigator.prototype, 'getGamepads', function getGamepads(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.getGamepads)
sandbox_vm2.defineProperty(Navigator.prototype, 'javaEnabled', function javaEnabled(){
    return false;
}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.javaEnabled)
sandbox_vm2.defineProperty(Navigator.prototype, 'sendBeacon', function sendBeacon(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.sendBeacon)
sandbox_vm2.defineProperty(Navigator.prototype, 'vibrate', function vibrate(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.vibrate)

sandbox_vm2.defineProperty(Navigator.prototype, 'bluetooth', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["bluetooth"].get, "get bluetooth");
sandbox_vm2.defineProperty(Navigator.prototype, 'clipboard', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["clipboard"].get, "get clipboard");
sandbox_vm2.defineProperty(Navigator.prototype, 'credentials', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["credentials"].get, "get credentials");
sandbox_vm2.defineProperty(Navigator.prototype, 'keyboard', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["keyboard"].get, "get keyboard");
sandbox_vm2.defineProperty(Navigator.prototype, 'managed', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["managed"].get, "get managed");
sandbox_vm2.defineProperty(Navigator.prototype, 'mediaDevices', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["mediaDevices"].get, "get mediaDevices");
sandbox_vm2.defineProperty(Navigator.prototype, 'storage', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["storage"].get, "get storage");
sandbox_vm2.defineProperty(Navigator.prototype, 'serviceWorker', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["serviceWorker"].get, "get serviceWorker");
sandbox_vm2.defineProperty(Navigator.prototype, 'virtualKeyboard', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["virtualKeyboard"].get, "get virtualKeyboard");
sandbox_vm2.defineProperty(Navigator.prototype, 'wakeLock', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["wakeLock"].get, "get wakeLock");
sandbox_vm2.defineProperty(Navigator.prototype, 'deviceMemory', undefined, true, true, undefined, function () {
    let rtn = sandbox_vm2.memory?.bom?.navigator?.deviceMemory;
    if(rtn){
        return rtn;
    }
},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["deviceMemory"].get, "get deviceMemory");
sandbox_vm2.defineProperty(Navigator.prototype, 'ink', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["ink"].get, "get ink");
sandbox_vm2.defineProperty(Navigator.prototype, 'hid', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["hid"].get, "get hid");
sandbox_vm2.defineProperty(Navigator.prototype, 'locks', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["locks"].get, "get locks");
sandbox_vm2.defineProperty(Navigator.prototype, 'mediaCapabilities', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["mediaCapabilities"].get, "get mediaCapabilities");
sandbox_vm2.defineProperty(Navigator.prototype, 'mediaSession', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["mediaSession"].get, "get mediaSession");
sandbox_vm2.defineProperty(Navigator.prototype, 'permissions', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["permissions"].get, "get permissions");
sandbox_vm2.defineProperty(Navigator.prototype, 'presentation', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["presentation"].get, "get presentation");
sandbox_vm2.defineProperty(Navigator.prototype, 'serial', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["serial"].get, "get serial");
sandbox_vm2.defineProperty(Navigator.prototype, 'gpu', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["gpu"].get, "get gpu");
sandbox_vm2.defineProperty(Navigator.prototype, 'usb', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["usb"].get, "get usb");
sandbox_vm2.defineProperty(Navigator.prototype, 'windowControlsOverlay', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["windowControlsOverlay"].get, "get windowControlsOverlay");
sandbox_vm2.defineProperty(Navigator.prototype, 'xr', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["xr"].get, "get xr");
sandbox_vm2.defineProperty(Navigator.prototype, 'userAgentData', undefined, true, true, undefined, function () {debugger},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Navigator.prototype)["userAgentData"].get, "get userAgentData");
sandbox_vm2.defineProperty(Navigator.prototype, 'canShare', function canShare(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.canShare)
sandbox_vm2.defineProperty(Navigator.prototype, 'share', function share(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.share)
sandbox_vm2.defineProperty(Navigator.prototype, 'clearAppBadge', function clearAppBadge(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.clearAppBadge)
sandbox_vm2.defineProperty(Navigator.prototype, 'getBattery', function getBattery(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.getBattery)
sandbox_vm2.defineProperty(Navigator.prototype, 'getUserMedia', function getUserMedia(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.getUserMedia)
sandbox_vm2.defineProperty(Navigator.prototype, 'requestMIDIAccess', function requestMIDIAccess(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.requestMIDIAccess)
sandbox_vm2.defineProperty(Navigator.prototype, 'requestMediaKeySystemAccess', function requestMediaKeySystemAccess(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.requestMediaKeySystemAccess)
sandbox_vm2.defineProperty(Navigator.prototype, 'setAppBadge', function setAppBadge(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.setAppBadge)
sandbox_vm2.defineProperty(Navigator.prototype, 'webkitGetUserMedia', function webkitGetUserMedia(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.webkitGetUserMedia)
sandbox_vm2.defineProperty(Navigator.prototype, 'getInstalledRelatedApps', function getInstalledRelatedApps(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.getInstalledRelatedApps)
sandbox_vm2.defineProperty(Navigator.prototype, 'registerProtocolHandler', function registerProtocolHandler(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.registerProtocolHandler)
sandbox_vm2.defineProperty(Navigator.prototype, 'unregisterProtocolHandler', function unregisterProtocolHandler(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Navigator.prototype.unregisterProtocolHandler)
