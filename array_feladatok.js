//1. feladat
function getOtosLotteryNumbers() {
    const lottoszamok = new Set();
    while (lottoszamok.size < 5) {
        const veletlenSzam = Math.floor(Math.random() * 90) + 1;
        lottoszamok.add(veletlenSzam);
    }
    return Array.from(lottoszamok);
}

//2. feladat
function getSortedLotteryNumbers(szamok) {
    return szamok.slice().sort((a, b) => a - b);
}

//3. feladat
function getNumberOfHits(lottoszamok, tippek) {
    return tippek.filter(tipp => lottoszamok.includes(tipp)).length;
}

//4. feladat
function getMonthlyLotteryArrayNumbers() {
    const haviSzamok = [];
    for (let i = 0; i < 4; i++) {
        haviSzamok.push(getOtosLotteryNumbers());
    }
    return haviSzamok;
}

//5. feladat
function getUniqueMonthlyNumbers(haviSzamok) {
    const osszesSzam = haviSzamok.flat();
    return Array.from(new Set(osszesSzam));
}

//6. feladat
function monthlyStatistics(haviSzamok) {
    const osszesSzam = haviSzamok.flat();
    const statisztika = {};
    
    osszesSzam.forEach(szam => {
        statisztika[szam] = (statisztika[szam] || 0) + 1;
    });

    return Object.entries(statisztika).map(([szam, gyakorisag]) => [parseInt(szam), gyakorisag]);
}

//Kiíratások
console.log("Heti lottószámok:", getMonthlyLotteryArrayNumbers());
console.log("Egyedi havi lottószámok:", getUniqueMonthlyNumbers(getMonthlyLotteryArrayNumbers()));
console.log("Havi statisztika:", monthlyStatistics(getMonthlyLotteryArrayNumbers()));
console.log("Találatok száma az első heti lottószámokkal:", getNumberOfHits(getMonthlyLotteryArrayNumbers()[0], [12, 34, 56, 78, 90]));
