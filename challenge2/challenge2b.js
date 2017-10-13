/**
 * This is challenge 2 B
 * 
 * Methodologies:
 *  1. frequency analysis, frequency.analyseFrequency() or  http://www.counton.org/explorer/codebreaking/frequency-analysis.php
 *  2. assume 'transposition cipher'
 *  3. calculate H positions and T positions
 *  4. calculate H-T distancees
 *  5. calculate GCD of H-T distance and B's length
 *  6. guess k, then format B to a table accordingly.
 */

const gcd = (a, b) => {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};


let B = `T	E	L	U	U	T	R	F	E	T	N	E	H	I	O	Y	I	T	B	E	P	H	N	D	A	H	E	I	O	O	D	R	U	L	T	I	E	R	A	T	E	F	R	E	H	A E	D	U	G	S	I	O	A	F	D	E	I	I	E	L	C	G	N	E	S	R	P	I	N	E	O	E	R	E	O	O	N	R	H	F	T	O	D	C	R	D	V	L	S	R	V T	D	B	T	M	M	O	S	S	A	N	F	N	S	R	W	T	U	R	A	W	T	E	E	R	N	O	F	G	V	P	U	H	E	H	L	O	A	S	T	I	E	E	A	O O	E	N	X	I	H	B	T	N	R	E	E	S	T	V	A	R	M	E	D	H	B	L	C	C	E	L	R	O	C	S	H	N	P	I	C	C	T	V	V	B	U	A	E	S	D A	D	A	M	A	A	T	I	D	S	N	E	A	T	R	E	S	A	T	M	W	R	O	I	T	D	T	E	O	A	F	U	T	O	T	E	E	I	L	T	I	U	S	O	N	G L	R	O	A	A	E	A	L	L	E	O	F	L	T	S	H	T	N	I	R	W	T	A	L	N	R	D	O	R	N	N	E	F	S	O	R	T	Y	O	N	T	F	R	I	T
H	L	E	E	D	O	E	R	D	O	I	G	E	W	I	T	N	E	E	Y	O	L	I	V	M	E	D	T	T	U	D	A	R	E	O	N	D	U	T	H	G	T	I	S	E	T T	F	B	R	O	S	F	N	R	T	M	R	U	T	L	K	W	G	T	O	D	I	N	U	D	O	B	Y	R	F	R	D	E	O	T	T	U	T	S	E	E	E	O	V	Y E	E	E	A	H	Y	A	U	A	T	F	D	O	T	A	I	A	T	R	E	C	I	H	F	N	H	P	A	O	U	E	R	S	E	S	E	L	U	P	S	H	L	S	R	T	O W	C	G	T	O	E	U	T	O	A	T	R	A	O	E	C	E	Y	V	T	E	E	E	I	A	D	E	S	M	A	W	A	E	T	N	A	I	H	I	E	Y	S	R	L	E	M R	I	T	M	T	C	H	R	E	I	O	R	N	H	E	T	S	T	O	P	E	E	G	M	H	I	H	A	U	A	T	B	A	L	O	F	U	N	O	H	O	I	S	H	C E	O	I	R	N	S	D	G	A	S	B	B	O	O	H	A	E	S	I	L	E	A	I	G	A	G	E	E	F	I	W	G	T	Y	H	W	U	H	T	U	E	R	U	T	S	H
E	L	D	E	I	O	N	O	E	F	N	I	I	E	N	H	O	S	A	S	N	O	U	E	I	Y	T	I	H	N	E	T	T	S	N	F	B	S	U	E	I	H	O	S	S	I	U	R D	E	N	L	M	D	O	H	Y	O	M	R	E	A	A	S	I	W	S	T	G	M	T	N	R	A	O	O	C	M	F	I	H	L	N	A	E	D	C	A	R	I	W	R R	D	T	E	L	N	S	G	J	E	R	U	R	N	C	S	O	E	G	T	T	L	F	C	A	A	T	R	I	R	E	L	S	S	R	I	D	O	E	E	O	S	S	I	K	N	U T	H	N	D	T	L	T	N	R	I	B	B	A	A	D	S	E	H	Y	E	T	P	P	B	O	A	M	T	H	D	N	E	G	E	P	I	C	N	J	C	H	F	C	I	Y	P	I U	I	R	E	E	C	T	L	S	D	E	W	O	D	C	T	E	R	F	I	S	E	T	E	T	D	N	N	T	G	A	B	O	P	G	S	E	N	L	A	A	O	D	C	B	E D	H	T	R	M	O	E	L	R	S	E	R	R	U	U	E	V	S	T	R	W	I	D	F	T	B	A	S	B	O	T	T	T	A	H	W	E	A	R	O	L	O
R	I	B	N	C	K	G	M	F	T	T	O	C	R	E	E	V	T	S	E	B	N	M	R	U	R	H	E	E	D	S	E	E	S	I	O	Y	L	S	I	O	E	U	O	I	O R	O	U	B	T	A	O	C	N	E	A	C	A	A	D	L	T	T	N	N	D	E	O	B	E	E	A	N	I	U	E	Y	U	C	E	E	D	C	N	O	I	N	I	C	H M	M	T	T	E	O	Y	A	A	U	W	E	R	O	D	O	L	S	T	I	I	H	E	I	Y	P	R	O	H	L	T	V	O	U	E	E	O	I	S	D	P	U	O	I	O	H L	R	H	L	A	I	A	E	A	D	U	L	O	E	L	P	E	P	A	A	H	N	O	H	T	A	R	N	U	I	I	B	C	D	T	S	H	S	E	T	U	A	I	H	U	L A	L	C	N	O	O	E	F	A	W	O	A	N	R	E	N	E	H	H	R	E	U	V	E	C	F	D	O	I	D	O	T	R	W	L	R	R	T	S	L	S	A	I	V	U T	A	E	B	I	I	H	I	A	H	E	A	T	S	C	C	W	E	S	D	E	T	W	I	H	N	T	E	H	E	T	T	U	U	O	H	H	T	E	I	D	V	T	T	E	R
E	O	Y	B	C	S	T	T	E	H	H	N	E	E	D	T	A	R	T	T	O	D	A	U	M	A	E	S	G	A	E	D	M	U	U	R	V	E	O	X	N	S	S	F	T N	N	M	I	E	H	N	N	O	T	E	T	O	S	V	B	O	L	R	H	W	E	B	U	E	N	T	V	D	S	R	S	C	L	E	B	G	A	T	S	U	S	D	O	T O	A	I	H	L	N	S	T	N	I	S	H	D	O	O	A	L	E	E	H	O	N	R	S	C	P	S	T	N	I	T	H	I	S	P	D	B	N	C	S	O	E	S	F	T	N	E I	S	E	E	S	E	B	I	W	T	E	W	U	R	E	T	N	Y	L	T	A	A	D	E	U	T	D	D	N	O	C	E	R	U	H	A	E	D	I	E	L	E	M	A	R	I N	O	C	I	N	S	M	O	D	A	N	F	E	W	S	I	S	E	E	O	C	L	E	L	R	O	E	F	C	L	D	H	I	A	A	T	I	H	O	E	A	W	D	E	R	H L	S	E	T	N	A	C	Y	A	N	M	H	O	A	I	H	T	F	T	A	H	A	C	O	E	H	A	E	S	L	R	T	W	K	E	O	D	N	L	T	E	H	H	O	N
B	N	Q	O	A	T	H	H	A	E	L	T	N	J	B	R	N	I	H	U	T	I	N	L	T	Z	C	T	R	N	C	O	P	E	S	M	A	G	F	L	O	E	N	T	U R	E	S	N	L	E	D	A	N	E	N	V	N	H	E	A	N	I	E	I	O	S	E	T	R	T	H	E	H	M	F	A	A	C	O	A	R	N	I	U	R	I	G	U	O	E S	N	E	E	E	T	H	D	N	T	U	O	W	P	G	A	F	C	E	N	G	U	S	I	E	I	T	E	S	O	E	O	S	R	T	E	B	C	E	F	R	N	H	U	T	R F	I	I	G	S	D	A	S	A	H	P	A	T	E	D	U	E	R	E	T	D	B	E	R	R	T	E	C	I	N	H	E	Y	S	E	R	R	E	N	D	I	S	S	D	E	T	D M	O	C	S	S	P	R	E	S	G	E	I	E	U	U	P	S	E	R	A	T	H	F	E	R	F	B	C	E	O	A	C	S	M	H	S	E	F	G	Q	A	T	E	A	E	T T	L	W	T	T	O	A	V	T	E	E	F	E	P	A	O	A	O	L	A	S	O	E	E	E	T	T	O	I	E	I	I	N	T	F	A	Y	L	O	L	E	E	F	S`;

