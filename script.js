
const display = () => {
    let hrs = new Date().getHours().toString(10);
    let min = new Date().getMinutes().toString(10);
    let sec = new Date().getSeconds().toString(10);
    let status = hrs > 11 ? 'PM' : 'AM';
    hrs = hrs > 12 ? (hrs%12).toString(10) : hrs.toString(10);
    hrs = hrs.length < 2 ? 0 + hrs : hrs;
    min = min.length < 2 ? 0 + min : min;
    sec = sec.length < 2 ? 0 + sec : sec;
    document.querySelector('.hrs').textContent = hrs;
    document.querySelector('.min').textContent = min;
    document.querySelector('.sec').textContent = sec;
    document.querySelector('.status').textContent = status;
}

setInterval(display, 1)

let conatiner = document.querySelector('.container');

const snowFall = () => {
    let snow = document.createElement('span');
    snow.className = 'snow';
    
    minSize = 5; 
    maxSize = 10;

    let snowSize = Math.random() * (maxSize - minSize) * 2;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";
    snow.style.left = Math.random() * 100 + "%";
    conatiner.appendChild(snow)

    setTimeout(() => {
        snow.remove();
    }, 10000)
}

setInterval(snowFall, 100)
