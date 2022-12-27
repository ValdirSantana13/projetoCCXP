const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const lancamento = "21 april 2023"

function countDown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const secTotal = (datalanc- hoje)/1000;

    const finalDays = Math.floor(secTotal / 60 / 60 / 24);
    const finalHour = Math.floor(secTotal / 60 / 60) % 24;
    const finalMinute = Math.floor(secTotal / 60) % 60;
    const finalSecond  = Math.floor(secTotal) % 60;

    day.innerHTML = finalDays + "D"
    hour.innerHTML = formatoTempo(finalHour) + "H"
    minute.innerHTML = formatoTempo(finalMinute) + "M"
    second.innerHTML = formatoTempo(finalSecond) + "S"
    
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)