// B = `SIEID ATTPW ADIVL SOLWO IYMRD AOSTT TDUHM AGTTT HSEOO
// TAEST EOGNU AEDLN HNRDH KIWOA MENEE INEAS NPAIT SLIAI
// AOJDN TCAET SOKEE EIULD HRAUE WSYSA IRBCT WNNSN TARHH
// SUHAS MNOAG SVEPI AGINE IOAIS EBGRS TTWYO GTLNO EVMRT
// WGTOI SAHHI ECAWP HTRAO TCRTS YRBYG`;

B = B.replace(/\s/g,'');
console.log(B);
console.log(B.length);

let hPositions = [];
let tPositions = [];
for (let i = 0; i < B.length; i++) {
    if (B[i] == 'H') {
        hPositions.push(i+1);
    }
    if (B[i] == 'T') {
        tPositions.push(i+1);
    }
}

// console.log(hPositions);
// console.log(tPositions);

// calculate H-T distance
let htDistances = new Array(hPositions.length);
for (let i = 0; i < hPositions.length; i++) {
    htDistances[i] = new Array(tPositions.length);
}

for (let i = 0; i < hPositions.length; i++) {
    for (let j = 0; j < tPositions.length; j++) {
        htDistances[i][j] = Math.abs(hPositions[i]-tPositions[j]);        
    }
}
// console.log(htDistances);

// find GCD of H-T distance and B.length
for (let i = 0; i < hPositions.length; i++) {
    for (let j = 0; j < tPositions.length; j++) {
        htDistances[i][j] = gcd(htDistances[i][j], B.length);
    }
}
// console.log(htDistances);


// find histgram of GCD
let gcdHistgram = {}
for (let i = 0; i < hPositions.length; i++) {
    for (let j = 0; j < tPositions.length; j++) {
        if (htDistances[i][j] in gcdHistgram) {
            gcdHistgram[htDistances[i][j]] += 1;
        } else {
            gcdHistgram[htDistances[i][j]] = 1;
        }
    }
}
console.log(gcdHistgram);

// guess number of rows from histgram of GCD
const numRows = 274;
// const numRows = 30;    // this is 'beginner guide's example'
const numColumns = B.length / numRows;
console.log(numRows, numColumns);

let bTable = '';
for (let i = 0; i < numRows; i ++) {
    for (let j = 0; j < numColumns; j ++) {
        bTable += B[i + numRows*j];
    }
    bTable += '\n';
}
console.log(bTable);

const fs = require('fs');
fs.writeFile("./2b_result.txt", bTable, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
