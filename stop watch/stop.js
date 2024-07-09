let timer;
let running = false; 
let timeElapsed = 0;

function updateTime() {
    const hours = Math.floor(timeElapsed / 3600000);
    const minutes = Math.floor((timeElapsed % 3600000) / 60000);
    const seconds = Math.floor((timeElapsed % 60000) / 1000);
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(() => {
            timeElapsed += 1000;
            updateTime();
        }, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    timeElapsed = 0;
    updateTime();
    document.getElementById('startStop').textContent = 'Start';
    running = false;
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
