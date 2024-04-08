function getZodiacSign() {
    const birthdateInput = document.getElementById('birthdate');
    const resultElement = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const month = birthdate.getMonth() + 1;

    let zodiacSign = '';

    if ((month === 3 && birthdate.getDate() >= 21) || (month === 4 && birthdate.getDate() <= 19)) {
        zodiacSign = 'Aries';
    } else if ((month === 4 && birthdate.getDate() >= 20) || (month === 5 && birthdate.getDate() <= 20)) {
        zodiacSign = 'Taurus';
    } else if ((month === 5 && birthdate.getDate() >= 21) || (month === 6 && birthdate.getDate() <= 20)) {
        zodiacSign = 'Gemini';
    } else if ((month === 6 && birthdate.getDate() >= 21) || (month === 7 && birthdate.getDate() <= 22)) {
        zodiacSign = 'Cancer';
    } else if ((month === 7 && birthdate.getDate() >= 23) || (month === 8 && birthdate.getDate() <= 22)) {
        zodiacSign = 'Leo';
    } else if ((month === 8 && birthdate.getDate() >= 23) || (month === 9 && birthdate.getDate() <= 22)) {
        zodiacSign = 'virgo';
    } else if ((month === 9 && birthdate.getDate() >= 23) || (month === 10 && birthdate.getDate() <= 22)) {
        zodiacSign = 'Libra';
    } else if ((month === 10 && birthdate.getDate() >= 23) || (month === 11 && birthdate.getDate() <= 21)) {
        zodiacSign = 'Scorpio';
    } else if ((month === 11 && birthdate.getDate() >= 22) || (month === 12 && birthdate.getDate() <= 21)) {
        zodiacSign = 'Saggitarius';
    } else if ((month === 12 && birthdate.getDate() >= 22) || (month === 1 && birthdate.getDate() <= 19)) {
        zodiacSign = 'Capricon';
    } else if ((month === 1 && birthdate.getDate() >= 20) || (month === 2 && birthdate.getDate() <= 18)) {
        zodiacSign = 'Aquarius';
    }   else if ((month === 3 && birthdate.getDate() >= 19) || (month === 3 && birthdate.getDate() <= 20)) {
        zodiacSign = 'pisces';
    } else{
        zodiacSign = 'Incorrect'
    }

    resultElement.textContent = `Your zodiac sign is ${zodiacSign}.`;
}