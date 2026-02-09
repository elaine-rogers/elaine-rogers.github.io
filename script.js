console.log("script loaded");

function updateClock() {
    var now = new Date();
    const pad = n => String(n).padStart(2, '0');
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
        time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());

        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}
updateClock();
