const frequency = require('../challenge1/frequency.js');
const decipher = require('../challenge1/decipher.js');
A = `ICROCI,
G FZWMSZF YWIE IWRE CJWMF AZCF OWM YCGX GP FZE ZWYDGFCB, CPX SGTEP AZCF ZCY ZCDDEPEX G FZGPU G GF AWMBX JE SWWX FW AWRU FWSEFZER.
MPLWRFMPCFEBO GF YEEIY FZCF G CI PWF FZE WPBO WPE FROGPS FW LGPX FZE JWWU. FZERE GY C FZRGTGPS JBCQU ICRUEF CIWPS JGJBGWDZGBEY LWR CPOFZGPS CY WBX CY FZGY. GF GY TERO TCBMCJBE CPX GL FZE JWWU XGYCDDECRY GPFW FZE YZCXWAO AWRBX WL DRGTCFE BGJRCRGEY AE IGSZF PWF YEE GF CSCGP LWR QEPFMRGEY YW GF GY RECBBO GIDWRFCPF AE SEF FW GF LGRYF.
FCQGFMY QBECRBO ACPFEX FW ICUE GF XGLLGQMBF FW CYYEIJBE FZE EPFGRE XWQMIEPF, YW ZE ZCX GF ZGXXEP CF C PMIJER WL YGFEY CRWMPX FZE CPQGEPF AWRBX. FZE JRGFGYZ BGJRCRO XEQGXEX FW YEPX YWIEWPE FW FRO FW LGPX CBB FZE DGEQEY. FZEGR EHDERFY LGSMREX FZE QZCDFERY AERE BGUEBO FW JE EPQRODFEX FWW YW, SGTEP IO JCQUSRWMPX, FZEO CYUEX IE FW SW. FZEO AERE RGSZF WL QWMRYE, FZE LGRYF QZCDFER ACY XGYSMGYEX MYGPS C QCEYCR YZGLF CPX FZE YEQWPX JO C YQOFCBE QGDZER, CPX G CI JESGPPGPS FW AWPXER AZCF WFZER QGDZERY FCQGFMY IGSZF QZCBBEPSE MY AGFZ. CY LCR CY AE UPWA FZE RWICPY AWMBX PWF ZCTE ZCX FZCF ICPO FW QZWWYE LRWI. G YMDDWYE ZE IGSZF ZCTE UPWAP CJWMF YWIE LWRI WL FZE DWBOJGMY QGDZER.
FZE XWQMIEPFY G ZCTE LWMPX YW LCR (FCQGFMY BCYF FEYFCIEPF CPX QZCDFERY WPE CPX FAW WL ZGY ZGXXEP JWWU) ECQZ SGTE C QBME FW FZE BWQCFGWP WL FZE PEHF WPE, CPX CY YWWP CY FZEO BEF IE WMF WL ZWYDGFCB G DBCP FW FRO FW BWQCFE FZE FZGRX QZCDFER, AZGQZ FCQGFMY FEBBY MY GY ZGXXEP WP FZE GYBE WL FZWRPY. FZERE CRE YETERCB DBCQEY GP FZE CPQGEPF AWRBX FZCF FZGY IGSZF RELER FW, JMF G ZCTE C DREFFO SWWX GXEC WL AZERE GF IGSZF JE.
GL G FZGPU WL CPOFZGPS EBYE G AGBB SEF GF FW OWM, CPX CY REKMEYFEX G AGBB QWDO GP OWMR LRGEPX ZCRRO. G YMSSEYF AE FGSZFEP YEQMRGFO C BGFFBE. ICOJE GL AE JBWQU WMR QGDZER FEHFY BGUE FZE EHDERFY GF AGBB DMF WLL QCYMCB GPFERQEDFY. FZE DEWDBE AE CRE MD CSCGPYF CRE MPBGUEBO FW JE XEFERREX JO IMQZ, JMF AE XWP'F ACPF FW GPTGFE EHFRC GPFERBWDERY FW FZE DCRFO.
JO FZE ACO, IO LRGEPX GP FZE YWMU FWBX IE FZCF ZE IEF WPE WL OWMR CSEPFY AZW ACY CYUGPS GL ZE UPEA AZERE G ACY, AZGQZ YEEIY C JGF WXX SGTEP FZCF OWM UPWA G CI YFMQU ZERE. ACY FZCF NMYF FW FZRWA WMR RGTCBY WLL FZE YQEPF?
CBB FZE JEYF,
NWXGE`;
const freqA = frequency.analyseFrequency(A);
console.log(freqA.length);
console.log(freqA);

// guess cipher letter by letter
const guessedCipherA = {
    A: 'w',      N: '',
    B: 'l',      O: 'y',
    C: 'a',      P: '',
    D: 'p',      Q: '',
    E: 'e',      R: 'r',
    F: 't',      S: 'g',
    G: 'i',      T: '',
    H: '',      U: '',
    I: 'm',      V: '',
    J: 'b',      W: 'o',
    K: '',      X: 'd',
    L: '',      Y: 's',
    M: 'u',      Z: 'h',
};

// try-error to solve a and b for the affine shift ciphers
const a = decipher.findA(8, 4);
const b = decipher.findB(23, 7, 1);
console.log('~~~~ a: ' + a);
console.log('~~~~ b: ' + b);

const cipherA = decipher.makeCipher(a, b);
console.log(cipherA);
const decodedA = decipher.decode(A, cipherA);
console.log(decodedA);
