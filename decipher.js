const _alphabet = 'abcdefghijklmnopqrstuvwxyz';
const _ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const _isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const decode = (txt, cipher) => {
    var decoded = txt;
    for (var i = 0; i < txt.length; i++){
        var c = txt[i];
        if (!_isLetter(c)){
            continue;
        }

        if (c in cipher) {
            decoded = decoded.replaceAt(i, cipher[c]);
        }
    }

    return decoded;
}

const findA = (x, y) => {
    // x*A = y mod 26
    for (var i = 1; i <=26; i++) {
        if ((i*x)%26 == y) {
            return i;
        }
    }
}

const makeCipher = (a, b) => {
    cipher = {};
    for (var i=0; i < 26; i++) {
        x = i + 1;
        y = (a * x + b) % 26 - 1;
        if (y < 0) {
            y = 25;
        }

        cipher[_ALPHABET[y]] = _alphabet[i];
    }

    return cipher;
}

module.exports = {
    decode: decode,
    findA: findA,
    makeCipher: makeCipher,
};

