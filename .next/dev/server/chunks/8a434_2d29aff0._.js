module.exports = [
"[project]/realestateandlease/node_modules/base64-js/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength){
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}
}),
"[project]/realestateandlease/node_modules/process-nextick-args/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if (typeof process === 'undefined' || !process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
    module.exports = {
        nextTick: nextTick
    };
} else {
    module.exports = process;
}
function nextTick(fn, arg1, arg2, arg3) {
    if (typeof fn !== 'function') {
        throw new TypeError('"callback" argument must be a function');
    }
    var len = arguments.length;
    var args, i;
    switch(len){
        case 0:
        case 1:
            return process.nextTick(fn);
        case 2:
            return process.nextTick(function afterTickOne() {
                fn.call(null, arg1);
            });
        case 3:
            return process.nextTick(function afterTickTwo() {
                fn.call(null, arg1, arg2);
            });
        case 4:
            return process.nextTick(function afterTickThree() {
                fn.call(null, arg1, arg2, arg3);
            });
        default:
            args = new Array(len - 1);
            i = 0;
            while(i < args.length){
                args[i++] = arguments[i];
            }
            return process.nextTick(function afterTick() {
                fn.apply(null, args);
            });
    }
}
}),
"[project]/realestateandlease/node_modules/isarray/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
};
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/stream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/BufferList.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Buffer = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function copyBuffer(src, target, offset) {
    src.copy(target, offset);
}
module.exports = function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    BufferList.prototype.push = function push(v) {
        var entry = {
            data: v,
            next: null
        };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
    };
    BufferList.prototype.unshift = function unshift(v) {
        var entry = {
            data: v,
            next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
    };
    BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
    };
    BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
    };
    BufferList.prototype.join = function join(s) {
        if (this.length === 0) return '';
        var p = this.head;
        var ret = '' + p.data;
        while(p = p.next){
            ret += s + p.data;
        }
        return ret;
    };
    BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer.alloc(0);
        var ret = Buffer.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while(p){
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
        }
        return ret;
    };
    return BufferList;
}();
if (util && util.inspect && util.inspect.custom) {
    module.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({
            length: this.length
        });
        return this.constructor.name + ' ' + obj;
    };
}
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/destroy.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*<replacement>*/ var pna = __turbopack_context__.r("[project]/realestateandlease/node_modules/process-nextick-args/index.js [app-route] (ecmascript)");
/*</replacement>*/ // undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) {
            cb(err);
        } else if (err) {
            if (!this._writableState) {
                pna.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) {
        this._readableState.destroyed = true;
    }
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) {
        this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) {
                pna.nextTick(emitErrorNT, _this, err);
            } else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, _this, err);
            }
        } else if (cb) {
            cb(err);
        }
    });
    return this;
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit('error', err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy
};
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_writable.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
/*<replacement>*/ var pna = __turbopack_context__.r("[project]/realestateandlease/node_modules/process-nextick-args/index.js [app-route] (ecmascript)");
/*</replacement>*/ module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var asyncWrite = !("TURBOPACK compile-time value", false) && [
    'v0.10',
    'v0.9.'
].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var util = Object.create(__turbopack_context__.r("[project]/realestateandlease/node_modules/core-util-is/lib/util.js [app-route] (ecmascript)"));
util.inherits = __turbopack_context__.r("[project]/realestateandlease/node_modules/inherits/inherits.js [app-route] (ecmascript)");
/*</replacement>*/ /*<replacement>*/ var internalUtil = {
    deprecate: __turbopack_context__.r("[project]/realestateandlease/node_modules/util-deprecate/node.js [app-route] (ecmascript)")
};
/*</replacement>*/ /*<replacement>*/ var Stream = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/stream.js [app-route] (ecmascript)");
/*</replacement>*/ /*<replacement>*/ var Buffer = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var OurUint8Array = (("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable").Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ var destroyImpl = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/destroy.js [app-route] (ecmascript)");
util.inherits(Writable, Stream);
function nop() {}
function WritableState(options, stream) {
    Duplex = Duplex || __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var writableHwm = options.writableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function() {
                return this.getBuffer();
            }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else {
    realHasInstance = function(object) {
        return object instanceof this;
    };
}
function Writable(options) {
    Duplex = Duplex || __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
    }
    this._writableState = new WritableState(options, this);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    this.emit('error', new Error('Cannot pipe, not readable'));
};
function writeAfterEnd(stream, cb) {
    var er = new Error('write after end');
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit('error', er);
    pna.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) {
        er = new TypeError('May not write null values to stream');
    } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
    }
    if (er) {
        stream.emit('error', er);
        pna.nextTick(cb, er);
        valid = false;
    }
    return valid;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ended) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    var state = this._writableState;
    state.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) {
            last.next = state.lastBufferedRequest;
        } else {
            state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
    } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        pna.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
        }
        if (sync) {
            /*<replacement>*/ asyncWrite(afterWrite, stream, state, finished, cb);
        /*</replacement>*/ } else {
            afterWrite(stream, state, finished, cb);
        }
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else {
            state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
                break;
            }
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error('_write() is not implemented'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
};
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) {
            stream.emit('error', err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function') {
            state.pendingcb++;
            state.finalCalled = true;
            pna.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) pna.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
    get: function() {
        if (this._writableState === undefined) {
            return false;
        }
        return this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    this.end();
    cb(err);
};
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
/*<replacement>*/ var pna = __turbopack_context__.r("[project]/realestateandlease/node_modules/process-nextick-args/index.js [app-route] (ecmascript)");
/*</replacement>*/ /*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj){
        keys.push(key);
    }
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
/*<replacement>*/ var util = Object.create(__turbopack_context__.r("[project]/realestateandlease/node_modules/core-util-is/lib/util.js [app-route] (ecmascript)"));
util.inherits = __turbopack_context__.r("[project]/realestateandlease/node_modules/inherits/inherits.js [app-route] (ecmascript)");
/*</replacement>*/ var Readable = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_readable.js [app-route] (ecmascript)");
var Writable = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_writable.js [app-route] (ecmascript)");
util.inherits(Duplex, Readable);
{
    // avoid scope creep, the keys array can then be collected
    var keys = objectKeys(Writable.prototype);
    for(var v = 0; v < keys.length; v++){
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
}function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false) this.readable = false;
    if (options && options.writable === false) this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    this.once('end', onend);
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// the no-half-open enforcer
function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    pna.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
    get: function() {
        if (this._readableState === undefined || this._writableState === undefined) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});
Duplex.prototype._destroy = function(err, cb) {
    this.push(null);
    this.end();
    pna.nextTick(cb, err);
};
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_readable.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/*<replacement>*/ var pna = __turbopack_context__.r("[project]/realestateandlease/node_modules/process-nextick-args/index.js [app-route] (ecmascript)");
/*</replacement>*/ module.exports = Readable;
/*<replacement>*/ var isArray = __turbopack_context__.r("[project]/realestateandlease/node_modules/isarray/index.js [app-route] (ecmascript)");
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = __turbopack_context__.r("[externals]/events [external] (events, cjs)").EventEmitter;
var EElistenerCount = function(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/stream.js [app-route] (ecmascript)");
/*</replacement>*/ /*<replacement>*/ var Buffer = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
var OurUint8Array = (("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable").Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ /*<replacement>*/ var util = Object.create(__turbopack_context__.r("[project]/realestateandlease/node_modules/core-util-is/lib/util.js [app-route] (ecmascript)"));
util.inherits = __turbopack_context__.r("[project]/realestateandlease/node_modules/inherits/inherits.js [app-route] (ecmascript)");
/*</replacement>*/ /*<replacement>*/ var debugUtil = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog('stream');
} else {
    debug = function() {};
}
/*</replacement>*/ var BufferList = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/BufferList.js [app-route] (ecmascript)");
var destroyImpl = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/internal/streams/destroy.js [app-route] (ecmascript)");
var StringDecoder;
util.inherits(Readable, Stream);
var kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream) {
    Duplex = Duplex || __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var readableHwm = options.readableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = __turbopack_context__.f({
            "string_decoder": {
                id: ()=>"[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)")
            },
            "string_decoder/": {
                id: ()=>"[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)")
            }
        })('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)");
    if (!(this instanceof Readable)) return new Readable(options);
    this._readableState = new ReadableState(options, this);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
    get: function() {
        if (this._readableState === undefined) {
            return false;
        }
        return this._readableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    this.push(null);
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else {
        skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
            stream.emit('error', er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
                if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
                stream.emit('error', new Error('stream.push() after EOF'));
            } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else {
                    addChunk(stream, state, chunk, false);
                }
            }
        } else if (!addToFront) {
            state.reading = false;
        }
    }
    return needMoreData(state);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
    }
    return er;
}
// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = __turbopack_context__.f({
        "string_decoder": {
            id: ()=>"[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)")
        },
        "string_decoder/": {
            id: ()=>"[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)")
        }
    })('string_decoder/').StringDecoder;
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
};
// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
        n = MAX_HWM;
    } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = true;
        n = 0;
    } else {
        state.length -= n;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);
        else emitReadable_(stream);
    }
}
function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    var len = state.length;
    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
        else len = state.length;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    this.emit('error', new Error('_read() is not implemented'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) pna.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug('onend');
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
                increasedAwaitDrain = true;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit('pipe', src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++){
            dests[i].emit('unpipe', this, {
                hasUnpiped: false
            });
        }
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    if (ev === 'data') {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.emittedReadable = false;
            if (!state.reading) {
                pna.nextTick(nReadingNextTick, this);
            } else if (state.length) {
                emitReadable(this);
            }
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        resume(this, state);
    }
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    if (!state.reading) {
        debug('resume read 0');
        stream.read(0);
    }
    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null){}
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream){
        if (this[i] === undefined && typeof stream[i] === 'function') {
            this[i] = function(method) {
                return function() {
                    return stream[method].apply(stream, arguments);
                };
            }(i);
        }
    }
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++){
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._readableState.highWaterMark;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.head.data;
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
    }
    return ret;
}
// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
    } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
}
// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while(p = p.next){
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;
        else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
            if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = str.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
    var ret = Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while(p = p.next){
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
            if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = buf.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
    }
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_transform.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
module.exports = Transform;
var Duplex = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)");
/*<replacement>*/ var util = Object.create(__turbopack_context__.r("[project]/realestateandlease/node_modules/core-util-is/lib/util.js [app-route] (ecmascript)"));
util.inherits = __turbopack_context__.r("[project]/realestateandlease/node_modules/inherits/inherits.js [app-route] (ecmascript)");
/*</replacement>*/ util.inherits(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb) {
        return this.emit('error', new Error('write callback called multiple times'));
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
    }
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === 'function') {
        this._flush(function(er, data) {
            done(_this, er, data);
        });
    } else {
        done(this, null, null);
    }
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    throw new Error('_transform() is not implemented');
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
    }
};
Transform.prototype._destroy = function(err, cb) {
    var _this2 = this;
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit('close');
    });
};
function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) stream.push(data);
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
    if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
    return stream.push(null);
}
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_passthrough.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
module.exports = PassThrough;
var Transform = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_transform.js [app-route] (ecmascript)");
/*<replacement>*/ var util = Object.create(__turbopack_context__.r("[project]/realestateandlease/node_modules/core-util-is/lib/util.js [app-route] (ecmascript)"));
util.inherits = __turbopack_context__.r("[project]/realestateandlease/node_modules/inherits/inherits.js [app-route] (ecmascript)");
/*</replacement>*/ util.inherits(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/readable.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
if (process.env.READABLE_STREAM === 'disable' && Stream) {
    module.exports = Stream;
    exports = module.exports = Stream.Readable;
    exports.Readable = Stream.Readable;
    exports.Writable = Stream.Writable;
    exports.Duplex = Stream.Duplex;
    exports.Transform = Stream.Transform;
    exports.PassThrough = Stream.PassThrough;
    exports.Stream = Stream;
} else {
    exports = module.exports = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_readable.js [app-route] (ecmascript)");
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_writable.js [app-route] (ecmascript)");
    exports.Duplex = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js [app-route] (ecmascript)");
    exports.Transform = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_transform.js [app-route] (ecmascript)");
    exports.PassThrough = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/readable-stream/lib/_stream_passthrough.js [app-route] (ecmascript)");
}
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/safe-buffer/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/realestateandlease/node_modules/core-util-is/lib/util.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg) {
    if (Array.isArray) {
        return Array.isArray(arg);
    }
    return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
function isError(e) {
    return objectToString(e) === '[object Error]' || e instanceof Error;
}
exports.isError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer.isBuffer;
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
}),
"[project]/realestateandlease/node_modules/inherits/inherits_browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    };
}
}),
"[project]/realestateandlease/node_modules/inherits/inherits.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

