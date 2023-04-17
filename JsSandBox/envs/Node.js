Node = function Node() {
    sandbox_vm2.throwError("TypeError", "Illegal constructor");
}
sandbox_vm2.func_set_native(Node);
sandbox_vm2.rename(Node.prototype, "Node");


sandbox_vm2.defineProperty(Node.prototype, 'nodeType', 9, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'nodeName', '#document', true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'baseURI', 'http://119.29.118.114/subject/#/202107subject3', true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'isConnected', true, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'ownerDocument', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'parentNode', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'parentElement', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'childNodes', {}, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'firstChild', {}, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'lastChild', {}, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'previousSibling', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'nextSibling', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'nodeValue', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'textContent', null, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'ELEMENT_NODE', 1, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'ATTRIBUTE_NODE', 2, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'TEXT_NODE', 3, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'CDATA_SECTION_NODE', 4, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'ENTITY_REFERENCE_NODE', 5, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'ENTITY_NODE', 6, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'PROCESSING_INSTRUCTION_NODE', 7, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'COMMENT_NODE', 8, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_NODE', 9, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_TYPE_NODE', 10, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_FRAGMENT_NODE', 11, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'NOTATION_NODE', 12, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_DISCONNECTED', 1, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_PRECEDING', 2, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_FOLLOWING', 4, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINS', 8, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINED_BY', 16, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, true, true, true)
sandbox_vm2.defineProperty(Node.prototype, 'appendChild', function appendChild(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.appendChild);
sandbox_vm2.defineProperty(Node.prototype, 'cloneNode', function cloneNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.cloneNode);
sandbox_vm2.defineProperty(Node.prototype, 'compareDocumentPosition', function compareDocumentPosition(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.compareDocumentPosition);
sandbox_vm2.defineProperty(Node.prototype, 'contains', function contains(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.contains);
sandbox_vm2.defineProperty(Node.prototype, 'getRootNode', function getRootNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.getRootNode);
sandbox_vm2.defineProperty(Node.prototype, 'hasChildNodes', function hasChildNodes(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.hasChildNodes);
sandbox_vm2.defineProperty(Node.prototype, 'insertBefore', function insertBefore(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.insertBefore);
sandbox_vm2.defineProperty(Node.prototype, 'isDefaultNamespace', function isDefaultNamespace(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.isDefaultNamespace);
sandbox_vm2.defineProperty(Node.prototype, 'isEqualNode', function isEqualNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.isEqualNode);
sandbox_vm2.defineProperty(Node.prototype, 'isSameNode', function isSameNode(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.isSameNode);
sandbox_vm2.defineProperty(Node.prototype, 'lookupNamespaceURI', function lookupNamespaceURI(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.lookupNamespaceURI);
sandbox_vm2.defineProperty(Node.prototype, 'lookupPrefix', function lookupPrefix(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.lookupPrefix);
sandbox_vm2.defineProperty(Node.prototype, 'normalize', function normalize(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.normalize);
sandbox_vm2.defineProperty(Node.prototype, 'removeChild', function removeChild(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.removeChild);
sandbox_vm2.defineProperty(Node.prototype, 'replaceChild', function replaceChild(){debugger;}, true, true, true); sandbox_vm2.func_set_native(Node.prototype.replaceChild);

Object.setPrototypeOf(Node.prototype, EventTarget.prototype)