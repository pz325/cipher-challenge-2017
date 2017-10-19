const frequency = require('../challenge1/frequency.js');
const decipher = require('../challenge1/decipher.js');

const frequencyAnalysisOnPairs = (str)=> {
    let freq = {};
    for (let i = 0; i < str.length; i=i+2) {
        let b = str.substring(i, i+2);
        if (b in freq) {
            freq[b] += 1;
        } else {
            freq[b] = 1;
        }
    }
    const items = frequency.sortFrequency(freq);
    return items;
};

const convertPairToLetter = (str, freq) => {
    // make mapping
    let dict = {};
    for (let i = 0; i < freq.length; i ++) {
        dict[freq[i][0]] = String.fromCharCode(65+i);    
    }
    console.log(dict);

    let C = ''
    for (let i = 0; i < str.length; i=i+2) {
        C += dict[str.substring(i, i+2)];
    }
    
    return C;
};


// find tXe
const findtXe = (str) => {
    let tXe = {};
    for (let i = 0; i < str.length-2; i++) {
        if (str[i] == 't' && str[i+2] == 'e') {
            const s = str.substring(i, i+3);
            if (s in tXe) {
                tXe[s] += 1;
            } else {
                tXe[s] = 1;
            }
        }
    }

    console.log(tXe);
}

/**
 * Frequency analysis of the original B shows only 5 letters (C, D, L, M, X) used. 
 * It's suspicious that one letter left at the end.
 * Count the total number of letters: 4846 = 2*2423, where 2423 is a prime number. It drives to do frequency analysis on pair letters, which shows likely English letter frequency distribution.
 * We found 24 pairs. So replacing pairs with A-X
 * We look for 'tXe' to identify 'h'
 * Further frequency analsis has also been done on pairs, triples, and repeated pairs.
 * Breakthrough happened when 'more', and 'perhaps' words are identified. 
 */
