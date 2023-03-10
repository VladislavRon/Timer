//  Создайте счетчик секунд, который начинает отчет с 1 и заканчивается на 30,
// также добавьте кнопки которые останавливают отчет, и запускают его заново и добавьте кнопку
// обнуляющую отcчет. Также попробуйте изменить код так чтобы отсчет начинался с 30 и заканчивался на 1.

const counterRender = document.querySelector('.counterRender');
const buttonStop = document.querySelector('.buttonStop');
const buttonStart = document.querySelector('.buttonStart');
const buttonReset = document.querySelector('.buttonReset');


let timeoutId;
let counter;

let d;
let ms;
let s='00';
let i='00';
function func() {


    counter = setInterval(function() {
        ++i;
        s = String(i).padStart(2, "0");
        counterRender.textContent = `00:${s}:${ms}`;
        if(i>=30){
            clearInterval(counter);
            clearInterval(timeoutId);
            counterRender.textContent = `00:${s}:000`;
        }
    }, 1000);
    buttonStart.removeEventListener('click', func);
}


function countUp() {
    d = new Date();
    ms = String(d.getMilliseconds()).padStart(3, "0");

    counterRender.textContent = `00:${s}:${ms}`;

    timeoutId = setTimeout(() => {
        countUp();
    }, 10);
}


buttonStart.addEventListener("click", () => {
    countUp();
    func();
});

buttonStop.addEventListener("click", () => {
    clearTimeout(timeoutId);
    clearInterval(counter);
    buttonStart.addEventListener('click',func);

});

buttonReset.addEventListener("click", () => {
    counterRender.textContent = `00:00:000`;
    clearInterval(counter);
    clearInterval(timeoutId);
    i='00';
    s='00';
});