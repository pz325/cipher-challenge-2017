const frequency = require('./frequency.js')
const decipher = require('./decipher.js')

console.log('================================');
console.log('Challenge 1 A');
const A = 'HVMTVH, DO DN BMZVO OJ CZVM AMJH TJP. RZ YDY KDXF PK NJHZ XCVOOZM V XJPKGZ JA HJIOCN VBJ VIY E RVN HZIODJIZY OCZMZ OJJ, NJ RZ VGMZVYT CVQZ V ADGZ JI CZM. CZM IVHZ DN EJYDZ VIY NCZ RJMFN VN GDVDNJI WZORZZI OCZ WMDODNC GDWMVMT VIY OCZ WMDODNC HPNZPH, MZNZVMXCDIB GDIFN WZORZZI VMOZAVXON VIY DHKZMDVG MJHVI OZSON, NJ OCVO ODZN DI RDOC OCZ DIOZGGDBZIXZ TJP CVQZ WZZI MZXZDQDIB. IJOCDIB NPBBZNON OCVO NCZ CVN WZZI DIQJGQZY DI VITOCDIB NCVYT VIY NCZ CVN CZGKZY RDOC NZQZMVG DINPMVIXZ AMVPY XVNZN. NCZ CVN VI DIOZMZNODIB WVXFBMJPIY. NCZ YDY V KCY JI CPHVI HDBMVODJI NOPYDZN, HVDIGT HVOCZHVODXVG HJYZGGDIB, OCZI HJQZY JI OJ NOPYT FIJRGZYBZ HDBMVODJI RCDXC BJO CZM DIOJ OCZ WDWGDJKCDGZ XDMXPDO. VAOZM BMVYPVODIB NCZ NKZIO NJHZ ODHZ RDOC JIZ JA OCZ GJIYJI VPXODJI CJPNZN RJMFDIB JI KMJQZIVIXZ WZAJMZ OVFDIB CZM XPMMZIO KJNDODJI RDOC OCZ GDWMVMT. OCZMZ MZVGGT DN IJOCDIB NPNKDXDJPN DI CZM WVXFBMJPIY VIY D RVN DIXGDIZY OJ RMDOZ CZM JAA VN V GZVY, WPO RCZI D BJO TJPM HZNNVBZ D YZXDYZY D RVIOZY OJ HZZO CZM. D OMDZY OJ NZO OCVO PK JIGT OJ WZ OJGY OCVO NCZ DN JPO JA XJPIOMT AJM V RCDGZ. DI XVDMJ. D RDGG NZZ TJP OCZMZ. CVMMT';
const freqA = frequency.analyseFrequency(A);
console.log(freqA.length);
console.log(freqA);
// try-error to solve a and b for the affine shift ciphers
// const a = decipher.findA(15, 10);
// const b = decipher.findB();
// console.log(a);
const aA = 1;
const bA = 21;
const cipherA = decipher.makeCipher(aA, bA);
console.log(cipherA);
const decodedA = decipher.decode(A, cipherA);
console.log(decodedA);

console.log('================================');
console.log('Challenge 1 B');
const B = 'CQNBQ JVNXO VHNBC NNVNM JWMWX KUNTR WBVNW PWJND BSDUR DBJPA RLXUJ RBJBC XAHCX XXOCN WCXUM RWCQN CJENA WBXOA XVNOX ACQNN WCNAC JRWVN WCXOO XXUBJ WMLXF JAMBF QXWNE NAXWL NUNOC CQNBJ ONCHX OCQJC PANJC LRCHC QNUXB BXOCQ NRGCQ UNPRX WBBCJ WMJAM RWKJC CUNQJ DWCNM QRVCQ AXDPQ XDCQR BURON JWMXW UHQRB DWCRV NUHMN JCQKA XDPQC QRVAN URNOJ WMHNC CQNOD UUMNY CQXOQ RBBDO ONARW PRBTW XFWXW UHCXJ ONFJW MNENW RFJBW XCCJT NWRWC XQRBL XWORM NWLND WCRUJ OCNAQ RBMNJ CQCQN CADCQ XOCQN YNARU RWFQR LQQNY UJLNM CQNNW CRANA XVJWJ AVHFJ BORWJ UUHAN ENJUN MCXVN RWCQN YJYNA BQNUN OCCXV NRWQR BFRUU JVXWP CQNVR OXDWM CQRBM NBYJC LQOAX VBNGC DBEJA DBUNP JCDBX OCQNR GCQUN PRXWC XPJRD BBDNC XWRDB YJDUU RWDBY AXLXW BDUJW MPXEN AWXAX OKARC JWWRJ MNBLA RKRWP CQNMN ONJCX OCQNW RWCQJ CLJVD UXMXW DVJCC QNFAR CRWPX OCQRB VNBBJ PNCQN RLNWR QJENB DLLNB BODUU HBJLT NMCQN LRCHR WLUDM RWPCQ NCNVY UNXOL UJDMR DBFQN ANCQN YAXLD AJCXA BPDJA MCXXT CQNRA QNAXR LORWJ UBCJW MFNFN ANJUV XBCNW LRALU NMKHC QNNWN VHOXA LNFQX BNNVN MYXBB NBBNM XOCQN YXFNA CXTWX FXDAC QXDPQ CBFQN ANFNF NANBC AXWPC QNHYX BCNMX WUHQX UMRWP OXALN BFQNA NFNFN ANFNJ TCQNH JCCJL TNMRW BCANW PCQJW MFQNW ANRWO XALNV NWCBJ CCNVY CNMCX SXRWD BCQNH FNANJ CCJLT NMXWA XDCNF NBDAE REXAB XFNXD AUREN BJWMX DACQJ WTBCX PWJND BSDUR DBJPA RLXUJ FQXRW JCRVN XOPAN JCNVN APNWL HANLX PWRBN MCQNB CAJCN PHXOC QNRWB DAPNW COXAL NBXWX DAUNO COUJW TJWML XVVJW MNMXD AANCA NJCFR CQVXV NWCBC XBYJA NMDNC XCQRB JLCRX WCQNV JSXAR CHXOX DALJE JUAHF NANBJ ENMJU XWPFR CQCQN ANBNA ENOXA LNBJU UXCQN AOAXW CURWN CAXXY BQJEN KNNWB UJDPQ CNANM JWMRC RBFRC QPANJ CBJMW NBBJW MMNNY NBCJW PNARQ JENCX ANYXA CCQJC CQNRG CQUNP RXWUX BCRCB JZDRU JCXCQ NNWNV HRONJ ACQJC ROFNJ ANCXB JENUX WMRWR DVJWM ENADU JWRDV OAXVJ BRVRU JAOJC NFNVD BCORW MCQNB CANWP CQCXL ADBQC QRBAN KNUUR XWROF NOJRU CQNWJ UUXOK ARCJW WRJRB UXBCC QRBVD LQXOJ PARLX UJBBC XAHRB FRMNU HTWXF WKDCC QNODU UCADC QVDBC ANVJR WQRMM NWOXA WXFJW MJBAN VJATN MKHVH CADBC NMBUJ ENJWM LXWOR MJWCC RAXFQ JCKNC CNAYU JLNCX QRMNJ KXXTC QJWJV XWPKX XTB';
const freqB = frequency.analyseFrequency(B);
console.log(freqB.length);
console.log(freqB);
const aB = 1;
const bB = 9;
const cipherB = decipher.makeCipher(aB, bB);
console.log(cipherB);
const decodedB = decipher.decode(B, cipherB);
console.log(decodedB);