let B = `MLLCL DCXXM LDDDL DDCDD DLDMX MDDLC XXDDD CDMXM DDCDC CLDDM DCDCX MDDDM CMDDL CXMLX LDCCX XCXXL XXDDD DCXXM MLLDD DLCXL CDDMX DLDXC XCXXX XDDML XXDDC XLDCC LLDCD DDLXM XMDDL CXMLC XXXDC CXMLD DDLCX MDLDD LCXMD DDLCD CDCMD CCCCD DLDDL CXMDD XXXCD DLDXC XXCXX XXLLD CXLDD DMDDD CDCDM XXMDL XCCDC LXMDD LCXML CDMLL XMCCD MCLXM DLLDX CXXCX XDLDD CXXXD MXXXC CDDXX LLXML XXXXC XMXDX LMDLC LDDCX XDLCL MDMLL DDDLC CDDMD DDDLC XMDCD MCMCM CDDLD DCDLX XXLLD LLDXC CDCXX XXXCC XDLCL DDCDD XXCXX MCCDD XMXDD CXCCD DMDDD CXDXM LXXMX XDDML CDDMC XXDLC XXMXX MXLXM XMCCL DCCXM MXLDD DXXXL CXXMX XCCXD MLLDD DLCLD DDDDL CXMCX CDDCD CCDLX XLDLL DDDXX CCCCL DXXLC XXMXL DCCLL DLXMX XCXLD DCXMX DDDLC XXDDD DLCXM LDXCX MCCLD MLXMD LXMDL XMXXX DLDCC LLLCL DDCXC CDCLC LDMCC LDXCX XDDLD CDCCD CXXLL DLLDX CCDCX XXXXD LDLXX CCLLX MXDDD CDCMC XXXCC DDLXX XCXDC XMLDC CLXCD DLCLX XDDLD CDCCX XXLCD DMDDD DLCXM CMCXX XCCCC XMXDX DLDDC CMCDD CLDDD LDCDC CCDLX DDDLC DCDCM DCDCX MDDDD LDCCL LXXDD DLXXC MLDCC DDCDM LLCLD XCLCD DLCXM LDXCX MCCLD LXXMC XCXLD DDLDD CDCDD LDCXC XDMCC XCCXX MXXDL LCCDM LDDLC XMDCX XMXXX LLXMD DDLLD XLXMD CLCXX XDCXX MXXDL CCXMX DDDCD XDXMX CLDCM LCXMD LCDDM DLXXD LCLMD DCXCC DCLCL DMCCL DXCXX DDLDC DCCDC XXDCD DLCXM MDLCX XXDCC CDMLD LLDDD LDCCL LCDLX DDLCX MLDDL CDMLC CLCCD MLXMM XXMDL XMMXX MDLMD XXDLC LMDLC XXDCL DDDDC DDDLX XLDDD CDDLD CXXCC XDLDD DDCXM XMCLD CCXLD LMXMC XMDDD CDCLX MDDLC XXDDC DCCXM CDDLC LCDDL XMCDL XDDLC XMCXC DXCXX CXDDD LLDXL XMDCC MXMCD CMCXX MDDDM DLCCX MXDDC CDCLX MCDCC XMDCL CXMXX XDCXC DMXXM CDDLC LCDCC XMMDL DDDLD DCXXC XCXDD DLXMX XXCLC XMDLM DXLDM DDDDL CLDDC XXXCD DDDLC DLXMX XDDXM CCXMX DDDCD DMCCX DXMDL CLLDC CXMDD LCXMX MCLCM LDDLX MDCXM CCDDL DDLXM DCMDD CDDXM CLCDL XDCXM XCDMD LXMXC CDCLC LDMCC LDXCX XDDLD CDCCD DLCXM XCXXX MDCXX DLXCL DCMLC XMDLC MXMDL LCXXC MDCCL CDDLX MDDLC XXCCD LCDXX XDDCL CXXXD XMCCX XXLCX XMXDD DLCXM XMCLC MLDDL XMDDC DLXDM CCXCD DLDCD CCDCX MXCDM DLXMC XMDXX CCXDL DDDDC CXCDD CDCML XXDCX XXDLD DCXXD CDDXM DLDDD MDLCC LDCCL LDDLC XXDDC XCDDC DCLDC CDDCD XXMXL DXCDD CDDLM DCDCC DDLCX MXLXX DDDDC XXMLX LDXMC XXDXD XMDCX MDLMX XMXDC LCDDL XMDLX MXCCD LLCCL DDDLD CDCCD DLCXX CCLDD DDLXM XCXML DMXXM XDCMX MDLLC XXCMD CDCDM XMDDC DCCLD DMDCC CXMMX XMDLL MCCXM MLCDD LCMXM DLLCX XCMDC LCXML XXXLD CXXMX DDDCD DMCCX DXMDL DCDDX XCCXD DDLCX MXCDM CCCCL DCCLL CDLXD DLCXM CMCXX XCCXL DMDDX MLDDD LCXMD LMLXX MDXDX MDCCM LDDDX MDDLC XMMXL DXCDD CDDLM DXXLL DLLDX CCDCX XXXXC CXDDD LCXMC CLDCC DDLCC XXMLL LDCDC CDLXM CLXXL DCCXM XDLDC CXDLD DCLLD LXXXC XMCDC CLCXM XXDLL DCCLL DDLCL DDCCC XMMLD CXCCX XXDMX DLDDM DCXCX XXMDC XXDLX XDMLL DMDCD DDMDC LLXMD LCLXX CCLDX CDMDC CCXMD LCDXM CLCMX MDLCD DLLDD CDCDM XMXDX XDCXM XCDLX MDDCM DLCDX CCXXX CLXXD DLDCD CCXMD CDDXX XLCXL DDCLC LDCCL LXXXC LDCML CXMDL DCXCL CCDCD CXDDC DXDXM MXXMC XCDCM XXCCX MMLDC MDDCD DXMCL CDLXL DCLCM XMDLL DXXCX XCLDC MLCXM DLDCL DDDML CDDLL MXMXD LDCCD CXMXC DLXMD DLXCD DLCDM XXMDL DDMLX MCCDD MDMDX MXXDL DCXDX MMXXM CXCDC MLDCC LLCCX MMLCL XMDDL CCDXD DCDDC DDCXM XCDMD LXMXC CDCLC LDMCC LDXCX XDDLD CDCCD CXXXC DLCDD CDCDD LCXMX MCLCM LDDLX MDCDD DMXDM DLDCC LLDDL CXMML CDDLL MDCCD LXDDL CXMLL DLXMX MLMDC XXLLX MDCXM DMXCC XLDXD XXCCX DLCMD CMXXD DLDXX XXCCX DXMMX XMCCC DCXXD XMDLM LCDDL LMDCL XDLCD CLXXC CXCLD XMCCD DXLXX XLMDC XCDCC DDLCX MDCXC LCCDC DCXXD XMMXX MCXCD CMXMX DCCXM MLMLX XMDDC DDCDD CXXLX XMLLD MXXDL XDXCC DCLCL DMCCL DXCXX DDLDC DCCDC LXDLC DCLDL CDCLX MDCXM CCXMC LLDXM DCDDL CXMDC XMCCX MMLDC MDDCD DXMCL DCMLX MDLXM MLDLL DDDDD XMCCX DCDML CCXXC CXDXD LDDCD DDLLD XLDMD DXMXD LDCCD DLCXM XCCDX DXMMC CDXCX CDMCX DDCDD LDMCL CMXMD LLCXX CMDCD DLCXM CLCDD CDDDC DDDLL DXCDD CXMDL LDMXX DLXDX MXDXD CDXCD MCLXM CCDDL DCCXX CXCXL CLDDC DDCDD LMDML LCXMC CLDDD MLXXD CLXLD CCXXC XCXMD XCCDC LCMCX XMDDX MXDCL XXCCM DMDXM XXDLD CCXXX DDXMD LDDLC XMXMC LCMXM DLCDD LXDCD CLLDD DLDXX CCLDD CDCDM XMXDX XCCXM MCXMX CDMDD LDMXX MCDDL XDXMD LMLLC LDXCL CCMDL XMLXX XXCXM XDXMM XXMDL MDXCC DCMMD CDLXD DLCXM XCCDX DXMMC DDLCX XDDLD DDMLX XDCDD CDXLX MLLDM XXDLX DXMXD XLMDX MMXXM DLMDC XXMLL LDCDC CDDCD DDLCX MCXXX DCDDC LXXCC DDLCX MXDXM LXXMX XDDCD LXDDL CXMLD XCXMC CLDXX CCXDD DLCXM DCDML DXCLD XDXMC DLXXL CDDMX DLDXC XCXXC MXMDL LCXXC MDCCM DLCDD DXMXC DDXMX DDDLC XMCCL DCCDD LCCXX MLLLD CDCCL XDLCD CLXDL DDCDC CDCXD MDDLD CDCCX XLLDL LDXCC DCXXX MLXXD CCXXX DLLLX MCXMD CXXML XDDDD CDLCL DDCCD MLCCX DXMMX LDXCX MDCLD CCDDL CXMCM DLCDM XLDCC XCXMD DLCCD DMLLL CLDDD MLXXD CCLXX XDXMX CCXXM XXDLD DCDLC LDCLD DLCXX DDDDC DDLXM DDDMD LCCML CDDMC XXDCL XMXXC CXXDD XLXMD CDDXD LDDCL LDLXX XCXMX XCCXD XXDDM LCDDL DCDDX DXMXX DDLCL DCCXX XLDLX MXXLM MLLDD DLCDD DLXXX DLDDD LDCDC CDDLC XMCCL DCCDD LCDLX XLDDC XMXDX XCCXM MLDCD DXXCC XDXXD LXDDD LCXMC XXMLL LDCDC CMLXX DCXMM CLDCX XMXDL DCCXD LDDCL LDLXX XCXMD DCDXM CCXDD MDLXM DDLCX MLCXX DLXDX XCCXD XDXXC CLLXM DLCDD MDCML CDDLL MCDLX DCDMX LXDDM LDCCL LDDLC XMXCX XCXXM XDCDC CLDLD LDCCD DLCXM XLCXX MXXLM MLLDC XXDXM DLCCX MDCDC XMDCC DLXXC XXCXX MXDCD CCLDX XDCDM XMDDC DCCLD DMDCC DDLXD XMDLX MXDDD LCXMC CLDCC DDLCD DCDCL XXDLX CLCDD CDXMX LCDDL XXXCD MCLML LCLDX CLCDD LCXMM DMLXM DLXMD DCDCL XXLMX MDDLC XMLDD LXLXX DCXML XCDDL DLXXL DXDDC LDCCD DCDXC XXCXX MXDCD CCLDX XDDLC XMDMC CDCCM CDLMX MCCDL XMXXD CCDCC LXCDD LDDLC XMLDD LXMMC LDCXX MMLXX DCDDL CXXDD LDCCD DXMCX CXLDL LXMCC XCXMD LXMCM CDDLD DDCDC DMLLL LXMDC DDXMX DDDLC XXDDD DLCLD DCMLX XDCML LCXMD LXMDD LCXMM DCLLD LLLCD DLXLD CCXDD DLCXM LDDLC XCDDC DDXXD XDMLD CXXXD DLCCD DCXMM LLCCD MLCDD MCXXD DLXMX XXDCD CCCLD MDCDD LXCDC XCXCD MLCLM DLXXX LDDDL CLXDM CXDCC XXXMX XMDDL DDLCD MLLCC DLXXX XCXMD CXXLL DLXXM XXMDD XXDCL MCMXM DLLCX XCMDC DDLCX MCXXX DLLLX MDCDD DDCDX DXXDD XMXXD CLCXM DDDLX XMXXM CXDCD DCDXC CDCCX CXMXX CXDDL CXMLX CDDMD LDDLC XCLCX XCMDD XMDLC DLXDD LCLDD CDDDL XXLLL DXCDD XXCXX M`;
B = B.replace(/ /g, '');
console.log(B.length);

