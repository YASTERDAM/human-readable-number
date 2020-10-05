let slovar = {
    1: { '0': '', '1': 'one ', '2': 'two ', '3': 'three ', '4': 'four ', '5': 'five ', '6': 'six ', '7': 'seven ', '8': 'eight ', '9': 'nine ' },
    2: { '0': '', '1': { '0': 'ten ', '1': 'eleven ', '2': 'twelve ', '3': 'thirteen ', '4': 'fourteen ', '5': 'fifteen ', '6': 'sixteen ', '7': 'seventeen ', '8': 'eighteen ', '9': 'nineteen ' }, '2': 'twenty ', '3': 'thirty ', '4': 'forty ', '5': 'fifty ', '6': 'sixty ', '7': 'seventy ', '8': 'eighty ', '9': 'ninety ' },
    3: { '0': '', '1': 'one hundred ', '2': 'two hundred ', '3': 'three hundred ', '4': 'four hundred ', '5': 'five hundred ', '6': 'six hundred ', '7': 'seven hundred ', '8': 'eight hundred ', '9': 'nine hundred ' },
}
module.exports = function toReadable(number) {
    number = number.toString().split('');
    let rank;
    let res = '';
    for (let i = 0; i < number.length; i++) {
        rank = number.length - i;
        if (rank === 1 && number[i] === '0' && res === '') res += 'zero';
        if (rank === 2 && number[i] === '1') {
            res += slovar[rank][number[i]][number[i + 1]];
            return res.trim();
        } else res += slovar[rank][number[i]]
    }
    return res.trim();
}