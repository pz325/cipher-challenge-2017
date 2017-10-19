const _isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
}

const sortFrequency = (freq) => {
    // Create items array
    let items = Object.keys(freq).map(function(key) {
        return [key, freq[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    return items;
};

const analyseFrequency = (txt) => {
    let freq = {};
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

    const items = sortFrequency(freq);
    return items;
};

const analysePairFrequency = (txt) => {
    let freq = {}
    for (let i=0; i < txt.length-1; i++){
        let r = txt.substring(i, i+2);
        if (r in freq) {
            freq[r] += 1;
        } else {
            freq[r] = 1;
        }
    }

    const items = sortFrequency(freq);
    return items;
};

const analyseTripleFrequency = (txt) => {
    let freq = {};
    for (let i=0; i < txt.length-2; i++){
        let r = txt.substring(i, i+3);
        if (r in freq) {
            freq[r] += 1;
        } else {
            freq[r] = 1;
        }
    }

    const items = sortFrequency(freq);
    return items;
};

const analyseRepeatedPairFrequency = (txt) => {
    let freq = {}
    for (let i=0; i < txt.length-1; i++){
        if (txt[i] == txt[i+1]) {
            let r = txt.substring(i, i+2);
            if (r in freq) {
                freq[r] += 1;
            } else {
                freq[r] = 1;
            }
        }
    }

    return sortFrequency(freq);
};

module.exports = {
    analyseFrequency: analyseFrequency,
    analysePairFrequency: analysePairFrequency,
    analyseTripleFrequency: analyseTripleFrequency,
    analyseRepeatedPairFrequency: analyseRepeatedPairFrequency,
    sortFrequency: sortFrequency,
};