try {
    var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
    /* istanbul ignore next */ if (typeof util.inherits !== 'function') throw '';
    module.exports = util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = __turbopack_context__.r("[project]/realestateandlease/node_modules/inherits/inherits_browser.js [app-route] (ecmascript)");
}
}),
"[project]/realestateandlease/node_modules/util-deprecate/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */ module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").deprecate;
}),
"[project]/realestateandlease/node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/*<replacement>*/ var Buffer = __turbopack_context__.r("[project]/realestateandlease/node_modules/jszip/node_modules/safe-buffer/index.js [app-route] (ecmascript)").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true){
        switch(enc){
            case 'utf8':
            case 'utf-8':
                return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 'utf16le';
            case 'latin1':
            case 'binary':
                return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
                return enc;
            default:
                if (retried) return; // undefined
                enc = ('' + enc).toLowerCase();
                retried = true;
        }
    }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}
}),
"[project]/realestateandlease/node_modules/immediate/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Mutation = /*TURBOPACK member replacement*/ __turbopack_context__.g.MutationObserver || /*TURBOPACK member replacement*/ __turbopack_context__.g.WebKitMutationObserver;
var scheduleDrain;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var called;
    var observer;
    var element;
    var channel;
} else {
    scheduleDrain = function() {
        process.nextTick(nextTick);
    };
}
var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
    draining = true;
    var i, oldQueue;
    var len = queue.length;
    while(len){
        oldQueue = queue;
        queue = [];
        i = -1;
        while(++i < len){
            oldQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
module.exports = immediate;
function immediate(task) {
    if (queue.push(task) === 1 && !draining) {
        scheduleDrain();
    }
}
}),
"[project]/realestateandlease/node_modules/lie/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var immediate = __turbopack_context__.r("[project]/realestateandlease/node_modules/immediate/lib/index.js [app-route] (ecmascript)");
/* istanbul ignore next */ function INTERNAL() {}
var handlers = {};
var REJECTED = [
    'REJECTED'
];
var FULFILLED = [
    'FULFILLED'
];
var PENDING = [
    'PENDING'
];
/* istanbul ignore else */ if (!("TURBOPACK compile-time value", false)) {
    // in which we actually take advantage of JS scoping
    var UNHANDLED = [
        'UNHANDLED'
    ];
}
module.exports = Promise;
function Promise(resolver) {
    if (typeof resolver !== 'function') {
        throw new TypeError('resolver must be a function');
    }
    this.state = PENDING;
    this.queue = [];
    this.outcome = void 0;
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        this.handled = UNHANDLED;
    }
    if (resolver !== INTERNAL) {
        safelyResolveThenable(this, resolver);
    }
}
Promise.prototype.finally = function(callback) {
    if (typeof callback !== 'function') {
        return this;
    }
    var p = this.constructor;
    return this.then(resolve, reject);
    //TURBOPACK unreachable
    ;
    function resolve(value) {
        function yes() {
            return value;
        }
        return p.resolve(callback()).then(yes);
    }
    function reject(reason) {
        function no() {
            throw reason;
        }
        return p.resolve(callback()).then(no);
    }
};
Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
};
Promise.prototype.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function' && this.state === FULFILLED || typeof onRejected !== 'function' && this.state === REJECTED) {
        return this;
    }
    var promise = new this.constructor(INTERNAL);
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        if (this.handled === UNHANDLED) {
            this.handled = null;
        }
    }
    if (this.state !== PENDING) {
        var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
        unwrap(promise, resolver, this.outcome);
    } else {
        this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
    }
    return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
    this.promise = promise;
    if (typeof onFulfilled === 'function') {
        this.onFulfilled = onFulfilled;
        this.callFulfilled = this.otherCallFulfilled;
    }
    if (typeof onRejected === 'function') {
        this.onRejected = onRejected;
        this.callRejected = this.otherCallRejected;
    }
}
QueueItem.prototype.callFulfilled = function(value) {
    handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function(value) {
    unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function(value) {
    handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function(value) {
    unwrap(this.promise, this.onRejected, value);
};
function unwrap(promise, func, value) {
    immediate(function() {
        var returnValue;
        try {
            returnValue = func(value);
        } catch (e) {
            return handlers.reject(promise, e);
        }
        if (returnValue === promise) {
            handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
        } else {
            handlers.resolve(promise, returnValue);
        }
    });
}
handlers.resolve = function(self, value) {
    var result = tryCatch(getThen, value);
    if (result.status === 'error') {
        return handlers.reject(self, result.value);
    }
    var thenable = result.value;
    if (thenable) {
        safelyResolveThenable(self, thenable);
    } else {
        self.state = FULFILLED;
        self.outcome = value;
        var i = -1;
        var len = self.queue.length;
        while(++i < len){
            self.queue[i].callFulfilled(value);
        }
    }
    return self;
};
handlers.reject = function(self, error) {
    self.state = REJECTED;
    self.outcome = error;
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        if (self.handled === UNHANDLED) {
            immediate(function() {
                if (self.handled === UNHANDLED) {
                    process.emit('unhandledRejection', error, self);
                }
            });
        }
    }
    var i = -1;
    var len = self.queue.length;
    while(++i < len){
        self.queue[i].callRejected(error);
    }
    return self;
};
function getThen(obj) {
    // Make sure we only access the accessor once as required by the spec
    var then = obj && obj.then;
    if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
        return function appyThen() {
            then.apply(obj, arguments);
        };
    }
}
function safelyResolveThenable(self, thenable) {
    // Either fulfill, reject or reject with error
    var called = false;
    function onError(value) {
        if (called) {
            return;
        }
        called = true;
        handlers.reject(self, value);
    }
    function onSuccess(value) {
        if (called) {
            return;
        }
        called = true;
        handlers.resolve(self, value);
    }
    function tryToUnwrap() {
        thenable(onSuccess, onError);
    }
    var result = tryCatch(tryToUnwrap);
    if (result.status === 'error') {
        onError(result.value);
    }
}
function tryCatch(func, value) {
    var out = {};
    try {
        out.value = func(value);
        out.status = 'success';
    } catch (e) {
        out.status = 'error';
        out.value = e;
    }
    return out;
}
Promise.resolve = resolve;
function resolve(value) {
    if (value instanceof this) {
        return value;
    }
    return handlers.resolve(new this(INTERNAL), value);
}
Promise.reject = reject;
function reject(reason) {
    var promise = new this(INTERNAL);
    return handlers.reject(promise, reason);
}
Promise.all = all;
function all(iterable) {
    var self = this;
    if (Object.prototype.toString.call(iterable) !== '[object Array]') {
        return this.reject(new TypeError('must be an array'));
    }
    var len = iterable.length;
    var called = false;
    if (!len) {
        return this.resolve([]);
    }
    var values = new Array(len);
    var resolved = 0;
    var i = -1;
    var promise = new this(INTERNAL);
    while(++i < len){
        allResolver(iterable[i], i);
    }
    return promise;
    //TURBOPACK unreachable
    ;
    function allResolver(value, i) {
        self.resolve(value).then(resolveFromAll, function(error) {
            if (!called) {
                called = true;
                handlers.reject(promise, error);
            }
        });
        function resolveFromAll(outValue) {
            values[i] = outValue;
            if (++resolved === len && !called) {
                called = true;
                handlers.resolve(promise, values);
            }
        }
    }
}
Promise.race = race;
function race(iterable) {
    var self = this;
    if (Object.prototype.toString.call(iterable) !== '[object Array]') {
        return this.reject(new TypeError('must be an array'));
    }
    var len = iterable.length;
    var called = false;
    if (!len) {
        return this.resolve([]);
    }
    var i = -1;
    var promise = new this(INTERNAL);
    while(++i < len){
        resolver(iterable[i]);
    }
    return promise;
    //TURBOPACK unreachable
    ;
    function resolver(value) {
        self.resolve(value).then(function(response) {
            if (!called) {
                called = true;
                handlers.resolve(promise, response);
            }
        }, function(error) {
            if (!called) {
                called = true;
                handlers.reject(promise, error);
            }
        });
    }
}
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
    assign = function() {
        var i, key, len, source, sources, target;
        target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (isFunction(Object.assign)) {
            Object.assign.apply(null, arguments);
        } else {
            for(i = 0, len = sources.length; i < len; i++){
                source = sources[i];
                if (source != null) {
                    for(key in source){
                        if (!hasProp.call(source, key)) continue;
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
    isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === '[object Function]';
    };
    isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === 'function' || ref === 'object');
    };
    isArray = function(val) {
        if (isFunction(Array.isArray)) {
            return Array.isArray(val);
        } else {
            return Object.prototype.toString.call(val) === '[object Array]';
        }
    };
    isEmpty = function(val) {
        var key;
        if (isArray(val)) {
            return !val.length;
        } else {
            for(key in val){
                if (!hasProp.call(val, key)) continue;
                return false;
            }
            return true;
        }
    };
    isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === 'function' && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    getValue = function(obj) {
        if (isFunction(obj.valueOf)) {
            return obj.valueOf();
        } else {
            return obj;
        }
    };
    module.exports.assign = assign;
    module.exports.isFunction = isFunction;
    module.exports.isObject = isObject;
    module.exports.isArray = isArray;
    module.exports.isEmpty = isEmpty;
    module.exports.isPlainObject = isPlainObject;
    module.exports.getValue = getValue;
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLAttribute.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLAttribute;
    module.exports = XMLAttribute = function() {
        function XMLAttribute(parent, name, value) {
            this.options = parent.options;
            this.stringify = parent.stringify;
            this.parent = parent;
            if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo(name));
            }
            if (value == null) {
                throw new Error("Missing attribute value. " + this.debugInfo(name));
            }
            this.name = this.stringify.attName(name);
            this.value = this.stringify.attValue(value);
        }
        XMLAttribute.prototype.clone = function() {
            return Object.create(this);
        };
        XMLAttribute.prototype.toString = function(options) {
            return this.options.writer.set(options).attribute(this);
        };
        XMLAttribute.prototype.debugInfo = function(name) {
            name = name || this.name;
            if (name == null) {
                return "parent: <" + this.parent.name + ">";
            } else {
                return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
            }
        };
        return XMLAttribute;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLElement.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLAttribute, XMLElement, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    ref = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)"), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    XMLAttribute = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLAttribute.js [app-route] (ecmascript)");
    module.exports = XMLElement = function(superClass) {
        extend(XMLElement, superClass);
        function XMLElement(parent, name, attributes) {
            XMLElement.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing element name. " + this.debugInfo());
            }
            this.name = this.stringify.eleName(name);
            this.attributes = {};
            if (attributes != null) {
                this.attribute(attributes);
            }
            if (parent.isDocument) {
                this.isRoot = true;
                this.documentObject = parent;
                parent.rootObject = this;
            }
        }
        XMLElement.prototype.clone = function() {
            var att, attName, clonedSelf, ref1;
            clonedSelf = Object.create(this);
            if (clonedSelf.isRoot) {
                clonedSelf.documentObject = null;
            }
            clonedSelf.attributes = {};
            ref1 = this.attributes;
            for(attName in ref1){
                if (!hasProp.call(ref1, attName)) continue;
                att = ref1[attName];
                clonedSelf.attributes[attName] = att.clone();
            }
            clonedSelf.children = [];
            this.children.forEach(function(child) {
                var clonedChild;
                clonedChild = child.clone();
                clonedChild.parent = clonedSelf;
                return clonedSelf.children.push(clonedChild);
            });
            return clonedSelf;
        };
        XMLElement.prototype.attribute = function(name, value) {
            var attName, attValue;
            if (name != null) {
                name = getValue(name);
            }
            if (isObject(name)) {
                for(attName in name){
                    if (!hasProp.call(name, attName)) continue;
                    attValue = name[attName];
                    this.attribute(attName, attValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                if (!this.options.skipNullAttributes || value != null) {
                    this.attributes[name] = new XMLAttribute(this, name, value);
                }
            }
            return this;
        };
        XMLElement.prototype.removeAttribute = function(name) {
            var attName, i, len;
            if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo());
            }
            name = getValue(name);
            if (Array.isArray(name)) {
                for(i = 0, len = name.length; i < len; i++){
                    attName = name[i];
                    delete this.attributes[attName];
                }
            } else {
                delete this.attributes[name];
            }
            return this;
        };
        XMLElement.prototype.toString = function(options) {
            return this.options.writer.set(options).element(this);
        };
        XMLElement.prototype.att = function(name, value) {
            return this.attribute(name, value);
        };
        XMLElement.prototype.a = function(name, value) {
            return this.attribute(name, value);
        };
        return XMLElement;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLCData.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLCData, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLCData = function(superClass) {
        extend(XMLCData, superClass);
        function XMLCData(parent, text) {
            XMLCData.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing CDATA text. " + this.debugInfo());
            }
            this.text = this.stringify.cdata(text);
        }
        XMLCData.prototype.clone = function() {
            return Object.create(this);
        };
        XMLCData.prototype.toString = function(options) {
            return this.options.writer.set(options).cdata(this);
        };
        return XMLCData;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLComment.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLComment, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLComment = function(superClass) {
        extend(XMLComment, superClass);
        function XMLComment(parent, text) {
            XMLComment.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing comment text. " + this.debugInfo());
            }
            this.text = this.stringify.comment(text);
        }
        XMLComment.prototype.clone = function() {
            return Object.create(this);
        };
        XMLComment.prototype.toString = function(options) {
            return this.options.writer.set(options).comment(this);
        };
        return XMLComment;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)").isObject;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLDeclaration = function(superClass) {
        extend(XMLDeclaration, superClass);
        function XMLDeclaration(parent, version, encoding, standalone) {
            var ref;
            XMLDeclaration.__super__.constructor.call(this, parent);
            if (isObject(version)) {
                ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
            }
            if (!version) {
                version = '1.0';
            }
            this.version = this.stringify.xmlVersion(version);
            if (encoding != null) {
                this.encoding = this.stringify.xmlEncoding(encoding);
            }
            if (standalone != null) {
                this.standalone = this.stringify.xmlStandalone(standalone);
            }
        }
        XMLDeclaration.prototype.toString = function(options) {
            return this.options.writer.set(options).declaration(this);
        };
        return XMLDeclaration;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDTDAttList, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLDTDAttList = function(superClass) {
        extend(XMLDTDAttList, superClass);
        function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            XMLDTDAttList.__super__.constructor.call(this, parent);
            if (elementName == null) {
                throw new Error("Missing DTD element name. " + this.debugInfo());
            }
            if (attributeName == null) {
                throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
            }
            if (!attributeType) {
                throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
            }
            if (!defaultValueType) {
                throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
            }
            if (defaultValueType.indexOf('#') !== 0) {
                defaultValueType = '#' + defaultValueType;
            }
            if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
                throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            }
            if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
                throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            }
            this.elementName = this.stringify.eleName(elementName);
            this.attributeName = this.stringify.attName(attributeName);
            this.attributeType = this.stringify.dtdAttType(attributeType);
            this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
            this.defaultValueType = defaultValueType;
        }
        XMLDTDAttList.prototype.toString = function(options) {
            return this.options.writer.set(options).dtdAttList(this);
        };
        return XMLDTDAttList;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)").isObject;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLDTDEntity = function(superClass) {
        extend(XMLDTDEntity, superClass);
        function XMLDTDEntity(parent, pe, name, value) {
            XMLDTDEntity.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing DTD entity name. " + this.debugInfo(name));
            }
            if (value == null) {
                throw new Error("Missing DTD entity value. " + this.debugInfo(name));
            }
            this.pe = !!pe;
            this.name = this.stringify.eleName(name);
            if (!isObject(value)) {
                this.value = this.stringify.dtdEntityValue(value);
            } else {
                if (!value.pubID && !value.sysID) {
                    throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
                }
                if (value.pubID && !value.sysID) {
                    throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
                }
                if (value.pubID != null) {
                    this.pubID = this.stringify.dtdPubID(value.pubID);
                }
                if (value.sysID != null) {
                    this.sysID = this.stringify.dtdSysID(value.sysID);
                }
                if (value.nData != null) {
                    this.nData = this.stringify.dtdNData(value.nData);
                }
                if (this.pe && this.nData) {
                    throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
                }
            }
        }
        XMLDTDEntity.prototype.toString = function(options) {
            return this.options.writer.set(options).dtdEntity(this);
        };
        return XMLDTDEntity;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDTDElement, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLDTDElement = function(superClass) {
        extend(XMLDTDElement, superClass);
        function XMLDTDElement(parent, name, value) {
            XMLDTDElement.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing DTD element name. " + this.debugInfo());
            }
            if (!value) {
                value = '(#PCDATA)';
            }
            if (Array.isArray(value)) {
                value = '(' + value.join(',') + ')';
            }
            this.name = this.stringify.eleName(name);
            this.value = this.stringify.dtdElementValue(value);
        }
        XMLDTDElement.prototype.toString = function(options) {
            return this.options.writer.set(options).dtdElement(this);
        };
        return XMLDTDElement;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDTDNotation, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLDTDNotation = function(superClass) {
        extend(XMLDTDNotation, superClass);
        function XMLDTDNotation(parent, name, value) {
            XMLDTDNotation.__super__.constructor.call(this, parent);
            if (name == null) {
                throw new Error("Missing DTD notation name. " + this.debugInfo(name));
            }
            if (!value.pubID && !value.sysID) {
                throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            this.name = this.stringify.eleName(name);
            if (value.pubID != null) {
                this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
                this.sysID = this.stringify.dtdSysID(value.sysID);
            }
        }
        XMLDTDNotation.prototype.toString = function(options) {
            return this.options.writer.set(options).dtdNotation(this);
        };
        return XMLDTDNotation;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocType.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)").isObject;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-route] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-route] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-route] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-route] (ecmascript)");
    module.exports = XMLDocType = function(superClass) {
        extend(XMLDocType, superClass);
        function XMLDocType(parent, pubID, sysID) {
            var ref, ref1;
            XMLDocType.__super__.constructor.call(this, parent);
            this.name = "!DOCTYPE";
            this.documentObject = parent;
            if (isObject(pubID)) {
                ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
            }
            if (sysID == null) {
                ref1 = [
                    pubID,
                    sysID
                ], sysID = ref1[0], pubID = ref1[1];
            }
            if (pubID != null) {
                this.pubID = this.stringify.dtdPubID(pubID);
            }
            if (sysID != null) {
                this.sysID = this.stringify.dtdSysID(sysID);
            }
        }
        XMLDocType.prototype.element = function(name, value) {
            var child;
            child = new XMLDTDElement(this, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var child;
            child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.entity = function(name, value) {
            var child;
            child = new XMLDTDEntity(this, false, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.pEntity = function(name, value) {
            var child;
            child = new XMLDTDEntity(this, true, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.notation = function(name, value) {
            var child;
            child = new XMLDTDNotation(this, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.toString = function(options) {
            return this.options.writer.set(options).docType(this);
        };
        XMLDocType.prototype.ele = function(name, value) {
            return this.element(name, value);
        };
        XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        };
        XMLDocType.prototype.ent = function(name, value) {
            return this.entity(name, value);
        };
        XMLDocType.prototype.pent = function(name, value) {
            return this.pEntity(name, value);
        };
        XMLDocType.prototype.not = function(name, value) {
            return this.notation(name, value);
        };
        XMLDocType.prototype.up = function() {
            return this.root() || this.documentObject;
        };
        return XMLDocType;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLRaw.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNode, XMLRaw, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLRaw = function(superClass) {
        extend(XMLRaw, superClass);
        function XMLRaw(parent, text) {
            XMLRaw.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing raw text. " + this.debugInfo());
            }
            this.value = this.stringify.raw(text);
        }
        XMLRaw.prototype.clone = function() {
            return Object.create(this);
        };
        XMLRaw.prototype.toString = function(options) {
            return this.options.writer.set(options).raw(this);
        };
        return XMLRaw;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLText.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNode, XMLText, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLText = function(superClass) {
        extend(XMLText, superClass);
        function XMLText(parent, text) {
            XMLText.__super__.constructor.call(this, parent);
            if (text == null) {
                throw new Error("Missing element text. " + this.debugInfo());
            }
            this.value = this.stringify.eleText(text);
        }
        XMLText.prototype.clone = function() {
            return Object.create(this);
        };
        XMLText.prototype.toString = function(options) {
            return this.options.writer.set(options).text(this);
        };
        return XMLText;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNode, XMLProcessingInstruction, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLProcessingInstruction = function(superClass) {
        extend(XMLProcessingInstruction, superClass);
        function XMLProcessingInstruction(parent, target, value) {
            XMLProcessingInstruction.__super__.constructor.call(this, parent);
            if (target == null) {
                throw new Error("Missing instruction target. " + this.debugInfo());
            }
            this.target = this.stringify.insTarget(target);
            if (value) {
                this.value = this.stringify.insValue(value);
            }
        }
        XMLProcessingInstruction.prototype.clone = function() {
            return Object.create(this);
        };
        XMLProcessingInstruction.prototype.toString = function(options) {
            return this.options.writer.set(options).processingInstruction(this);
        };
        return XMLProcessingInstruction;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDummy.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDummy, XMLNode, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    module.exports = XMLDummy = function(superClass) {
        extend(XMLDummy, superClass);
        function XMLDummy(parent) {
            XMLDummy.__super__.constructor.call(this, parent);
            this.isDummy = true;
        }
        XMLDummy.prototype.clone = function() {
            return Object.create(this);
        };
        XMLDummy.prototype.toString = function(options) {
            return '';
        };
        return XMLDummy;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNode, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref, hasProp = {}.hasOwnProperty;
    ref = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)"), isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty, getValue = ref.getValue;
    XMLElement = null;
    XMLCData = null;
    XMLComment = null;
    XMLDeclaration = null;
    XMLDocType = null;
    XMLRaw = null;
    XMLText = null;
    XMLProcessingInstruction = null;
    XMLDummy = null;
    module.exports = XMLNode = function() {
        function XMLNode(parent) {
            this.parent = parent;
            if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
            }
            this.children = [];
            if (!XMLElement) {
                XMLElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLElement.js [app-route] (ecmascript)");
                XMLCData = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLCData.js [app-route] (ecmascript)");
                XMLComment = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLComment.js [app-route] (ecmascript)");
                XMLDeclaration = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-route] (ecmascript)");
                XMLDocType = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocType.js [app-route] (ecmascript)");
                XMLRaw = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLRaw.js [app-route] (ecmascript)");
                XMLText = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLText.js [app-route] (ecmascript)");
                XMLProcessingInstruction = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-route] (ecmascript)");
                XMLDummy = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDummy.js [app-route] (ecmascript)");
            }
        }
        XMLNode.prototype.element = function(name, attributes, text) {
            var childNode, item, j, k, key, lastChild, len, len1, ref1, ref2, val;
            lastChild = null;
            if (attributes === null && text == null) {
                ref1 = [
                    {},
                    null
                ], attributes = ref1[0], text = ref1[1];
            }
            if (attributes == null) {
                attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
                ref2 = [
                    attributes,
                    text
                ], text = ref2[0], attributes = ref2[1];
            }
            if (name != null) {
                name = getValue(name);
            }
            if (Array.isArray(name)) {
                for(j = 0, len = name.length; j < len; j++){
                    item = name[j];
                    lastChild = this.element(item);
                }
            } else if (isFunction(name)) {
                lastChild = this.element(name.apply());
            } else if (isObject(name)) {
                for(key in name){
                    if (!hasProp.call(name, key)) continue;
                    val = name[key];
                    if (isFunction(val)) {
                        val = val.apply();
                    }
                    if (isObject(val) && isEmpty(val)) {
                        val = null;
                    }
                    if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                        lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
                    } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                        for(k = 0, len1 = val.length; k < len1; k++){
                            item = val[k];
                            childNode = {};
                            childNode[key] = item;
                            lastChild = this.element(childNode);
                        }
                    } else if (isObject(val)) {
                        lastChild = this.element(key);
                        lastChild.element(val);
                    } else {
                        lastChild = this.element(key, val);
                    }
                }
            } else if (this.options.skipNullNodes && text === null) {
                lastChild = this.dummy();
            } else {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
                    lastChild = this.text(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
                    lastChild = this.cdata(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
                    lastChild = this.comment(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
                    lastChild = this.raw(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
                    lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
                } else {
                    lastChild = this.node(name, attributes, text);
                }
            }
            if (lastChild == null) {
                throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
            }
            return lastChild;
        };
        XMLNode.prototype.insertBefore = function(name, attributes, text) {
            var child, i, removed;
            if (this.isRoot) {
                throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
        };
        XMLNode.prototype.insertAfter = function(name, attributes, text) {
            var child, i, removed;
            if (this.isRoot) {
                throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
        };
        XMLNode.prototype.remove = function() {
            var i, ref1;
            if (this.isRoot) {
                throw new Error("Cannot remove the root element. " + this.debugInfo());
            }
            i = this.parent.children.indexOf(this);
            [].splice.apply(this.parent.children, [
                i,
                i - i + 1
            ].concat(ref1 = [])), ref1;
            return this.parent;
        };
        XMLNode.prototype.node = function(name, attributes, text) {
            var child, ref1;
            if (name != null) {
                name = getValue(name);
            }
            attributes || (attributes = {});
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
                ref1 = [
                    attributes,
                    text
                ], text = ref1[0], attributes = ref1[1];
            }
            child = new XMLElement(this, name, attributes);
            if (text != null) {
                child.text(text);
            }
            this.children.push(child);
            return child;
        };
        XMLNode.prototype.text = function(value) {
            var child;
            child = new XMLText(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.cdata = function(value) {
            var child;
            child = new XMLCData(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.comment = function(value) {
            var child;
            child = new XMLComment(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.commentBefore = function(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.commentAfter = function(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.raw = function(value) {
            var child;
            child = new XMLRaw(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.dummy = function() {
            var child;
            child = new XMLDummy(this);
            this.children.push(child);
            return child;
        };
        XMLNode.prototype.instruction = function(target, value) {
            var insTarget, insValue, instruction, j, len;
            if (target != null) {
                target = getValue(target);
            }
            if (value != null) {
                value = getValue(value);
            }
            if (Array.isArray(target)) {
                for(j = 0, len = target.length; j < len; j++){
                    insTarget = target[j];
                    this.instruction(insTarget);
                }
            } else if (isObject(target)) {
                for(insTarget in target){
                    if (!hasProp.call(target, insTarget)) continue;
                    insValue = target[insTarget];
                    this.instruction(insTarget, insValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                instruction = new XMLProcessingInstruction(this, target, value);
                this.children.push(instruction);
            }
            return this;
        };
        XMLNode.prototype.instructionBefore = function(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.instructionAfter = function(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.declaration = function(version, encoding, standalone) {
            var doc, xmldec;
            doc = this.document();
            xmldec = new XMLDeclaration(doc, version, encoding, standalone);
            if (doc.children[0] instanceof XMLDeclaration) {
                doc.children[0] = xmldec;
            } else {
                doc.children.unshift(xmldec);
            }
            return doc.root() || doc;
        };
        XMLNode.prototype.doctype = function(pubID, sysID) {
            var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
            doc = this.document();
            doctype = new XMLDocType(doc, pubID, sysID);
            ref1 = doc.children;
            for(i = j = 0, len = ref1.length; j < len; i = ++j){
                child = ref1[i];
                if (child instanceof XMLDocType) {
                    doc.children[i] = doctype;
                    return doctype;
                }
            }
            ref2 = doc.children;
            for(i = k = 0, len1 = ref2.length; k < len1; i = ++k){
                child = ref2[i];
                if (child.isRoot) {
                    doc.children.splice(i, 0, doctype);
                    return doctype;
                }
            }
            doc.children.push(doctype);
            return doctype;
        };
        XMLNode.prototype.up = function() {
            if (this.isRoot) {
                throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
            }
            return this.parent;
        };
        XMLNode.prototype.root = function() {
            var node;
            node = this;
            while(node){
                if (node.isDocument) {
                    return node.rootObject;
                } else if (node.isRoot) {
                    return node;
                } else {
                    node = node.parent;
                }
            }
        };
        XMLNode.prototype.document = function() {
            var node;
            node = this;
            while(node){
                if (node.isDocument) {
                    return node;
                } else {
                    node = node.parent;
                }
            }
        };
        XMLNode.prototype.end = function(options) {
            return this.document().end(options);
        };
        XMLNode.prototype.prev = function() {
            var i;
            i = this.parent.children.indexOf(this);
            while(i > 0 && this.parent.children[i - 1].isDummy){
                i = i - 1;
            }
            if (i < 1) {
                throw new Error("Already at the first node. " + this.debugInfo());
            }
            return this.parent.children[i - 1];
        };
        XMLNode.prototype.next = function() {
            var i;
            i = this.parent.children.indexOf(this);
            while(i < this.parent.children.length - 1 && this.parent.children[i + 1].isDummy){
                i = i + 1;
            }
            if (i === -1 || i === this.parent.children.length - 1) {
                throw new Error("Already at the last node. " + this.debugInfo());
            }
            return this.parent.children[i + 1];
        };
        XMLNode.prototype.importDocument = function(doc) {
            var clonedRoot;
            clonedRoot = doc.root().clone();
            clonedRoot.parent = this;
            clonedRoot.isRoot = false;
            this.children.push(clonedRoot);
            return this;
        };
        XMLNode.prototype.debugInfo = function(name) {
            var ref1, ref2;
            name = name || this.name;
            if (name == null && !((ref1 = this.parent) != null ? ref1.name : void 0)) {
                return "";
            } else if (name == null) {
                return "parent: <" + this.parent.name + ">";
            } else if (!((ref2 = this.parent) != null ? ref2.name : void 0)) {
                return "node: <" + name + ">";
            } else {
                return "node: <" + name + ">, parent: <" + this.parent.name + ">";
            }
        };
        XMLNode.prototype.ele = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLNode.prototype.nod = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLNode.prototype.txt = function(value) {
            return this.text(value);
        };
        XMLNode.prototype.dat = function(value) {
            return this.cdata(value);
        };
        XMLNode.prototype.com = function(value) {
            return this.comment(value);
        };
        XMLNode.prototype.ins = function(target, value) {
            return this.instruction(target, value);
        };
        XMLNode.prototype.doc = function() {
            return this.document();
        };
        XMLNode.prototype.dec = function(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
        };
        XMLNode.prototype.dtd = function(pubID, sysID) {
            return this.doctype(pubID, sysID);
        };
        XMLNode.prototype.e = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLNode.prototype.n = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLNode.prototype.t = function(value) {
            return this.text(value);
        };
        XMLNode.prototype.d = function(value) {
            return this.cdata(value);
        };
        XMLNode.prototype.c = function(value) {
            return this.comment(value);
        };
        XMLNode.prototype.r = function(value) {
            return this.raw(value);
        };
        XMLNode.prototype.i = function(target, value) {
            return this.instruction(target, value);
        };
        XMLNode.prototype.u = function() {
            return this.up();
        };
        XMLNode.prototype.importXMLBuilder = function(doc) {
            return this.importDocument(doc);
        };
        return XMLNode;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringifier.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLStringifier, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, hasProp = {}.hasOwnProperty;
    module.exports = XMLStringifier = function() {
        function XMLStringifier(options) {
            this.assertLegalChar = bind(this.assertLegalChar, this);
            var key, ref, value;
            options || (options = {});
            this.noDoubleEncoding = options.noDoubleEncoding;
            ref = options.stringify || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this[key] = value;
            }
        }
        XMLStringifier.prototype.eleName = function(val) {
            val = '' + val || '';
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.eleText = function(val) {
            val = '' + val || '';
            return this.assertLegalChar(this.elEscape(val));
        };
        XMLStringifier.prototype.cdata = function(val) {
            val = '' + val || '';
            val = val.replace(']]>', ']]]]><![CDATA[>');
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.comment = function(val) {
            val = '' + val || '';
            if (val.match(/--/)) {
                throw new Error("Comment text cannot contain double-hypen: " + val);
            }
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.raw = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.attName = function(val) {
            return val = '' + val || '';
        };
        XMLStringifier.prototype.attValue = function(val) {
            val = '' + val || '';
            return this.attEscape(val);
        };
        XMLStringifier.prototype.insTarget = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.insValue = function(val) {
            val = '' + val || '';
            if (val.match(/\?>/)) {
                throw new Error("Invalid processing instruction value: " + val);
            }
            return val;
        };
        XMLStringifier.prototype.xmlVersion = function(val) {
            val = '' + val || '';
            if (!val.match(/1\.[0-9]+/)) {
                throw new Error("Invalid version number: " + val);
            }
            return val;
        };
        XMLStringifier.prototype.xmlEncoding = function(val) {
            val = '' + val || '';
            if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
                throw new Error("Invalid encoding: " + val);
            }
            return val;
        };
        XMLStringifier.prototype.xmlStandalone = function(val) {
            if (val) {
                return "yes";
            } else {
                return "no";
            }
        };
        XMLStringifier.prototype.dtdPubID = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.dtdSysID = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.dtdElementValue = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.dtdAttType = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.dtdAttDefault = function(val) {
            if (val != null) {
                return '' + val || '';
            } else {
                return val;
            }
        };
        XMLStringifier.prototype.dtdEntityValue = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.dtdNData = function(val) {
            return '' + val || '';
        };
        XMLStringifier.prototype.convertAttKey = '@';
        XMLStringifier.prototype.convertPIKey = '?';
        XMLStringifier.prototype.convertTextKey = '#text';
        XMLStringifier.prototype.convertCDataKey = '#cdata';
        XMLStringifier.prototype.convertCommentKey = '#comment';
        XMLStringifier.prototype.convertRawKey = '#raw';
        XMLStringifier.prototype.assertLegalChar = function(str) {
            var res;
            res = str.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
            if (res) {
                throw new Error("Invalid character in string: " + str + " at index " + res.index);
            }
            return str;
        };
        XMLStringifier.prototype.elEscape = function(str) {
            var ampregex;
            ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
        };
        XMLStringifier.prototype.attEscape = function(str) {
            var ampregex;
            ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
        };
        return XMLStringifier;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLWriterBase.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLWriterBase, hasProp = {}.hasOwnProperty;
    module.exports = XMLWriterBase = function() {
        function XMLWriterBase(options) {
            var key, ref, ref1, ref2, ref3, ref4, ref5, ref6, value;
            options || (options = {});
            this.pretty = options.pretty || false;
            this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
            if (this.pretty) {
                this.indent = (ref1 = options.indent) != null ? ref1 : '  ';
                this.newline = (ref2 = options.newline) != null ? ref2 : '\n';
                this.offset = (ref3 = options.offset) != null ? ref3 : 0;
                this.dontprettytextnodes = (ref4 = options.dontprettytextnodes) != null ? ref4 : 0;
            } else {
                this.indent = '';
                this.newline = '';
                this.offset = 0;
                this.dontprettytextnodes = 0;
            }
            this.spacebeforeslash = (ref5 = options.spacebeforeslash) != null ? ref5 : '';
            if (this.spacebeforeslash === true) {
                this.spacebeforeslash = ' ';
            }
            this.newlinedefault = this.newline;
            this.prettydefault = this.pretty;
            ref6 = options.writer || {};
            for(key in ref6){
                if (!hasProp.call(ref6, key)) continue;
                value = ref6[key];
                this[key] = value;
            }
        }
        XMLWriterBase.prototype.set = function(options) {
            var key, ref, value;
            options || (options = {});
            if ("pretty" in options) {
                this.pretty = options.pretty;
            }
            if ("allowEmpty" in options) {
                this.allowEmpty = options.allowEmpty;
            }
            if (this.pretty) {
                this.indent = "indent" in options ? options.indent : '  ';
                this.newline = "newline" in options ? options.newline : '\n';
                this.offset = "offset" in options ? options.offset : 0;
                this.dontprettytextnodes = "dontprettytextnodes" in options ? options.dontprettytextnodes : 0;
            } else {
                this.indent = '';
                this.newline = '';
                this.offset = 0;
                this.dontprettytextnodes = 0;
            }
            this.spacebeforeslash = "spacebeforeslash" in options ? options.spacebeforeslash : '';
            if (this.spacebeforeslash === true) {
                this.spacebeforeslash = ' ';
            }
            this.newlinedefault = this.newline;
            this.prettydefault = this.pretty;
            ref = options.writer || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this[key] = value;
            }
            return this;
        };
        XMLWriterBase.prototype.space = function(level) {
            var indent;
            if (this.pretty) {
                indent = (level || 0) + this.offset + 1;
                if (indent > 0) {
                    return new Array(indent).join(this.indent);
                } else {
                    return '';
                }
            } else {
                return '';
            }
        };
        return XMLWriterBase;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLText, XMLWriterBase, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLDeclaration = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-route] (ecmascript)");
    XMLDocType = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocType.js [app-route] (ecmascript)");
    XMLCData = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLCData.js [app-route] (ecmascript)");
    XMLComment = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLComment.js [app-route] (ecmascript)");
    XMLElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLElement.js [app-route] (ecmascript)");
    XMLRaw = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLRaw.js [app-route] (ecmascript)");
    XMLText = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLText.js [app-route] (ecmascript)");
    XMLProcessingInstruction = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-route] (ecmascript)");
    XMLDummy = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDummy.js [app-route] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-route] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-route] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-route] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-route] (ecmascript)");
    XMLWriterBase = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLWriterBase.js [app-route] (ecmascript)");
    module.exports = XMLStringWriter = function(superClass) {
        extend(XMLStringWriter, superClass);
        function XMLStringWriter(options) {
            XMLStringWriter.__super__.constructor.call(this, options);
        }
        XMLStringWriter.prototype.document = function(doc) {
            var child, i, len, r, ref;
            this.textispresent = false;
            r = '';
            ref = doc.children;
            for(i = 0, len = ref.length; i < len; i++){
                child = ref[i];
                if (child instanceof XMLDummy) {
                    continue;
                }
                r += (function() {
                    switch(false){
                        case !(child instanceof XMLDeclaration):
                            return this.declaration(child);
                        case !(child instanceof XMLDocType):
                            return this.docType(child);
                        case !(child instanceof XMLComment):
                            return this.comment(child);
                        case !(child instanceof XMLProcessingInstruction):
                            return this.processingInstruction(child);
                        default:
                            return this.element(child, 0);
                    }
                }).call(this);
            }
            if (this.pretty && r.slice(-this.newline.length) === this.newline) {
                r = r.slice(0, -this.newline.length);
            }
            return r;
        };
        XMLStringWriter.prototype.attribute = function(att) {
            return ' ' + att.name + '="' + att.value + '"';
        };
        XMLStringWriter.prototype.cdata = function(node, level) {
            return this.space(level) + '<![CDATA[' + node.text + ']]>' + this.newline;
        };
        XMLStringWriter.prototype.comment = function(node, level) {
            return this.space(level) + '<!-- ' + node.text + ' -->' + this.newline;
        };
        XMLStringWriter.prototype.declaration = function(node, level) {
            var r;
            r = this.space(level);
            r += '<?xml version="' + node.version + '"';
            if (node.encoding != null) {
                r += ' encoding="' + node.encoding + '"';
            }
            if (node.standalone != null) {
                r += ' standalone="' + node.standalone + '"';
            }
            r += this.spacebeforeslash + '?>';
            r += this.newline;
            return r;
        };
        XMLStringWriter.prototype.docType = function(node, level) {
            var child, i, len, r, ref;
            level || (level = 0);
            r = this.space(level);
            r += '<!DOCTYPE ' + node.root().name;
            if (node.pubID && node.sysID) {
                r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
                r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.children.length > 0) {
                r += ' [';
                r += this.newline;
                ref = node.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    r += (function() {
                        switch(false){
                            case !(child instanceof XMLDTDAttList):
                                return this.dtdAttList(child, level + 1);
                            case !(child instanceof XMLDTDElement):
                                return this.dtdElement(child, level + 1);
                            case !(child instanceof XMLDTDEntity):
                                return this.dtdEntity(child, level + 1);
                            case !(child instanceof XMLDTDNotation):
                                return this.dtdNotation(child, level + 1);
                            case !(child instanceof XMLCData):
                                return this.cdata(child, level + 1);
                            case !(child instanceof XMLComment):
                                return this.comment(child, level + 1);
                            case !(child instanceof XMLProcessingInstruction):
                                return this.processingInstruction(child, level + 1);
                            default:
                                throw new Error("Unknown DTD node type: " + child.constructor.name);
                        }
                    }).call(this);
                }
                r += ']';
            }
            r += this.spacebeforeslash + '>';
            r += this.newline;
            return r;
        };
        XMLStringWriter.prototype.element = function(node, level) {
            var att, child, i, j, len, len1, name, r, ref, ref1, ref2, space, textispresentwasset;
            level || (level = 0);
            textispresentwasset = false;
            if (this.textispresent) {
                this.newline = '';
                this.pretty = false;
            } else {
                this.newline = this.newlinedefault;
                this.pretty = this.prettydefault;
            }
            space = this.space(level);
            r = '';
            r += space + '<' + node.name;
            ref = node.attributes;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                r += this.attribute(att);
            }
            if (node.children.length === 0 || node.children.every(function(e) {
                return e.value === '';
            })) {
                if (this.allowEmpty) {
                    r += '></' + node.name + '>' + this.newline;
                } else {
                    r += this.spacebeforeslash + '/>' + this.newline;
                }
            } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
                r += '>';
                r += node.children[0].value;
                r += '</' + node.name + '>' + this.newline;
            } else {
                if (this.dontprettytextnodes) {
                    ref1 = node.children;
                    for(i = 0, len = ref1.length; i < len; i++){
                        child = ref1[i];
                        if (child.value != null) {
                            this.textispresent++;
                            textispresentwasset = true;
                            break;
                        }
                    }
                }
                if (this.textispresent) {
                    this.newline = '';
                    this.pretty = false;
                    space = this.space(level);
                }
                r += '>' + this.newline;
                ref2 = node.children;
                for(j = 0, len1 = ref2.length; j < len1; j++){
                    child = ref2[j];
                    r += (function() {
                        switch(false){
                            case !(child instanceof XMLCData):
                                return this.cdata(child, level + 1);
                            case !(child instanceof XMLComment):
                                return this.comment(child, level + 1);
                            case !(child instanceof XMLElement):
                                return this.element(child, level + 1);
                            case !(child instanceof XMLRaw):
                                return this.raw(child, level + 1);
                            case !(child instanceof XMLText):
                                return this.text(child, level + 1);
                            case !(child instanceof XMLProcessingInstruction):
                                return this.processingInstruction(child, level + 1);
                            case !(child instanceof XMLDummy):
                                return '';
                            default:
                                throw new Error("Unknown XML node type: " + child.constructor.name);
                        }
                    }).call(this);
                }
                if (textispresentwasset) {
                    this.textispresent--;
                }
                if (!this.textispresent) {
                    this.newline = this.newlinedefault;
                    this.pretty = this.prettydefault;
                }
                r += space + '</' + node.name + '>' + this.newline;
            }
            return r;
        };
        XMLStringWriter.prototype.processingInstruction = function(node, level) {
            var r;
            r = this.space(level) + '<?' + node.target;
            if (node.value) {
                r += ' ' + node.value;
            }
            r += this.spacebeforeslash + '?>' + this.newline;
            return r;
        };
        XMLStringWriter.prototype.raw = function(node, level) {
            return this.space(level) + node.value + this.newline;
        };
        XMLStringWriter.prototype.text = function(node, level) {
            return this.space(level) + node.value + this.newline;
        };
        XMLStringWriter.prototype.dtdAttList = function(node, level) {
            var r;
            r = this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
            if (node.defaultValueType !== '#DEFAULT') {
                r += ' ' + node.defaultValueType;
            }
            if (node.defaultValue) {
                r += ' "' + node.defaultValue + '"';
            }
            r += this.spacebeforeslash + '>' + this.newline;
            return r;
        };
        XMLStringWriter.prototype.dtdElement = function(node, level) {
            return this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value + this.spacebeforeslash + '>' + this.newline;
        };
        XMLStringWriter.prototype.dtdEntity = function(node, level) {
            var r;
            r = this.space(level) + '<!ENTITY';
            if (node.pe) {
                r += ' %';
            }
            r += ' ' + node.name;
            if (node.value) {
                r += ' "' + node.value + '"';
            } else {
                if (node.pubID && node.sysID) {
                    r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                } else if (node.sysID) {
                    r += ' SYSTEM "' + node.sysID + '"';
                }
                if (node.nData) {
                    r += ' NDATA ' + node.nData;
                }
            }
            r += this.spacebeforeslash + '>' + this.newline;
            return r;
        };
        XMLStringWriter.prototype.dtdNotation = function(node, level) {
            var r;
            r = this.space(level) + '<!NOTATION ' + node.name;
            if (node.pubID && node.sysID) {
                r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.pubID) {
                r += ' PUBLIC "' + node.pubID + '"';
            } else if (node.sysID) {
                r += ' SYSTEM "' + node.sysID + '"';
            }
            r += this.spacebeforeslash + '>' + this.newline;
            return r;
        };
        XMLStringWriter.prototype.openNode = function(node, level) {
            var att, name, r, ref;
            level || (level = 0);
            if (node instanceof XMLElement) {
                r = this.space(level) + '<' + node.name;
                ref = node.attributes;
                for(name in ref){
                    if (!hasProp.call(ref, name)) continue;
                    att = ref[name];
                    r += this.attribute(att);
                }
                r += (node.children ? '>' : '/>') + this.newline;
                return r;
            } else {
                r = this.space(level) + '<!DOCTYPE ' + node.rootNodeName;
                if (node.pubID && node.sysID) {
                    r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                } else if (node.sysID) {
                    r += ' SYSTEM "' + node.sysID + '"';
                }
                r += (node.children ? ' [' : '>') + this.newline;
                return r;
            }
        };
        XMLStringWriter.prototype.closeNode = function(node, level) {
            level || (level = 0);
            switch(false){
                case !(node instanceof XMLElement):
                    return this.space(level) + '</' + node.name + '>' + this.newline;
                case !(node instanceof XMLDocType):
                    return this.space(level) + ']>' + this.newline;
            }
        };
        return XMLStringWriter;
    }(XMLWriterBase);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocument.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isPlainObject = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)").isPlainObject;
    XMLNode = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLNode.js [app-route] (ecmascript)");
    XMLStringifier = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringifier.js [app-route] (ecmascript)");
    XMLStringWriter = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-route] (ecmascript)");
    module.exports = XMLDocument = function(superClass) {
        extend(XMLDocument, superClass);
        function XMLDocument(options) {
            XMLDocument.__super__.constructor.call(this, null);
            this.name = "?xml";
            options || (options = {});
            if (!options.writer) {
                options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.stringify = new XMLStringifier(options);
            this.isDocument = true;
        }
        XMLDocument.prototype.end = function(writer) {
            var writerOptions;
            if (!writer) {
                writer = this.options.writer;
            } else if (isPlainObject(writer)) {
                writerOptions = writer;
                writer = this.options.writer.set(writerOptions);
            }
            return writer.document(this);
        };
        XMLDocument.prototype.toString = function(options) {
            return this.options.writer.set(options).document(this);
        };
        return XMLDocument;
    }(XMLNode);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocumentCB.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
    ref = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)"), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
    XMLElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLElement.js [app-route] (ecmascript)");
    XMLCData = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLCData.js [app-route] (ecmascript)");
    XMLComment = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLComment.js [app-route] (ecmascript)");
    XMLRaw = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLRaw.js [app-route] (ecmascript)");
    XMLText = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLText.js [app-route] (ecmascript)");
    XMLProcessingInstruction = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-route] (ecmascript)");
    XMLDeclaration = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-route] (ecmascript)");
    XMLDocType = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocType.js [app-route] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-route] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-route] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-route] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-route] (ecmascript)");
    XMLAttribute = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLAttribute.js [app-route] (ecmascript)");
    XMLStringifier = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringifier.js [app-route] (ecmascript)");
    XMLStringWriter = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-route] (ecmascript)");
    module.exports = XMLDocumentCB = function() {
        function XMLDocumentCB(options, onData, onEnd) {
            var writerOptions;
            this.name = "?xml";
            options || (options = {});
            if (!options.writer) {
                options.writer = new XMLStringWriter(options);
            } else if (isPlainObject(options.writer)) {
                writerOptions = options.writer;
                options.writer = new XMLStringWriter(writerOptions);
            }
            this.options = options;
            this.writer = options.writer;
            this.stringify = new XMLStringifier(options);
            this.onDataCallback = onData || function() {};
            this.onEndCallback = onEnd || function() {};
            this.currentNode = null;
            this.currentLevel = -1;
            this.openTags = {};
            this.documentStarted = false;
            this.documentCompleted = false;
            this.root = null;
        }
        XMLDocumentCB.prototype.node = function(name, attributes, text) {
            var ref1, ref2;
            if (name == null) {
                throw new Error("Missing node name.");
            }
            if (this.root && this.currentLevel === -1) {
                throw new Error("Document can only have one root node. " + this.debugInfo(name));
            }
            this.openCurrent();
            name = getValue(name);
            if (attributes === null && text == null) {
                ref1 = [
                    {},
                    null
                ], attributes = ref1[0], text = ref1[1];
            }
            if (attributes == null) {
                attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
                ref2 = [
                    attributes,
                    text
                ], text = ref2[0], attributes = ref2[1];
            }
            this.currentNode = new XMLElement(this, name, attributes);
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            if (text != null) {
                this.text(text);
            }
            return this;
        };
        XMLDocumentCB.prototype.element = function(name, attributes, text) {
            if (this.currentNode && this.currentNode instanceof XMLDocType) {
                return this.dtdElement.apply(this, arguments);
            } else {
                return this.node(name, attributes, text);
            }
        };
        XMLDocumentCB.prototype.attribute = function(name, value) {
            var attName, attValue;
            if (!this.currentNode || this.currentNode.children) {
                throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
            }
            if (name != null) {
                name = getValue(name);
            }
            if (isObject(name)) {
                for(attName in name){
                    if (!hasProp.call(name, attName)) continue;
                    attValue = name[attName];
                    this.attribute(attName, attValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                if (!this.options.skipNullAttributes || value != null) {
                    this.currentNode.attributes[name] = new XMLAttribute(this, name, value);
                }
            }
            return this;
        };
        XMLDocumentCB.prototype.text = function(value) {
            var node;
            this.openCurrent();
            node = new XMLText(this, value);
            this.onData(this.writer.text(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.cdata = function(value) {
            var node;
            this.openCurrent();
            node = new XMLCData(this, value);
            this.onData(this.writer.cdata(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.comment = function(value) {
            var node;
            this.openCurrent();
            node = new XMLComment(this, value);
            this.onData(this.writer.comment(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.raw = function(value) {
            var node;
            this.openCurrent();
            node = new XMLRaw(this, value);
            this.onData(this.writer.raw(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.instruction = function(target, value) {
            var i, insTarget, insValue, len, node;
            this.openCurrent();
            if (target != null) {
                target = getValue(target);
            }
            if (value != null) {
                value = getValue(value);
            }
            if (Array.isArray(target)) {
                for(i = 0, len = target.length; i < len; i++){
                    insTarget = target[i];
                    this.instruction(insTarget);
                }
            } else if (isObject(target)) {
                for(insTarget in target){
                    if (!hasProp.call(target, insTarget)) continue;
                    insValue = target[insTarget];
                    this.instruction(insTarget, insValue);
                }
            } else {
                if (isFunction(value)) {
                    value = value.apply();
                }
                node = new XMLProcessingInstruction(this, target, value);
                this.onData(this.writer.processingInstruction(node, this.currentLevel + 1), this.currentLevel + 1);
            }
            return this;
        };
        XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
            var node;
            this.openCurrent();
            if (this.documentStarted) {
                throw new Error("declaration() must be the first node.");
            }
            node = new XMLDeclaration(this, version, encoding, standalone);
            this.onData(this.writer.declaration(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
            this.openCurrent();
            if (root == null) {
                throw new Error("Missing root node name.");
            }
            if (this.root) {
                throw new Error("dtd() must come before the root node.");
            }
            this.currentNode = new XMLDocType(this, pubID, sysID);
            this.currentNode.rootNodeName = root;
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            return this;
        };
        XMLDocumentCB.prototype.dtdElement = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDElement(this, name, value);
            this.onData(this.writer.dtdElement(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var node;
            this.openCurrent();
            node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.onData(this.writer.dtdAttList(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.entity = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, false, name, value);
            this.onData(this.writer.dtdEntity(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.pEntity = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, true, name, value);
            this.onData(this.writer.dtdEntity(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.notation = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDNotation(this, name, value);
            this.onData(this.writer.dtdNotation(node, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.up = function() {
            if (this.currentLevel < 0) {
                throw new Error("The document node has no parent.");
            }
            if (this.currentNode) {
                if (this.currentNode.children) {
                    this.closeNode(this.currentNode);
                } else {
                    this.openNode(this.currentNode);
                }
                this.currentNode = null;
            } else {
                this.closeNode(this.openTags[this.currentLevel]);
            }
            delete this.openTags[this.currentLevel];
            this.currentLevel--;
            return this;
        };
        XMLDocumentCB.prototype.end = function() {
            while(this.currentLevel >= 0){
                this.up();
            }
            return this.onEnd();
        };
        XMLDocumentCB.prototype.openCurrent = function() {
            if (this.currentNode) {
                this.currentNode.children = true;
                return this.openNode(this.currentNode);
            }
        };
        XMLDocumentCB.prototype.openNode = function(node) {
            if (!node.isOpen) {
                if (!this.root && this.currentLevel === 0 && node instanceof XMLElement) {
                    this.root = node;
                }
                this.onData(this.writer.openNode(node, this.currentLevel), this.currentLevel);
                return node.isOpen = true;
            }
        };
        XMLDocumentCB.prototype.closeNode = function(node) {
            if (!node.isClosed) {
                this.onData(this.writer.closeNode(node, this.currentLevel), this.currentLevel);
                return node.isClosed = true;
            }
        };
        XMLDocumentCB.prototype.onData = function(chunk, level) {
            this.documentStarted = true;
            return this.onDataCallback(chunk, level + 1);
        };
        XMLDocumentCB.prototype.onEnd = function() {
            this.documentCompleted = true;
            return this.onEndCallback();
        };
        XMLDocumentCB.prototype.debugInfo = function(name) {
            if (name == null) {
                return "";
            } else {
                return "node: <" + name + ">";
            }
        };
        XMLDocumentCB.prototype.ele = function() {
            return this.element.apply(this, arguments);
        };
        XMLDocumentCB.prototype.nod = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLDocumentCB.prototype.txt = function(value) {
            return this.text(value);
        };
        XMLDocumentCB.prototype.dat = function(value) {
            return this.cdata(value);
        };
        XMLDocumentCB.prototype.com = function(value) {
            return this.comment(value);
        };
        XMLDocumentCB.prototype.ins = function(target, value) {
            return this.instruction(target, value);
        };
        XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
        };
        XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
            return this.doctype(root, pubID, sysID);
        };
        XMLDocumentCB.prototype.e = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLDocumentCB.prototype.n = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLDocumentCB.prototype.t = function(value) {
            return this.text(value);
        };
        XMLDocumentCB.prototype.d = function(value) {
            return this.cdata(value);
        };
        XMLDocumentCB.prototype.c = function(value) {
            return this.comment(value);
        };
        XMLDocumentCB.prototype.r = function(value) {
            return this.raw(value);
        };
        XMLDocumentCB.prototype.i = function(target, value) {
            return this.instruction(target, value);
        };
        XMLDocumentCB.prototype.att = function() {
            if (this.currentNode && this.currentNode instanceof XMLDocType) {
                return this.attList.apply(this, arguments);
            } else {
                return this.attribute.apply(this, arguments);
            }
        };
        XMLDocumentCB.prototype.a = function() {
            if (this.currentNode && this.currentNode instanceof XMLDocType) {
                return this.attList.apply(this, arguments);
            } else {
                return this.attribute.apply(this, arguments);
            }
        };
        XMLDocumentCB.prototype.ent = function(name, value) {
            return this.entity(name, value);
        };
        XMLDocumentCB.prototype.pent = function(name, value) {
            return this.pEntity(name, value);
        };
        XMLDocumentCB.prototype.not = function(name, value) {
            return this.notation(name, value);
        };
        return XMLDocumentCB;
    }();
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStreamWriter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStreamWriter, XMLText, XMLWriterBase, extend = function(child, parent) {
        for(var key in parent){
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLDeclaration = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDeclaration.js [app-route] (ecmascript)");
    XMLDocType = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocType.js [app-route] (ecmascript)");
    XMLCData = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLCData.js [app-route] (ecmascript)");
    XMLComment = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLComment.js [app-route] (ecmascript)");
    XMLElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLElement.js [app-route] (ecmascript)");
    XMLRaw = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLRaw.js [app-route] (ecmascript)");
    XMLText = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLText.js [app-route] (ecmascript)");
    XMLProcessingInstruction = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js [app-route] (ecmascript)");
    XMLDummy = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDummy.js [app-route] (ecmascript)");
    XMLDTDAttList = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDAttList.js [app-route] (ecmascript)");
    XMLDTDElement = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDElement.js [app-route] (ecmascript)");
    XMLDTDEntity = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDEntity.js [app-route] (ecmascript)");
    XMLDTDNotation = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDTDNotation.js [app-route] (ecmascript)");
    XMLWriterBase = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLWriterBase.js [app-route] (ecmascript)");
    module.exports = XMLStreamWriter = function(superClass) {
        extend(XMLStreamWriter, superClass);
        function XMLStreamWriter(stream, options) {
            XMLStreamWriter.__super__.constructor.call(this, options);
            this.stream = stream;
        }
        XMLStreamWriter.prototype.document = function(doc) {
            var child, i, j, len, len1, ref, ref1, results;
            ref = doc.children;
            for(i = 0, len = ref.length; i < len; i++){
                child = ref[i];
                child.isLastRootNode = false;
            }
            doc.children[doc.children.length - 1].isLastRootNode = true;
            ref1 = doc.children;
            results = [];
            for(j = 0, len1 = ref1.length; j < len1; j++){
                child = ref1[j];
                if (child instanceof XMLDummy) {
                    continue;
                }
                switch(false){
                    case !(child instanceof XMLDeclaration):
                        results.push(this.declaration(child));
                        break;
                    case !(child instanceof XMLDocType):
                        results.push(this.docType(child));
                        break;
                    case !(child instanceof XMLComment):
                        results.push(this.comment(child));
                        break;
                    case !(child instanceof XMLProcessingInstruction):
                        results.push(this.processingInstruction(child));
                        break;
                    default:
                        results.push(this.element(child));
                }
            }
            return results;
        };
        XMLStreamWriter.prototype.attribute = function(att) {
            return this.stream.write(' ' + att.name + '="' + att.value + '"');
        };
        XMLStreamWriter.prototype.cdata = function(node, level) {
            return this.stream.write(this.space(level) + '<![CDATA[' + node.text + ']]>' + this.endline(node));
        };
        XMLStreamWriter.prototype.comment = function(node, level) {
            return this.stream.write(this.space(level) + '<!-- ' + node.text + ' -->' + this.endline(node));
        };
        XMLStreamWriter.prototype.declaration = function(node, level) {
            this.stream.write(this.space(level));
            this.stream.write('<?xml version="' + node.version + '"');
            if (node.encoding != null) {
                this.stream.write(' encoding="' + node.encoding + '"');
            }
            if (node.standalone != null) {
                this.stream.write(' standalone="' + node.standalone + '"');
            }
            this.stream.write(this.spacebeforeslash + '?>');
            return this.stream.write(this.endline(node));
        };
        XMLStreamWriter.prototype.docType = function(node, level) {
            var child, i, len, ref;
            level || (level = 0);
            this.stream.write(this.space(level));
            this.stream.write('<!DOCTYPE ' + node.root().name);
            if (node.pubID && node.sysID) {
                this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            } else if (node.sysID) {
                this.stream.write(' SYSTEM "' + node.sysID + '"');
            }
            if (node.children.length > 0) {
                this.stream.write(' [');
                this.stream.write(this.endline(node));
                ref = node.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    switch(false){
                        case !(child instanceof XMLDTDAttList):
                            this.dtdAttList(child, level + 1);
                            break;
                        case !(child instanceof XMLDTDElement):
                            this.dtdElement(child, level + 1);
                            break;
                        case !(child instanceof XMLDTDEntity):
                            this.dtdEntity(child, level + 1);
                            break;
                        case !(child instanceof XMLDTDNotation):
                            this.dtdNotation(child, level + 1);
                            break;
                        case !(child instanceof XMLCData):
                            this.cdata(child, level + 1);
                            break;
                        case !(child instanceof XMLComment):
                            this.comment(child, level + 1);
                            break;
                        case !(child instanceof XMLProcessingInstruction):
                            this.processingInstruction(child, level + 1);
                            break;
                        default:
                            throw new Error("Unknown DTD node type: " + child.constructor.name);
                    }
                }
                this.stream.write(']');
            }
            this.stream.write(this.spacebeforeslash + '>');
            return this.stream.write(this.endline(node));
        };
        XMLStreamWriter.prototype.element = function(node, level) {
            var att, child, i, len, name, ref, ref1, space;
            level || (level = 0);
            space = this.space(level);
            this.stream.write(space + '<' + node.name);
            ref = node.attributes;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                this.attribute(att);
            }
            if (node.children.length === 0 || node.children.every(function(e) {
                return e.value === '';
            })) {
                if (this.allowEmpty) {
                    this.stream.write('></' + node.name + '>');
                } else {
                    this.stream.write(this.spacebeforeslash + '/>');
                }
            } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
                this.stream.write('>');
                this.stream.write(node.children[0].value);
                this.stream.write('</' + node.name + '>');
            } else {
                this.stream.write('>' + this.newline);
                ref1 = node.children;
                for(i = 0, len = ref1.length; i < len; i++){
                    child = ref1[i];
                    switch(false){
                        case !(child instanceof XMLCData):
                            this.cdata(child, level + 1);
                            break;
                        case !(child instanceof XMLComment):
                            this.comment(child, level + 1);
                            break;
                        case !(child instanceof XMLElement):
                            this.element(child, level + 1);
                            break;
                        case !(child instanceof XMLRaw):
                            this.raw(child, level + 1);
                            break;
                        case !(child instanceof XMLText):
                            this.text(child, level + 1);
                            break;
                        case !(child instanceof XMLProcessingInstruction):
                            this.processingInstruction(child, level + 1);
                            break;
                        case !(child instanceof XMLDummy):
                            '';
                            break;
                        default:
                            throw new Error("Unknown XML node type: " + child.constructor.name);
                    }
                }
                this.stream.write(space + '</' + node.name + '>');
            }
            return this.stream.write(this.endline(node));
        };
        XMLStreamWriter.prototype.processingInstruction = function(node, level) {
            this.stream.write(this.space(level) + '<?' + node.target);
            if (node.value) {
                this.stream.write(' ' + node.value);
            }
            return this.stream.write(this.spacebeforeslash + '?>' + this.endline(node));
        };
        XMLStreamWriter.prototype.raw = function(node, level) {
            return this.stream.write(this.space(level) + node.value + this.endline(node));
        };
        XMLStreamWriter.prototype.text = function(node, level) {
            return this.stream.write(this.space(level) + node.value + this.endline(node));
        };
        XMLStreamWriter.prototype.dtdAttList = function(node, level) {
            this.stream.write(this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType);
            if (node.defaultValueType !== '#DEFAULT') {
                this.stream.write(' ' + node.defaultValueType);
            }
            if (node.defaultValue) {
                this.stream.write(' "' + node.defaultValue + '"');
            }
            return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
        };
        XMLStreamWriter.prototype.dtdElement = function(node, level) {
            this.stream.write(this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value);
            return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
        };
        XMLStreamWriter.prototype.dtdEntity = function(node, level) {
            this.stream.write(this.space(level) + '<!ENTITY');
            if (node.pe) {
                this.stream.write(' %');
            }
            this.stream.write(' ' + node.name);
            if (node.value) {
                this.stream.write(' "' + node.value + '"');
            } else {
                if (node.pubID && node.sysID) {
                    this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
                } else if (node.sysID) {
                    this.stream.write(' SYSTEM "' + node.sysID + '"');
                }
                if (node.nData) {
                    this.stream.write(' NDATA ' + node.nData);
                }
            }
            return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
        };
        XMLStreamWriter.prototype.dtdNotation = function(node, level) {
            this.stream.write(this.space(level) + '<!NOTATION ' + node.name);
            if (node.pubID && node.sysID) {
                this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            } else if (node.pubID) {
                this.stream.write(' PUBLIC "' + node.pubID + '"');
            } else if (node.sysID) {
                this.stream.write(' SYSTEM "' + node.sysID + '"');
            }
            return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
        };
        XMLStreamWriter.prototype.endline = function(node) {
            if (!node.isLastRootNode) {
                return this.newline;
            } else {
                return '';
            }
        };
        return XMLStreamWriter;
    }(XMLWriterBase);
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/xmlbuilder/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
    ref = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/Utility.js [app-route] (ecmascript)"), assign = ref.assign, isFunction = ref.isFunction;
    XMLDocument = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocument.js [app-route] (ecmascript)");
    XMLDocumentCB = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLDocumentCB.js [app-route] (ecmascript)");
    XMLStringWriter = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStringWriter.js [app-route] (ecmascript)");
    XMLStreamWriter = __turbopack_context__.r("[project]/realestateandlease/node_modules/xmlbuilder/lib/XMLStreamWriter.js [app-route] (ecmascript)");
    module.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
            throw new Error("Root element needs a name.");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
            doc.declaration(options);
            if (options.pubID != null || options.sysID != null) {
                doc.doctype(options);
            }
        }
        return root;
    };
    module.exports.begin = function(options, onData, onEnd) {
        var ref1;
        if (isFunction(options)) {
            ref1 = [
                options,
                onData
            ], onData = ref1[0], onEnd = ref1[1];
            options = {};
        }
        if (onData) {
            return new XMLDocumentCB(options, onData, onEnd);
        } else {
            return new XMLDocument(options);
        }
    };
    module.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
    };
    module.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
    };
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/realestateandlease/node_modules/path-is-absolute/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function posix(path) {
    return path.charAt(0) === '/';
}
function win32(path) {
    // https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var result = splitDeviceRe.exec(path);
    var device = result[1] || '';
    var isUnc = Boolean(device && device.charAt(1) !== ':');
    // UNC paths are always absolute
    return Boolean(result[2] || isUnc);
}
module.exports = ("TURBOPACK compile-time truthy", 1) ? win32 : "TURBOPACK unreachable";
module.exports.posix = posix;
module.exports.win32 = win32;
}),
"[project]/realestateandlease/node_modules/lop/lib/TokenIterator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var TokenIterator = module.exports = function(tokens, startIndex) {
    this._tokens = tokens;
    this._startIndex = startIndex || 0;
};
TokenIterator.prototype.head = function() {
    return this._tokens[this._startIndex];
};
TokenIterator.prototype.tail = function(startIndex) {
    return new TokenIterator(this._tokens, this._startIndex + 1);
};
TokenIterator.prototype.toArray = function() {
    return this._tokens.slice(this._startIndex);
};
TokenIterator.prototype.end = function() {
    return this._tokens[this._tokens.length - 1];
};
// TODO: doesn't need to be a method, can be a separate function,
// which simplifies implementation of the TokenIterator interface
TokenIterator.prototype.to = function(end) {
    var start = this.head().source;
    var endToken = end.head() || end.end();
    return start.to(endToken.source);
};
}),
"[project]/realestateandlease/node_modules/lop/lib/parser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var TokenIterator = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/TokenIterator.js [app-route] (ecmascript)");
exports.Parser = function(options) {
    var parseTokens = function(parser, tokens) {
        return parser(new TokenIterator(tokens));
    };
    return {
        parseTokens: parseTokens
    };
};
}),
"[project]/realestateandlease/node_modules/lop/lib/parsing-results.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    failure: function(errors, remaining) {
        if (errors.length < 1) {
            throw new Error("Failure must have errors");
        }
        return new Result({
            status: "failure",
            remaining: remaining,
            errors: errors
        });
    },
    error: function(errors, remaining) {
        if (errors.length < 1) {
            throw new Error("Failure must have errors");
        }
        return new Result({
            status: "error",
            remaining: remaining,
            errors: errors
        });
    },
    success: function(value, remaining, source) {
        return new Result({
            status: "success",
            value: value,
            source: source,
            remaining: remaining,
            errors: []
        });
    },
    cut: function(remaining) {
        return new Result({
            status: "cut",
            remaining: remaining,
            errors: []
        });
    }
};
var Result = function(options) {
    this._value = options.value;
    this._status = options.status;
    this._hasValue = options.value !== undefined;
    this._remaining = options.remaining;
    this._source = options.source;
    this._errors = options.errors;
};
Result.prototype.map = function(func) {
    if (this._hasValue) {
        return new Result({
            value: func(this._value, this._source),
            status: this._status,
            remaining: this._remaining,
            source: this._source,
            errors: this._errors
        });
    } else {
        return this;
    }
};
Result.prototype.changeRemaining = function(remaining) {
    return new Result({
        value: this._value,
        status: this._status,
        remaining: remaining,
        source: this._source,
        errors: this._errors
    });
};
Result.prototype.isSuccess = function() {
    return this._status === "success" || this._status === "cut";
};
Result.prototype.isFailure = function() {
    return this._status === "failure";
};
Result.prototype.isError = function() {
    return this._status === "error";
};
Result.prototype.isCut = function() {
    return this._status === "cut";
};
Result.prototype.value = function() {
    return this._value;
};
Result.prototype.remaining = function() {
    return this._remaining;
};
Result.prototype.source = function() {
    return this._source;
};
Result.prototype.errors = function() {
    return this._errors;
};
}),
"[project]/realestateandlease/node_modules/lop/lib/errors.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.error = function(options) {
    return new Error(options);
};
var Error = function(options) {
    this.expected = options.expected;
    this.actual = options.actual;
    this._location = options.location;
};
Error.prototype.describe = function() {
    var locationDescription = this._location ? this._location.describe() + ":\n" : "";
    return locationDescription + "Expected " + this.expected + "\nbut got " + this.actual;
};
Error.prototype.lineNumber = function() {
    return this._location.lineNumber();
};
Error.prototype.characterNumber = function() {
    return this._location.characterNumber();
};
}),
"[project]/realestateandlease/node_modules/lop/lib/lazy-iterators.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var fromArray = exports.fromArray = function(array) {
    var index = 0;
    var hasNext = function() {
        return index < array.length;
    };
    return new LazyIterator({
        hasNext: hasNext,
        next: function() {
            if (!hasNext()) {
                throw new Error("No more elements");
            } else {
                return array[index++];
            }
        }
    });
};
var LazyIterator = function(iterator) {
    this._iterator = iterator;
};
LazyIterator.prototype.map = function(func) {
    var iterator = this._iterator;
    return new LazyIterator({
        hasNext: function() {
            return iterator.hasNext();
        },
        next: function() {
            return func(iterator.next());
        }
    });
};
LazyIterator.prototype.filter = function(condition) {
    var iterator = this._iterator;
    var moved = false;
    var hasNext = false;
    var next;
    var moveIfNecessary = function() {
        if (moved) {
            return;
        }
        moved = true;
        hasNext = false;
        while(iterator.hasNext() && !hasNext){
            next = iterator.next();
            hasNext = condition(next);
        }
    };
    return new LazyIterator({
        hasNext: function() {
            moveIfNecessary();
            return hasNext;
        },
        next: function() {
            moveIfNecessary();
            var toReturn = next;
            moved = false;
            return toReturn;
        }
    });
};
LazyIterator.prototype.first = function() {
    var iterator = this._iterator;
    if (this._iterator.hasNext()) {
        return iterator.next();
    } else {
        return null;
    }
};
LazyIterator.prototype.toArray = function() {
    var result = [];
    while(this._iterator.hasNext()){
        result.push(this._iterator.next());
    }
    return result;
};
}),
"[project]/realestateandlease/node_modules/lop/lib/rules.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _ = __turbopack_context__.r("[project]/realestateandlease/node_modules/underscore/modules/index-all.js [app-route] (ecmascript)");
var options = __turbopack_context__.r("[project]/realestateandlease/node_modules/option/index.js [app-route] (ecmascript)");
var results = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/parsing-results.js [app-route] (ecmascript)");
var errors = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/errors.js [app-route] (ecmascript)");
var lazyIterators = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/lazy-iterators.js [app-route] (ecmascript)");
exports.token = function(tokenType, value) {
    var matchValue = value !== undefined;
    return function(input) {
        var token = input.head();
        if (token && token.name === tokenType && (!matchValue || token.value === value)) {
            return results.success(token.value, input.tail(), token.source);
        } else {
            var expected = describeToken({
                name: tokenType,
                value: value
            });
            return describeTokenMismatch(input, expected);
        }
    };
};
exports.tokenOfType = function(tokenType) {
    return exports.token(tokenType);
};
exports.firstOf = function(name, parsers) {
    if (!_.isArray(parsers)) {
        parsers = Array.prototype.slice.call(arguments, 1);
    }
    return function(input) {
        return lazyIterators.fromArray(parsers).map(function(parser) {
            return parser(input);
        }).filter(function(result) {
            return result.isSuccess() || result.isError();
        }).first() || describeTokenMismatch(input, name);
    };
};
exports.then = function(parser, func) {
    return function(input) {
        var result = parser(input);
        if (!result.map) {
            console.log(result);
        }
        return result.map(func);
    };
};
exports.sequence = function() {
    var parsers = Array.prototype.slice.call(arguments, 0);
    var rule = function(input) {
        var result = _.foldl(parsers, function(memo, parser) {
            var result = memo.result;
            var hasCut = memo.hasCut;
            if (!result.isSuccess()) {
                return {
                    result: result,
                    hasCut: hasCut
                };
            }
            var subResult = parser(result.remaining());
            if (subResult.isCut()) {
                return {
                    result: result,
                    hasCut: true
                };
            } else if (subResult.isSuccess()) {
                var values;
                if (parser.isCaptured) {
                    values = result.value().withValue(parser, subResult.value());
                } else {
                    values = result.value();
                }
                var remaining = subResult.remaining();
                var source = input.to(remaining);
                return {
                    result: results.success(values, remaining, source),
                    hasCut: hasCut
                };
            } else if (hasCut) {
                return {
                    result: results.error(subResult.errors(), subResult.remaining()),
                    hasCut: hasCut
                };
            } else {
                return {
                    result: subResult,
                    hasCut: hasCut
                };
            }
        }, {
            result: results.success(new SequenceValues(), input),
            hasCut: false
        }).result;
        var source = input.to(result.remaining());
        return result.map(function(values) {
            return values.withValue(exports.sequence.source, source);
        });
    };
    rule.head = function() {
        var firstCapture = _.find(parsers, isCapturedRule);
        return exports.then(rule, exports.sequence.extract(firstCapture));
    };
    rule.map = function(func) {
        return exports.then(rule, function(result) {
            return func.apply(this, result.toArray());
        });
    };
    function isCapturedRule(subRule) {
        return subRule.isCaptured;
    }
    return rule;
};
var SequenceValues = function(values, valuesArray) {
    this._values = values || {};
    this._valuesArray = valuesArray || [];
};
SequenceValues.prototype.withValue = function(rule, value) {
    if (rule.captureName && rule.captureName in this._values) {
        throw new Error("Cannot add second value for capture \"" + rule.captureName + "\"");
    } else {
        var newValues = _.clone(this._values);
        newValues[rule.captureName] = value;
        var newValuesArray = this._valuesArray.concat([
            value
        ]);
        return new SequenceValues(newValues, newValuesArray);
    }
};
SequenceValues.prototype.get = function(rule) {
    if (rule.captureName in this._values) {
        return this._values[rule.captureName];
    } else {
        throw new Error("No value for capture \"" + rule.captureName + "\"");
    }
};
SequenceValues.prototype.toArray = function() {
    return this._valuesArray;
};
exports.sequence.capture = function(rule, name) {
    var captureRule = function() {
        return rule.apply(this, arguments);
    };
    captureRule.captureName = name;
    captureRule.isCaptured = true;
    return captureRule;
};
exports.sequence.extract = function(rule) {
    return function(result) {
        return result.get(rule);
    };
};
exports.sequence.applyValues = function(func) {
    // TODO: check captureName doesn't conflict with source or other captures
    var rules = Array.prototype.slice.call(arguments, 1);
    return function(result) {
        var values = rules.map(function(rule) {
            return result.get(rule);
        });
        return func.apply(this, values);
    };
};
exports.sequence.source = {
    captureName: "☃source☃"
};
exports.sequence.cut = function() {
    return function(input) {
        return results.cut(input);
    };
};
exports.optional = function(rule) {
    return function(input) {
        var result = rule(input);
        if (result.isSuccess()) {
            return result.map(options.some);
        } else if (result.isFailure()) {
            return results.success(options.none, input);
        } else {
            return result;
        }
    };
};
exports.zeroOrMoreWithSeparator = function(rule, separator) {
    return repeatedWithSeparator(rule, separator, false);
};
exports.oneOrMoreWithSeparator = function(rule, separator) {
    return repeatedWithSeparator(rule, separator, true);
};
var zeroOrMore = exports.zeroOrMore = function(rule) {
    return function(input) {
        var values = [];
        var result;
        while((result = rule(input)) && result.isSuccess()){
            input = result.remaining();
            values.push(result.value());
        }
        if (result.isError()) {
            return result;
        } else {
            return results.success(values, input);
        }
    };
};
exports.oneOrMore = function(rule) {
    return exports.oneOrMoreWithSeparator(rule, noOpRule);
};
function noOpRule(input) {
    return results.success(null, input);
}
var repeatedWithSeparator = function(rule, separator, isOneOrMore) {
    return function(input) {
        var result = rule(input);
        if (result.isSuccess()) {
            var mainRule = exports.sequence.capture(rule, "main");
            var remainingRule = zeroOrMore(exports.then(exports.sequence(separator, mainRule), exports.sequence.extract(mainRule)));
            var remainingResult = remainingRule(result.remaining());
            return results.success([
                result.value()
            ].concat(remainingResult.value()), remainingResult.remaining());
        } else if (isOneOrMore || result.isError()) {
            return result;
        } else {
            return results.success([], input);
        }
    };
};
exports.leftAssociative = function(leftRule, rightRule, func) {
    var rights;
    if (func) {
        rights = [
            {
                func: func,
                rule: rightRule
            }
        ];
    } else {
        rights = rightRule;
    }
    rights = rights.map(function(right) {
        return exports.then(right.rule, function(rightValue) {
            return function(leftValue, source) {
                return right.func(leftValue, rightValue, source);
            };
        });
    });
    var repeatedRule = exports.firstOf.apply(null, [
        "rules"
    ].concat(rights));
    return function(input) {
        var start = input;
        var leftResult = leftRule(input);
        if (!leftResult.isSuccess()) {
            return leftResult;
        }
        var repeatedResult = repeatedRule(leftResult.remaining());
        while(repeatedResult.isSuccess()){
            var remaining = repeatedResult.remaining();
            var source = start.to(repeatedResult.remaining());
            var right = repeatedResult.value();
            leftResult = results.success(right(leftResult.value(), source), remaining, source);
            repeatedResult = repeatedRule(leftResult.remaining());
        }
        if (repeatedResult.isError()) {
            return repeatedResult;
        }
        return leftResult;
    };
};
exports.leftAssociative.firstOf = function() {
    return Array.prototype.slice.call(arguments, 0);
};
exports.nonConsuming = function(rule) {
    return function(input) {
        return rule(input).changeRemaining(input);
    };
};
var describeToken = function(token) {
    if (token.value) {
        return token.name + " \"" + token.value + "\"";
    } else {
        return token.name;
    }
};
function describeTokenMismatch(input, expected) {
    var error;
    var token = input.head();
    if (token) {
        error = errors.error({
            expected: expected,
            actual: describeToken(token),
            location: token.source
        });
    } else {
        error = errors.error({
            expected: expected,
            actual: "end of tokens"
        });
    }
    return results.failure([
        error
    ], input);
}
}),
"[project]/realestateandlease/node_modules/lop/lib/StringSource.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var StringSource = module.exports = function(string, description) {
    var self = {
        asString: function() {
            return string;
        },
        range: function(startIndex, endIndex) {
            return new StringSourceRange(string, description, startIndex, endIndex);
        }
    };
    return self;
};
var StringSourceRange = function(string, description, startIndex, endIndex) {
    this._string = string;
    this._description = description;
    this._startIndex = startIndex;
    this._endIndex = endIndex;
};
StringSourceRange.prototype.to = function(otherRange) {
    // TODO: Assert that tokens are the same across both iterators
    return new StringSourceRange(this._string, this._description, this._startIndex, otherRange._endIndex);
};
StringSourceRange.prototype.describe = function() {
    var position = this._position();
    var description = this._description ? this._description + "\n" : "";
    return description + "Line number: " + position.lineNumber + "\nCharacter number: " + position.characterNumber;
};
StringSourceRange.prototype.lineNumber = function() {
    return this._position().lineNumber;
};
StringSourceRange.prototype.characterNumber = function() {
    return this._position().characterNumber;
};
StringSourceRange.prototype._position = function() {
    var self = this;
    var index = 0;
    var nextNewLine = function() {
        return self._string.indexOf("\n", index);
    };
    var lineNumber = 1;
    while(nextNewLine() !== -1 && nextNewLine() < this._startIndex){
        index = nextNewLine() + 1;
        lineNumber += 1;
    }
    var characterNumber = this._startIndex - index + 1;
    return {
        lineNumber: lineNumber,
        characterNumber: characterNumber
    };
};
}),
"[project]/realestateandlease/node_modules/lop/lib/Token.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function(name, value, source) {
    this.name = name;
    this.value = value;
    if (source) {
        this.source = source;
    }
};
}),
"[project]/realestateandlease/node_modules/lop/lib/bottom-up.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var rules = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/rules.js [app-route] (ecmascript)");
var results = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/parsing-results.js [app-route] (ecmascript)");
exports.parser = function(name, prefixRules, infixRuleBuilders) {
    var self = {
        rule: rule,
        leftAssociative: leftAssociative,
        rightAssociative: rightAssociative
    };
    var infixRules = new InfixRules(infixRuleBuilders.map(createInfixRule));
    var prefixRule = rules.firstOf(name, prefixRules);
    function createInfixRule(infixRuleBuilder) {
        return {
            name: infixRuleBuilder.name,
            rule: lazyRule(infixRuleBuilder.ruleBuilder.bind(null, self))
        };
    }
    function rule() {
        return createRule(infixRules);
    }
    function leftAssociative(name) {
        return createRule(infixRules.untilExclusive(name));
    }
    function rightAssociative(name) {
        return createRule(infixRules.untilInclusive(name));
    }
    function createRule(infixRules) {
        return apply.bind(null, infixRules);
    }
    function apply(infixRules, tokens) {
        var leftResult = prefixRule(tokens);
        if (leftResult.isSuccess()) {
            return infixRules.apply(leftResult);
        } else {
            return leftResult;
        }
    }
    return self;
};
function InfixRules(infixRules) {
    function untilExclusive(name) {
        return new InfixRules(infixRules.slice(0, ruleNames().indexOf(name)));
    }
    function untilInclusive(name) {
        return new InfixRules(infixRules.slice(0, ruleNames().indexOf(name) + 1));
    }
    function ruleNames() {
        return infixRules.map(function(rule) {
            return rule.name;
        });
    }
    function apply(leftResult) {
        var currentResult;
        var source;
        while(true){
            currentResult = applyToTokens(leftResult.remaining());
            if (currentResult.isSuccess()) {
                source = leftResult.source().to(currentResult.source());
                leftResult = results.success(currentResult.value()(leftResult.value(), source), currentResult.remaining(), source);
            } else if (currentResult.isFailure()) {
                return leftResult;
            } else {
                return currentResult;
            }
        }
    }
    function applyToTokens(tokens) {
        return rules.firstOf("infix", infixRules.map(function(infix) {
            return infix.rule;
        }))(tokens);
    }
    return {
        apply: apply,
        untilExclusive: untilExclusive,
        untilInclusive: untilInclusive
    };
}
exports.infix = function(name, ruleBuilder) {
    function map(func) {
        return exports.infix(name, function(parser) {
            var rule = ruleBuilder(parser);
            return function(tokens) {
                var result = rule(tokens);
                return result.map(function(right) {
                    return function(left, source) {
                        return func(left, right, source);
                    };
                });
            };
        });
    }
    return {
        name: name,
        ruleBuilder: ruleBuilder,
        map: map
    };
};
// TODO: move into a sensible place and remove duplication
var lazyRule = function(ruleBuilder) {
    var rule;
    return function(input) {
        if (!rule) {
            rule = ruleBuilder();
        }
        return rule(input);
    };
};
}),
"[project]/realestateandlease/node_modules/lop/lib/regex-tokeniser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Token = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/Token.js [app-route] (ecmascript)");
var StringSource = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/StringSource.js [app-route] (ecmascript)");
exports.RegexTokeniser = RegexTokeniser;
function RegexTokeniser(rules) {
    rules = rules.map(function(rule) {
        return {
            name: rule.name,
            regex: new RegExp(rule.regex.source, "g")
        };
    });
    function tokenise(input, description) {
        var source = new StringSource(input, description);
        var index = 0;
        var tokens = [];
        while(index < input.length){
            var result = readNextToken(input, index, source);
            index = result.endIndex;
            tokens.push(result.token);
        }
        tokens.push(endToken(input, source));
        return tokens;
    }
    function readNextToken(string, startIndex, source) {
        for(var i = 0; i < rules.length; i++){
            var regex = rules[i].regex;
            regex.lastIndex = startIndex;
            var result = regex.exec(string);
            if (result) {
                var endIndex = startIndex + result[0].length;
                if (result.index === startIndex && endIndex > startIndex) {
                    var value = result[1];
                    var token = new Token(rules[i].name, value, source.range(startIndex, endIndex));
                    return {
                        token: token,
                        endIndex: endIndex
                    };
                }
            }
        }
        var endIndex = startIndex + 1;
        var token = new Token("unrecognisedCharacter", string.substring(startIndex, endIndex), source.range(startIndex, endIndex));
        return {
            token: token,
            endIndex: endIndex
        };
    }
    function endToken(input, source) {
        return new Token("end", null, source.range(input.length, input.length));
    }
    return {
        tokenise: tokenise
    };
}
}),
"[project]/realestateandlease/node_modules/lop/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.Parser = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/parser.js [app-route] (ecmascript)").Parser;
exports.rules = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/rules.js [app-route] (ecmascript)");
exports.errors = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/errors.js [app-route] (ecmascript)");
exports.results = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/parsing-results.js [app-route] (ecmascript)");
exports.StringSource = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/StringSource.js [app-route] (ecmascript)");
exports.Token = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/Token.js [app-route] (ecmascript)");
exports.bottomUp = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/bottom-up.js [app-route] (ecmascript)");
exports.RegexTokeniser = __turbopack_context__.r("[project]/realestateandlease/node_modules/lop/lib/regex-tokeniser.js [app-route] (ecmascript)").RegexTokeniser;
exports.rule = function(ruleBuilder) {
    var rule;
    return function(input) {
        if (!rule) {
            rule = ruleBuilder();
        }
        return rule(input);
    };
};
}),
"[project]/realestateandlease/node_modules/option/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.none = Object.create({
    value: function() {
        throw new Error('Called value on none');
    },
    isNone: function() {
        return true;
    },
    isSome: function() {
        return false;
    },
    map: function() {
        return exports.none;
    },
    flatMap: function() {
        return exports.none;
    },
    filter: function() {
        return exports.none;
    },
    toArray: function() {
        return [];
    },
    orElse: callOrReturn,
    valueOrElse: callOrReturn
});
function callOrReturn(value) {
    if (typeof value == "function") {
        return value();
    } else {
        return value;
    }
}
exports.some = function(value) {
    return new Some(value);
};
var Some = function(value) {
    this._value = value;
};
Some.prototype.value = function() {
    return this._value;
};
Some.prototype.isNone = function() {
    return false;
};
Some.prototype.isSome = function() {
    return true;
};
Some.prototype.map = function(func) {
    return new Some(func(this._value));
};
Some.prototype.flatMap = function(func) {
    return func(this._value);
};
Some.prototype.filter = function(predicate) {
    return predicate(this._value) ? this : exports.none;
};
Some.prototype.toArray = function() {
    return [
        this._value
    ];
};
Some.prototype.orElse = function(value) {
    return this;
};
Some.prototype.valueOrElse = function(value) {
    return this._value;
};
exports.isOption = function(value) {
    return value === exports.none || value instanceof Some;
};
exports.fromNullable = function(value) {
    if (value == null) {
        return exports.none;
    }
    return new Some(value);
};
}),
"[project]/realestateandlease/node_modules/dompurify/dist/purify.cjs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */ const { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
let { freeze, seal, create } = Object; // eslint-disable-line import/no-mutable-exports
let { apply, construct } = typeof Reflect !== 'undefined' && Reflect;
if (!freeze) {
    freeze = function freeze(x) {
        return x;
    };
}
if (!seal) {
    seal = function seal(x) {
        return x;
    };
}
if (!apply) {
    apply = function apply(func, thisArg) {
        for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            args[_key - 2] = arguments[_key];
        }
        return func.apply(thisArg, args);
    };
}
if (!construct) {
    construct = function construct(Func) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
            args[_key2 - 1] = arguments[_key2];
        }
        return new Func(...args);
    };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
