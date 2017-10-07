const _isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
}

const analyseFrequency = (txt) => {
    var freq = {};
    for (letter of txt) {
        if (!_isLetter(letter)) {
            continue;
        }

        if (letter in freq) {
            freq[letter] += 1;
        } else {
            freq[letter] = 1;
        }
    }

    // Create items array
    var items = Object.keys(freq).map(function(key) {
        return [key, freq[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });


    return items;
}

module.exports = {
    analyseFrequency: analyseFrequency
};