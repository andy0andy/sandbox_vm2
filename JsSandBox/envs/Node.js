Node = function Node(){
    sandbox_vm2.throwError("TypeError", "Illegal constructor") 
}
sandbox_vm2.func_set_native(Node)
sandbox_vm2.rename(Node.prototype, "Node")

Object.setPrototypeOf(Node.prototype,EventTarget.prototype)


sandbox_vm2.defineProperty(Node, 'ELEMENT_NODE', 1, false, true, false);
sandbox_vm2.defineProperty(Node, 'ATTRIBUTE_NODE', 2, false, true, false);
sandbox_vm2.defineProperty(Node, 'TEXT_NODE', 3, false, true, false);
sandbox_vm2.defineProperty(Node, 'CDATA_SECTION_NODE', 4, false, true, false);
sandbox_vm2.defineProperty(Node, 'ENTITY_REFERENCE_NODE', 5, false, true, false);
sandbox_vm2.defineProperty(Node, 'ENTITY_NODE', 6, false, true, false);
sandbox_vm2.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', 7, false, true, false);
sandbox_vm2.defineProperty(Node, 'COMMENT_NODE', 8, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_NODE', 9, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_TYPE_NODE', 10, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', 11, false, true, false);
sandbox_vm2.defineProperty(Node, 'NOTATION_NODE', 12, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_POSITION_DISCONNECTED', 1, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_POSITION_PRECEDING', 2, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_POSITION_FOLLOWING', 4, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_POSITION_CONTAINS', 8, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_POSITION_CONTAINED_BY', 16, false, true, false);
sandbox_vm2.defineProperty(Node, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'nodeType', undefined, true, true, undefined, function () {return 9},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["nodeType"].get, "get nodeType");
sandbox_vm2.defineProperty(Node.prototype, 'nodeName', undefined, true, true, undefined, function () {return '#document'},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["nodeName"].get, "get nodeName");
sandbox_vm2.defineProperty(Node.prototype, 'baseURI', undefined, true, true, undefined, function () {return 'https://www.datasheets.com/en/search?q=OP604TXV'},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["baseURI"].get, "get baseURI");
sandbox_vm2.defineProperty(Node.prototype, 'isConnected', undefined, true, true, undefined, function () {return true},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["isConnected"].get, "get isConnected");
sandbox_vm2.defineProperty(Node.prototype, 'ownerDocument', undefined, true, true, undefined, function () {return null},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["ownerDocument"].get, "get ownerDocument");
sandbox_vm2.defineProperty(Node.prototype, 'parentNode', undefined, true, true, undefined, function () {return null},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["parentNode"].get, "get parentNode");
sandbox_vm2.defineProperty(Node.prototype, 'parentElement', undefined, true, true, undefined, function () {return null},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["parentElement"].get, "get parentElement");
sandbox_vm2.defineProperty(Node.prototype, 'childNodes', undefined, true, true, undefined, function () {return {}},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["childNodes"].get, "get childNodes");
sandbox_vm2.defineProperty(Node.prototype, 'firstChild', undefined, true, true, undefined, function () {return {}},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["firstChild"].get, "get firstChild");
sandbox_vm2.defineProperty(Node.prototype, 'lastChild', undefined, true, true, undefined, function () {return {}},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["lastChild"].get, "get lastChild");
sandbox_vm2.defineProperty(Node.prototype, 'previousSibling', undefined, true, true, undefined, function () {return null},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["previousSibling"].get, "get previousSibling");
sandbox_vm2.defineProperty(Node.prototype, 'nextSibling', undefined, true, true, undefined, function () {return null},);sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["nextSibling"].get, "get nextSibling");
sandbox_vm2.defineProperty(Node.prototype, 'nodeValue', undefined, true, true, undefined, function () {return null},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["nodeValue"].get, "get nodeValue");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["nodeValue"].set, "set nodeValue");
sandbox_vm2.defineProperty(Node.prototype, 'textContent', undefined, true, true, undefined, function () {return null},function (value) {debugger});sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["textContent"].get, "get textContent");sandbox_vm2.func_set_native(Object.getOwnPropertyDescriptors(Node.prototype)["textContent"].set, "set textContent");
sandbox_vm2.defineProperty(Node.prototype, 'ELEMENT_NODE', 1, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'ATTRIBUTE_NODE', 2, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'TEXT_NODE', 3, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'CDATA_SECTION_NODE', 4, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'ENTITY_REFERENCE_NODE', 5, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'ENTITY_NODE', 6, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'PROCESSING_INSTRUCTION_NODE', 7, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'COMMENT_NODE', 8, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_NODE', 9, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_TYPE_NODE', 10, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_FRAGMENT_NODE', 11, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'NOTATION_NODE', 12, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_DISCONNECTED', 1, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_PRECEDING', 2, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_FOLLOWING', 4, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINS', 8, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINED_BY', 16, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, false, true, false);
sandbox_vm2.defineProperty(Node.prototype, 'appendChild', function appendChild(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.appendChild)
sandbox_vm2.defineProperty(Node.prototype, 'cloneNode', function cloneNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.cloneNode)
sandbox_vm2.defineProperty(Node.prototype, 'compareDocumentPosition', function compareDocumentPosition(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.compareDocumentPosition)
sandbox_vm2.defineProperty(Node.prototype, 'contains', function contains(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.contains)
sandbox_vm2.defineProperty(Node.prototype, 'getRootNode', function getRootNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.getRootNode)
sandbox_vm2.defineProperty(Node.prototype, 'hasChildNodes', function hasChildNodes(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.hasChildNodes)
sandbox_vm2.defineProperty(Node.prototype, 'insertBefore', function insertBefore(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.insertBefore)
sandbox_vm2.defineProperty(Node.prototype, 'isDefaultNamespace', function isDefaultNamespace(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.isDefaultNamespace)
sandbox_vm2.defineProperty(Node.prototype, 'isEqualNode', function isEqualNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.isEqualNode)
sandbox_vm2.defineProperty(Node.prototype, 'isSameNode', function isSameNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.isSameNode)
sandbox_vm2.defineProperty(Node.prototype, 'lookupNamespaceURI', function lookupNamespaceURI(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.lookupNamespaceURI)
sandbox_vm2.defineProperty(Node.prototype, 'lookupPrefix', function lookupPrefix(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.lookupPrefix)
sandbox_vm2.defineProperty(Node.prototype, 'normalize', function normalize(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.normalize)
sandbox_vm2.defineProperty(Node.prototype, 'removeChild', function removeChild(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.removeChild)
sandbox_vm2.defineProperty(Node.prototype, 'replaceChild', function replaceChild(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.replaceChild)