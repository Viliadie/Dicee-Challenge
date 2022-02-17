let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImageSourse1 = "images/dice" + randomNumber1 + ".png";
let randomImageSourse2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll('img')[0].setAttribute('src', randomImageSourse1);
document.querySelectorAll('img')[1].setAttribute('src', randomImageSourse2);

if (randomNumber1===randomNumber2) {
    document.querySelector('h1').innerHTML = '🚩 Draw! 🚩';
} else if (randomNumber1>randomNumber2) {
document.querySelector('h1').innerHTML = '🚩 Player Number1 Wins!';
} else {
document.querySelector('h1').innerHTML ='Player Number2 Wins🚩!';
} 