// frequency analsyis of B's pairs
const freq = frequencyAnalysisOnPairs(B);
console.log(freq);

// convert B's pair to letters
const C = convertPairToLetter(B, freq);
console.log(C);

// show C's frequency matches English letter distribution
const freqC = frequency.analyseFrequency(C);
console.log(freqC);

// guess cipher letter by letter
const cipher = {
    A: 'e',      N: 'm',
    B: 't',      O: 'w',
    C: 'a',      P: 'p',
    D: 'i',      Q: 'g',
    E: 'o',      R: 'f',
    F: 'r',      S: 'y',
    G: 's',      T: 'b',
    H: 'n',      U: 'v',
    I: 'h',      V: 'k',
    J: 'd',      W: 'x',
    K: 'l',      X: 'q',
    L: 'c',      Y: '',
    M: 'u',      Z: '',
};

let decoded = decipher.decode(C, cipher);

// find tXe
// findtXe(decoded);
// pair, triple, and repeated pair frequency analysis
// const freqPair = frequency.analysePairFrequency(decoded);
// console.log(freqPair);
// const freqTriple = frequency.analyseTripleFrequency(decoded);
// console.log(freqTriple);
// const freqRepeatedPair = frequency.analyseRepeatedPairFrequency(decoded);
// console.log(freqRepeatedPair);

// space known words for readibility
// decoded = decoded.replace(/X|lost|those|than|empire|enemies|communications|from|agricola|arranged|final|battle|while|true|setup|street|neither|troops|suetonius/g, (w) => {return ' '+w+' ';});

console.log(decoded);