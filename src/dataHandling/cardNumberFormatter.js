// Change all numbers exclude first two and last four on star
function cardNumberFormatter(cardNumber) {
    const starsAmount = cardNumber.length - 6;

    let resultStr = cardNumber.slice(0, 2);
    for (let i = 0; i < starsAmount; i++) resultStr += '*'
    resultStr += cardNumber.slice(cardNumber.length - 4);

    return resultStr;
}

export default cardNumberFormatter;