/**
 * Creates a new function that calls the given function with a specified thisArg and arguments.
 *
 * @param func - The function to be wrapped and called.
 * @returns A new function that calls the given function with a specified thisArg and arguments.
 */ function unapply(func) {
    return function(thisArg) {
        if (thisArg instanceof RegExp) {
            thisArg.lastIndex = 0;
        }
        for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++){
            args[_key3 - 1] = arguments[_key3];
        }
        return apply(func, thisArg, args);
    };
}
/**
 * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
 *
 * @param func - The constructor function to be wrapped and called.
 * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
 */ function unconstruct(Func) {
    return function() {
        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
            args[_key4] = arguments[_key4];
        }
        return construct(Func, args);
    };
}
/**
 * Add properties to a lookup table
 *
 * @param set - The set to which elements will be added.
 * @param array - The array containing elements to be added to the set.
 * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
 * @returns The modified set with added elements.
 */ function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
        // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
    }
    let l = array.length;
    while(l--){
        let element = array[l];
        if (typeof element === 'string') {
            const lcElement = transformCaseFunc(element);
            if (lcElement !== element) {
                // Config presets (e.g. tags.js, attrs.js) are immutable.
                if (!isFrozen(array)) {
                    array[l] = lcElement;
                }
                element = lcElement;
            }
        }
        set[element] = true;
    }
    return set;
}
/**
 * Clean up an array to harden against CSPP
 *
 * @param array - The array to be cleaned.
 * @returns The cleaned version of the array
 */ function cleanArray(array) {
    for(let index = 0; index < array.length; index++){
        const isPropertyExist = objectHasOwnProperty(array, index);
        if (!isPropertyExist) {
            array[index] = null;
        }
    }
    return array;
}
/**
 * Shallow clone an object
 *
 * @param object - The object to be cloned.
 * @returns A new object that copies the original.
 */ function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)){
        const isPropertyExist = objectHasOwnProperty(object, property);
        if (isPropertyExist) {
            if (Array.isArray(value)) {
                newObject[property] = cleanArray(value);
            } else if (value && typeof value === 'object' && value.constructor === Object) {
                newObject[property] = clone(value);
            } else {
                newObject[property] = value;
            }
        }
    }
    return newObject;
}
/**
 * This method automatically checks if the prop is function or getter and behaves accordingly.
 *
 * @param object - The object to look up the getter function in its prototype chain.
 * @param prop - The property name for which to find the getter function.
 * @returns The getter function found in the prototype chain or a fallback function.
 */ function lookupGetter(object, prop) {
    while(object !== null){
        const desc = getOwnPropertyDescriptor(object, prop);
        if (desc) {
            if (desc.get) {
                return unapply(desc.get);
            }
            if (typeof desc.value === 'function') {
                return unapply(desc.value);
            }
        }
        object = getPrototypeOf(object);
    }
    function fallbackValue() {
        return null;
    }
    return fallbackValue;
}
const html$1 = freeze([
    'a',
    'abbr',
    'acronym',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'content',
    'data',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meter',
    'nav',
    'nobr',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'search',
    'section',
    'select',
    'shadow',
    'slot',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
]);
const svg$1 = freeze([
    'svg',
    'a',
    'altglyph',
    'altglyphdef',
    'altglyphitem',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'enterkeyhint',
    'exportparts',
    'filter',
    'font',
    'g',
    'glyph',
    'glyphref',
    'hkern',
    'image',
    'inputmode',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'part',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textpath',
    'title',
    'tref',
    'tspan',
    'view',
    'vkern'
]);
const svgFilters = freeze([
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence'
]);
// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
const svgDisallowed = freeze([
    'animate',
    'color-profile',
    'cursor',
    'discard',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignobject',
    'hatch',
    'hatchpath',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'missing-glyph',
    'script',
    'set',
    'solidcolor',
    'unknown',
    'use'
]);
const mathMl$1 = freeze([
    'math',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mspace',
    'msqrt',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'mprescripts'
]);
// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
const mathMlDisallowed = freeze([
    'maction',
    'maligngroup',
    'malignmark',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'mstack',
    'msline',
    'msrow',
    'semantics',
    'annotation',
    'annotation-xml',
    'mprescripts',
    'none'
]);
const text = freeze([
    '#text'
]);
const html = freeze([
    'accept',
    'action',
    'align',
    'alt',
    'autocapitalize',
    'autocomplete',
    'autopictureinpicture',
    'autoplay',
    'background',
    'bgcolor',
    'border',
    'capture',
    'cellpadding',
    'cellspacing',
    'checked',
    'cite',
    'class',
    'clear',
    'color',
    'cols',
    'colspan',
    'controls',
    'controlslist',
    'coords',
    'crossorigin',
    'datetime',
    'decoding',
    'default',
    'dir',
    'disabled',
    'disablepictureinpicture',
    'disableremoteplayback',
    'download',
    'draggable',
    'enctype',
    'enterkeyhint',
    'exportparts',
    'face',
    'for',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'id',
    'inert',
    'inputmode',
    'integrity',
    'ismap',
    'kind',
    'label',
    'lang',
    'list',
    'loading',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'minlength',
    'multiple',
    'muted',
    'name',
    'nonce',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'optimum',
    'part',
    'pattern',
    'placeholder',
    'playsinline',
    'popover',
    'popovertarget',
    'popovertargetaction',
    'poster',
    'preload',
    'pubdate',
    'radiogroup',
    'readonly',
    'rel',
    'required',
    'rev',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'spellcheck',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'slot',
    'span',
    'srclang',
    'start',
    'src',
    'srcset',
    'step',
    'style',
    'summary',
    'tabindex',
    'title',
    'translate',
    'type',
    'usemap',
    'valign',
    'value',
    'width',
    'wrap',
    'xmlns',
    'slot'
]);
const svg = freeze([
    'accent-height',
    'accumulate',
    'additive',
    'alignment-baseline',
    'amplitude',
    'ascent',
    'attributename',
    'attributetype',
    'azimuth',
    'basefrequency',
    'baseline-shift',
    'begin',
    'bias',
    'by',
    'class',
    'clip',
    'clippathunits',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'diffuseconstant',
    'direction',
    'display',
    'divisor',
    'dur',
    'edgemode',
    'elevation',
    'end',
    'exponent',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'filterunits',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyph-name',
    'glyphref',
    'gradientunits',
    'gradienttransform',
    'height',
    'href',
    'id',
    'image-rendering',
    'in',
    'in2',
    'intercept',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kerning',
    'keypoints',
    'keysplines',
    'keytimes',
    'lang',
    'lengthadjust',
    'letter-spacing',
    'kernelmatrix',
    'kernelunitlength',
    'lighting-color',
    'local',
    'marker-end',
    'marker-mid',
    'marker-start',
    'markerheight',
    'markerunits',
    'markerwidth',
    'maskcontentunits',
    'maskunits',
    'max',
    'mask',
    'mask-type',
    'media',
    'method',
    'mode',
    'min',
    'name',
    'numoctaves',
    'offset',
    'operator',
    'opacity',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'paint-order',
    'path',
    'pathlength',
    'patterncontentunits',
    'patterntransform',
    'patternunits',
    'points',
    'preservealpha',
    'preserveaspectratio',
    'primitiveunits',
    'r',
    'rx',
    'ry',
    'radius',
    'refx',
    'refy',
    'repeatcount',
    'repeatdur',
    'restart',
    'result',
    'rotate',
    'scale',
    'seed',
    'shape-rendering',
    'slope',
    'specularconstant',
    'specularexponent',
    'spreadmethod',
    'startoffset',
    'stddeviation',
    'stitchtiles',
    'stop-color',
    'stop-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke',
    'stroke-width',
    'style',
    'surfacescale',
    'systemlanguage',
    'tabindex',
    'tablevalues',
    'targetx',
    'targety',
    'transform',
    'transform-origin',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'textlength',
    'type',
    'u1',
    'u2',
    'unicode',
    'values',
    'viewbox',
    'visibility',
    'version',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'width',
    'word-spacing',
    'wrap',
    'writing-mode',
    'xchannelselector',
    'ychannelselector',
    'x',
    'x1',
    'x2',
    'xmlns',
    'y',
    'y1',
    'y2',
    'z',
    'zoomandpan'
]);
const mathMl = freeze([
    'accent',
    'accentunder',
    'align',
    'bevelled',
    'close',
    'columnsalign',
    'columnlines',
    'columnspan',
    'denomalign',
    'depth',
    'dir',
    'display',
    'displaystyle',
    'encoding',
    'fence',
    'frame',
    'height',
    'href',
    'id',
    'largeop',
    'length',
    'linethickness',
    'lspace',
    'lquote',
    'mathbackground',
    'mathcolor',
    'mathsize',
    'mathvariant',
    'maxsize',
    'minsize',
    'movablelimits',
    'notation',
    'numalign',
    'open',
    'rowalign',
    'rowlines',
    'rowspacing',
    'rowspan',
    'rspace',
    'rquote',
    'scriptlevel',
    'scriptminsize',
    'scriptsizemultiplier',
    'selection',
    'separator',
    'separators',
    'stretchy',
    'subscriptshift',
    'supscriptshift',
    'symmetric',
    'voffset',
    'width',
    'xmlns'
]);
const xml = freeze([
    'xlink:href',
    'xml:id',
    'xlink:title',
    'xml:space',
    'xmlns:xlink'
]);
// eslint-disable-next-line unicorn/better-regex
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ARIA_ATTR: ARIA_ATTR,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT,
    DATA_ATTR: DATA_ATTR,
    DOCTYPE_NAME: DOCTYPE_NAME,
    ERB_EXPR: ERB_EXPR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR
});
/* eslint-disable @typescript-eslint/indent */ // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
};
const getGlobal = function getGlobal() {
    return ("TURBOPACK compile-time truthy", 1) ? null : "TURBOPACK unreachable";
};
/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param trustedTypes The policy factory.
 * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
 * @return The policy created (or null, if Trusted Types
 * are not supported or creating the policy failed).
 */ const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
        return null;
    }
    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
        suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
        return trustedTypes.createPolicy(policyName, {
            createHTML (html) {
                return html;
            },
            createScriptURL (scriptUrl) {
                return scriptUrl;
            }
        });
    } catch (_) {
        // Policy creation failed (most likely another DOMPurify script has
        // already run). Skip creating the policy, as this will only cause errors
        // if TT are enforced.
        console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
        return null;
    }
};
const _createHooksMap = function _createHooksMap() {
    return {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
    };
};
function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = (root)=>createDOMPurify(root);
    DOMPurify.version = '3.3.1';
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
        // Not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }
    let { document } = window;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        const template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
    const { importNode } = originalDocument;
    let hooks = _createHooksMap();
    /**
   * Expose whether this browser supports running the full DOMPurify.
   */ DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
    let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
    /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */ /* allowed element names */ let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [
        ...html$1,
        ...svg$1,
        ...svgFilters,
        ...mathMl$1,
        ...text
    ]);
    /* Allowed attribute names */ let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [
        ...html,
        ...svg,
        ...mathMl,
        ...xml
    ]);
    /*
   * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
   */ let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
        tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
        }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ let FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ let FORBID_ATTR = null;
    /* Config object to store ADD_TAGS/ADD_ATTR functions (when used as functions) */ const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
        tagCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        attributeCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        }
    }));
    /* Decide if ARIA attributes are okay */ let ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */ let ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */ let ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
   * Usually removed due to a mXSS issue in jQuery 3.0 */ let ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */ let SAFE_FOR_TEMPLATES = false;
    /* Output should be safe even for XML used within HTML and alike.
   * This means, DOMPurify removes comments when containing risky content.
   */ let SAFE_FOR_XML = true;
    /* Decide if document with <html>... should be returned */ let WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */ let SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */ let FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */ let RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */ let RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */ let RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
   * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
   */ let SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
   * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
   *
   * HTML/DOM spec rules that enable DOM Clobbering:
   *   - Named Access on Window (§7.3.3)
   *   - DOM Tree Accessors (§3.1.5)
   *   - Form Element Parent-Child Relations (§4.10.3)
   *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
   *   - HTMLCollection (§4.2.10.2)
   *
   * Namespace isolation is implemented by prefixing `id` and `name` attributes
   * with a constant string, i.e., `user-content-`
   */ let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */ let KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */ let IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */ let USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */ let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, [
        'annotation-xml',
        'audio',
        'colgroup',
        'desc',
        'foreignobject',
        'head',
        'iframe',
        'math',
        'mi',
        'mn',
        'mo',
        'ms',
        'mtext',
        'noembed',
        'noframes',
        'noscript',
        'plaintext',
        'script',
        'style',
        'svg',
        'template',
        'thead',
        'title',
        'video',
        'xmp'
    ]);
    /* Tags that are safe for data: URIs */ let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, [
        'audio',
        'video',
        'img',
        'source',
        'image',
        'track'
    ]);
    /* Attributes safe for values like "javascript:" */ let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
        'alt',
        'class',
        'for',
        'id',
        'label',
        'name',
        'pattern',
        'placeholder',
        'role',
        'summary',
        'title',
        'value',
        'style',
        'xmlns'
    ]);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */ let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */ let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
        MATHML_NAMESPACE,
        SVG_NAMESPACE,
        HTML_NAMESPACE
    ], stringToString);
    let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
        'mi',
        'mo',
        'mn',
        'ms',
        'mtext'
    ]);
    let HTML_INTEGRATION_POINTS = addToSet({}, [
        'annotation-xml'
    ]);
    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
        'title',
        'style',
        'font',
        'a',
        'script'
    ]);
    /* Parsing of strict XHTML documents */ let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = [
        'application/xhtml+xml',
        'text/html'
    ];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;
    /* Keep a reference to config to pass to hooks */ let CONFIG = null;
    /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
        return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
   * _parseConfig
   *
   * @param cfg optional config literal
   */ // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
        let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (CONFIG && CONFIG === cfg) {
            return;
        }
        /* Shield configuration object from tampering */ if (!cfg || typeof cfg !== 'object') {
            cfg = {};
        }
        /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
        PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
        SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
        // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
        transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
        /* Set configuration parameters */ ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
        ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
        URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
        FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
        FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
        FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
        USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
        SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
        RETURN_DOM = cfg.RETURN_DOM || false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
        FORCE_BODY = cfg.FORCE_BODY || false; // Default false
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
        SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
        IN_PLACE = cfg.IN_PLACE || false; // Default false
        IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
        NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
        MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
        HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
        CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
            CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }
        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }
        /* Parse profile info */ if (USE_PROFILES) {
            ALLOWED_TAGS = addToSet({}, text);
            ALLOWED_ATTR = [];
            if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html$1);
                addToSet(ALLOWED_ATTR, html);
            }
            if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg$1);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl$1);
                addToSet(ALLOWED_ATTR, mathMl);
                addToSet(ALLOWED_ATTR, xml);
            }
        }
        /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
            if (typeof cfg.ADD_TAGS === 'function') {
                EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
            } else {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                    ALLOWED_TAGS = clone(ALLOWED_TAGS);
                }
                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
        }
        if (cfg.ADD_ATTR) {
            if (typeof cfg.ADD_ATTR === 'function') {
                EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
            } else {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                    ALLOWED_ATTR = clone(ALLOWED_ATTR);
                }
                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
        }
        if (cfg.FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
        }
        if (cfg.ADD_FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
        }
        /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) {
            ALLOWED_TAGS['#text'] = true;
        }
        /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) {
            addToSet(ALLOWED_TAGS, [
                'html',
                'head',
                'body'
            ]);
        }
        /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
            addToSet(ALLOWED_TAGS, [
                'tbody'
            ]);
            delete FORBID_TAGS.tbody;
        }
        if (cfg.TRUSTED_TYPES_POLICY) {
            if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
            }
            if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
            }
            // Overwrite existing TrustedTypes policy.
            trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
            // Sign local variables required by `sanitize`.
            emptyHTML = trustedTypesPolicy.createHTML('');
        } else {
            // Uninitialized policy, attempt to initialize the internal dompurify policy.
            if (trustedTypesPolicy === undefined) {
                trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
            }
            // If creating the internal policy succeeded sign internal variables.
            if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
                emptyHTML = trustedTypesPolicy.createHTML('');
            }
        }
        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (freeze) {
            freeze(cfg);
        }
        CONFIG = cfg;
    };
    /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */ const ALL_SVG_TAGS = addToSet({}, [
        ...svg$1,
        ...svgFilters,
        ...svgDisallowed
    ]);
    const ALL_MATHML_TAGS = addToSet({}, [
        ...mathMl$1,
        ...mathMlDisallowed
    ]);
    /**
   * @param element a DOM element whose namespace is being checked
   * @returns Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */ const _checkValidNamespace = function _checkValidNamespace(element) {
        let parent = getParentNode(element);
        // In JSDOM, if we're inside shadow DOM, then parentNode
        // can be null. We just simulate parent in this case.
        if (!parent || !parent.tagName) {
            parent = {
                namespaceURI: NAMESPACE,
                tagName: 'template'
            };
        }
        const tagName = stringToLowerCase(element.tagName);
        const parentTagName = stringToLowerCase(parent.tagName);
        if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
            return false;
        }
        if (element.namespaceURI === SVG_NAMESPACE) {
            // The only way to switch from HTML namespace to SVG
            // is via <svg>. If it happens via any other tag, then
            // it should be killed.
            if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === 'svg';
            }
            // The only way to switch from MathML to SVG is via`
            // svg if parent is either <annotation-xml> or MathML
            // text integration points.
            if (parent.namespaceURI === MATHML_NAMESPACE) {
                return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
            }
            // We only allow elements that are defined in SVG
            // spec. All others are disallowed in SVG namespace.
            return Boolean(ALL_SVG_TAGS[tagName]);
        }
        if (element.namespaceURI === MATHML_NAMESPACE) {
            // The only way to switch from HTML namespace to MathML
            // is via <math>. If it happens via any other tag, then
            // it should be killed.
            if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === 'math';
            }
            // The only way to switch from SVG to MathML is via
            // <math> and HTML integration points
            if (parent.namespaceURI === SVG_NAMESPACE) {
                return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
            }
            // We only allow elements that are defined in MathML
            // spec. All others are disallowed in MathML namespace.
            return Boolean(ALL_MATHML_TAGS[tagName]);
        }
        if (element.namespaceURI === HTML_NAMESPACE) {
            // The only way to switch from SVG to HTML is via
            // HTML integration points, and from MathML to HTML
            // is via MathML text integration points
            if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                return false;
            }
            if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                return false;
            }
            // We disallow tags that are specific for MathML
            // or SVG and should never appear in HTML namespace
            return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
        }
        // For XHTML and XML documents that support custom namespaces
        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
            return true;
        }
        // The code should never reach this place (this means
        // that the element somehow got namespace that is not
        // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
        // Return false just in case.
        return false;
    };
    /**
   * _forceRemove
   *
   * @param node a DOM node
   */ const _forceRemove = function _forceRemove(node) {
        arrayPush(DOMPurify.removed, {
            element: node
        });
        try {
            // eslint-disable-next-line unicorn/prefer-dom-node-remove
            getParentNode(node).removeChild(node);
        } catch (_) {
            remove(node);
        }
    };
    /**
   * _removeAttribute
   *
   * @param name an Attribute name
   * @param element a DOM node
   */ const _removeAttribute = function _removeAttribute(name, element) {
        try {
            arrayPush(DOMPurify.removed, {
                attribute: element.getAttributeNode(name),
                from: element
            });
        } catch (_) {
            arrayPush(DOMPurify.removed, {
                attribute: null,
                from: element
            });
        }
        element.removeAttribute(name);
        // We void attribute values for unremovable "is" attributes
        if (name === 'is') {
            if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                try {
                    _forceRemove(element);
                } catch (_) {}
            } else {
                try {
                    element.setAttribute(name, '');
                } catch (_) {}
            }
        }
    };
    /**
   * _initDocument
   *
   * @param dirty - a string of dirty markup
   * @return a DOM, filled with the dirty markup
   */ const _initDocument = function _initDocument(dirty) {
        /* Create a HTML document */ let doc = null;
        let leadingWhitespace = null;
        if (FORCE_BODY) {
            dirty = '<remove></remove>' + dirty;
        } else {
            /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ const matches = stringMatch(dirty, /^[\r\n\t ]+/);
            leadingWhitespace = matches && matches[0];
        }
        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
            // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
        }
        const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */ if (NAMESPACE === HTML_NAMESPACE) {
            try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
        }
        /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
            doc = implementation.createDocument(NAMESPACE, 'template', null);
            try {
                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
            } catch (_) {
            // Syntax error if dirtyPayload is invalid xml
            }
        }
        const body = doc.body || doc.documentElement;
        if (dirty && leadingWhitespace) {
            body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
        }
        /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) {
            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
        }
        return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
   * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
   *
   * @param root The root element or node to start traversing on.
   * @return The created NodeIterator
   */ const _createNodeIterator = function _createNodeIterator(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };
    /**
   * _isClobbered
   *
   * @param element element to check for clobbering attacks
   * @return true if clobbered, false if safe
   */ const _isClobbered = function _isClobbered(element) {
        return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
    };
    /**
   * Checks whether the given object is a DOM node.
   *
   * @param value object to check whether it's a DOM node
   * @return true is object is a DOM node
   */ const _isNode = function _isNode(value) {
        return typeof Node === 'function' && value instanceof Node;
    };
    function _executeHooks(hooks, currentNode, data) {
        arrayForEach(hooks, (hook)=>{
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    }
    /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   * @param currentNode to check for permission to exist
   * @return true if node was killed, false if left alive
   */ const _sanitizeElements = function _sanitizeElements(currentNode) {
        let content = null;
        /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
        /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Now let's check the element's type and name */ const tagName = transformCaseFunc(currentNode.nodeName);
        /* Execute a hook if present */ _executeHooks(hooks.uponSanitizeElement, currentNode, {
            tagName,
            allowedTags: ALLOWED_TAGS
        });
        /* Detect mXSS attempts abusing namespace confusion */ if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove any occurrence of processing instructions */ if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove any kind of possibly harmful comments */ if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove element if anything forbids its presence */ if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
            /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
                    return false;
                }
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
                    return false;
                }
            }
            /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                if (childNodes && parentNode) {
                    const childCount = childNodes.length;
                    for(let i = childCount - 1; i >= 0; --i){
                        const childClone = cloneNode(childNodes[i], true);
                        childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
                        parentNode.insertBefore(childClone, getNextSibling(currentNode));
                    }
                }
            }
            _forceRemove(currentNode);
            return true;
        }
        /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Make sure that older browsers don't get fallback-tag mXSS */ if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
            /* Get the element's text content */ content = currentNode.textContent;
            arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                content = stringReplace(content, expr, ' ');
            });
            if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                    element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
            }
        }
        /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeElements, currentNode, null);
        return false;
    };
    /**
   * _isValidAttribute
   *
   * @param lcTag Lowercase tag name of containing element.
   * @param lcName Lowercase attribute name.
   * @param value Attribute value.
   * @return Returns true if `value` is valid, otherwise false.
   */ // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
        /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
            return false;
        }
        /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;
        else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;
        else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ;
        else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
            if (// First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
            else {
                return false;
            }
        /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
        else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ;
        else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;
        else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ;
        else if (value) {
            return false;
        } else ;
        return true;
    };
    /**
   * _isBasicCustomElement
   * checks if at least one dash is included in tagName, and it's not the first char
   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
   *
   * @param tagName name of the tag of the node to sanitize
   * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
   */ const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
        return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };
    /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param currentNode to sanitize
   */ const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
        const { attributes } = currentNode;
        /* Check if we have attributes; if not we might have a text node */ if (!attributes || _isClobbered(currentNode)) {
            return;
        }
        const hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR,
            forceKeepAttr: undefined
        };
        let l = attributes.length;
        /* Go backwards over all attributes; safely remove bad ones */ while(l--){
            const attr = attributes[l];
            const { name, namespaceURI, value: attrValue } = attr;
            const lcName = transformCaseFunc(name);
            const initValue = attrValue;
            let value = name === 'value' ? initValue : stringTrim(initValue);
            /* Execute a hook if present */ hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
            _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
            value = hookEvent.attrValue;
            /* Full DOM Clobbering protection via namespace isolation,
       * Prefix id and name attributes with `user-content-`
       */ if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
                // Remove the attribute with this value
                _removeAttribute(name, currentNode);
                // Prefix the value and later re-create the attribute with the sanitized value
                value = SANITIZE_NAMED_PROPS_PREFIX + value;
            }
            /* Work around a security issue with comments inside attributes */ if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Make sure we cannot easily use animated hrefs, even if animations are allowed */ if (lcName === 'attributename' && stringMatch(value, 'href')) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) {
                continue;
            }
            /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Work around a security issue in jQuery 3.0 */ if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) {
                arrayForEach([
                    MUSTACHE_EXPR,
                    ERB_EXPR,
                    TMPLIT_EXPR
                ], (expr)=>{
                    value = stringReplace(value, expr, ' ');
                });
            }
            /* Is `value` valid for this attribute? */ const lcTag = transformCaseFunc(currentNode.nodeName);
            if (!_isValidAttribute(lcTag, lcName, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
                if (namespaceURI) ;
                else {
                    switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case 'TrustedHTML':
                            {
                                value = trustedTypesPolicy.createHTML(value);
                                break;
                            }
                        case 'TrustedScriptURL':
                            {
                                value = trustedTypesPolicy.createScriptURL(value);
                                break;
                            }
                    }
                }
            }
            /* Handle invalid data-* attribute set by try-catching it */ if (value !== initValue) {
                try {
                    if (namespaceURI) {
                        currentNode.setAttributeNS(namespaceURI, name, value);
                    } else {
                        /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                    }
                    if (_isClobbered(currentNode)) {
                        _forceRemove(currentNode);
                    } else {
                        arrayPop(DOMPurify.removed);
                    }
                } catch (_) {
                    _removeAttribute(name, currentNode);
                }
            }
        }
        /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    };
    /**
   * _sanitizeShadowDOM
   *
   * @param fragment to iterate over recursively
   */ const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
        let shadowNode = null;
        const shadowIterator = _createNodeIterator(fragment);
        /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
        while(shadowNode = shadowIterator.nextNode()){
            /* Execute a hook if present */ _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
            /* Sanitize tags and elements */ _sanitizeElements(shadowNode);
            /* Check attributes next */ _sanitizeAttributes(shadowNode);
            /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }
        }
        /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
    };
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function(dirty) {
        let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let body = null;
        let importedNode = null;
        let currentNode = null;
        let returnNode = null;
        /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
        if (IS_EMPTY_INPUT) {
            dirty = '<!-->';
        }
        /* Stringify, in case dirty is an object */ if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString === 'function') {
                dirty = dirty.toString();
                if (typeof dirty !== 'string') {
                    throw typeErrorCreate('dirty is not a string, aborting');
                }
            } else {
                throw typeErrorCreate('toString is not a function');
            }
        }
        /* Return dirty HTML if DOMPurify cannot run */ if (!DOMPurify.isSupported) {
            return dirty;
        }
        /* Assign config vars */ if (!SET_CONFIG) {
            _parseConfig(cfg);
        }
        /* Clean up removed elements */ DOMPurify.removed = [];
        /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === 'string') {
            IN_PLACE = false;
        }
        if (IN_PLACE) {
            /* Do some early pre-sanitization to avoid unsafe root nodes */ if (dirty.nodeName) {
                const tagName = transformCaseFunc(dirty.nodeName);
                if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                    throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
                }
            }
        } else if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */ body = _initDocument('<!---->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */ body = importedNode;
            } else if (importedNode.nodeName === 'HTML') {
                body = importedNode;
            } else {
                // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            }
        } else {
            /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
            dirty.indexOf('<') === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
            }
            /* Initialize the document to work on */ body = _initDocument(dirty);
            /* Check we have a DOM node from the data */ if (!body) {
                return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
            }
        }
        /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) {
            _forceRemove(body.firstChild);
        }
        /* Get node iterator */ const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
        /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
            /* Sanitize tags and elements */ _sanitizeElements(currentNode);
            /* Check attributes next */ _sanitizeAttributes(currentNode);
            /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }
        }
        /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) {
            return dirty;
        }
        /* Return sanitized string or DOM */ if (RETURN_DOM) {
            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);
                while(body.firstChild){
                    // eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }
            if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
                /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */ returnNode = importNode.call(originalDocument, returnNode, true);
            }
            return returnNode;
        }
        let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
            serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
        }
        /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) {
            arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                serializedHTML = stringReplace(serializedHTML, expr, ' ');
            });
        }
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function() {
        let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _parseConfig(cfg);
        SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function() {
        CONFIG = null;
        SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function(tag, attr, value) {
        /* Initialize shared config vars if necessary. */ if (!CONFIG) {
            _parseConfig({});
        }
        const lcTag = transformCaseFunc(tag);
        const lcName = transformCaseFunc(attr);
        return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') {
            return;
        }
        arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function(entryPoint, hookFunction) {
        if (hookFunction !== undefined) {
            const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
            return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
        }
        return arrayPop(hooks[entryPoint]);
    };
    DOMPurify.removeHooks = function(entryPoint) {
        hooks[entryPoint] = [];
    };
    DOMPurify.removeAllHooks = function() {
        hooks = _createHooksMap();
    };
    return DOMPurify;
}
var purify = createDOMPurify();
module.exports = purify; //# sourceMappingURL=purify.cjs.js.map
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/OverloadYield.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _OverloadYield(e, d) {
    this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorDefine.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
        i({}, "", {});
    } catch (e) {
        i = 0;
    }
    module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
        function o(r, n) {
            _regeneratorDefine(e, r, function(e) {
                return this._invoke(r, n, e);
            });
        }
        r ? i ? i(e, r, {
            value: n,
            enumerable: !t,
            configurable: !t,
            writable: !t
        }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regenerator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var regeneratorDefine = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorDefine.js [app-route] (ecmascript)");
function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype);
        return regeneratorDefine(u, "_invoke", function(r, n, o) {
            var i, c, u, f = 0, p = o || [], y = !1, G = {
                p: 0,
                n: 0,
                v: e,
                a: d,
                f: d.bind(e, 4),
                d: function d(t, r) {
                    return i = t, c = 0, u = e, G.n = r, a;
                }
            };
            function d(r, n) {
                for(c = r, u = n, t = 0; !y && f && !o && t < p.length; t++){
                    var o, i = p[t], d = G.p, l = i[2];
                    r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
                }
                if (o || r > 1) return a;
                throw y = !0, n;
            }
            return function(o, p, l) {
                if (f > 1) throw TypeError("Generator is already running");
                for(y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;){
                    i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
                    try {
                        if (f = 2, i) {
                            if (c || (o = "next"), t = i[o]) {
                                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                                if (!t.done) return t;
                                u = t.value, c < 2 && (c = 0);
                            } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                            i = e;
                        } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
                    } catch (t) {
                        i = e, c = 1, u = t;
                    } finally{
                        f = 1;
                    }
                }
                return {
                    value: t,
                    done: y
                };
            };
        }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function() {
        return this;
    }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function() {
        return this;
    }), regeneratorDefine(u, "toString", function() {
        return "[object Generator]";
    }), (module.exports = _regenerator = function _regenerator() {
        return {
            w: i,
            m: f
        };
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var OverloadYield = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/OverloadYield.js [app-route] (ecmascript)");
var regeneratorDefine = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorDefine.js [app-route] (ecmascript)");
function AsyncIterator(t, e) {
    function n(r, o, i, f) {
        try {
            var c = t[r](o), u = c.value;
            return u instanceof OverloadYield ? e.resolve(u.v).then(function(t) {
                n("next", t, i, f);
            }, function(t) {
                n("throw", t, i, f);
            }) : e.resolve(u).then(function(t) {
                c.value = t, i(c);
            }, function(t) {
                return n("throw", t, i, f);
            });
        } catch (t) {
            f(t);
        }
    }
    var r;
    this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
        return this;
    })), regeneratorDefine(this, "_invoke", function(t, o, i) {
        function f() {
            return new e(function(e, r) {
                n(t, i, e, r);
            });
        }
        return r = r ? r.then(f, f) : f();
    }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var regenerator = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regenerator.js [app-route] (ecmascript)");
var regeneratorAsyncIterator = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js [app-route] (ecmascript)");
function _regeneratorAsyncGen(r, e, t, o, n) {
    return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsync.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var regeneratorAsyncGen = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js [app-route] (ecmascript)");
function _regeneratorAsync(n, e, r, t, o) {
    var a = regeneratorAsyncGen(n, e, r, t, o);
    return a.next().then(function(n) {
        return n.done ? n.value : a.next();
    });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorKeys.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _regeneratorKeys(e) {
    var n = Object(e), r = [];
    for(var t in n)r.unshift(t);
    return function e() {
        for(; r.length;)if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
        return e.done = !0, e;
    };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/typeof.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorValues.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/typeof.js [app-route] (ecmascript)")["default"];
function _regeneratorValues(e) {
    if (null != e) {
        var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) return {
            next: function next() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                };
            }
        };
    }
    throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorRuntime.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var OverloadYield = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/OverloadYield.js [app-route] (ecmascript)");
var regenerator = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regenerator.js [app-route] (ecmascript)");
var regeneratorAsync = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsync.js [app-route] (ecmascript)");
var regeneratorAsyncGen = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js [app-route] (ecmascript)");
var regeneratorAsyncIterator = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js [app-route] (ecmascript)");
var regeneratorKeys = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorKeys.js [app-route] (ecmascript)");
var regeneratorValues = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorValues.js [app-route] (ecmascript)");
function _regeneratorRuntime() {
    "use strict";
    var r = regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
    function n(r) {
        var e = "function" == typeof r && r.constructor;
        return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
    }
    var o = {
        "throw": 1,
        "return": 2,
        "break": 3,
        "continue": 3
    };
    function a(r) {
        var e, t;
        return function(n) {
            e || (e = {
                stop: function stop() {
                    return t(n.a, 2);
                },
                "catch": function _catch() {
                    return n.v;
                },
                abrupt: function abrupt(r, e) {
                    return t(n.a, o[r], e);
                },
                delegateYield: function delegateYield(r, o, a) {
                    return e.resultName = o, t(n.d, regeneratorValues(r), a);
                },
                finish: function finish(r) {
                    return t(n.f, r);
                }
            }, t = function t(r, _t, o) {
                n.p = e.prev, n.n = e.next;
                try {
                    return r(_t, o);
                } finally{
                    e.next = n.n;
                }
            }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
            try {
                return r.call(this, e);
            } finally{
                n.p = e.prev, n.n = e.next;
            }
        };
    }
    return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
        return {
            wrap: function wrap(e, t, n, o) {
                return r.w(a(e), t, n, o && o.reverse());
            },
            isGeneratorFunction: n,
            mark: r.m,
            awrap: function awrap(r, e) {
                return new OverloadYield(r, e);
            },
            AsyncIterator: regeneratorAsyncIterator,
            async: function async(r, e, t, o, u) {
                return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
            },
            keys: regeneratorKeys,
            values: regeneratorValues
        };
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/regenerator/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// TODO(Babel 8): Remove this file.
var runtime = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/regeneratorRuntime.js [app-route] (ecmascript)")();
module.exports = runtime;
// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
    } else {
        Function("r", "regeneratorRuntime = r")(runtime);
    }
}
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayWithHoles.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayLikeToArray.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayLikeToArray = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayLikeToArray.js [app-route] (ecmascript)");
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
    }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/nonIterableRest.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/slicedToArray.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayWithHoles = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayWithHoles.js [app-route] (ecmascript)");
var iterableToArrayLimit = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js [app-route] (ecmascript)");
var unsupportedIterableToArray = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js [app-route] (ecmascript)");
var nonIterableRest = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/nonIterableRest.js [app-route] (ecmascript)");
function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/toPrimitive.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/typeof.js [app-route] (ecmascript)")["default"];
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/typeof.js [app-route] (ecmascript)")["default"];
var toPrimitive = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/toPrimitive.js [app-route] (ecmascript)");
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/defineProperty.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toPropertyKey = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-route] (ecmascript)");
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/classCallCheck.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/createClass.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toPropertyKey = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-route] (ecmascript)");
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/inherits.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var setPrototypeOf = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-route] (ecmascript)");
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/assertThisInitialized.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var _typeof = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/typeof.js [app-route] (ecmascript)")["default"];
var assertThisInitialized = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/assertThisInitialized.js [app-route] (ecmascript)");
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayLikeToArray = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayLikeToArray.js [app-route] (ecmascript)");
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/iterableToArray.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/nonIterableSpread.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/toConsumableArray.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayWithoutHoles = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js [app-route] (ecmascript)");
var iterableToArray = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/iterableToArray.js [app-route] (ecmascript)");
var unsupportedIterableToArray = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js [app-route] (ecmascript)");
var nonIterableSpread = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/nonIterableSpread.js [app-route] (ecmascript)");
function _toConsumableArray(r) {
    return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/superPropBase.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var getPrototypeOf = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-route] (ecmascript)");
