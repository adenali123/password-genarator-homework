ConstresultEl = document.getElementById('reults');
ConstlengthEl = document.getElementById('length');
ConstuppercaseEl = document.getElementById('uppercase');
ConstnumberEl = document.getElementById('number');
ConstsymbolEl = document.getElementById('symbol');
ConstgererateEl = document.getElementById('generate');
ConstclipboardEl = document.getElementById('clipboard');

const Randomfunction = {
    lower: getRandomlower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListetener
    const length = +lenthEl.value;
    const hasLower  = +LowerEl.value;
    const hasUpper = +lUpperEl.value;
    const hasSymbol = +symbolEl.value;
    const hasNumber = +NumberEl.value;



function getRandomlower() {

 return String.fromCharCode(math.floor(math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(math.floor(math.random() * 26) + 65);
   }
   
function getRandomNumber() {
    return String.fromCharCode(math.floor(math.random() * 10) + 48);
   }

function getRandomSymbol() {
    const symbols ='!@£$%^&*()_+-=<>,./?';
    return symbols[maths.floor(math.random() * symbols.length)];

}
