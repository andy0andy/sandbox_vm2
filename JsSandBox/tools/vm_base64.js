// 一般的Base64编码字符
var commonbase64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// 对URL进行编码使用的字符
var urlBase64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

// Base64解码用到的映射表，兼容一般编码的Base64和针对URL进行扩展编码的Base64
var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, 63, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 62, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];


/** 通用的Base64编码函数
 * str为待编码的串
 * isUrl用来表明编码的对象(str)是否是一个URL
 */
function base64encode(str, isUrl) {
    var out, i, len;
    var c1, c2, c3;

    // 针对不同的编码方式，选择不同的字符集
    var base64EncodeChars = isUrl ? urlBase64EncodeChars : commonbase64EncodeChars;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;

        // 当最后只有一个字节时
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }


        c2 = str.charCodeAt(i++);

        // 当最后剩余两个字节时
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }

        //当剩余字节数大于等于3时
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

/**
 * Base64解码函数
 * @param str
 * @returns {*}
 */
function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /*  得到第一个字符 c1
          * 并过虑掉前后所有与Base64编码无关的字符
          * */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);

        // 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
        if (c1 == -1)
            break;

        /*  得到字符 c2
         * 并过滤掉所有与Base64编码无关的字符
         */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);

        // 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
        if (c2 == -1)
            break;

        // 根据Base64编码的 c1 和 c2 解码得到一个编码前的字符
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        /*  得到字符 c3
         * 并过滤掉所有与Base64编码无关的字符
         * 如果获取的 c3 是 '=' 字符则说明已经解码完成，返回解码得到的字符串
         */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);

        // 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
        if (c3 == -1)
            break;

        // 根据Base64编码的 c2 和 c3 解码得到一个编码前的字符
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        /* 这一步就比较复杂了
         * 先是尝试获取第四个Base64 编码的字符 c4
         * 如果获取的 c4 是 '=' 字符则说明已经解码完成，返回解码得到的字符串
         * */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);

        // 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
        if (c4 == -1)
            break;

        // 根据Base64编码的 c3 和 c4 解码得到一个编码前的字符
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}

/**
 * 把 unicode 码转换成 utf8 编码
 * @param str
 * @returns {string}
 */
function unicodeToUtf8(str) {
    var out, i, len, c;

    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);

        // 兼容 ASCII
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            // 占三个字节的 utf8
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            // 占两个字节的 utf8
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

/**
 * 把 utf8 编码转换成 unicode 码
 * @param str
 * @returns {string}
 */
function utf8ToUnicode(str) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx ASCII 编码
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                // 占两个字节的 utf8
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                // 占三个字节的 utf8
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}

/**
 * 转成 十六 进制编码
 * @param str
 * @returns {string}
 * @constructor
 */
function CharToHex(str) {
    var out, i, len, c, h;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);

        // 把数据转换成十六进制的字符串
        h = c.toString(16);
        if (h.length < 2)
            h = "0" + h;

        out += "\\x" + h + " ";
        if (i > 0 && i % 8 == 0)
            out += "\r\n";
    }

    return out;
}

sandbox_vm2.base64 = {
    encode: function (str) {
        // 普通 Base64 编码
        return base64encode(unicodeToUtf8(str));
    },
    encodeUrl: function (str) {
        // 使用 Base64 编码字符串
        return base64encode(unicodeToUtf8(str), 1)
    },
    decode: function (str) {
        // 兼容的 Base64 解码
        return utf8ToUnicode(base64decode(str));
    },
    encodeToHex: function (str) {
        // 普通 Base64 编码 以十六进制显示
        return CharToHex(base64encode(unicodeToUtf8(str)));
    },
    encodeUrlToHex: function (str) {
        // 使用 Base64 编码 url 以十六进制显示
        return CharToHex(base64encode(unicodeToUtf8(str), 1));
    }
}

// console.log(base64.encode("123456abcdefg"))
// console.log(base64.decode("MTIzNDU2YWJjZGVmZw=="))