function _superPropBase(t, o) {
    for(; !({}).hasOwnProperty.call(t, o) && null !== (t = getPrototypeOf(t)););
    return t;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/@babel/runtime/helpers/get.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var superPropBase = __turbopack_context__.r("[project]/realestateandlease/node_modules/@babel/runtime/helpers/superPropBase.js [app-route] (ecmascript)");
function _get() {
    return module.exports = _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
        var p = superPropBase(e, t);
        if (p) {
            var n = Object.getOwnPropertyDescriptor(p, t);
            return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
        }
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _get.apply(null, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/realestateandlease/node_modules/performance-now/lib/performance-now.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function() {
            return performance.now();
        };
    } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
            var hr;
            hr = hrtime();
            return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e); //# sourceMappingURL=performance-now.js.map
}),
"[project]/realestateandlease/node_modules/raf/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var now = __turbopack_context__.r("[project]/realestateandlease/node_modules/performance-now/lib/performance-now.js [app-route] (ecmascript)"), root = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable", vendors = [
    'moz',
    'webkit'
], suffix = 'AnimationFrame', raf = root['request' + suffix], caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i = 0; i < cp.length; i++){
                    if (!cp[i].cancelled) {
                        try {
                            cp[i].callback(last);
                        } catch (e) {
                            setTimeout(function() {
                                throw e;
                            }, 0);
                        }
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function(handle) {
        for(var i = 0; i < queue.length; i++){
            if (queue[i].handle === handle) {
                queue[i].cancelled = true;
            }
        }
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) {
        object = root;
    }
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};
}),
"[project]/realestateandlease/node_modules/rgbcolor/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/ module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;
    // strip any leading #
    if (color_string.charAt(0) == '#') {
        color_string = color_string.substr(1, 6);
    }
    color_string = color_string.replace(/ /g, '');
    color_string = color_string.toLowerCase();
    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors
    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: [
                'rgba(123, 234, 45, 0.8)',
                'rgba(255,234,245,1.0)'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                'rgb(123, 234, 45)',
                'rgb(255,234,245)'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: [
                '#00ff00',
                '336699'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: [
                '#fb0',
                'f0f'
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];
    // search through the definitions to find a match
    for(var i = 0; i < color_defs.length; i++){
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) {
                this.alpha = channels[3];
            }
            this.ok = true;
        }
    }
    // validate/cleanup values
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
    this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha;
    // some getters
    this.toRGB = function() {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    };
    this.toRGBA = function() {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    };
    this.toHex = function() {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    };
    // help
    this.getHelpXML = function() {
        var examples = new Array();
        // add regexps
        for(var i = 0; i < color_defs.length; i++){
            var example = color_defs[i].example;
            for(var j = 0; j < example.length; j++){
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for(var sc in simple_colors){
            examples[examples.length] = sc;
        }
        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for(var i = 0; i < examples.length; i++){
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);
            } catch (e) {}
        }
        return xml;
    };
};
}),
"[project]/realestateandlease/node_modules/svg-pathdata/lib/SVGPathData.cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, r) {
    ("TURBOPACK compile-time truthy", 1) ? r(exports) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(t) {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var r = function(t, e) {
        return (r = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, r) {
            t.__proto__ = r;
        } || function(t, r) {
            for(var e in r)Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        })(t, e);
    };
    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function a() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a);
    }
    var a = " ";
    function i(t) {
        var r = "";
        Array.isArray(t) || (t = [
            t
        ]);
        for(var e = 0; e < t.length; e++){
            var i = t[e];
            if (i.type === N.CLOSE_PATH) r += "z";
            else if (i.type === N.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x;
            else if (i.type === N.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y;
            else if (i.type === N.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + a + i.y;
            else if (i.type === N.LINE_TO) r += (i.relative ? "l" : "L") + i.x + a + i.y;
            else if (i.type === N.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + a + i.y1 + a + i.x2 + a + i.y2 + a + i.x + a + i.y;
            else if (i.type === N.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + a + i.y2 + a + i.x + a + i.y;
            else if (i.type === N.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + a + i.y1 + a + i.x + a + i.y;
            else if (i.type === N.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + a + i.y;
            else {
                if (i.type !== N.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
                r += (i.relative ? "a" : "A") + i.rX + a + i.rY + a + i.xRot + a + +i.lArcFlag + a + +i.sweepFlag + a + i.x + a + i.y;
            }
        }
        return r;
    }
    function n(t, r) {
        var e = t[0], a = t[1];
        return [
            e * Math.cos(r) - a * Math.sin(r),
            e * Math.sin(r) + a * Math.cos(r)
        ];
    }
    function o() {
        for(var t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r];
        for(var e = 0; e < t.length; e++)if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof t[e] + " == typeof " + t[e]);
        return !0;
    }
    var s = Math.PI;
    function u(t, r, e) {
        t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
        var a = t.rX, i = t.rY, o = t.x, u = t.y;
        a = Math.abs(t.rX), i = Math.abs(t.rY);
        var h = n([
            (r - o) / 2,
            (e - u) / 2
        ], -t.xRot / 180 * s), c = h[0], m = h[1], y = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(m, 2) / Math.pow(i, 2);
        1 < y && (a *= Math.sqrt(y), i *= Math.sqrt(y)), t.rX = a, t.rY = i;
        var p = Math.pow(a, 2) * Math.pow(m, 2) + Math.pow(i, 2) * Math.pow(c, 2), f = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(i, 2) - p) / p)), T = a * m / i * f, O = -i * c / a * f, l = n([
            T,
            O
        ], t.xRot / 180 * s);
        t.cX = l[0] + (r + o) / 2, t.cY = l[1] + (e + u) / 2, t.phi1 = Math.atan2((m - O) / i, (c - T) / a), t.phi2 = Math.atan2((-m - O) / i, (-c - T) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * s), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * s), t.phi1 *= 180 / s, t.phi2 *= 180 / s;
    }
    function h(t, r, e) {
        o(t, r, e);
        var a = t * t + r * r - e * e;
        if (0 > a) return [];
        if (0 === a) return [
            [
                t * e / (t * t + r * r),
                r * e / (t * t + r * r)
            ]
        ];
        var i = Math.sqrt(a);
        return [
            [
                (t * e + r * i) / (t * t + r * r),
                (r * e - t * i) / (t * t + r * r)
            ],
            [
                (t * e - r * i) / (t * t + r * r),
                (r * e + t * i) / (t * t + r * r)
            ]
        ];
    }
    var c = Math.PI / 180;
    function m(t, r, e) {
        return (1 - e) * t + e * r;
    }
    function y(t, r, e, a) {
        return t + Math.cos(a / 180 * s) * r + Math.sin(a / 180 * s) * e;
    }
    function p(t, r, e, a) {
        var i = 1e-6, n = r - t, o = e - r, s = 3 * n + 3 * (a - e) - 6 * o, u = 6 * (o - n), h = 3 * n;
        return Math.abs(s) < i ? [
            -h / u
        ] : function(t, r, e) {
            void 0 === e && (e = 1e-6);
            var a = t * t / 4 - r;
            if (a < -e) return [];
            if (a <= e) return [
                -t / 2
            ];
            var i = Math.sqrt(a);
            return [
                -t / 2 - i,
                -t / 2 + i
            ];
        }(u / s, h / s, i);
    }
    function f(t, r, e, a, i) {
        var n = 1 - i;
        return t * (n * n * n) + r * (3 * n * n * i) + e * (3 * n * i * i) + a * (i * i * i);
    }
    t.SVGPathDataTransformer = void 0, function(t) {
        function r() {
            return i(function(t, r, e) {
                return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), void 0 !== t.y && (t.y += e), t.relative = !1), t;
            });
        }
        function e() {
            var t = NaN, r = NaN, e = NaN, a = NaN;
            return i(function(i, n, o) {
                return i.type & N.SMOOTH_CURVE_TO && (i.type = N.CURVE_TO, t = isNaN(t) ? n : t, r = isNaN(r) ? o : r, i.x1 = i.relative ? n - t : 2 * n - t, i.y1 = i.relative ? o - r : 2 * o - r), i.type & N.CURVE_TO ? (t = i.relative ? n + i.x2 : i.x2, r = i.relative ? o + i.y2 : i.y2) : (t = NaN, r = NaN), i.type & N.SMOOTH_QUAD_TO && (i.type = N.QUAD_TO, e = isNaN(e) ? n : e, a = isNaN(a) ? o : a, i.x1 = i.relative ? n - e : 2 * n - e, i.y1 = i.relative ? o - a : 2 * o - a), i.type & N.QUAD_TO ? (e = i.relative ? n + i.x1 : i.x1, a = i.relative ? o + i.y1 : i.y1) : (e = NaN, a = NaN), i;
            });
        }
        function a() {
            var t = NaN, r = NaN;
            return i(function(e, a, i) {
                if (e.type & N.SMOOTH_QUAD_TO && (e.type = N.QUAD_TO, t = isNaN(t) ? a : t, r = isNaN(r) ? i : r, e.x1 = e.relative ? a - t : 2 * a - t, e.y1 = e.relative ? i - r : 2 * i - r), e.type & N.QUAD_TO) {
                    t = e.relative ? a + e.x1 : e.x1, r = e.relative ? i + e.y1 : e.y1;
                    var n = e.x1, o = e.y1;
                    e.type = N.CURVE_TO, e.x1 = ((e.relative ? 0 : a) + 2 * n) / 3, e.y1 = ((e.relative ? 0 : i) + 2 * o) / 3, e.x2 = (e.x + 2 * n) / 3, e.y2 = (e.y + 2 * o) / 3;
                } else t = NaN, r = NaN;
                return e;
            });
        }
        function i(t) {
            var r = 0, e = 0, a = NaN, i = NaN;
            return function(n) {
                if (isNaN(a) && !(n.type & N.MOVE_TO)) throw new Error("path must start with moveto");
                var o = t(n, r, e, a, i);
                return n.type & N.CLOSE_PATH && (r = a, e = i), void 0 !== n.x && (r = n.relative ? r + n.x : n.x), void 0 !== n.y && (e = n.relative ? e + n.y : n.y), n.type & N.MOVE_TO && (a = r, i = e), o;
            };
        }
        function s(t, r, e, a, n, s) {
            return o(t, r, e, a, n, s), i(function(i, o, u, h) {
                var c = i.x1, m = i.x2, y = i.relative && !isNaN(h), p = void 0 !== i.x ? i.x : y ? 0 : o, f = void 0 !== i.y ? i.y : y ? 0 : u;
                function T(t) {
                    return t * t;
                }
                i.type & N.HORIZ_LINE_TO && 0 !== r && (i.type = N.LINE_TO, i.y = i.relative ? 0 : u), i.type & N.VERT_LINE_TO && 0 !== e && (i.type = N.LINE_TO, i.x = i.relative ? 0 : o), void 0 !== i.x && (i.x = i.x * t + f * e + (y ? 0 : n)), void 0 !== i.y && (i.y = p * r + i.y * a + (y ? 0 : s)), void 0 !== i.x1 && (i.x1 = i.x1 * t + i.y1 * e + (y ? 0 : n)), void 0 !== i.y1 && (i.y1 = c * r + i.y1 * a + (y ? 0 : s)), void 0 !== i.x2 && (i.x2 = i.x2 * t + i.y2 * e + (y ? 0 : n)), void 0 !== i.y2 && (i.y2 = m * r + i.y2 * a + (y ? 0 : s));
                var O = t * a - r * e;
                if (void 0 !== i.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== a)) if (0 === O) delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag, i.type = N.LINE_TO;
                else {
                    var l = i.xRot * Math.PI / 180, v = Math.sin(l), _ = Math.cos(l), d = 1 / T(i.rX), x = 1 / T(i.rY), A = T(_) * d + T(v) * x, E = 2 * v * _ * (d - x), C = T(v) * d + T(_) * x, M = A * a * a - E * r * a + C * r * r, R = E * (t * a + r * e) - 2 * (A * e * a + C * t * r), S = A * e * e - E * t * e + C * t * t, g = (Math.atan2(R, M - S) + Math.PI) % Math.PI / 2, I = Math.sin(g), V = Math.cos(g);
                    i.rX = Math.abs(O) / Math.sqrt(M * T(V) + R * I * V + S * T(I)), i.rY = Math.abs(O) / Math.sqrt(M * T(I) - R * I * V + S * T(V)), i.xRot = 180 * g / Math.PI;
                }
                return void 0 !== i.sweepFlag && 0 > O && (i.sweepFlag = +!i.sweepFlag), i;
            });
        }
        function T() {
            return function(t) {
                var r = {};
                for(var e in t)r[e] = t[e];
                return r;
            };
        }
        t.ROUND = function(t) {
            function r(r) {
                return Math.round(r * t) / t;
            }
            return void 0 === t && (t = 1e13), o(t), function(t) {
                return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), t;
            };
        }, t.TO_ABS = r, t.TO_REL = function() {
            return i(function(t, r, e) {
                return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), void 0 !== t.y && (t.y -= e), t.relative = !0), t;
            });
        }, t.NORMALIZE_HVZ = function(t, r, e) {
            return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), i(function(a, i, n, o, s) {
                if (isNaN(o) && !(a.type & N.MOVE_TO)) throw new Error("path must start with moveto");
                return r && a.type & N.HORIZ_LINE_TO && (a.type = N.LINE_TO, a.y = a.relative ? 0 : n), e && a.type & N.VERT_LINE_TO && (a.type = N.LINE_TO, a.x = a.relative ? 0 : i), t && a.type & N.CLOSE_PATH && (a.type = N.LINE_TO, a.x = a.relative ? o - i : o, a.y = a.relative ? s - n : s), a.type & N.ARC && (0 === a.rX || 0 === a.rY) && (a.type = N.LINE_TO, delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag), a;
            });
        }, t.NORMALIZE_ST = e, t.QT_TO_C = a, t.INFO = i, t.SANITIZE = function(t) {
            void 0 === t && (t = 0), o(t);
            var r = NaN, e = NaN, a = NaN, n = NaN;
            return i(function(i, o, s, u, h) {
                var c = Math.abs, m = !1, y = 0, p = 0;
                if (i.type & N.SMOOTH_CURVE_TO && (y = isNaN(r) ? 0 : o - r, p = isNaN(e) ? 0 : s - e), i.type & (N.CURVE_TO | N.SMOOTH_CURVE_TO) ? (r = i.relative ? o + i.x2 : i.x2, e = i.relative ? s + i.y2 : i.y2) : (r = NaN, e = NaN), i.type & N.SMOOTH_QUAD_TO ? (a = isNaN(a) ? o : 2 * o - a, n = isNaN(n) ? s : 2 * s - n) : i.type & N.QUAD_TO ? (a = i.relative ? o + i.x1 : i.x1, n = i.relative ? s + i.y1 : i.y2) : (a = NaN, n = NaN), i.type & N.LINE_COMMANDS || i.type & N.ARC && (0 === i.rX || 0 === i.rY || !i.lArcFlag) || i.type & N.CURVE_TO || i.type & N.SMOOTH_CURVE_TO || i.type & N.QUAD_TO || i.type & N.SMOOTH_QUAD_TO) {
                    var f = void 0 === i.x ? 0 : i.relative ? i.x : i.x - o, T = void 0 === i.y ? 0 : i.relative ? i.y : i.y - s;
                    y = isNaN(a) ? void 0 === i.x1 ? y : i.relative ? i.x : i.x1 - o : a - o, p = isNaN(n) ? void 0 === i.y1 ? p : i.relative ? i.y : i.y1 - s : n - s;
                    var O = void 0 === i.x2 ? 0 : i.relative ? i.x : i.x2 - o, l = void 0 === i.y2 ? 0 : i.relative ? i.y : i.y2 - s;
                    c(f) <= t && c(T) <= t && c(y) <= t && c(p) <= t && c(O) <= t && c(l) <= t && (m = !0);
                }
                return i.type & N.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (m = !0), m ? [] : i;
            });
        }, t.MATRIX = s, t.ROTATE = function(t, r, e) {
            void 0 === r && (r = 0), void 0 === e && (e = 0), o(t, r, e);
            var a = Math.sin(t), i = Math.cos(t);
            return s(i, a, -a, i, r - r * i + e * a, e - r * a - e * i);
        }, t.TRANSLATE = function(t, r) {
            return void 0 === r && (r = 0), o(t, r), s(1, 0, 0, 1, t, r);
        }, t.SCALE = function(t, r) {
            return void 0 === r && (r = t), o(t, r), s(t, 0, 0, r, 0, 0);
        }, t.SKEW_X = function(t) {
            return o(t), s(1, 0, Math.atan(t), 1, 0, 0);
        }, t.SKEW_Y = function(t) {
            return o(t), s(1, Math.atan(t), 0, 1, 0, 0);
        }, t.X_AXIS_SYMMETRY = function(t) {
            return void 0 === t && (t = 0), o(t), s(-1, 0, 0, 1, t, 0);
        }, t.Y_AXIS_SYMMETRY = function(t) {
            return void 0 === t && (t = 0), o(t), s(1, 0, 0, -1, 0, t);
        }, t.A_TO_C = function() {
            return i(function(t, r, e) {
                return N.ARC === t.type ? function(t, r, e) {
                    var a, i, o, s;
                    t.cX || u(t, r, e);
                    for(var h = Math.min(t.phi1, t.phi2), y = Math.max(t.phi1, t.phi2) - h, p = Math.ceil(y / 90), f = new Array(p), T = r, O = e, l = 0; l < p; l++){
                        var v = m(t.phi1, t.phi2, l / p), _ = m(t.phi1, t.phi2, (l + 1) / p), d = _ - v, x = 4 / 3 * Math.tan(d * c / 4), A = [
                            Math.cos(v * c) - x * Math.sin(v * c),
                            Math.sin(v * c) + x * Math.cos(v * c)
                        ], E = A[0], C = A[1], M = [
                            Math.cos(_ * c),
                            Math.sin(_ * c)
                        ], R = M[0], S = M[1], g = [
                            R + x * Math.sin(_ * c),
                            S - x * Math.cos(_ * c)
                        ], I = g[0], V = g[1];
                        f[l] = {
                            relative: t.relative,
                            type: N.CURVE_TO
                        };
                        var D = function(r, e) {
                            var a = n([
                                r * t.rX,
                                e * t.rY
                            ], t.xRot), i = a[0], o = a[1];
                            return [
                                t.cX + i,
                                t.cY + o
                            ];
                        };
                        a = D(E, C), f[l].x1 = a[0], f[l].y1 = a[1], i = D(I, V), f[l].x2 = i[0], f[l].y2 = i[1], o = D(R, S), f[l].x = o[0], f[l].y = o[1], t.relative && (f[l].x1 -= T, f[l].y1 -= O, f[l].x2 -= T, f[l].y2 -= O, f[l].x -= T, f[l].y -= O), T = (s = [
                            f[l].x,
                            f[l].y
                        ])[0], O = s[1];
                    }
                    return f;
                }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
            });
        }, t.ANNOTATE_ARCS = function() {
            return i(function(t, r, e) {
                return t.relative && (r = 0, e = 0), N.ARC === t.type && u(t, r, e), t;
            });
        }, t.CLONE = T, t.CALCULATE_BOUNDS = function() {
            var t = function(t) {
                var r = {};
                for(var e in t)r[e] = t[e];
                return r;
            }, n = r(), o = a(), s = e(), c = i(function(r, e, a) {
                var i = s(o(n(t(r))));
                function m(t) {
                    t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
                }
                function T(t) {
                    t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
                }
                if (i.type & N.DRAWING_COMMANDS && (m(e), T(a)), i.type & N.HORIZ_LINE_TO && m(i.x), i.type & N.VERT_LINE_TO && T(i.y), i.type & N.LINE_TO && (m(i.x), T(i.y)), i.type & N.CURVE_TO) {
                    m(i.x), T(i.y);
                    for(var O = 0, l = p(e, i.x1, i.x2, i.x); O < l.length; O++){
                        0 < (H = l[O]) && 1 > H && m(f(e, i.x1, i.x2, i.x, H));
                    }
                    for(var v = 0, _ = p(a, i.y1, i.y2, i.y); v < _.length; v++){
                        0 < (H = _[v]) && 1 > H && T(f(a, i.y1, i.y2, i.y, H));
                    }
                }
                if (i.type & N.ARC) {
                    m(i.x), T(i.y), u(i, e, a);
                    for(var d = i.xRot / 180 * Math.PI, x = Math.cos(d) * i.rX, A = Math.sin(d) * i.rX, E = -Math.sin(d) * i.rY, C = Math.cos(d) * i.rY, M = i.phi1 < i.phi2 ? [
                        i.phi1,
                        i.phi2
                    ] : -180 > i.phi2 ? [
                        i.phi2 + 360,
                        i.phi1 + 360
                    ] : [
                        i.phi2,
                        i.phi1
                    ], R = M[0], S = M[1], g = function(t) {
                        var r = t[0], e = t[1], a = 180 * Math.atan2(e, r) / Math.PI;
                        return a < R ? a + 360 : a;
                    }, I = 0, V = h(E, -x, 0).map(g); I < V.length; I++){
                        (H = V[I]) > R && H < S && m(y(i.cX, x, E, H));
                    }
                    for(var D = 0, L = h(C, -A, 0).map(g); D < L.length; D++){
                        var H;
                        (H = L[D]) > R && H < S && T(y(i.cY, A, C, H));
                    }
                }
                return r;
            });
            return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
        };
    }(t.SVGPathDataTransformer || (t.SVGPathDataTransformer = {}));
    var T, O = function() {
        function r() {}
        return r.prototype.round = function(r) {
            return this.transform(t.SVGPathDataTransformer.ROUND(r));
        }, r.prototype.toAbs = function() {
            return this.transform(t.SVGPathDataTransformer.TO_ABS());
        }, r.prototype.toRel = function() {
            return this.transform(t.SVGPathDataTransformer.TO_REL());
        }, r.prototype.normalizeHVZ = function(r, e, a) {
            return this.transform(t.SVGPathDataTransformer.NORMALIZE_HVZ(r, e, a));
        }, r.prototype.normalizeST = function() {
            return this.transform(t.SVGPathDataTransformer.NORMALIZE_ST());
        }, r.prototype.qtToC = function() {
            return this.transform(t.SVGPathDataTransformer.QT_TO_C());
        }, r.prototype.aToC = function() {
            return this.transform(t.SVGPathDataTransformer.A_TO_C());
        }, r.prototype.sanitize = function(r) {
            return this.transform(t.SVGPathDataTransformer.SANITIZE(r));
        }, r.prototype.translate = function(r, e) {
            return this.transform(t.SVGPathDataTransformer.TRANSLATE(r, e));
        }, r.prototype.scale = function(r, e) {
            return this.transform(t.SVGPathDataTransformer.SCALE(r, e));
        }, r.prototype.rotate = function(r, e, a) {
            return this.transform(t.SVGPathDataTransformer.ROTATE(r, e, a));
        }, r.prototype.matrix = function(r, e, a, i, n, o) {
            return this.transform(t.SVGPathDataTransformer.MATRIX(r, e, a, i, n, o));
        }, r.prototype.skewX = function(r) {
            return this.transform(t.SVGPathDataTransformer.SKEW_X(r));
        }, r.prototype.skewY = function(r) {
            return this.transform(t.SVGPathDataTransformer.SKEW_Y(r));
        }, r.prototype.xSymmetry = function(r) {
            return this.transform(t.SVGPathDataTransformer.X_AXIS_SYMMETRY(r));
        }, r.prototype.ySymmetry = function(r) {
            return this.transform(t.SVGPathDataTransformer.Y_AXIS_SYMMETRY(r));
        }, r.prototype.annotateArcs = function() {
            return this.transform(t.SVGPathDataTransformer.ANNOTATE_ARCS());
        }, r;
    }(), l = function(t) {
        return " " === t || "\t" === t || "\r" === t || "\n" === t;
    }, v = function(t) {
        return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
    }, _ = function(t) {
        function r() {
            var r = t.call(this) || this;
            return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
        }
        return e(r, t), r.prototype.finish = function(t) {
            if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
            return t;
        }, r.prototype.parse = function(t, r) {
            var e = this;
            void 0 === r && (r = []);
            for(var a = function(t) {
                r.push(t), e.curArgs.length = 0, e.canParseCommandOrComma = !0;
            }, i = 0; i < t.length; i++){
                var n = t[i], o = !(this.curCommandType !== N.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s = v(n) && ("0" === this.curNumber && "0" === n || o);
                if (!v(n) || s) if ("e" !== n && "E" !== n) if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                    if (this.curNumber && -1 !== this.curCommandType) {
                        var u = Number(this.curNumber);
                        if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + i);
                        if (this.curCommandType === N.ARC) {
                            if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + i + '"');
                            } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i + '"');
                        }
                        this.curArgs.push(u), this.curArgs.length === d[this.curCommandType] && (N.HORIZ_LINE_TO === this.curCommandType ? a({
                            type: N.HORIZ_LINE_TO,
                            relative: this.curCommandRelative,
                            x: u
                        }) : N.VERT_LINE_TO === this.curCommandType ? a({
                            type: N.VERT_LINE_TO,
                            relative: this.curCommandRelative,
                            y: u
                        }) : this.curCommandType === N.MOVE_TO || this.curCommandType === N.LINE_TO || this.curCommandType === N.SMOOTH_QUAD_TO ? (a({
                            type: this.curCommandType,
                            relative: this.curCommandRelative,
                            x: this.curArgs[0],
                            y: this.curArgs[1]
                        }), N.MOVE_TO === this.curCommandType && (this.curCommandType = N.LINE_TO)) : this.curCommandType === N.CURVE_TO ? a({
                            type: N.CURVE_TO,
                            relative: this.curCommandRelative,
                            x1: this.curArgs[0],
                            y1: this.curArgs[1],
                            x2: this.curArgs[2],
                            y2: this.curArgs[3],
                            x: this.curArgs[4],
                            y: this.curArgs[5]
                        }) : this.curCommandType === N.SMOOTH_CURVE_TO ? a({
                            type: N.SMOOTH_CURVE_TO,
                            relative: this.curCommandRelative,
                            x2: this.curArgs[0],
                            y2: this.curArgs[1],
                            x: this.curArgs[2],
                            y: this.curArgs[3]
                        }) : this.curCommandType === N.QUAD_TO ? a({
                            type: N.QUAD_TO,
                            relative: this.curCommandRelative,
                            x1: this.curArgs[0],
                            y1: this.curArgs[1],
                            x: this.curArgs[2],
                            y: this.curArgs[3]
                        }) : this.curCommandType === N.ARC && a({
                            type: N.ARC,
                            relative: this.curCommandRelative,
                            rX: this.curArgs[0],
                            rY: this.curArgs[1],
                            xRot: this.curArgs[2],
                            lArcFlag: this.curArgs[3],
                            sweepFlag: this.curArgs[4],
                            x: this.curArgs[5],
                            y: this.curArgs[6]
                        })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                    }
                    if (!l(n)) if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
                    else if ("+" !== n && "-" !== n && "." !== n) if (s) this.curNumber = n, this.curNumberHasDecimal = !1;
                    else {
                        if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + i + ".");
                        if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + i + ". Command cannot follow comma");
                        if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) if ("h" === n || "H" === n) this.curCommandType = N.HORIZ_LINE_TO, this.curCommandRelative = "h" === n;
                        else if ("v" === n || "V" === n) this.curCommandType = N.VERT_LINE_TO, this.curCommandRelative = "v" === n;
                        else if ("m" === n || "M" === n) this.curCommandType = N.MOVE_TO, this.curCommandRelative = "m" === n;
                        else if ("l" === n || "L" === n) this.curCommandType = N.LINE_TO, this.curCommandRelative = "l" === n;
                        else if ("c" === n || "C" === n) this.curCommandType = N.CURVE_TO, this.curCommandRelative = "c" === n;
                        else if ("s" === n || "S" === n) this.curCommandType = N.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n;
                        else if ("q" === n || "Q" === n) this.curCommandType = N.QUAD_TO, this.curCommandRelative = "q" === n;
                        else if ("t" === n || "T" === n) this.curCommandType = N.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n;
                        else {
                            if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + i + ".");
                            this.curCommandType = N.ARC, this.curCommandRelative = "a" === n;
                        }
                        else r.push({
                            type: N.CLOSE_PATH
                        }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                    }
                    else this.curNumber = n, this.curNumberHasDecimal = "." === n;
                } else this.curNumber += n, this.curNumberHasDecimal = !0;
                else this.curNumber += n;
                else this.curNumber += n, this.curNumberHasExp = !0;
                else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
            }
            return r;
        }, r.prototype.transform = function(t) {
            return Object.create(this, {
                parse: {
                    value: function(r, e) {
                        void 0 === e && (e = []);
                        for(var a = 0, i = Object.getPrototypeOf(this).parse.call(this, r); a < i.length; a++){
                            var n = i[a], o = t(n);
                            Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
                        }
                        return e;
                    }
                }
            });
        }, r;
    }(O), N = function(r) {
        function a(t) {
            var e = r.call(this) || this;
            return e.commands = "string" == typeof t ? a.parse(t) : t, e;
        }
        return e(a, r), a.prototype.encode = function() {
            return a.encode(this.commands);
        }, a.prototype.getBounds = function() {
            var r = t.SVGPathDataTransformer.CALCULATE_BOUNDS();
            return this.transform(r), r;
        }, a.prototype.transform = function(t) {
            for(var r = [], e = 0, a = this.commands; e < a.length; e++){
                var i = t(a[e]);
                Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
            }
            return this.commands = r, this;
        }, a.encode = function(t) {
            return i(t);
        }, a.parse = function(t) {
            var r = new _, e = [];
            return r.parse(t, e), r.finish(e), e;
        }, a.CLOSE_PATH = 1, a.MOVE_TO = 2, a.HORIZ_LINE_TO = 4, a.VERT_LINE_TO = 8, a.LINE_TO = 16, a.CURVE_TO = 32, a.SMOOTH_CURVE_TO = 64, a.QUAD_TO = 128, a.SMOOTH_QUAD_TO = 256, a.ARC = 512, a.LINE_COMMANDS = a.LINE_TO | a.HORIZ_LINE_TO | a.VERT_LINE_TO, a.DRAWING_COMMANDS = a.HORIZ_LINE_TO | a.VERT_LINE_TO | a.LINE_TO | a.CURVE_TO | a.SMOOTH_CURVE_TO | a.QUAD_TO | a.SMOOTH_QUAD_TO | a.ARC, a;
    }(O), d = ((T = {})[N.MOVE_TO] = 2, T[N.LINE_TO] = 2, T[N.HORIZ_LINE_TO] = 1, T[N.VERT_LINE_TO] = 1, T[N.CLOSE_PATH] = 0, T[N.QUAD_TO] = 4, T[N.SMOOTH_QUAD_TO] = 2, T[N.CURVE_TO] = 6, T[N.SMOOTH_CURVE_TO] = 4, T[N.ARC] = 7, T);
    t.COMMAND_ARG_COUNTS = d, t.SVGPathData = N, t.SVGPathDataParser = _, t.encodeSVGPath = i, Object.defineProperty(t, "__esModule", {
        value: !0
    });
}); //# sourceMappingURL=SVGPathData.cjs.map
}),
"[project]/realestateandlease/node_modules/stackblur-canvas/dist/stackblur-es.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlurStack",
    ()=>BlurStack,
    "canvasRGB",
    ()=>processCanvasRGB,
    "canvasRGBA",
    ()=>processCanvasRGBA,
    "image",
    ()=>processImage,
    "imageDataRGB",
    ()=>processImageDataRGB,
    "imageDataRGBA",
    ()=>processImageDataRGBA
]);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
/* eslint-disable no-bitwise -- used for calculations */ /* eslint-disable unicorn/prefer-query-selector -- aiming at
  backward-compatibility */ /**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/ var mulTable = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
];
var shgTable = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @param {boolean} useOffset
 * @param {boolean} skipStyles
 * @returns {undefined}
 */ function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
    if (typeof img === 'string') {
        img = document.getElementById(img);
    }
    if (!img || Object.prototype.toString.call(img).slice(8, -1) === 'HTMLImageElement' && !('naturalWidth' in img)) {
        return;
    }
    var dimensionType = useOffset ? 'offset' : 'natural';
    var w = img[dimensionType + 'Width'];
    var h = img[dimensionType + 'Height']; // add ImageBitmap support,can blur texture source
    if (Object.prototype.toString.call(img).slice(8, -1) === 'ImageBitmap') {
        w = img.width;
        h = img.height;
    }
    if (typeof canvas === 'string') {
        canvas = document.getElementById(canvas);
    }
    if (!canvas || !('getContext' in canvas)) {
        return;
    }
    if (!skipStyles) {
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
    }
    canvas.width = w;
    canvas.height = h;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
    if (isNaN(radius) || radius < 1) {
        return;
    }
    if (blurAlphaChannel) {
        processCanvasRGBA(canvas, 0, 0, w, h, radius);
    } else {
        processCanvasRGB(canvas, 0, 0, w, h, radius);
    }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */ function getImageDataFromCanvas(canvas, topX, topY, width, height) {
    if (typeof canvas === 'string') {
        canvas = document.getElementById(canvas);
    }
    if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) {
        throw new TypeError('Expecting canvas with `getContext` method ' + 'in processCanvasRGB(A) calls!');
    }
    var context = canvas.getContext('2d');
    try {
        return context.getImageData(topX, topY, width, height);
    } catch (e) {
        throw new Error('unable to access image data: ' + e);
    }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */ function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
    if (isNaN(radius) || radius < 1) {
        return;
    }
    radius |= 0;
    var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
    imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
    canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */ function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
    var pixels = imageData.data;
    var div = 2 * radius + 1; // const w4 = width << 2;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
    var stackStart = new BlurStack();
    var stack = stackStart;
    var stackEnd;
    for(var i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) {
            stackEnd = stack;
        }
    }
    stack.next = stackStart;
    var stackIn = null, stackOut = null, yw = 0, yi = 0;
    var mulSum = mulTable[radius];
    var shgSum = shgTable[radius];
    for(var y = 0; y < height; y++){
        stack = stackStart;
        var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
        for(var _i = 0; _i < radiusPlus1; _i++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
        for(var _i2 = 1; _i2 < radiusPlus1; _i2++){
            var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
            var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
            var rbs = radiusPlus1 - _i2;
            rSum += (stack.r = r) * rbs;
            gSum += (stack.g = g) * rbs;
            bSum += (stack.b = b) * rbs;
            aSum += (stack.a = a) * rbs;
            rInSum += r;
            gInSum += g;
            bInSum += b;
            aInSum += a;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var x = 0; x < width; x++){
            var paInitial = aSum * mulSum >>> shgSum;
            pixels[yi + 3] = paInitial;
            if (paInitial !== 0) {
                var _a2 = 255 / paInitial;
                pixels[yi] = (rSum * mulSum >>> shgSum) * _a2;
                pixels[yi + 1] = (gSum * mulSum >>> shgSum) * _a2;
                pixels[yi + 2] = (bSum * mulSum >>> shgSum) * _a2;
            } else {
                pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            aSum -= aOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            aOutSum -= stackIn.a;
            var _p = x + radius + 1;
            _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[_p];
            gInSum += stackIn.g = pixels[_p + 1];
            bInSum += stackIn.b = pixels[_p + 2];
            aInSum += stackIn.a = pixels[_p + 3];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            aSum += aInSum;
            stackIn = stackIn.next;
            var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
            rOutSum += _r;
            gOutSum += _g;
            bOutSum += _b;
            aOutSum += _a;
            rInSum -= _r;
            gInSum -= _g;
            bInSum -= _b;
            aInSum -= _a;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(var _x = 0; _x < width; _x++){
        yi = _x << 2;
        var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
        stack = stackStart;
        for(var _i3 = 0; _i3 < radiusPlus1; _i3++){
            stack.r = _pr;
            stack.g = _pg;
            stack.b = _pb;
            stack.a = _pa;
            stack = stack.next;
        }
        var yp = width;
        var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
        for(var _i4 = 1; _i4 <= radius; _i4++){
            yi = yp + _x << 2;
            var _rbs = radiusPlus1 - _i4;
            _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
            _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
            _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
            _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
            _rInSum += _pr;
            _gInSum += _pg;
            _bInSum += _pb;
            _aInSum += _pa;
            stack = stack.next;
            if (_i4 < heightMinus1) {
                yp += width;
            }
        }
        yi = _x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var _y = 0; _y < height; _y++){
            var _p2 = yi << 2;
            pixels[_p2 + 3] = _pa = _aSum * mulSum >>> shgSum;
            if (_pa > 0) {
                _pa = 255 / _pa;
                pixels[_p2] = (_rSum * mulSum >>> shgSum) * _pa;
                pixels[_p2 + 1] = (_gSum * mulSum >>> shgSum) * _pa;
                pixels[_p2 + 2] = (_bSum * mulSum >>> shgSum) * _pa;
            } else {
                pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
            }
            _rSum -= _rOutSum;
            _gSum -= _gOutSum;
            _bSum -= _bOutSum;
            _aSum -= _aOutSum;
            _rOutSum -= stackIn.r;
            _gOutSum -= stackIn.g;
            _bOutSum -= stackIn.b;
            _aOutSum -= stackIn.a;
            _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
            _rSum += _rInSum += stackIn.r = pixels[_p2];
            _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
            _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
            _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
            stackIn = stackIn.next;
            _rOutSum += _pr = stackOut.r;
            _gOutSum += _pg = stackOut.g;
            _bOutSum += _pb = stackOut.b;
            _aOutSum += _pa = stackOut.a;
            _rInSum -= _pr;
            _gInSum -= _pg;
            _bInSum -= _pb;
            _aInSum -= _pa;
            stackOut = stackOut.next;
            yi += width;
        }
    }
    return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */ function processCanvasRGB(canvas, topX, topY, width, height, radius) {
    if (isNaN(radius) || radius < 1) {
        return;
    }
    radius |= 0;
    var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
    imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
    canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */ function processImageDataRGB(imageData, topX, topY, width, height, radius) {
    var pixels = imageData.data;
    var div = 2 * radius + 1; // const w4 = width << 2;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
    var stackStart = new BlurStack();
    var stack = stackStart;
    var stackEnd;
    for(var i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) {
            stackEnd = stack;
        }
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;
    var mulSum = mulTable[radius];
    var shgSum = shgTable[radius];
    var p, rbs;
    var yw = 0, yi = 0;
    for(var y = 0; y < height; y++){
        var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb;
        stack = stackStart;
        for(var _i5 = 0; _i5 < radiusPlus1; _i5++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }
        var rInSum = 0, gInSum = 0, bInSum = 0;
        for(var _i6 = 1; _i6 < radiusPlus1; _i6++){
            p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
            rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
            gSum += (stack.g = pg = pixels[p + 1]) * rbs;
            bSum += (stack.b = pb = pixels[p + 2]) * rbs;
            rInSum += pr;
            gInSum += pg;
            bInSum += pb;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var x = 0; x < width; x++){
            pixels[yi] = rSum * mulSum >>> shgSum;
            pixels[yi + 1] = gSum * mulSum >>> shgSum;
            pixels[yi + 2] = bSum * mulSum >>> shgSum;
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[p];
            gInSum += stackIn.g = pixels[p + 1];
            bInSum += stackIn.b = pixels[p + 2];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            stackIn = stackIn.next;
            rOutSum += pr = stackOut.r;
            gOutSum += pg = stackOut.g;
            bOutSum += pb = stackOut.b;
            rInSum -= pr;
            gInSum -= pg;
            bInSum -= pb;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(var _x2 = 0; _x2 < width; _x2++){
        yi = _x2 << 2;
        var _pr2 = pixels[yi], _pg2 = pixels[yi + 1], _pb2 = pixels[yi + 2], _rOutSum2 = radiusPlus1 * _pr2, _gOutSum2 = radiusPlus1 * _pg2, _bOutSum2 = radiusPlus1 * _pb2, _rSum2 = sumFactor * _pr2, _gSum2 = sumFactor * _pg2, _bSum2 = sumFactor * _pb2;
        stack = stackStart;
        for(var _i7 = 0; _i7 < radiusPlus1; _i7++){
            stack.r = _pr2;
            stack.g = _pg2;
            stack.b = _pb2;
            stack = stack.next;
        }
        var _rInSum2 = 0, _gInSum2 = 0, _bInSum2 = 0;
        for(var _i8 = 1, yp = width; _i8 <= radius; _i8++){
            yi = yp + _x2 << 2;
            _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
            _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
            _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
            _rInSum2 += _pr2;
            _gInSum2 += _pg2;
            _bInSum2 += _pb2;
            stack = stack.next;
            if (_i8 < heightMinus1) {
                yp += width;
            }
        }
        yi = _x2;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var _y2 = 0; _y2 < height; _y2++){
            p = yi << 2;
            pixels[p] = _rSum2 * mulSum >>> shgSum;
            pixels[p + 1] = _gSum2 * mulSum >>> shgSum;
            pixels[p + 2] = _bSum2 * mulSum >>> shgSum;
            _rSum2 -= _rOutSum2;
            _gSum2 -= _gOutSum2;
            _bSum2 -= _bOutSum2;
            _rOutSum2 -= stackIn.r;
            _gOutSum2 -= stackIn.g;
            _bOutSum2 -= stackIn.b;
            p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            _rSum2 += _rInSum2 += stackIn.r = pixels[p];
            _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
            _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
            stackIn = stackIn.next;
            _rOutSum2 += _pr2 = stackOut.r;
            _gOutSum2 += _pg2 = stackOut.g;
            _bOutSum2 += _pb2 = stackOut.b;
            _rInSum2 -= _pr2;
            _gInSum2 -= _pg2;
            _bInSum2 -= _pb2;
            stackOut = stackOut.next;
            yi += width;
        }
    }
    return imageData;
}
/**
 *
 */ var BlurStack = /**
 * Set properties.
 */ function BlurStack() {
    _classCallCheck(this, BlurStack);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
};
;
}),
"[project]/realestateandlease/node_modules/fflate/lib/node.cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Some of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
// Mediocre shim
var Worker;
var workerAdd = ";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";
try {
    Worker = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)").Worker;
} catch (e) {}
var node_worker_1 = {};
node_worker_1["default"] = Worker ? function(c, _, msg, transfer, cb) {
    var done = false;
    var w = new Worker(c + workerAdd, {
        eval: true
    }).on('error', function(e) {
        return cb(e, null);
    }).on('message', function(m) {
        return cb(null, m);
    }).on('exit', function(c) {
        if (c && !done) cb(new Error('exited with code ' + c), null);
    });
    w.postMessage(msg, transfer);
    w.terminate = function() {
        done = true;
        return Worker.prototype.terminate.call(w);
    };
    return w;
} : function(_, __, ___, ____, cb) {
    setImmediate(function() {
        return cb(new Error('async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)'), null);
    });
    var NOP = function() {};
    return {
        terminate: NOP,
        postMessage: NOP
    };
};
// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
// fixed length extra bits
var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */ 0,
    0,
    /* impossible */ 0
]);
// fixed distance extra bits
var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */ 0,
    0
]);
// code length index map
var clim = new u8([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
// get base, reverse index map from extra bits
var freb = function(eb, start) {
    var b = new u16(31);
    for(var i = 0; i < 31; ++i){
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new i32(b[30]);
    for(var i = 1; i < 30; ++i){
        for(var j = b[i]; j < b[i + 1]; ++j){
            r[j] = j - b[i] << 5 | i;
        }
    }
    return {
        b: b,
        r: r
    };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r;
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for(var i = 0; i < 32768; ++i){
    // reverse table algorithm from SO
    var x = (i & 0xAAAA) >> 1 | (i & 0x5555) << 1;
    x = (x & 0xCCCC) >> 2 | (x & 0x3333) << 2;
    x = (x & 0xF0F0) >> 4 | (x & 0x0F0F) << 4;
    rev[i] = ((x & 0xFF00) >> 8 | (x & 0x00FF) << 8) >> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = function(cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for(; i < s; ++i){
        if (cd[i]) ++l[cd[i] - 1];
    }
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for(i = 1; i < mb; ++i){
        le[i] = le[i - 1] + l[i - 1] << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for(i = 0; i < s; ++i){
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = i << 4 | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for(var m = v | (1 << r_1) - 1; v <= m; ++v){
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >> rvb] = sv;
                }
            }
        }
    } else {
        co = new u16(s);
        for(i = 0; i < s; ++i){
            if (cd[i]) {
                co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
            }
        }
    }
    return co;
};
// fixed length tree
var flt = new u8(288);
for(var i = 0; i < 144; ++i)flt[i] = 8;
for(var i = 144; i < 256; ++i)flt[i] = 9;
for(var i = 256; i < 280; ++i)flt[i] = 7;
for(var i = 280; i < 288; ++i)flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for(var i = 0; i < 32; ++i)fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function(a) {
    var m = a[0];
    for(var i = 1; i < a.length; ++i){
        if (a[i] > m) m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
// get end of byte
var shft = function(p) {
    return (p + 7) / 8 | 0;
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function(v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length;
    // can't use .constructor in case user-supplied
    return new u8(v.subarray(s, e));
};
/**
 * Codes for errors generated within this library
 */ exports.FlateErrorCode = {
    UnexpectedEOF: 0,
    InvalidBlockType: 1,
    InvalidLengthLiteral: 2,
    InvalidDistance: 3,
    StreamFinished: 4,
    NoStreamHandler: 5,
    InvalidHeader: 6,
    NoCallback: 7,
    InvalidUTF8: 8,
    ExtraFieldTooLong: 9,
    InvalidDate: 10,
    FilenameTooLong: 11,
    StreamFinishing: 12,
    InvalidZipData: 13,
    UnknownCompressionMethod: 14
};
// error codes
var ec = [
    'unexpected EOF',
    'invalid block type',
    'invalid length/literal',
    'invalid distance',
    'stream finished',
    'no stream handler',
    ,
    'no callback',
    'invalid UTF-8 data',
    'extra field too long',
    'date not in range 1980-2099',
    'filename too long',
    'stream finishing',
    'invalid zip data'
];
;
var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace) Error.captureStackTrace(e, err);
    if (!nt) throw e;
    return e;
};
// expands raw DEFLATE data
var inflt = function(dat, st, buf, dict) {
    // source length       dict length
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l) return buf || new u8(0);
    var noBuf = !buf;
    // have to estimate size
    var resize = noBuf || st.i != 2;
    // no state
    var noSt = st.i;
    // Assumes roughly 33% compression ratio average
    if (noBuf) buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function(l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
                if (t > sl) {
                    if (noSt) err(0);
                    break;
                }
                // ensure size
                if (resize) cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8, st.f = final;
                continue;
            } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for(var i = 0; i < hcLen; ++i){
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for(var i = 0; i < tl;){
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    } else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
                        while(n--)ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            } else err(1);
            if (pos > tbts) {
                if (noSt) err(0);
                break;
            }
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17
        if (resize) cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var lpos = pos;
        for(;; lpos = pos){
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
            pos += c & 15;
            if (pos > tbts) {
                if (noSt) err(0);
                break;
            }
            if (!c) err(2);
            if (sym < 256) buf[bt++] = sym;
            else if (sym == 256) {
                lpos = pos, lm = null;
                break;
            } else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
                if (!d) err(3);
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                }
                if (pos > tbts) {
                    if (noSt) err(0);
                    break;
                }
                if (resize) cbuf(bt + 131072);
                var end = bt + add;
                if (bt < dt) {
                    var shift = dl - dt, dend = Math.min(dt, end);
                    if (shift + bt < 0) err(3);
                    for(; bt < dend; ++bt)buf[bt] = dict[shift + bt];
                }
                for(; bt < end; ++bt)buf[bt] = buf[bt - dt];
            }
        }
        st.l = lm, st.p = lpos, st.b = bt, st.f = final;
        if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    }while (!final)
    // don't reallocate for streams or user buffers
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >> 8;
    d[o + 2] |= v >> 16;
};
// creates code lengths from a frequency table
var hTree = function(d, mb) {
    // Need extra info to make a tree
    var t = [];
    for(var i = 0; i < d.length; ++i){
        if (d[i]) t.push({
            s: i,
            f: d[i]
        });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s) return {
        t: et,
        l: 0
    };
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return {
            t: v,
            l: 1
        };
    }
    t.sort(function(a, b) {
        return a.f - b.f;
    });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({
        s: -1,
        f: 25001
    });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = {
        s: -1,
        f: l.f + r.f,
        l: l,
        r: r
    };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while(i1 != s - 1){
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = {
            s: -1,
            f: l.f + r.f,
            l: l,
            r: r
        };
    }
    var maxSym = t2[0].s;
    for(var i = 1; i < s; ++i){
        if (t2[i].s > maxSym) maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
            return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for(; i < s; ++i){
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << mbt - tr[i2_1]);
                tr[i2_1] = mb;
            } else break;
        }
        dt >>= lft;
        while(dt > 0){
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
            else ++i;
        }
        for(; i >= 0 && dt; --i){
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return {
        t: new u8(tr),
        l: mbt
    };
};
// get the max length and assign length codes
var ln = function(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var lc = function(c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while(s && !c[--s]);
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
        cl[cli++] = v;
    };
    for(var i = 1; i <= s; ++i){
        if (c[i] == cln && i != s) ++cls;
        else {
            if (!cln && cls > 2) {
                for(; cls > 138; cls -= 138)w(32754);
                if (cls > 2) {
                    w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
                    cls = 0;
                }
            } else if (cls > 3) {
                w(cln), --cls;
                for(; cls > 6; cls -= 6)w(8304);
                if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
            }
            while(cls--)w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return {
        c: cl.subarray(0, cli),
        n: s
    };
};
// calculate the length of output from tree, code lengths
var clen = function(cf, cl) {
    var l = 0;
    for(var i = 0; i < cl.length; ++i)l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function(out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for(var i = 0; i < s; ++i)out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a.t, mlb = _a.l;
    var _b = hTree(df, 15), ddt = _b.t, mdb = _b.l;
    var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
    var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
    var lcfreq = new u16(19);
    for(var i = 0; i < lclt.length; ++i)++lcfreq[lclt[i] & 31];
    for(var i = 0; i < lcdt.length; ++i)++lcfreq[lcdt[i] & 31];
    var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
    var nlcc = 19;
    for(; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
    if (bs >= 0 && flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for(var i = 0; i < nlcc; ++i)wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [
            lclt,
            lcdt
        ];
        for(var it = 0; it < 2; ++it){
            var clct = lcts[it];
            for(var i = 0; i < clct.length; ++i){
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15) wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
            }
        }
    } else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for(var i = 0; i < li; ++i){
        var sym = syms[i];
        if (sym > 255) {
            var len = sym >> 18 & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7) wbits(out, p, sym >> 23 & 31), p += fleb[len];
            var dst = sym & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3) wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
        } else {
            wbits16(out, p, lm[sym]), p += ll[sym];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new i32([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function(dat, lvl, plvl, pre, post, st) {
    var s = st.z || dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var lst = st.l;
    var pos = (st.r || 0) & 7;
    if (lvl) {
        if (pos) w[0] = st.r >> 3;
        var opt = deo[lvl - 1];
        var n = opt >> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i) {
            return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
        };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new i32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index          l/lind  waitdx          blkpos
        var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
        for(; i + 2 < s; ++i){
            // hash value
            var hv = hsh(i);
            // index mod 32768    previous index mod
            var imod = i & 32767, pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && (rem > 423 || !lst)) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for(var j = 0; j < 286; ++j)lf[j] = 0;
                    for(var j = 0; j < 30; ++j)df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while(dif <= maxd && --ch_1 && imod != pimod){
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for(; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn) break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for(var j = 0; j < mmd; ++j){
                                    var ti = i - dif + j & 32767;
                                    var pti = prev[ti];
                                    var cd = ti - pti & 32767;
                                    if (cd > md) md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += imod - pimod & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one int32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                } else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        for(i = Math.max(i, wi); i < s; ++i){
            syms[li++] = dat[i];
            ++lf[dat[i]];
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        if (!lst) {
            st.r = pos & 7 | w[pos / 8 | 0] << 3;
            // shft(pos) now 1 less if pos & 7 != 0
            pos -= 7;
            st.h = head, st.p = prev, st.i = i, st.w = wi;
        }
    } else {
        for(var i = st.w || 0; i < s + lst; i += 65535){
            // end
            var e = i + 65535;
            if (e >= s) {
                // write final block
                w[pos / 8 | 0] = lst;
                e = s;
            }
            pos = wfblk(w, pos + 1, dat.subarray(i, e));
        }
        st.i = s;
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = /*#__PURE__*/ function() {
    var t = new Int32Array(256);
    for(var i = 0; i < 256; ++i){
        var c = i, k = 9;
        while(--k)c = (c & 1 && -306674912) ^ c >>> 1;
        t[i] = c;
    }
    return t;
}();
// CRC32
var crc = function() {
    var c = -1;
    return {
        p: function(d) {
            // closures have awful performance
            var cr = c;
            for(var i = 0; i < d.length; ++i)cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
            c = cr;
        },
        d: function() {
            return ~c;
        }
    };
};
// Adler32
var adler = function() {
    var a = 1, b = 0;
    return {
        p: function(d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length | 0;
            for(var i = 0; i != l;){
                var e = Math.min(i + 2655, l);
                for(; i < e; ++i)m += n += d[i];
                n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
            }
            a = n, b = m;
        },
        d: function() {
            a %= 65521, b %= 65521;
            return (a & 255) << 24 | (a & 0xFF00) << 8 | (b & 255) << 8 | b >> 8;
        }
    };
};
;
// deflate with opts
var dopt = function(dat, opt, pre, post, st) {
    if (!st) {
        st = {
            l: 1
        };
        if (opt.dictionary) {
            var dict = opt.dictionary.subarray(-32768);
            var newDat = new u8(dict.length + dat.length);
            newDat.set(dict);
            newDat.set(dat, dict.length);
            dat = newDat;
            st.w = dict.length;
        }
    }
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
// Walmart object spread
var mrg = function(a, b) {
    var o = {};
    for(var k in a)o[k] = a[k];
    for(var k in b)o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var wcln = function(fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/\s+/g, '').split(',');
    for(var i = 0; i < dt.length; ++i){
        var v = dt[i], k = ks[i];
        if (typeof v == 'function') {
            fnStr += ';' + k + '=';
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf('[native code]') != -1) {
                    var spInd = st_1.indexOf(' ', 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                } else {
                    fnStr += st_1;
                    for(var t in v.prototype)fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                }
            } else fnStr += st_1;
        } else td[k] = v;
    }
    return fnStr;
};
var ch = [];
// clone bufs
var cbfs = function(v) {
    var tl = [];
    for(var k in v){
        if (v[k].buffer) {
            tl.push((v[k] = new v[k].constructor(v[k])).buffer);
        }
    }
    return tl;
};
// use a worker to execute code
var wrkr = function(fns, init, id, cb) {
    if (!ch[id]) {
        var fnStr = '', td_1 = {}, m = fns.length - 1;
        for(var i = 0; i < m; ++i)fnStr = wcln(fns[i], fnStr, td_1);
        ch[id] = {
            c: wcln(fns[m], fnStr, td_1),
            e: td_1
        };
    }
    var td = mrg({}, ch[id].e);
    return (0, node_worker_1.default)(ch[id].c + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
};
// base async inflate fn
var bInflt = function() {
    return [
        u8,
        u16,
        i32,
        fleb,
        fdeb,
        clim,
        fl,
        fd,
        flrm,
        fdrm,
        rev,
        ec,
        hMap,
        max,
        bits,
        bits16,
        shft,
        slc,
        err,
        inflt,
        inflateSync,
        pbf,
        gopt
    ];
};
var bDflt = function() {
    return [
        u8,
        u16,
        i32,
        fleb,
        fdeb,
        clim,
        revfl,
        revfd,
        flm,
        flt,
        fdm,
        fdt,
        rev,
        deo,
        et,
        hMap,
        wbits,
        wbits16,
        hTree,
        ln,
        lc,
        clen,
        wfblk,
        wblk,
        shft,
        slc,
        dflt,
        dopt,
        deflateSync,
        pbf
    ];
};
// gzip extra
var gze = function() {
    return [
        gzh,
        gzhl,
        wbytes,
        crc,
        crct
    ];
};
// gunzip extra
var guze = function() {
    return [
        gzs,
        gzl
    ];
};
// zlib extra
var zle = function() {
    return [
        zlh,
        wbytes,
        adler
    ];
};
// unzlib extra
var zule = function() {
    return [
        zls
    ];
};
// post buf
var pbf = function(msg) {
    return postMessage(msg, [
        msg.buffer
    ]);
};
// get opts
var gopt = function(o) {
    return o && {
        out: o.size && new u8(o.size),
        dictionary: o.dictionary
    };
};
// async helper
var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err, dat) {
        w.terminate();
        cb(err, dat);
    });
    w.postMessage([
        dat,
        opts
    ], opts.consume ? [
        dat.buffer
    ] : []);
    return function() {
        w.terminate();
    };
};
// auto stream
var astrm = function(strm) {
    strm.ondata = function(dat, final) {
        return postMessage([
            dat,
            final
        ], [
            dat.buffer
        ]);
    };
    return function(ev) {
        if (ev.data.length) {
            strm.push(ev.data[0], ev.data[1]);
            postMessage([
                ev.data[0].length
            ]);
        } else strm.flush();
    };
};
// async stream attach
var astrmify = function(fns, strm, opts, init, id, flush, ext) {
    var t;
    var w = wrkr(fns, init, id, function(err, dat) {
        if (err) w.terminate(), strm.ondata.call(strm, err);
        else if (!Array.isArray(dat)) ext(dat);
        else if (dat.length == 1) {
            strm.queuedSize -= dat[0];
            if (strm.ondrain) strm.ondrain(dat[0]);
        } else {
            if (dat[1]) w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.queuedSize = 0;
    strm.push = function(d, f) {
        if (!strm.ondata) err(5);
        if (t) strm.ondata(err(4, 0, 1), null, !!f);
        strm.queuedSize += d.length;
        w.postMessage([
            d,
            t = f
        ], [
            d.buffer
        ]);
    };
    strm.terminate = function() {
        w.terminate();
    };
    if (flush) {
        strm.flush = function() {
            w.postMessage([]);
        };
    }
};
// read 2 bytes
var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
};
// read 4 bytes
var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
};
// write bytes
var wbytes = function(d, b, v) {
    for(; v; ++b)d[b] = v, v >>>= 8;
};
// gzip header
var gzh = function(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for(var i = 0; i <= fn.length; ++i)c[i + 10] = fn.charCodeAt(i);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8) err(6, 'invalid gzip data');
    var flg = d[3];
    var st = 10;
    if (flg & 4) st += (d[10] | d[11] << 8) + 2;
    for(var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
    return st + (flg & 2);
};
// gzip length
var gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
// gzip header length
var gzhl = function(o) {
    return 10 + (o.filename ? o.filename.length + 1 : 0);
};
// zlib header
var zlh = function(c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = fl << 6 | (o.dictionary && 32);
    c[1] |= 31 - (c[0] << 8 | c[1]) % 31;
    if (o.dictionary) {
        var h = adler();
        h.p(o.dictionary);
        wbytes(c, 2, h.d());
    }
};
// zlib start
var zls = function(d, dict) {
    if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31) err(6, 'invalid zlib data');
    if ((d[1] >> 5 & 1) == +!dict) err(6, 'invalid zlib data: ' + (d[1] & 32 ? 'need' : 'unexpected') + ' dictionary');
    return (d[1] >> 3 & 4) + 2;
};
function StrmOpt(opts, cb) {
    if (typeof opts == 'function') cb = opts, opts = {};
    this.ondata = cb;
    return opts;
}
/**
 * Streaming DEFLATE compression
 */ var Deflate = function() {
    function Deflate(opts, cb) {
        if (typeof opts == 'function') cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
        this.s = {
            l: 0,
            i: 32768,
            w: 32768,
            z: 32768
        };
        // Buffer length must always be 0 mod 32768 for index calculations to be correct when modifying head and prev
        // 98304 = 32768 (lookback) + 65536 (common chunk size)
        this.b = new u8(98304);
        if (this.o.dictionary) {
            var dict = this.o.dictionary.subarray(-32768);
            this.b.set(dict, 32768 - dict.length);
            this.s.i = 32768 - dict.length;
        }
    }
    Deflate.prototype.p = function(c, f) {
        this.ondata(dopt(c, this.o, 0, 0, this.s), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Deflate.prototype.push = function(chunk, final) {
        if (!this.ondata) err(5);
        if (this.s.l) err(4);
        var endLen = chunk.length + this.s.z;
        if (endLen > this.b.length) {
            if (endLen > 2 * this.b.length - 32768) {
                var newBuf = new u8(endLen & -32768);
                newBuf.set(this.b.subarray(0, this.s.z));
                this.b = newBuf;
            }
            var split = this.b.length - this.s.z;
            this.b.set(chunk.subarray(0, split), this.s.z);
            this.s.z = this.b.length;
            this.p(this.b, false);
            this.b.set(this.b.subarray(-32768));
            this.b.set(chunk.subarray(split), 32768);
            this.s.z = chunk.length - split + 32768;
            this.s.i = 32766, this.s.w = 32768;
        } else {
            this.b.set(chunk, this.s.z);
            this.s.z += chunk.length;
        }
        this.s.l = final & 1;
        if (this.s.z > this.s.w + 8191 || final) {
            this.p(this.b, final || false);
            this.s.w = this.s.i, this.s.i -= 2;
        }
    };
    /**
     * Flushes buffered uncompressed data. Useful to immediately retrieve the
     * deflated output for small inputs.
     */ Deflate.prototype.flush = function() {
        if (!this.ondata) err(5);
        if (this.s.l) err(4);
        this.p(this.b, false);
        this.s.w = this.s.i, this.s.i -= 2;
    };
    return Deflate;
}();
exports.Deflate = Deflate;
/**
 * Asynchronous streaming DEFLATE compression
 */ var AsyncDeflate = function() {
    function AsyncDeflate(opts, cb) {
        astrmify([
            bDflt,
            function() {
                return [
                    astrm,
                    Deflate
                ];
            }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
            var strm = new Deflate(ev.data);
            onmessage = astrm(strm);
        }, 6, 1);
    }
    return AsyncDeflate;
}();
exports.AsyncDeflate = AsyncDeflate;
function deflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return cbify(data, opts, [
        bDflt
    ], function(ev) {
        return pbf(deflateSync(ev.data[0], ev.data[1]));
    }, 0, cb);
}
exports.deflate = deflate;
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */ function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
}
exports.deflateSync = deflateSync;
/**
 * Streaming DEFLATE decompression
 */ var Inflate = function() {
    function Inflate(opts, cb) {
        // no StrmOpt here to avoid adding to workerizer
        if (typeof opts == 'function') cb = opts, opts = {};
        this.ondata = cb;
        var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
        this.s = {
            i: 0,
            b: dict ? dict.length : 0
        };
        this.o = new u8(32768);
        this.p = new u8(0);
        if (dict) this.o.set(dict);
    }
    Inflate.prototype.e = function(c) {
        if (!this.ondata) err(5);
        if (this.d) err(4);
        if (!this.p.length) this.p = c;
        else if (c.length) {
            var n = new u8(this.p.length + c.length);
            n.set(this.p), n.set(c, this.p.length), this.p = n;
        }
    };
    Inflate.prototype.c = function(final) {
        this.s.i = +(this.d = final || false);
        var bts = this.s.b;
        var dt = inflt(this.p, this.s, this.o);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */ Inflate.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
    };
    return Inflate;
}();
exports.Inflate = Inflate;
/**
 * Asynchronous streaming DEFLATE decompression
 */ var AsyncInflate = function() {
    function AsyncInflate(opts, cb) {
        astrmify([
            bInflt,
            function() {
                return [
                    astrm,
                    Inflate
                ];
            }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
            var strm = new Inflate(ev.data);
            onmessage = astrm(strm);
        }, 7, 0);
    }
    return AsyncInflate;
}();
exports.AsyncInflate = AsyncInflate;
function inflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return cbify(data, opts, [
        bInflt
    ], function(ev) {
        return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
    }, 1, cb);
}
exports.inflate = inflate;
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param opts The decompression options
 * @returns The decompressed version of the data
 */ function inflateSync(data, opts) {
    return inflt(data, {
        i: 2
    }, opts && opts.out, opts && opts.dictionary);
}
exports.inflateSync = inflateSync;
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */ var Gzip = function() {
    function Gzip(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gzip.prototype.push = function(chunk, final) {
        this.c.p(chunk);
        this.l += chunk.length;
        Deflate.prototype.push.call(this, chunk, final);
    };
    Gzip.prototype.p = function(c, f) {
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, this.s);
        if (this.v) gzh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    /**
     * Flushes buffered uncompressed data. Useful to immediately retrieve the
     * GZIPped output for small inputs.
     */ Gzip.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
    };
    return Gzip;
}();
exports.Gzip = Gzip;
exports.Compress = Gzip;
/**
 * Asynchronous streaming GZIP compression
 */ var AsyncGzip = function() {
    function AsyncGzip(opts, cb) {
        astrmify([
            bDflt,
            gze,
            function() {
                return [
                    astrm,
                    Deflate,
                    Gzip
                ];
            }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
            var strm = new Gzip(ev.data);
            onmessage = astrm(strm);
        }, 8, 1);
    }
    return AsyncGzip;
}();
exports.AsyncGzip = AsyncGzip;
exports.AsyncCompress = AsyncGzip;
function gzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return cbify(data, opts, [
        bDflt,
        gze,
        function() {
            return [
                gzipSync
            ];
        }
    ], function(ev) {
        return pbf(gzipSync(ev.data[0], ev.data[1]));
    }, 2, cb);
}
exports.gzip = gzip;
exports.compress = gzip;
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */ function gzipSync(data, opts) {
    if (!opts) opts = {};
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
exports.gzipSync = gzipSync;
exports.compressSync = gzipSync;
/**
 * Streaming single or multi-member GZIP decompression
 */ var Gunzip = function() {
    function Gunzip(opts, cb) {
        this.v = 1;
        this.r = 0;
        Inflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gunzip.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        this.r += chunk.length;
        if (this.v) {
            var p = this.p.subarray(this.v - 1);
            var s = p.length > 3 ? gzs(p) : 4;
            if (s > p.length) {
                if (!final) return;
            } else if (this.v > 1 && this.onmember) {
                this.onmember(this.r - p.length);
            }
            this.p = p.subarray(s), this.v = 0;
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
        // process concatenated GZIP
        if (this.s.f && !this.s.l && !final) {
            this.v = shft(this.s.p) + 9;
            this.s = {
                i: 0
            };
            this.o = new u8(0);
            this.push(new u8(0), final);
        }
    };
    return Gunzip;
}();
exports.Gunzip = Gunzip;
/**
 * Asynchronous streaming single or multi-member GZIP decompression
 */ var AsyncGunzip = function() {
    function AsyncGunzip(opts, cb) {
        var _this = this;
        astrmify([
            bInflt,
            guze,
            function() {
                return [
                    astrm,
                    Inflate,
                    Gunzip
                ];
            }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
            var strm = new Gunzip(ev.data);
            strm.onmember = function(offset) {
                return postMessage(offset);
            };
            onmessage = astrm(strm);
        }, 9, 0, function(offset) {
            return _this.onmember && _this.onmember(offset);
        });
    }
    return AsyncGunzip;
}();
exports.AsyncGunzip = AsyncGunzip;
function gunzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return cbify(data, opts, [
        bInflt,
        guze,
        function() {
            return [
                gunzipSync
            ];
        }
    ], function(ev) {
        return pbf(gunzipSync(ev.data[0], ev.data[1]));
    }, 3, cb);
}
exports.gunzip = gunzip;
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param opts The decompression options
 * @returns The decompressed version of the data
 */ function gunzipSync(data, opts) {
    var st = gzs(data);
    if (st + 8 > data.length) err(6, 'invalid gzip data');
    return inflt(data.subarray(st, -8), {
        i: 2
    }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
}
exports.gunzipSync = gunzipSync;
/**
 * Streaming Zlib compression
 */ var Zlib = function() {
    function Zlib(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Zlib.prototype.push = function(chunk, final) {
        this.c.p(chunk);
        Deflate.prototype.push.call(this, chunk, final);
    };
    Zlib.prototype.p = function(c, f) {
        var raw = dopt(c, this.o, this.v && (this.o.dictionary ? 6 : 2), f && 4, this.s);
        if (this.v) zlh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    /**
     * Flushes buffered uncompressed data. Useful to immediately retrieve the
     * zlibbed output for small inputs.
     */ Zlib.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
    };
    return Zlib;
}();
exports.Zlib = Zlib;
/**
 * Asynchronous streaming Zlib compression
 */ var AsyncZlib = function() {
    function AsyncZlib(opts, cb) {
        astrmify([
            bDflt,
            zle,
            function() {
                return [
                    astrm,
                    Deflate,
                    Zlib
                ];
            }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
            var strm = new Zlib(ev.data);
            onmessage = astrm(strm);
        }, 10, 1);
    }
    return AsyncZlib;
}();
exports.AsyncZlib = AsyncZlib;
function zlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return cbify(data, opts, [
        bDflt,
        zle,
        function() {
            return [
                zlibSync
            ];
        }
    ], function(ev) {
        return pbf(zlibSync(ev.data[0], ev.data[1]));
    }, 4, cb);
}
exports.zlib = zlib;
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */ function zlibSync(data, opts) {
    if (!opts) opts = {};
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
exports.zlibSync = zlibSync;
/**
 * Streaming Zlib decompression
 */ var Unzlib = function() {
    function Unzlib(opts, cb) {
        Inflate.call(this, opts, cb);
        this.v = opts && opts.dictionary ? 2 : 1;
    }
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzlib.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 6 && !final) return;
            this.p = this.p.subarray(zls(this.p, this.v - 1)), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4) err(6, 'invalid zlib data');
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Unzlib;
}();
exports.Unzlib = Unzlib;
/**
 * Asynchronous streaming Zlib decompression
 */ var AsyncUnzlib = function() {
    function AsyncUnzlib(opts, cb) {
        astrmify([
            bInflt,
            zule,
            function() {
                return [
                    astrm,
                    Inflate,
                    Unzlib
                ];
            }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
            var strm = new Unzlib(ev.data);
            onmessage = astrm(strm);
        }, 11, 0);
    }
    return AsyncUnzlib;
}();
exports.AsyncUnzlib = AsyncUnzlib;
function unzlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return cbify(data, opts, [
        bInflt,
        zule,
        function() {
            return [
                unzlibSync
            ];
        }
    ], function(ev) {
        return pbf(unzlibSync(ev.data[0], gopt(ev.data[1])));
    }, 5, cb);
}
exports.unzlib = unzlib;
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param opts The decompression options
 * @returns The decompressed version of the data
 */ function unzlibSync(data, opts) {
    return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), {
        i: 2
    }, opts && opts.out, opts && opts.dictionary);
}
exports.unzlibSync = unzlibSync;
/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var Decompress = function() {
    function Decompress(opts, cb) {
        this.o = StrmOpt.call(this, opts, cb) || {};
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
    }
    // init substream
    // overriden by AsyncDecompress
    Decompress.prototype.i = function() {
        var _this = this;
        this.s.ondata = function(dat, final) {
            _this.ondata(dat, final);
        };
    };
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Decompress.prototype.push = function(chunk, final) {
        if (!this.ondata) err(5);
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            } else this.p = chunk;
            if (this.p.length > 2) {
                this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o);
                this.i();
                this.s.push(this.p, final);
                this.p = null;
            }
        } else this.s.push(chunk, final);
    };
    return Decompress;
}();
exports.Decompress = Decompress;
/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var AsyncDecompress = function() {
    function AsyncDecompress(opts, cb) {
        Decompress.call(this, opts, cb);
        this.queuedSize = 0;
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
    }
    AsyncDecompress.prototype.i = function() {
        var _this = this;
        this.s.ondata = function(err, dat, final) {
            _this.ondata(err, dat, final);
        };
        this.s.ondrain = function(size) {
            _this.queuedSize -= size;
            if (_this.ondrain) _this.ondrain(size);
        };
    };
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncDecompress.prototype.push = function(chunk, final) {
        this.queuedSize += chunk.length;
        Decompress.prototype.push.call(this, chunk, final);
    };
    return AsyncDecompress;
}();
exports.AsyncDecompress = AsyncDecompress;
function decompress(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
exports.decompress = decompress;
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param opts The decompression options
 * @returns The decompressed version of the data
 */ function decompressSync(data, opts) {
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, opts) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, opts) : unzlibSync(data, opts);
}
exports.decompressSync = decompressSync;
// flatten a directory structure
var fltn = function(d, p, t, o) {
    for(var k in d){
        var val = d[k], n = p + k, op = o;
        if (Array.isArray(val)) op = mrg(o, val[1]), val = val[0];
        if (val instanceof u8) t[n] = [
            val,
            op
        ];
        else {
            t[n += '/'] = [
                new u8(0),
                op
            ];
            fltn(val, n, t, o);
        }
    }
};
// text encoder
var te = typeof TextEncoder != 'undefined' && /*#__PURE__*/ new TextEncoder();
// text decoder
var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();
// text decoder stream
var tds = 0;
try {
    td.decode(et, {
        stream: true
    });
    tds = 1;
} catch (e) {}
// decode UTF8
var dutf8 = function(d) {
    for(var r = '', i = 0;;){
        var c = d[i++];
        var eb = (c > 127) + (c > 223) + (c > 239);
        if (i + eb > d.length) return {
            s: r,
            r: slc(d, i - 1)
        };
        if (!eb) r += String.fromCharCode(c);
        else if (eb == 3) {
            c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else if (eb & 1) r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
        else r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
    }
};
/**
 * Streaming UTF-8 decoding
 */ var DecodeUTF8 = function() {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is decoded
     */ function DecodeUTF8(cb) {
        this.ondata = cb;
        if (tds) this.t = new TextDecoder();
        else this.p = et;
    }
    /**
     * Pushes a chunk to be decoded from UTF-8 binary
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ DecodeUTF8.prototype.push = function(chunk, final) {
        if (!this.ondata) err(5);
        final = !!final;
        if (this.t) {
            this.ondata(this.t.decode(chunk, {
                stream: true
            }), final);
            if (final) {
                if (this.t.decode().length) err(8);
                this.t = null;
            }
            return;
        }
        if (!this.p) err(4);
        var dat = new u8(this.p.length + chunk.length);
        dat.set(this.p);
        dat.set(chunk, this.p.length);
        var _a = dutf8(dat), s = _a.s, r = _a.r;
        if (final) {
            if (r.length) err(8);
            this.p = null;
        } else this.p = r;
        this.ondata(s, final);
    };
    return DecodeUTF8;
}();
exports.DecodeUTF8 = DecodeUTF8;
/**
 * Streaming UTF-8 encoding
 */ var EncodeUTF8 = function() {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is encoded
     */ function EncodeUTF8(cb) {
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be encoded to UTF-8
     * @param chunk The string data to push
     * @param final Whether this is the last chunk
     */ EncodeUTF8.prototype.push = function(chunk, final) {
        if (!this.ondata) err(5);
        if (this.d) err(4);
        this.ondata(strToU8(chunk), this.d = final || false);
    };
    return EncodeUTF8;
}();
exports.EncodeUTF8 = EncodeUTF8;
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */ function strToU8(str, latin1) {
    if (latin1) {
        var ar_1 = new u8(str.length);
        for(var i = 0; i < str.length; ++i)ar_1[i] = str.charCodeAt(i);
        return ar_1;
    }
    if (te) return te.encode(str);
    var l = str.length;
    var ar = new u8(str.length + (str.length >> 1));
    var ai = 0;
    var w = function(v) {
        ar[ai++] = v;
    };
    for(var i = 0; i < l; ++i){
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + (l - i << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1) w(c);
        else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);
        else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
        else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
    }
    return slc(ar, 0, ai);
}
exports.strToU8 = strToU8;
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */ function strFromU8(dat, latin1) {
    if (latin1) {
        var r = '';
        for(var i = 0; i < dat.length; i += 16384)r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
        return r;
    } else if (td) {
        return td.decode(dat);
    } else {
        var _a = dutf8(dat), s = _a.s, r = _a.r;
        if (r.length) err(8);
        return s;
    }
}
exports.strFromU8 = strFromU8;
;
// deflate bit flag
var dbf = function(l) {
    return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
// skip local zip header
var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
// read zip header
var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
    var _a = z && bs == 4294967295 ? z64e(d, es) : [
        bs,
        b4(d, b + 24),
        b4(d, b + 42)
    ], sc = _a[0], su = _a[1], off = _a[2];
    return [
        b2(d, b + 10),
        sc,
        su,
        fn,
        es + b2(d, b + 30) + b2(d, b + 32),
        off
    ];
};
// read zip64 extra field
var z64e = function(d, b) {
    for(; b2(d, b) != 1; b += 4 + b2(d, b + 2));
    return [
        b8(d, b + 12),
        b8(d, b + 4),
        b8(d, b + 20)
    ];
};
// extra field length
var exfl = function(ex) {
    var le = 0;
    if (ex) {
        for(var k in ex){
            var l = ex[k].length;
            if (l > 65535) err(9);
            le += l + 4;
        }
    }
    return le;
};
// write zip header
var wzh = function(d, b, f, fn, u, c, ce, co) {
    var fl = fn.length, ex = f.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
    if (ce != null) d[b++] = 20, d[b++] = f.os;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119) err(10);
    wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
    if (c != -1) {
        wbytes(d, b, f.crc);
        wbytes(d, b + 4, c < 0 ? -c - 2 : c);
        wbytes(d, b + 8, f.size);
    }
    wbytes(d, b + 12, fl);
    wbytes(d, b + 14, exl), b += 16;
    if (ce != null) {
        wbytes(d, b, col);
        wbytes(d, b + 6, f.attrs);
        wbytes(d, b + 10, ce), b += 14;
    }
    d.set(fn, b);
    b += fl;
    if (exl) {
        for(var k in ex){
            var exf = ex[k], l = exf.length;
            wbytes(d, b, +k);
            wbytes(d, b + 2, l);
            d.set(exf, b + 4), b += 4 + l;
        }
    }
    if (col) d.set(co, b), b += col;
    return b;
};
// write zip footer (end of central directory)
var wzf = function(o, b, c, d, e) {
    wbytes(o, b, 0x6054B50); // skip disk
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
};
/**
 * A pass-through stream to keep data uncompressed in a ZIP archive.
 */ var ZipPassThrough = function() {
    /**
     * Creates a pass-through stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     */ function ZipPassThrough(filename) {
        this.filename = filename;
        this.c = crc();
        this.size = 0;
        this.compression = 0;
    }
    /**
     * Processes a chunk and pushes to the output stream. You can override this
     * method in a subclass for custom behavior, but by default this passes
     * the data through. You must call this.ondata(err, chunk, final) at some
     * point in this method.
     * @param chunk The chunk to process
     * @param final Whether this is the last chunk
     */ ZipPassThrough.prototype.process = function(chunk, final) {
        this.ondata(null, chunk, final);
    };
    /**
     * Pushes a chunk to be added. If you are subclassing this with a custom
     * compression algorithm, note that you must push data from the source
     * file only, pre-compression.
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ ZipPassThrough.prototype.push = function(chunk, final) {
        if (!this.ondata) err(5);
        this.c.p(chunk);
        this.size += chunk.length;
        if (final) this.crc = this.c.d();
        this.process(chunk, final || false);
    };
    return ZipPassThrough;
}();
exports.ZipPassThrough = ZipPassThrough;
// I don't extend because TypeScript extension adds 1kB of runtime bloat
/**
 * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
 * for better performance
 */ var ZipDeflate = function() {
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */ function ZipDeflate(filename, opts) {
        var _this = this;
        if (!opts) opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new Deflate(opts, function(dat, final) {
            _this.ondata(null, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
    }
    ZipDeflate.prototype.process = function(chunk, final) {
        try {
            this.d.push(chunk, final);
        } catch (e) {
            this.ondata(e, null, final);
        }
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ ZipDeflate.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
    };
    return ZipDeflate;
}();
exports.ZipDeflate = ZipDeflate;
/**
 * Asynchronous streaming DEFLATE compression for ZIP archives
 */ var AsyncZipDeflate = function() {
    /**
     * Creates an asynchronous DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */ function AsyncZipDeflate(filename, opts) {
        var _this = this;
        if (!opts) opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new AsyncDeflate(opts, function(err, dat, final) {
            _this.ondata(err, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
        this.terminate = this.d.terminate;
    }
    AsyncZipDeflate.prototype.process = function(chunk, final) {
        this.d.push(chunk, final);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncZipDeflate.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
    };
    return AsyncZipDeflate;
}();
exports.AsyncZipDeflate = AsyncZipDeflate;
// TODO: Better tree shaking
/**
 * A zippable archive to which files can incrementally be added
 */ var Zip = function() {
    /**
     * Creates an empty ZIP archive to which files can be added
     * @param cb The callback to call whenever data for the generated ZIP archive
     *           is available
     */ function Zip(cb) {
        this.ondata = cb;
        this.u = [];
        this.d = 1;
    }
    /**
     * Adds a file to the ZIP archive
     * @param file The file stream to add
     */ Zip.prototype.add = function(file) {
        var _this = this;
        if (!this.ondata) err(5);
        // finishing or finished
        if (this.d & 2) this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
        else {
            var f = strToU8(file.filename), fl_1 = f.length;
            var com = file.comment, o = com && strToU8(com);
            var u = fl_1 != file.filename.length || o && com.length != o.length;
            var hl_1 = fl_1 + exfl(file.extra) + 30;
            if (fl_1 > 65535) this.ondata(err(11, 0, 1), null, false);
            var header = new u8(hl_1);
            wzh(header, 0, file, f, u, -1);
            var chks_1 = [
                header
            ];
            var pAll_1 = function() {
                for(var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++){
                    var chk = chks_2[_i];
                    _this.ondata(null, chk, false);
                }
                chks_1 = [];
            };
            var tr_1 = this.d;
            this.d = 0;
            var ind_1 = this.u.length;
            var uf_1 = mrg(file, {
                f: f,
                u: u,
                o: o,
                t: function() {
                    if (file.terminate) file.terminate();
                },
                r: function() {
                    pAll_1();
                    if (tr_1) {
                        var nxt = _this.u[ind_1 + 1];
                        if (nxt) nxt.r();
                        else _this.d = 1;
                    }
                    tr_1 = 1;
                }
            });
            var cl_1 = 0;
            file.ondata = function(err, dat, final) {
                if (err) {
                    _this.ondata(err, dat, final);
                    _this.terminate();
                } else {
                    cl_1 += dat.length;
                    chks_1.push(dat);
                    if (final) {
                        var dd = new u8(16);
                        wbytes(dd, 0, 0x8074B50);
                        wbytes(dd, 4, file.crc);
                        wbytes(dd, 8, cl_1);
                        wbytes(dd, 12, file.size);
                        chks_1.push(dd);
                        uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
                        if (tr_1) uf_1.r();
                        tr_1 = 1;
                    } else if (tr_1) pAll_1();
                }
            };
            this.u.push(uf_1);
        }
    };
    /**
     * Ends the process of adding files and prepares to emit the final chunks.
     * This *must* be called after adding all desired files for the resulting
     * ZIP file to work properly.
     */ Zip.prototype.end = function() {
        var _this = this;
        if (this.d & 2) {
            this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
            return;
        }
        if (this.d) this.e();
        else this.u.push({
            r: function() {
                if (!(_this.d & 1)) return;
                _this.u.splice(-1, 1);
                _this.e();
            },
            t: function() {}
        });
        this.d = 3;
    };
    Zip.prototype.e = function() {
        var bt = 0, l = 0, tl = 0;
        for(var _i = 0, _a = this.u; _i < _a.length; _i++){
            var f = _a[_i];
            tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
        }
        var out = new u8(tl + 22);
        for(var _b = 0, _c = this.u; _b < _c.length; _b++){
            var f = _c[_b];
            wzh(out, bt, f, f.f, f.u, -f.c - 2, l, f.o);
            bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
        }
        wzf(out, bt, this.u.length, tl, l);
        this.ondata(null, out, true);
        this.d = 2;
    };
    /**
     * A method to terminate any internal workers used by the stream. Subsequent
     * calls to add() will fail.
     */ Zip.prototype.terminate = function() {
        for(var _i = 0, _a = this.u; _i < _a.length; _i++){
            var f = _a[_i];
            f.t();
        }
        this.d = 2;
    };
    return Zip;
}();
exports.Zip = Zip;
function zip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    var r = {};
    fltn(data, '', r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var cbd = function(a, b) {
        mt(function() {
            cb(a, b);
        });
    };
    mt(function() {
        cbd = cb;
    });
    var cbf = function() {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for(var i = 0; i < slft; ++i){
            var f = files[i];
            try {
                var l = f.c.length;
                wzh(out, tot, f, f.f, f.u, l);
                var badd = 30 + f.f.length + exfl(f.extra);
                var loc = tot + badd;
                out.set(f.c, loc);
                wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
            } catch (e) {
                return cbd(e, null);
            }
        }
        wzf(out, o, files.length, cdl, oe);
        cbd(null, out);
    };
    if (!lft) cbf();
    var _loop_1 = function(i) {
        var fn = k[i];
        var _a = r[fn], file = _a[0], p = _a[1];
        var c = crc(), size = file.length;
        c.p(file);
        var f = strToU8(fn), s = f.length;
        var com = p.comment, m = com && strToU8(com), ms = m && m.length;
        var exl = exfl(p.extra);
        var compression = p.level == 0 ? 0 : 8;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cbd(e, null);
            } else {
                var l = d.length;
                files[i] = mrg(p, {
                    size: size,
                    crc: c.d(),
                    c: d,
                    f: f,
                    m: m,
                    u: s != fn.length || m && com.length != ms,
                    compression: compression
                });
                o += 30 + s + exl + l;
                tot += 76 + 2 * (s + exl) + (ms || 0) + l;
                if (!--lft) cbf();
            }
        };
        if (s > 65535) cbl(err(11, 0, 1), null);
        if (!compression) cbl(null, file);
        else if (size < 160000) {
            try {
                cbl(null, deflateSync(file, p));
            } catch (e) {
                cbl(e, null);
            }
        } else term.push(deflate(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for(var i = 0; i < slft; ++i){
        _loop_1(i);
    }
    return tAll;
}
exports.zip = zip;
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */ function zipSync(data, opts) {
    if (!opts) opts = {};
    var r = {};
    var files = [];
    fltn(data, '', r, opts);
    var o = 0;
    var tot = 0;
    for(var fn in r){
        var _a = r[fn], file = _a[0], p = _a[1];
        var compression = p.level == 0 ? 0 : 8;
        var f = strToU8(fn), s = f.length;
        var com = p.comment, m = com && strToU8(com), ms = m && m.length;
        var exl = exfl(p.extra);
        if (s > 65535) err(11);
        var d = compression ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push(mrg(p, {
            size: file.length,
            crc: c.d(),
            c: d,
            f: f,
            m: m,
            u: s != fn.length || m && com.length != ms,
            o: o,
            compression: compression
        }));
        o += 30 + s + exl + l;
        tot += 76 + 2 * (s + exl) + (ms || 0) + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for(var i = 0; i < files.length; ++i){
        var f = files[i];
        wzh(out, f.o, f, f.f, f.u, f.c.length);
        var badd = 30 + f.f.length + exfl(f.extra);
        out.set(f.c, f.o + badd);
        wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
}
exports.zipSync = zipSync;
/**
 * Streaming pass-through decompression for ZIP archives
 */ var UnzipPassThrough = function() {
    function UnzipPassThrough() {}
    UnzipPassThrough.prototype.push = function(data, final) {
        this.ondata(null, data, final);
    };
    UnzipPassThrough.compression = 0;
    return UnzipPassThrough;
}();
exports.UnzipPassThrough = UnzipPassThrough;
/**
 * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
 * better performance.
 */ var UnzipInflate = function() {
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */ function UnzipInflate() {
        var _this = this;
        this.i = new Inflate(function(dat, final) {
            _this.ondata(null, dat, final);
        });
    }
    UnzipInflate.prototype.push = function(data, final) {
        try {
            this.i.push(data, final);
        } catch (e) {
            this.ondata(e, null, final);
        }
    };
    UnzipInflate.compression = 8;
    return UnzipInflate;
}();
exports.UnzipInflate = UnzipInflate;
/**
 * Asynchronous streaming DEFLATE decompression for ZIP archives
 */ var AsyncUnzipInflate = function() {
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */ function AsyncUnzipInflate(_, sz) {
        var _this = this;
        if (sz < 320000) {
            this.i = new Inflate(function(dat, final) {
                _this.ondata(null, dat, final);
            });
        } else {
            this.i = new AsyncInflate(function(err, dat, final) {
                _this.ondata(err, dat, final);
            });
            this.terminate = this.i.terminate;
        }
    }
    AsyncUnzipInflate.prototype.push = function(data, final) {
        if (this.i.terminate) data = slc(data, 0);
        this.i.push(data, final);
    };
    AsyncUnzipInflate.compression = 8;
    return AsyncUnzipInflate;
}();
exports.AsyncUnzipInflate = AsyncUnzipInflate;
/**
 * A ZIP archive decompression stream that emits files as they are discovered
 */ var Unzip = function() {
    /**
     * Creates a ZIP decompression stream
     * @param cb The callback to call whenever a file in the ZIP archive is found
     */ function Unzip(cb) {
        this.onfile = cb;
        this.k = [];
        this.o = {
            0: UnzipPassThrough
        };
        this.p = et;
    }
    /**
     * Pushes a chunk to be unzipped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzip.prototype.push = function(chunk, final) {
        var _this = this;
        if (!this.onfile) err(5);
        if (!this.p) err(4);
        if (this.c > 0) {
            var len = Math.min(this.c, chunk.length);
            var toAdd = chunk.subarray(0, len);
            this.c -= len;
            if (this.d) this.d.push(toAdd, !this.c);
            else this.k[0].push(toAdd);
            chunk = chunk.subarray(len);
            if (chunk.length) return this.push(chunk, final);
        } else {
            var f = 0, i = 0, is = void 0, buf = void 0;
            if (!this.p.length) buf = chunk;
            else if (!chunk.length) buf = this.p;
            else {
                buf = new u8(this.p.length + chunk.length);
                buf.set(this.p), buf.set(chunk, this.p.length);
            }
            var l = buf.length, oc = this.c, add = oc && this.d;
            var _loop_2 = function() {
                var _a;
                var sig = b4(buf, i);
                if (sig == 0x4034B50) {
                    f = 1, is = i;
                    this_1.d = null;
                    this_1.c = 0;
                    var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);
                    if (l > i + 30 + fnl + es) {
                        var chks_3 = [];
                        this_1.k.unshift(chks_3);
                        f = 2;
                        var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);
                        var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);
                        if (sc_1 == 4294967295) {
                            _a = dd ? [
                                -2
                            ] : z64e(buf, i), sc_1 = _a[0], su_1 = _a[1];
                        } else if (dd) sc_1 = -1;
                        i += es;
                        this_1.c = sc_1;
                        var d_1;
                        var file_1 = {
                            name: fn_1,
                            compression: cmp_1,
                            start: function() {
                                if (!file_1.ondata) err(5);
                                if (!sc_1) file_1.ondata(null, et, true);
                                else {
                                    var ctr = _this.o[cmp_1];
                                    if (!ctr) file_1.ondata(err(14, 'unknown compression type ' + cmp_1, 1), null, false);
                                    d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                                    d_1.ondata = function(err, dat, final) {
                                        file_1.ondata(err, dat, final);
                                    };
                                    for(var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++){
                                        var dat = chks_4[_i];
                                        d_1.push(dat, false);
                                    }
                                    if (_this.k[0] == chks_3 && _this.c) _this.d = d_1;
                                    else d_1.push(et, true);
                                }
                            },
                            terminate: function() {
                                if (d_1 && d_1.terminate) d_1.terminate();
                            }
                        };
                        if (sc_1 >= 0) file_1.size = sc_1, file_1.originalSize = su_1;
                        this_1.onfile(file_1);
                    }
                    return "break";
                } else if (oc) {
                    if (sig == 0x8074B50) {
                        is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
                        return "break";
                    } else if (sig == 0x2014B50) {
                        is = i -= 4, f = 3, this_1.c = 0;
                        return "break";
                    }
                }
            };
            var this_1 = this;
            for(; i < l - 4; ++i){
                var state_1 = _loop_2();
                if (state_1 === "break") break;
            }
            this.p = et;
            if (oc < 0) {
                var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 0x8074B50 && 4)) : buf.subarray(0, i);
                if (add) add.push(dat, !!f);
                else this.k[+(f == 2)].push(dat);
            }
            if (f & 2) return this.push(buf.subarray(i), final);
            this.p = buf.subarray(i);
        }
        if (final) {
            if (this.c) err(13);
            this.p = null;
        }
    };
    /**
     * Registers a decoder with the stream, allowing for files compressed with
     * the compression type provided to be expanded correctly
     * @param decoder The decoder constructor
     */ Unzip.prototype.register = function(decoder) {
        this.o[decoder.compression] = decoder;
    };
    return Unzip;
}();
exports.Unzip = Unzip;
var mt = typeof queueMicrotask == 'function' ? queueMicrotask : typeof setTimeout == 'function' ? setTimeout : function(fn) {
    fn();
};
function unzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != 'function') err(7);
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var files = {};
    var cbd = function(a, b) {
        mt(function() {
            cb(a, b);
        });
    };
    mt(function() {
        cbd = cb;
    });
    var e = data.length - 22;
    for(; b4(data, e) != 0x6054B50; --e){
        if (!e || data.length - e > 65558) {
            cbd(err(13, 0, 1), null);
            return tAll;
        }
    }
    ;
    var lft = b2(data, e + 8);
    if (lft) {
        var c = lft;
        var o = b4(data, e + 16);
        var z = o == 4294967295 || c == 65535;
        if (z) {
            var ze = b4(data, e - 12);
            z = b4(data, ze) == 0x6064B50;
            if (z) {
                c = lft = b4(data, ze + 32);
                o = b4(data, ze + 48);
            }
        }
        var fltr = opts && opts.filter;
        var _loop_3 = function(i) {
            var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
            o = no;
            var cbl = function(e, d) {
                if (e) {
                    tAll();
                    cbd(e, null);
                } else {
                    if (d) files[fn] = d;
                    if (!--lft) cbd(null, files);
                }
            };
            if (!fltr || fltr({
                name: fn,
                size: sc,
                originalSize: su,
                compression: c_1
            })) {
                if (!c_1) cbl(null, slc(data, b, b + sc));
                else if (c_1 == 8) {
                    var infl = data.subarray(b, b + sc);
                    // Synchronously decompress under 512KB, or barely-compressed data
                    if (su < 524288 || sc > 0.8 * su) {
                        try {
                            cbl(null, inflateSync(infl, {
                                out: new u8(su)
                            }));
                        } catch (e) {
                            cbl(e, null);
                        }
                    } else term.push(inflate(infl, {
                        size: su
                    }, cbl));
                } else cbl(err(14, 'unknown compression type ' + c_1, 1), null);
            } else cbl(null, null);
        };
        for(var i = 0; i < c; ++i){
            _loop_3(i);
        }
    } else cbd(null, {});
    return tAll;
}
exports.unzip = unzip;
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @param opts The ZIP extraction options
 * @returns The decompressed files
 */ function unzipSync(data, opts) {
    var files = {};
    var e = data.length - 22;
    for(; b4(data, e) != 0x6054B50; --e){
        if (!e || data.length - e > 65558) err(13);
    }
    ;
    var c = b2(data, e + 8);
    if (!c) return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295 || c == 65535;
    if (z) {
        var ze = b4(data, e - 12);
        z = b4(data, ze) == 0x6064B50;
        if (z) {
            c = b4(data, ze + 32);
            o = b4(data, ze + 48);
        }
    }
    var fltr = opts && opts.filter;
    for(var i = 0; i < c; ++i){
        var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        if (!fltr || fltr({
            name: fn,
            size: sc,
            originalSize: su,
            compression: c_2
        })) {
            if (!c_2) files[fn] = slc(data, b, b + sc);
            else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b, b + sc), {
                out: new u8(su)
            });
            else err(14, 'unknown compression type ' + c_2);
        }
    }
    return files;
}
exports.unzipSync = unzipSync;
}),
"[project]/realestateandlease/node_modules/iobuffer/lib-esm/text.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
function decode(bytes, encoding = 'utf8') {
    const decoder = new TextDecoder(encoding);
    return decoder.decode(bytes);
}
const encoder = new TextEncoder();
function encode(str) {
    return encoder.encode(str);
} //# sourceMappingURL=text.js.map
}),
"[project]/realestateandlease/node_modules/iobuffer/lib-esm/IOBuffer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IOBuffer",
    ()=>IOBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/iobuffer/lib-esm/text.js [app-route] (ecmascript)");
;
const defaultByteLength = 1024 * 8;
const hostBigEndian = (()=>{
    const array = new Uint8Array(4);
    const view = new Uint32Array(array.buffer);
    return !((view[0] = 1) & array[0]);
})();
const typedArrays = {
    int8: globalThis.Int8Array,
    uint8: globalThis.Uint8Array,
    int16: globalThis.Int16Array,
    uint16: globalThis.Uint16Array,
    int32: globalThis.Int32Array,
    uint32: globalThis.Uint32Array,
    uint64: globalThis.BigUint64Array,
    int64: globalThis.BigInt64Array,
    float32: globalThis.Float32Array,
    float64: globalThis.Float64Array
};
class IOBuffer {
    /**
     * Reference to the internal ArrayBuffer object.
     */ buffer;
    /**
     * Byte length of the internal ArrayBuffer.
     */ byteLength;
    /**
     * Byte offset of the internal ArrayBuffer.
     */ byteOffset;
    /**
     * Byte length of the internal ArrayBuffer.
     */ length;
    /**
     * The current offset of the buffer's pointer.
     */ offset;
    lastWrittenByte;
    littleEndian;
    _data;
    _mark;
    _marks;
    /**
     * Create a new IOBuffer.
     * @param data - The data to construct the IOBuffer with.
     * If data is a number, it will be the new buffer's length<br>
     * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
     * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
     * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
     * @param options - An object for the options.
     * @returns A new IOBuffer instance.
     */ constructor(data = defaultByteLength, options = {}){
        let dataIsGiven = false;
        if (typeof data === 'number') {
            data = new ArrayBuffer(data);
        } else {
            dataIsGiven = true;
            this.lastWrittenByte = data.byteLength;
        }
        const offset = options.offset ? options.offset >>> 0 : 0;
        const byteLength = data.byteLength - offset;
        let dvOffset = offset;
        if (ArrayBuffer.isView(data) || data instanceof IOBuffer) {
            if (data.byteLength !== data.buffer.byteLength) {
                dvOffset = data.byteOffset + offset;
            }
            data = data.buffer;
        }
        if (dataIsGiven) {
            this.lastWrittenByte = byteLength;
        } else {
            this.lastWrittenByte = 0;
        }
        this.buffer = data;
        this.length = byteLength;
        this.byteLength = byteLength;
        this.byteOffset = dvOffset;
        this.offset = 0;
        this.littleEndian = true;
        this._data = new DataView(this.buffer, dvOffset, byteLength);
        this._mark = 0;
        this._marks = [];
    }
    /**
     * Checks if the memory allocated to the buffer is sufficient to store more
     * bytes after the offset.
     * @param byteLength - The needed memory in bytes.
     * @returns `true` if there is sufficient space and `false` otherwise.
     */ available(byteLength = 1) {
        return this.offset + byteLength <= this.length;
    }
    /**
     * Check if little-endian mode is used for reading and writing multi-byte
     * values.
     * @returns `true` if little-endian mode is used, `false` otherwise.
     */ isLittleEndian() {
        return this.littleEndian;
    }
    /**
     * Set little-endian mode for reading and writing multi-byte values.
     * @returns This.
     */ setLittleEndian() {
        this.littleEndian = true;
        return this;
    }
    /**
     * Check if big-endian mode is used for reading and writing multi-byte values.
     * @returns `true` if big-endian mode is used, `false` otherwise.
     */ isBigEndian() {
        return !this.littleEndian;
    }
    /**
     * Switches to big-endian mode for reading and writing multi-byte values.
     * @returns This.
     */ setBigEndian() {
        this.littleEndian = false;
        return this;
    }
    /**
     * Move the pointer n bytes forward.
     * @param n - Number of bytes to skip.
     * @returns This.
     */ skip(n = 1) {
        this.offset += n;
        return this;
    }
    /**
     * Move the pointer n bytes backward.
     * @param n - Number of bytes to move back.
     * @returns This.
     */ back(n = 1) {
        this.offset -= n;
        return this;
    }
    /**
     * Move the pointer to the given offset.
     * @param offset - The offset to move to.
     * @returns This.
     */ seek(offset) {
        this.offset = offset;
        return this;
    }
    /**
     * Store the current pointer offset.
     * @see {@link IOBuffer#reset}
     * @returns This.
     */ mark() {
        this._mark = this.offset;
        return this;
    }
    /**
     * Move the pointer back to the last pointer offset set by mark.
     * @see {@link IOBuffer#mark}
     * @returns This.
     */ reset() {
        this.offset = this._mark;
        return this;
    }
    /**
     * Push the current pointer offset to the mark stack.
     * @see {@link IOBuffer#popMark}
     * @returns This.
     */ pushMark() {
        this._marks.push(this.offset);
        return this;
    }
    /**
     * Pop the last pointer offset from the mark stack, and set the current
     * pointer offset to the popped value.
     * @see {@link IOBuffer#pushMark}
     * @returns This.
     */ popMark() {
        const offset = this._marks.pop();
        if (offset === undefined) {
            throw new Error('Mark stack empty');
        }
        this.seek(offset);
        return this;
    }
    /**
     * Move the pointer offset back to 0.
     * @returns This.
     */ rewind() {
        this.offset = 0;
        return this;
    }
    /**
     * Make sure the buffer has sufficient memory to write a given byteLength at
     * the current pointer offset.
     * If the buffer's memory is insufficient, this method will create a new
     * buffer (a copy) with a length that is twice (byteLength + current offset).
     * @param byteLength - The needed memory in bytes.
     * @returns This.
     */ ensureAvailable(byteLength = 1) {
        if (!this.available(byteLength)) {
            const lengthNeeded = this.offset + byteLength;
            const newLength = lengthNeeded * 2;
            const newArray = new Uint8Array(newLength);
            newArray.set(new Uint8Array(this.buffer));
            this.buffer = newArray.buffer;
            this.length = newLength;
            this.byteLength = newLength;
            this._data = new DataView(this.buffer);
        }
        return this;
    }
    /**
     * Read a byte and return false if the byte's value is 0, or true otherwise.
     * Moves pointer forward by one byte.
     * @returns The read boolean.
     */ readBoolean() {
        return this.readUint8() !== 0;
    }
    /**
     * Read a signed 8-bit integer and move pointer forward by 1 byte.
     * @returns The read byte.
     */ readInt8() {
        return this._data.getInt8(this.offset++);
    }
    /**
     * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
     * @returns The read byte.
     */ readUint8() {
        return this._data.getUint8(this.offset++);
    }
    /**
     * Alias for {@link IOBuffer#readUint8}.
     * @returns The read byte.
     */ readByte() {
        return this.readUint8();
    }
    /**
     * Read `n` bytes and move pointer forward by `n` bytes.
     * @param n - Number of bytes to read.
     * @returns The read bytes.
     */ readBytes(n = 1) {
        return this.readArray(n, 'uint8');
    }
    /**
     * Creates an array of corresponding to the type `type` and size `size`.
     * For example type `uint8` will create a `Uint8Array`.
     * @param size - size of the resulting array
     * @param type - number type of elements to read
     * @returns The read array.
     */ readArray(size, type) {
        const bytes = typedArrays[type].BYTES_PER_ELEMENT * size;
        const offset = this.byteOffset + this.offset;
        const slice = this.buffer.slice(offset, offset + bytes);
        if (this.littleEndian === hostBigEndian && type !== 'uint8' && type !== 'int8') {
            const slice = new Uint8Array(this.buffer.slice(offset, offset + bytes));
            slice.reverse();
            const returnArray = new typedArrays[type](slice.buffer);
            this.offset += bytes;
            returnArray.reverse();
            return returnArray;
        }
        const returnArray = new typedArrays[type](slice);
        this.offset += bytes;
        return returnArray;
    }
    /**
     * Read a 16-bit signed integer and move pointer forward by 2 bytes.
     * @returns The read value.
     */ readInt16() {
        const value = this._data.getInt16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    }
    /**
     * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
     * @returns The read value.
     */ readUint16() {
        const value = this._data.getUint16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    }
    /**
     * Read a 32-bit signed integer and move pointer forward by 4 bytes.
     * @returns The read value.
     */ readInt32() {
        const value = this._data.getInt32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    /**
     * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
     * @returns The read value.
     */ readUint32() {
        const value = this._data.getUint32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    /**
     * Read a 32-bit floating number and move pointer forward by 4 bytes.
     * @returns The read value.
     */ readFloat32() {
        const value = this._data.getFloat32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    /**
     * Read a 64-bit floating number and move pointer forward by 8 bytes.
     * @returns The read value.
     */ readFloat64() {
        const value = this._data.getFloat64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    /**
     * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
     * @returns The read value.
     */ readBigInt64() {
        const value = this._data.getBigInt64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    /**
     * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
     * @returns The read value.
     */ readBigUint64() {
        const value = this._data.getBigUint64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    /**
     * Read a 1-byte ASCII character and move pointer forward by 1 byte.
     * @returns The read character.
     */ readChar() {
        // eslint-disable-next-line unicorn/prefer-code-point
        return String.fromCharCode(this.readInt8());
    }
    /**
     * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
     * @param n - Number of characters to read.
     * @returns The read characters.
     */ readChars(n = 1) {
        let result = '';
        for(let i = 0; i < n; i++){
            result += this.readChar();
        }
        return result;
    }
    /**
     * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
     * forward by `n` bytes.
     * @param n - Number of bytes to read.
     * @returns The decoded string.
     */ readUtf8(n = 1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(this.readBytes(n));
    }
    /**
     * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
     * forward by `n` bytes.
     * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
     * @param n - Number of bytes to read.
     * @param encoding - The encoding to use. Default is 'utf8'.
     * @returns The decoded string.
     */ decodeText(n = 1, encoding = 'utf8') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(this.readBytes(n), encoding);
    }
    /**
     * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
     * forward by 1 byte.
     * @param value - The value to write.
     * @returns This.
     */ writeBoolean(value) {
        this.writeUint8(value ? 0xff : 0x00);
        return this;
    }
    /**
     * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
     * @param value - The value to write.
     * @returns This.
     */ writeInt8(value) {
        this.ensureAvailable(1);
        this._data.setInt8(this.offset++, value);
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
     * byte.
     * @param value - The value to write.
     * @returns This.
     */ writeUint8(value) {
        this.ensureAvailable(1);
        this._data.setUint8(this.offset++, value);
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * An alias for {@link IOBuffer#writeUint8}.
     * @param value - The value to write.
     * @returns This.
     */ writeByte(value) {
        return this.writeUint8(value);
    }
    /**
     * Write all elements of `bytes` as uint8 values and move pointer forward by
     * `bytes.length` bytes.
     * @param bytes - The array of bytes to write.
     * @returns This.
     */ writeBytes(bytes) {
        this.ensureAvailable(bytes.length);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let i = 0; i < bytes.length; i++){
            this._data.setUint8(this.offset++, bytes[i]);
        }
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 16-bit signed integer and move pointer forward by 2
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeInt16(value) {
        this.ensureAvailable(2);
        this._data.setInt16(this.offset, value, this.littleEndian);
        this.offset += 2;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeUint16(value) {
        this.ensureAvailable(2);
        this._data.setUint16(this.offset, value, this.littleEndian);
        this.offset += 2;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 32-bit signed integer and move pointer forward by 4
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeInt32(value) {
        this.ensureAvailable(4);
        this._data.setInt32(this.offset, value, this.littleEndian);
        this.offset += 4;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeUint32(value) {
        this.ensureAvailable(4);
        this._data.setUint32(this.offset, value, this.littleEndian);
        this.offset += 4;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 32-bit floating number and move pointer forward by 4
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeFloat32(value) {
        this.ensureAvailable(4);
        this._data.setFloat32(this.offset, value, this.littleEndian);
        this.offset += 4;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 64-bit floating number and move pointer forward by 8
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeFloat64(value) {
        this.ensureAvailable(8);
        this._data.setFloat64(this.offset, value, this.littleEndian);
        this.offset += 8;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 64-bit signed bigint and move pointer forward by 8
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeBigInt64(value) {
        this.ensureAvailable(8);
        this._data.setBigInt64(this.offset, value, this.littleEndian);
        this.offset += 8;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
     * bytes.
     * @param value - The value to write.
     * @returns This.
     */ writeBigUint64(value) {
        this.ensureAvailable(8);
        this._data.setBigUint64(this.offset, value, this.littleEndian);
        this.offset += 8;
        this._updateLastWrittenByte();
        return this;
    }
    /**
     * Write the charCode of `str`'s first character as an 8-bit unsigned integer
     * and move pointer forward by 1 byte.
     * @param str - The character to write.
     * @returns This.
     */ writeChar(str) {
        // eslint-disable-next-line unicorn/prefer-code-point
        return this.writeUint8(str.charCodeAt(0));
    }
    /**
     * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
     * and move pointer forward by `str.length` bytes.
     * @param str - The characters to write.
     * @returns This.
     */ writeChars(str) {
        for(let i = 0; i < str.length; i++){
            // eslint-disable-next-line unicorn/prefer-code-point
            this.writeUint8(str.charCodeAt(i));
        }
        return this;
    }
    /**
     * UTF-8 encode and write `str` to the current pointer offset and move pointer
     * forward according to the encoded length.
     * @param str - The string to write.
     * @returns This.
     */ writeUtf8(str) {
        return this.writeBytes((0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(str));
    }
    /**
     * Export a Uint8Array view of the internal buffer.
     * The view starts at the byte offset and its length
     * is calculated to stop at the last written byte or the original length.
     * @returns A new Uint8Array view.
     */ toArray() {
        return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
    }
    /**
     *  Get the total number of bytes written so far, regardless of the current offset.
     * @returns - Total number of bytes.
     */ getWrittenByteLength() {
        return this.lastWrittenByte - this.byteOffset;
    }
    /**
     * Update the last written byte offset
     * @private
     */ _updateLastWrittenByte() {
        if (this.offset > this.lastWrittenByte) {
            this.lastWrittenByte = this.offset;
        }
    }
} //# sourceMappingURL=IOBuffer.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/crc.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkCrc",
    ()=>checkCrc,
    "writeCrc",
    ()=>writeCrc
]);
const crcTable = [];
for(let n = 0; n < 256; n++){
    let c = n;
    for(let k = 0; k < 8; k++){
        if (c & 1) {
            c = 0xedb88320 ^ c >>> 1;
        } else {
            c = c >>> 1;
        }
    }
    crcTable[n] = c;
}
const initialCrc = 0xffffffff;
function updateCrc(currentCrc, data, length) {
    let c = currentCrc;
    for(let n = 0; n < length; n++){
        c = crcTable[(c ^ data[n]) & 0xff] ^ c >>> 8;
    }
    return c;
}
function crc(data, length) {
    return (updateCrc(initialCrc, data, length) ^ initialCrc) >>> 0;
}
function checkCrc(buffer, crcLength, chunkName) {
    const expectedCrc = buffer.readUint32();
    const actualCrc = crc(new Uint8Array(buffer.buffer, buffer.byteOffset + buffer.offset - crcLength - 4, crcLength), crcLength); // "- 4" because we already advanced by reading the CRC
    if (actualCrc !== expectedCrc) {
        throw new Error(`CRC mismatch for chunk ${chunkName}. Expected ${expectedCrc}, found ${actualCrc}`);
    }
}
function writeCrc(buffer, length) {
    buffer.writeUint32(crc(new Uint8Array(buffer.buffer, buffer.byteOffset + buffer.offset - length, length), length));
} //# sourceMappingURL=crc.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/unfilter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unfilterAverage",
    ()=>unfilterAverage,
    "unfilterNone",
    ()=>unfilterNone,
    "unfilterPaeth",
    ()=>unfilterPaeth,
    "unfilterSub",
    ()=>unfilterSub,
    "unfilterUp",
    ()=>unfilterUp
]);
function unfilterNone(currentLine, newLine, bytesPerLine) {
    for(let i = 0; i < bytesPerLine; i++){
        newLine[i] = currentLine[i];
    }
}
function unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel) {
    let i = 0;
    for(; i < bytesPerPixel; i++){
        // just copy first bytes
        newLine[i] = currentLine[i];
    }
    for(; i < bytesPerLine; i++){
        newLine[i] = currentLine[i] + newLine[i - bytesPerPixel] & 0xff;
    }
}
function unfilterUp(currentLine, newLine, prevLine, bytesPerLine) {
    let i = 0;
    if (prevLine.length === 0) {
        // just copy bytes for first line
        for(; i < bytesPerLine; i++){
            newLine[i] = currentLine[i];
        }
    } else {
        for(; i < bytesPerLine; i++){
            newLine[i] = currentLine[i] + prevLine[i] & 0xff;
        }
    }
}
function unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
    let i = 0;
    if (prevLine.length === 0) {
        for(; i < bytesPerPixel; i++){
            newLine[i] = currentLine[i];
        }
        for(; i < bytesPerLine; i++){
            newLine[i] = currentLine[i] + (newLine[i - bytesPerPixel] >> 1) & 0xff;
        }
    } else {
        for(; i < bytesPerPixel; i++){
            newLine[i] = currentLine[i] + (prevLine[i] >> 1) & 0xff;
        }
        for(; i < bytesPerLine; i++){
            newLine[i] = currentLine[i] + (newLine[i - bytesPerPixel] + prevLine[i] >> 1) & 0xff;
        }
    }
}
function unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
    let i = 0;
    if (prevLine.length === 0) {
        for(; i < bytesPerPixel; i++){
            newLine[i] = currentLine[i];
        }
        for(; i < bytesPerLine; i++){
            newLine[i] = currentLine[i] + newLine[i - bytesPerPixel] & 0xff;
        }
    } else {
        for(; i < bytesPerPixel; i++){
            newLine[i] = currentLine[i] + prevLine[i] & 0xff;
        }
        for(; i < bytesPerLine; i++){
            newLine[i] = currentLine[i] + paethPredictor(newLine[i - bytesPerPixel], prevLine[i], prevLine[i - bytesPerPixel]) & 0xff;
        }
    }
}
function paethPredictor(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc) return a;
    else if (pb <= pc) return b;
    else return c;
} //# sourceMappingURL=unfilter.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/applyUnfilter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyUnfilter",
    ()=>applyUnfilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/unfilter.js [app-route] (ecmascript)");
;
function applyUnfilter(filterType, currentLine, newLine, prevLine, passLineBytes, bytesPerPixel) {
    switch(filterType){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterNone"])(currentLine, newLine, passLineBytes);
            break;
        case 1:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterSub"])(currentLine, newLine, passLineBytes, bytesPerPixel);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterUp"])(currentLine, newLine, prevLine, passLineBytes);
            break;
        case 3:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterAverage"])(currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
            break;
        case 4:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterPaeth"])(currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
            break;
        default:
            throw new Error(`Unsupported filter: ${filterType}`);
    }
} //# sourceMappingURL=applyUnfilter.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/decodeInterlaceAdam7.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeInterlaceAdam7",
    ()=>decodeInterlaceAdam7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$applyUnfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/applyUnfilter.js [app-route] (ecmascript)");
;
const uint16 = new Uint16Array([
    0x00ff
]);
const uint8 = new Uint8Array(uint16.buffer);
const osIsLittleEndian = uint8[0] === 0xff;
function decodeInterlaceAdam7(params) {
    const { data, width, height, channels, depth } = params;
    // Adam7 interlacing pattern
    const passes = [
        {
            x: 0,
            y: 0,
            xStep: 8,
            yStep: 8
        },
        {
            x: 4,
            y: 0,
            xStep: 8,
            yStep: 8
        },
        {
            x: 0,
            y: 4,
            xStep: 4,
            yStep: 8
        },
        {
            x: 2,
            y: 0,
            xStep: 4,
            yStep: 4
        },
        {
            x: 0,
            y: 2,
            xStep: 2,
            yStep: 4
        },
        {
            x: 1,
            y: 0,
            xStep: 2,
            yStep: 2
        },
        {
            x: 0,
            y: 1,
            xStep: 1,
            yStep: 2
        }
    ];
    const bytesPerPixel = Math.ceil(depth / 8) * channels;
    const resultData = new Uint8Array(height * width * bytesPerPixel);
    let offset = 0;
    // Process each pass
    for(let passIndex = 0; passIndex < 7; passIndex++){
        const pass = passes[passIndex];
        // Calculate pass dimensions
        const passWidth = Math.ceil((width - pass.x) / pass.xStep);
        const passHeight = Math.ceil((height - pass.y) / pass.yStep);
        if (passWidth <= 0 || passHeight <= 0) continue;
        const passLineBytes = passWidth * bytesPerPixel;
        const prevLine = new Uint8Array(passLineBytes);
        // Process each scanline in this pass
        for(let y = 0; y < passHeight; y++){
            // First byte is the filter type
            const filterType = data[offset++];
            const currentLine = data.subarray(offset, offset + passLineBytes);
            offset += passLineBytes;
            // Create a new line for the unfiltered data
            const newLine = new Uint8Array(passLineBytes);
            // Apply the appropriate unfilter
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$applyUnfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyUnfilter"])(filterType, currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
            prevLine.set(newLine);
            for(let x = 0; x < passWidth; x++){
                const outputX = pass.x + x * pass.xStep;
                const outputY = pass.y + y * pass.yStep;
                if (outputX >= width || outputY >= height) continue;
                for(let i = 0; i < bytesPerPixel; i++){
                    resultData[(outputY * width + outputX) * bytesPerPixel + i] = newLine[x * bytesPerPixel + i];
                }
            }
        }
    }
    if (depth === 16) {
        const uint16Data = new Uint16Array(resultData.buffer);
        if (osIsLittleEndian) {
            for(let k = 0; k < uint16Data.length; k++){
                // PNG is always big endian. Swap the bytes.
                uint16Data[k] = swap16(uint16Data[k]);
            }
        }
        return uint16Data;
    } else {
        return resultData;
    }
}
function swap16(val) {
    return (val & 0xff) << 8 | val >> 8 & 0xff;
} //# sourceMappingURL=decodeInterlaceAdam7.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/decodeInterlaceNull.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeInterlaceNull",
    ()=>decodeInterlaceNull
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/unfilter.js [app-route] (ecmascript)");
;
const uint16 = new Uint16Array([
    0x00ff
]);
const uint8 = new Uint8Array(uint16.buffer);
const osIsLittleEndian = uint8[0] === 0xff;
const empty = new Uint8Array(0);
function decodeInterlaceNull(params) {
    const { data, width, height, channels, depth } = params;
    const bytesPerPixel = Math.ceil(depth / 8) * channels;
    const bytesPerLine = Math.ceil(depth / 8 * channels * width);
    const newData = new Uint8Array(height * bytesPerLine);
    let prevLine = empty;
    let offset = 0;
    let currentLine;
    let newLine;
    for(let i = 0; i < height; i++){
        currentLine = data.subarray(offset + 1, offset + 1 + bytesPerLine);
        newLine = newData.subarray(i * bytesPerLine, (i + 1) * bytesPerLine);
        switch(data[offset]){
            case 0:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterNone"])(currentLine, newLine, bytesPerLine);
                break;
            case 1:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterSub"])(currentLine, newLine, bytesPerLine, bytesPerPixel);
                break;
            case 2:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterUp"])(currentLine, newLine, prevLine, bytesPerLine);
                break;
            case 3:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterAverage"])(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
                break;
            case 4:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$unfilter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfilterPaeth"])(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
                break;
            default:
                throw new Error(`Unsupported filter: ${data[offset]}`);
        }
        prevLine = newLine;
        offset += bytesPerLine + 1;
    }
    if (depth === 16) {
        const uint16Data = new Uint16Array(newData.buffer);
        if (osIsLittleEndian) {
            for(let k = 0; k < uint16Data.length; k++){
                // PNG is always big endian. Swap the bytes.
                uint16Data[k] = swap16(uint16Data[k]);
            }
        }
        return uint16Data;
    } else {
        return newData;
    }
}
function swap16(val) {
    return (val & 0xff) << 8 | val >> 8 & 0xff;
} //# sourceMappingURL=decodeInterlaceNull.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/signature.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// https://www.w3.org/TR/PNG/#5PNG-file-signature
__turbopack_context__.s([
    "checkSignature",
    ()=>checkSignature,
    "hasPngSignature",
    ()=>hasPngSignature,
    "writeSignature",
    ()=>writeSignature
]);
const pngSignature = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function writeSignature(buffer) {
    buffer.writeBytes(pngSignature);
}
function checkSignature(buffer) {
    if (!hasPngSignature(buffer.readBytes(pngSignature.length))) {
        throw new Error('wrong PNG signature');
    }
}
function hasPngSignature(array) {
    if (array.length < pngSignature.length) {
        return false;
    }
    for(let i = 0; i < pngSignature.length; i++){
        if (array[i] !== pngSignature[i]) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=signature.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/text.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodetEXt",
    ()=>decodetEXt,
    "encodetEXt",
    ()=>encodetEXt,
    "readKeyword",
    ()=>readKeyword,
    "readLatin1",
    ()=>readLatin1,
    "textChunkName",
    ()=>textChunkName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/crc.js [app-route] (ecmascript)");
;
const textChunkName = 'tEXt';
const NULL = 0;
const latin1Decoder = new TextDecoder('latin1');
function validateKeyword(keyword) {
    validateLatin1(keyword);
    if (keyword.length === 0 || keyword.length > 79) {
        throw new Error('keyword length must be between 1 and 79');
    }
}
// eslint-disable-next-line no-control-regex
const latin1Regex = /^[\u0000-\u00FF]*$/;
function validateLatin1(text) {
    if (!latin1Regex.test(text)) {
        throw new Error('invalid latin1 text');
    }
}
function decodetEXt(text, buffer, length) {
    const keyword = readKeyword(buffer);
    text[keyword] = readLatin1(buffer, length - keyword.length - 1);
}
function encodetEXt(buffer, keyword, text) {
    validateKeyword(keyword);
    validateLatin1(text);
    const length = keyword.length + 1 /* NULL */  + text.length;
    buffer.writeUint32(length);
    buffer.writeChars(textChunkName);
    buffer.writeChars(keyword);
    buffer.writeByte(NULL);
    buffer.writeChars(text);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeCrc"])(buffer, length + 4);
}
function readKeyword(buffer) {
    buffer.mark();
    while(buffer.readByte() !== NULL){
    /* advance */ }
    const end = buffer.offset;
    buffer.reset();
    const keyword = latin1Decoder.decode(buffer.readBytes(end - buffer.offset - 1));
    // NULL
    buffer.skip(1);
    validateKeyword(keyword);
    return keyword;
}
function readLatin1(buffer, length) {
    return latin1Decoder.decode(buffer.readBytes(length));
} //# sourceMappingURL=text.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/internalTypes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlendOpType",
    ()=>BlendOpType,
    "ColorType",
    ()=>ColorType,
    "CompressionMethod",
    ()=>CompressionMethod,
    "DisposeOpType",
    ()=>DisposeOpType,
    "FilterMethod",
    ()=>FilterMethod,
    "InterlaceMethod",
    ()=>InterlaceMethod
]);
const ColorType = {
    UNKNOWN: -1,
    GREYSCALE: 0,
    TRUECOLOUR: 2,
    INDEXED_COLOUR: 3,
    GREYSCALE_ALPHA: 4,
    TRUECOLOUR_ALPHA: 6
};
const CompressionMethod = {
    UNKNOWN: -1,
    DEFLATE: 0
};
const FilterMethod = {
    UNKNOWN: -1,
    ADAPTIVE: 0
};
const InterlaceMethod = {
    UNKNOWN: -1,
    NO_INTERLACE: 0,
    ADAM7: 1
};
const DisposeOpType = {
    NONE: 0,
    BACKGROUND: 1,
    PREVIOUS: 2
};
const BlendOpType = {
    SOURCE: 0,
    OVER: 1
}; //# sourceMappingURL=internalTypes.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/PngDecoder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PngDecoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$IOBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/iobuffer/lib-esm/IOBuffer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/pako/dist/pako.esm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/crc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$decodeInterlaceAdam7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/decodeInterlaceAdam7.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$decodeInterlaceNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/decodeInterlaceNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/signature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/internalTypes.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
class PngDecoder extends __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$IOBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IOBuffer"] {
    _checkCrc;
    _inflator;
    _png;
    _apng;
    _end;
    _hasPalette;
    _palette;
    _hasTransparency;
    _transparency;
    _compressionMethod;
    _filterMethod;
    _interlaceMethod;
    _colorType;
    _isAnimated;
    _numberOfFrames;
    _numberOfPlays;
    _frames;
    _writingDataChunks;
    constructor(data, options = {}){
        super(data);
        const { checkCrc = false } = options;
        this._checkCrc = checkCrc;
        this._inflator = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Inflate"]();
        this._png = {
            width: -1,
            height: -1,
            channels: -1,
            data: new Uint8Array(0),
            depth: 1,
            text: {}
        };
        this._apng = {
            width: -1,
            height: -1,
            channels: -1,
            depth: 1,
            numberOfFrames: 1,
            numberOfPlays: 0,
            text: {},
            frames: []
        };
        this._end = false;
        this._hasPalette = false;
        this._palette = [];
        this._hasTransparency = false;
        this._transparency = new Uint16Array(0);
        this._compressionMethod = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompressionMethod"].UNKNOWN;
        this._filterMethod = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FilterMethod"].UNKNOWN;
        this._interlaceMethod = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].UNKNOWN;
        this._colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].UNKNOWN;
        this._isAnimated = false;
        this._numberOfFrames = 1;
        this._numberOfPlays = 0;
        this._frames = [];
        this._writingDataChunks = false;
        // PNG is always big endian
        // https://www.w3.org/TR/PNG/#7Integers-and-byte-order
        this.setBigEndian();
    }
    decode() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSignature"])(this);
        while(!this._end){
            const length = this.readUint32();
            const type = this.readChars(4);
            this.decodeChunk(length, type);
        }
        this.decodeImage();
        return this._png;
    }
    decodeApng() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSignature"])(this);
        while(!this._end){
            const length = this.readUint32();
            const type = this.readChars(4);
            this.decodeApngChunk(length, type);
        }
        this.decodeApngImage();
        return this._apng;
    }
    // https://www.w3.org/TR/PNG/#5Chunk-layout
    decodeChunk(length, type) {
        const offset = this.offset;
        switch(type){
            // 11.2 Critical chunks
            case 'IHDR':
                this.decodeIHDR();
                break;
            case 'PLTE':
                this.decodePLTE(length);
                break;
            case 'IDAT':
                this.decodeIDAT(length);
                break;
            case 'IEND':
                this._end = true;
                break;
            // 11.3 Ancillary chunks
            case 'tRNS':
                this.decodetRNS(length);
                break;
            case 'iCCP':
                this.decodeiCCP(length);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["textChunkName"]:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodetEXt"])(this._png.text, this, length);
                break;
            case 'pHYs':
                this.decodepHYs();
                break;
            default:
                this.skip(length);
                break;
        }
        if (this.offset - offset !== length) {
            throw new Error(`Length mismatch while decoding chunk ${type}`);
        }
        if (this._checkCrc) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkCrc"])(this, length + 4, type);
        } else {
            this.skip(4);
        }
    }
    decodeApngChunk(length, type) {
        const offset = this.offset;
        if (type !== 'fdAT' && type !== 'IDAT' && this._writingDataChunks) {
            this.pushDataToFrame();
        }
        switch(type){
            case 'acTL':
                this.decodeACTL();
                break;
            case 'fcTL':
                this.decodeFCTL();
                break;
            case 'fdAT':
                this.decodeFDAT(length);
                break;
            default:
                this.decodeChunk(length, type);
                this.offset = offset + length;
                break;
        }
        if (this.offset - offset !== length) {
            throw new Error(`Length mismatch while decoding chunk ${type}`);
        }
        if (this._checkCrc) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkCrc"])(this, length + 4, type);
        } else {
            this.skip(4);
        }
    }
    // https://www.w3.org/TR/PNG/#11IHDR
    decodeIHDR() {
        const image = this._png;
        image.width = this.readUint32();
        image.height = this.readUint32();
        image.depth = checkBitDepth(this.readUint8());
        const colorType = this.readUint8();
        this._colorType = colorType;
        let channels;
        switch(colorType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].GREYSCALE:
                channels = 1;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].TRUECOLOUR:
                channels = 3;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].INDEXED_COLOUR:
                channels = 1;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].GREYSCALE_ALPHA:
                channels = 2;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].TRUECOLOUR_ALPHA:
                channels = 4;
                break;
            // Kept for exhaustiveness.
            // eslint-disable-next-line unicorn/no-useless-switch-case
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].UNKNOWN:
            default:
                throw new Error(`Unknown color type: ${colorType}`);
        }
        this._png.channels = channels;
        this._compressionMethod = this.readUint8();
        if (this._compressionMethod !== __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompressionMethod"].DEFLATE) {
            throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
        }
        this._filterMethod = this.readUint8();
        this._interlaceMethod = this.readUint8();
    }
    decodeACTL() {
        this._numberOfFrames = this.readUint32();
        this._numberOfPlays = this.readUint32();
        this._isAnimated = true;
    }
    decodeFCTL() {
        const image = {
            sequenceNumber: this.readUint32(),
            width: this.readUint32(),
            height: this.readUint32(),
            xOffset: this.readUint32(),
            yOffset: this.readUint32(),
            delayNumber: this.readUint16(),
            delayDenominator: this.readUint16(),
            disposeOp: this.readUint8(),
            blendOp: this.readUint8(),
            data: new Uint8Array(0)
        };
        this._frames.push(image);
    }
    // https://www.w3.org/TR/PNG/#11PLTE
    decodePLTE(length) {
        if (length % 3 !== 0) {
            throw new RangeError(`PLTE field length must be a multiple of 3. Got ${length}`);
        }
        const l = length / 3;
        this._hasPalette = true;
        const palette = [];
        this._palette = palette;
        for(let i = 0; i < l; i++){
            palette.push([
                this.readUint8(),
                this.readUint8(),
                this.readUint8()
            ]);
        }
    }
    // https://www.w3.org/TR/PNG/#11IDAT
    decodeIDAT(length) {
        this._writingDataChunks = true;
        const dataLength = length;
        const dataOffset = this.offset + this.byteOffset;
        this._inflator.push(new Uint8Array(this.buffer, dataOffset, dataLength));
        if (this._inflator.err) {
            throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
        }
        this.skip(length);
    }
    decodeFDAT(length) {
        this._writingDataChunks = true;
        let dataLength = length;
        let dataOffset = this.offset + this.byteOffset;
        dataOffset += 4;
        dataLength -= 4;
        this._inflator.push(new Uint8Array(this.buffer, dataOffset, dataLength));
        if (this._inflator.err) {
            throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
        }
        this.skip(length);
    }
    // https://www.w3.org/TR/PNG/#11tRNS
    decodetRNS(length) {
        switch(this._colorType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].GREYSCALE:
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].TRUECOLOUR:
                {
                    if (length % 2 !== 0) {
                        throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${length}`);
                    }
                    if (length / 2 > this._png.width * this._png.height) {
                        throw new Error(`tRNS chunk contains more alpha values than there are pixels (${length / 2} vs ${this._png.width * this._png.height})`);
                    }
                    this._hasTransparency = true;
                    this._transparency = new Uint16Array(length / 2);
                    for(let i = 0; i < length / 2; i++){
                        this._transparency[i] = this.readUint16();
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].INDEXED_COLOUR:
                {
                    if (length > this._palette.length) {
                        throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${length} vs ${this._palette.length})`);
                    }
                    let i = 0;
                    for(; i < length; i++){
                        const alpha = this.readByte();
                        this._palette[i].push(alpha);
                    }
                    for(; i < this._palette.length; i++){
                        this._palette[i].push(255);
                    }
                    break;
                }
            // Kept for exhaustiveness.
            /* eslint-disable unicorn/no-useless-switch-case */ case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].UNKNOWN:
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].GREYSCALE_ALPHA:
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].TRUECOLOUR_ALPHA:
            default:
                {
                    throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
                }
        }
    }
    // https://www.w3.org/TR/PNG/#11iCCP
    decodeiCCP(length) {
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readKeyword"])(this);
        const compressionMethod = this.readUint8();
        if (compressionMethod !== __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompressionMethod"].DEFLATE) {
            throw new Error(`Unsupported iCCP compression method: ${compressionMethod}`);
        }
        const compressedProfile = this.readBytes(length - name.length - 2);
        this._png.iccEmbeddedProfile = {
            name,
            profile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inflate"])(compressedProfile)
        };
    }
    // https://www.w3.org/TR/PNG/#11pHYs
    decodepHYs() {
        const ppuX = this.readUint32();
        const ppuY = this.readUint32();
        const unitSpecifier = this.readByte();
        this._png.resolution = {
            x: ppuX,
            y: ppuY,
            unit: unitSpecifier
        };
    }
    decodeApngImage() {
        this._apng.width = this._png.width;
        this._apng.height = this._png.height;
        this._apng.channels = this._png.channels;
        this._apng.depth = this._png.depth;
        this._apng.numberOfFrames = this._numberOfFrames;
        this._apng.numberOfPlays = this._numberOfPlays;
        this._apng.text = this._png.text;
        this._apng.resolution = this._png.resolution;
        for(let i = 0; i < this._numberOfFrames; i++){
            const newFrame = {
                sequenceNumber: this._frames[i].sequenceNumber,
                delayNumber: this._frames[i].delayNumber,
                delayDenominator: this._frames[i].delayDenominator,
                data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
            };
            const frame = this._frames.at(i);
            if (frame) {
                frame.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$decodeInterlaceNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeInterlaceNull"])({
                    data: frame.data,
                    width: frame.width,
                    height: frame.height,
                    channels: this._apng.channels,
                    depth: this._apng.depth
                });
                if (this._hasPalette) {
                    this._apng.palette = this._palette;
                }
                if (this._hasTransparency) {
                    this._apng.transparency = this._transparency;
                }
                if (i === 0 || frame.xOffset === 0 && frame.yOffset === 0 && frame.width === this._png.width && frame.height === this._png.height) {
                    newFrame.data = frame.data;
                } else {
                    const prevFrame = this._apng.frames.at(i - 1);
                    this.disposeFrame(frame, prevFrame, newFrame);
                    this.addFrameDataToCanvas(newFrame, frame);
                }
                this._apng.frames.push(newFrame);
            }
        }
        return this._apng;
    }
    disposeFrame(frame, prevFrame, imageFrame) {
        switch(frame.disposeOp){
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposeOpType"].NONE:
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposeOpType"].BACKGROUND:
                for(let row = 0; row < this._png.height; row++){
                    for(let col = 0; col < this._png.width; col++){
                        const index = (row * frame.width + col) * this._png.channels;
                        for(let channel = 0; channel < this._png.channels; channel++){
                            imageFrame.data[index + channel] = 0;
                        }
                    }
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposeOpType"].PREVIOUS:
                imageFrame.data.set(prevFrame.data);
                break;
            default:
                throw new Error('Unknown disposeOp');
        }
    }
    addFrameDataToCanvas(imageFrame, frame) {
        const maxValue = 1 << this._png.depth;
        const calculatePixelIndices = (row, col)=>{
            const index = ((row + frame.yOffset) * this._png.width + frame.xOffset + col) * this._png.channels;
            const frameIndex = (row * frame.width + col) * this._png.channels;
            return {
                index,
                frameIndex
            };
        };
        switch(frame.blendOp){
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlendOpType"].SOURCE:
                for(let row = 0; row < frame.height; row++){
                    for(let col = 0; col < frame.width; col++){
                        const { index, frameIndex } = calculatePixelIndices(row, col);
                        for(let channel = 0; channel < this._png.channels; channel++){
                            imageFrame.data[index + channel] = frame.data[frameIndex + channel];
                        }
                    }
                }
                break;
            // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
            case __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlendOpType"].OVER:
                for(let row = 0; row < frame.height; row++){
                    for(let col = 0; col < frame.width; col++){
                        const { index, frameIndex } = calculatePixelIndices(row, col);
                        for(let channel = 0; channel < this._png.channels; channel++){
                            const sourceAlpha = frame.data[frameIndex + this._png.channels - 1] / maxValue;
                            const foregroundValue = channel % (this._png.channels - 1) === 0 ? 1 : frame.data[frameIndex + channel];
                            const value = Math.floor(sourceAlpha * foregroundValue + (1 - sourceAlpha) * imageFrame.data[index + channel]);
                            imageFrame.data[index + channel] += value;
                        }
                    }
                }
                break;
            default:
                throw new Error('Unknown blendOp');
        }
    }
    decodeImage() {
        if (this._inflator.err) {
            throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
        }
        const data = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
        if (this._filterMethod !== __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FilterMethod"].ADAPTIVE) {
            throw new Error(`Filter method ${this._filterMethod} not supported`);
        }
        if (this._interlaceMethod === __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].NO_INTERLACE) {
            this._png.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$decodeInterlaceNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeInterlaceNull"])({
                data: data,
                width: this._png.width,
                height: this._png.height,
                channels: this._png.channels,
                depth: this._png.depth
            });
        } else if (this._interlaceMethod === __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].ADAM7) {
            this._png.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$decodeInterlaceAdam7$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeInterlaceAdam7"])({
                data: data,
                width: this._png.width,
                height: this._png.height,
                channels: this._png.channels,
                depth: this._png.depth
            });
        } else {
            throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
        }
        if (this._hasPalette) {
            this._png.palette = this._palette;
        }
        if (this._hasTransparency) {
            this._png.transparency = this._transparency;
        }
    }
    pushDataToFrame() {
        const result = this._inflator.result;
        const lastFrame = this._frames.at(-1);
        if (lastFrame) {
            lastFrame.data = result;
        } else {
            this._frames.push({
                sequenceNumber: 0,
                width: this._png.width,
                height: this._png.height,
                xOffset: 0,
                yOffset: 0,
                delayNumber: 0,
                delayDenominator: 0,
                disposeOp: __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposeOpType"].NONE,
                blendOp: __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BlendOpType"].SOURCE,
                data: result
            });
        }
        this._inflator = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Inflate"]();
        this._writingDataChunks = false;
    }
}
function checkBitDepth(value) {
    if (value !== 1 && value !== 2 && value !== 4 && value !== 8 && value !== 16) {
        throw new Error(`invalid bit depth: ${value}`);
    }
    return value;
} //# sourceMappingURL=PngDecoder.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/PngEncoder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PngEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$IOBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/iobuffer/lib-esm/IOBuffer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/pako/dist/pako.esm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/crc.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/signature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/internalTypes.js [app-route] (ecmascript)");
;
;
;
;
;
;
const defaultZlibOptions = {
    level: 3
};
class PngEncoder extends __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$IOBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IOBuffer"] {
    _png;
    _zlibOptions;
    _colorType;
    _interlaceMethod;
    constructor(data, options = {}){
        super();
        this._colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].UNKNOWN;
        this._zlibOptions = {
            ...defaultZlibOptions,
            ...options.zlib
        };
        this._png = this._checkData(data);
        this._interlaceMethod = (options.interlace === 'Adam7' ? __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].ADAM7 : __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].NO_INTERLACE) ?? __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].NO_INTERLACE;
        this.setBigEndian();
    }
    encode() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeSignature"])(this);
        this.encodeIHDR();
        if (this._png.palette) {
            this.encodePLTE();
            if (this._png.palette[0].length === 4) {
                this.encodeTRNS();
            }
        }
        this.encodeData();
        if (this._png.text) {
            for (const [keyword, text] of Object.entries(this._png.text)){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encodetEXt"])(this, keyword, text);
            }
        }
        this.encodeIEND();
        return this.toArray();
    }
    // https://www.w3.org/TR/PNG/#11IHDR
    encodeIHDR() {
        this.writeUint32(13);
        this.writeChars('IHDR');
        this.writeUint32(this._png.width);
        this.writeUint32(this._png.height);
        this.writeByte(this._png.depth);
        this.writeByte(this._colorType);
        this.writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompressionMethod"].DEFLATE);
        this.writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FilterMethod"].ADAPTIVE);
        this.writeByte(this._interlaceMethod);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeCrc"])(this, 17);
    }
    // https://www.w3.org/TR/PNG/#11IEND
    encodeIEND() {
        this.writeUint32(0);
        this.writeChars('IEND');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeCrc"])(this, 4);
    }
    encodePLTE() {
        const paletteLength = this._png.palette?.length * 3;
        this.writeUint32(paletteLength);
        this.writeChars('PLTE');
        for (const color of this._png.palette){
            this.writeByte(color[0]);
            this.writeByte(color[1]);
            this.writeByte(color[2]);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeCrc"])(this, 4 + paletteLength);
    }
    encodeTRNS() {
        const alpha = this._png.palette.filter((color)=>{
            return color.at(-1) !== 255;
        });
        this.writeUint32(alpha.length);
        this.writeChars('tRNS');
        for (const el of alpha){
            this.writeByte(el.at(-1));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeCrc"])(this, 4 + alpha.length);
    }
    // https://www.w3.org/TR/PNG/#11IDAT
    encodeIDAT(data) {
        this.writeUint32(data.length);
        this.writeChars('IDAT');
        this.writeBytes(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$crc$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeCrc"])(this, data.length + 4);
    }
    encodeData() {
        const { width, height, channels, depth, data } = this._png;
        const slotsPerLine = depth <= 8 ? Math.ceil(width * depth / 8) * channels : Math.ceil(width * depth / 8 * channels / 2);
        const newData = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$iobuffer$2f$lib$2d$esm$2f$IOBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IOBuffer"]().setBigEndian();
        let offset = 0;
        if (this._interlaceMethod === __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].NO_INTERLACE) {
            for(let i = 0; i < height; i++){
                newData.writeByte(0); // no filter
                if (depth === 16) {
                    offset = writeDataUint16(data, newData, slotsPerLine, offset);
                } else {
                    offset = writeDataBytes(data, newData, slotsPerLine, offset);
                }
            }
        } else if (this._interlaceMethod === __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterlaceMethod"].ADAM7) {
            // Adam7 interlacing
            offset = writeDataInterlaced(this._png, data, newData, offset);
        }
        const buffer = newData.toArray();
        const compressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pako$2f$dist$2f$pako$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deflate"])(buffer, this._zlibOptions);
        this.encodeIDAT(compressed);
    }
    _checkData(data) {
        const { colorType, channels, depth } = getColorType(data, data.palette);
        const png = {
            width: checkInteger(data.width, 'width'),
            height: checkInteger(data.height, 'height'),
            channels,
            data: data.data,
            depth,
            text: data.text,
            palette: data.palette
        };
        this._colorType = colorType;
        const expectedSize = depth < 8 ? Math.ceil(png.width * depth / 8) * png.height * channels : png.width * png.height * channels;
        if (png.data.length !== expectedSize) {
            throw new RangeError(`wrong data size. Found ${png.data.length}, expected ${expectedSize}`);
        }
        return png;
    }
}
function checkInteger(value, name) {
    if (Number.isInteger(value) && value > 0) {
        return value;
    }
    throw new TypeError(`${name} must be a positive integer`);
}
function getColorType(data, palette) {
    const { channels = 4, depth = 8 } = data;
    if (channels !== 4 && channels !== 3 && channels !== 2 && channels !== 1) {
        throw new RangeError(`unsupported number of channels: ${channels}`);
    }
    const returnValue = {
        channels,
        depth,
        colorType: __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].UNKNOWN
    };
    switch(channels){
        case 4:
            returnValue.colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].TRUECOLOUR_ALPHA;
            break;
        case 3:
            returnValue.colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].TRUECOLOUR;
            break;
        case 1:
            if (palette) {
                returnValue.colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].INDEXED_COLOUR;
            } else {
                returnValue.colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].GREYSCALE;
            }
            break;
        case 2:
            returnValue.colorType = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$internalTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ColorType"].GREYSCALE_ALPHA;
            break;
        default:
            throw new Error('unsupported number of channels');
    }
    return returnValue;
}
function writeDataBytes(data, newData, slotsPerLine, offset) {
    for(let j = 0; j < slotsPerLine; j++){
        newData.writeByte(data[offset++]);
    }
    return offset;
}
function writeDataInterlaced(imageData, data, newData, offset) {
    const passes = [
        {
            x: 0,
            y: 0,
            xStep: 8,
            yStep: 8
        },
        {
            x: 4,
            y: 0,
            xStep: 8,
            yStep: 8
        },
        {
            x: 0,
            y: 4,
            xStep: 4,
            yStep: 8
        },
        {
            x: 2,
            y: 0,
            xStep: 4,
            yStep: 4
        },
        {
            x: 0,
            y: 2,
            xStep: 2,
            yStep: 4
        },
        {
            x: 1,
            y: 0,
            xStep: 2,
            yStep: 2
        },
        {
            x: 0,
            y: 1,
            xStep: 1,
            yStep: 2
        }
    ];
    const { width, height, channels, depth } = imageData;
    let pixelSize = 0;
    if (depth === 16) {
        pixelSize = channels * depth / 8 / 2;
    } else {
        pixelSize = channels * depth / 8;
    }
    // Process each pass
    for(let passIndex = 0; passIndex < 7; passIndex++){
        const pass = passes[passIndex];
        const passWidth = Math.floor((width - pass.x + pass.xStep - 1) / pass.xStep);
        const passHeight = Math.floor((height - pass.y + pass.yStep - 1) / pass.yStep);
        if (passWidth <= 0 || passHeight <= 0) continue;
        const passLineBytes = passWidth * pixelSize;
        // For each scanline in this pass
        for(let y = 0; y < passHeight; y++){
            const imageY = pass.y + y * pass.yStep;
            // Extract raw scanline data
            const rawScanline = depth <= 8 ? new Uint8Array(passLineBytes) : new Uint16Array(passLineBytes);
            let rawOffset = 0;
            for(let x = 0; x < passWidth; x++){
                const imageX = pass.x + x * pass.xStep;
                if (imageX < width && imageY < height) {
                    const srcPos = (imageY * width + imageX) * pixelSize;
                    for(let i = 0; i < pixelSize; i++){
                        rawScanline[rawOffset++] = data[srcPos + i];
                    }
                }
            }
            newData.writeByte(0); // no filter
            if (depth === 8) {
                newData.writeBytes(rawScanline);
            } else if (depth === 16) {
                for (const value of rawScanline){
                    newData.writeByte(value >> 8 & 0xff); // High byte
                    newData.writeByte(value & 0xff);
                }
            }
        }
    }
    return offset;
}
function writeDataUint16(data, newData, slotsPerLine, offset) {
    for(let j = 0; j < slotsPerLine; j++){
        newData.writeUint16(data[offset++]);
    }
    return offset;
} //# sourceMappingURL=PngEncoder.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResolutionUnitSpecifier",
    ()=>ResolutionUnitSpecifier
]);
var ResolutionUnitSpecifier;
(function(ResolutionUnitSpecifier) {
    /**
     * Unit is unknown
     */ ResolutionUnitSpecifier[ResolutionUnitSpecifier["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Unit is the metre
     */ ResolutionUnitSpecifier[ResolutionUnitSpecifier["METRE"] = 1] = "METRE";
})(ResolutionUnitSpecifier || (ResolutionUnitSpecifier = {})); //# sourceMappingURL=types.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/convertIndexedToRgb.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts indexed data into RGB/RGBA format
 * @param decodedImage - Image to decode data from.
 * @returns Uint8Array with RGB data.
 */ __turbopack_context__.s([
    "convertIndexedToRgb",
    ()=>convertIndexedToRgb
]);
function convertIndexedToRgb(decodedImage) {
    const palette = decodedImage.palette;
    const depth = decodedImage.depth;
    if (!palette) {
        throw new Error('Color palette is undefined.');
    }
    checkDataSize(decodedImage);
    const indexSize = decodedImage.width * decodedImage.height;
    const resSize = indexSize * palette[0].length;
    const res = new Uint8Array(resSize);
    let indexPos = 0;
    let offset = 0;
    const indexes = new Uint8Array(indexSize);
    let bit = 0xff;
    switch(depth){
        case 1:
            bit = 0x80;
            break;
        case 2:
            bit = 0xc0;
            break;
        case 4:
            bit = 0xf0;
            break;
        case 8:
            bit = 0xff;
            break;
        default:
            throw new Error('Incorrect depth value');
    }
    for (const byte of decodedImage.data){
        let bit2 = bit;
        let shift = 8;
        while(bit2){
            shift -= depth;
            indexes[indexPos++] = (byte & bit2) >> shift;
            bit2 = bit2 >> depth;
            if (indexPos % decodedImage.width === 0) {
                break;
            }
        }
    }
    if (decodedImage.palette) {
        for (const index of indexes){
            const color = decodedImage.palette.at(index);
            if (!color) {
                throw new Error('Incorrect index of palette color');
            }
            res.set(color, offset);
            offset += color.length;
        }
    }
    return res;
}
function checkDataSize(image) {
    const expectedSize = image.depth < 8 ? Math.ceil(image.width * image.depth / 8) * image.height * image.channels : image.width * image.height * image.channels;
    if (image.data.length !== expectedSize) {
        throw new RangeError(`wrong data size. Found ${image.data.length}, expected ${expectedSize}`);
    }
} //# sourceMappingURL=convertIndexedToRgb.js.map
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decodePng,
    "decodeApng",
    ()=>decodeApng,
    "encode",
    ()=>encodePng
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$PngDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/PngDecoder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$PngEncoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/PngEncoder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/signature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$convertIndexedToRgb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/convertIndexedToRgb.js [app-route] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
function decodePng(data, options) {
    const decoder = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$PngDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](data, options);
    return decoder.decode();
}
function encodePng(png, options) {
    const encoder = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$PngEncoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](png, options);
    return encoder.encode();
}
function decodeApng(data, options) {
    const decoder = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$PngDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](data, options);
    return decoder.decodeApng();
}
;
;
}),
"[project]/realestateandlease/node_modules/fast-png/lib-esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResolutionUnitSpecifier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ResolutionUnitSpecifier"],
    "convertIndexedToRgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$convertIndexedToRgb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertIndexedToRgb"],
    "decode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decode"],
    "decodeApng",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeApng"],
    "encode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encode"],
    "hasPngSignature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasPngSignature"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$helpers$2f$signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/helpers/signature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$fast$2d$png$2f$lib$2d$esm$2f$convertIndexedToRgb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/fast-png/lib-esm/convertIndexedToRgb.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=8a434_2d29aff0._.js.map