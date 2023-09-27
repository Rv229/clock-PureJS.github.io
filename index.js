/*setInterval(() => {
    const d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotaion = 30*htime +mtime/2;
    mrotaion = 6*mtime + 1*stime/10;
    srotaion = 6*stime;
    hour.style.tansform = `rotate(${hrotaion}deg)`;
    minute.style.tansform = `rotate(${mrotaion}deg)`;
    second.style.tansform = `rotate(${srotaion}deg)`;
}, 1000);
*/
setInterval(() => {

    const d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotaion = 30*htime + mtime/2;
    mrotaion = 6*mtime + stime/10;
    srotaion = 6*stime;

    hour.style.transform = `rotate(${hrotaion}deg)`;
    minute.style.transform = `rotate(${mrotaion}deg)`;
    second.style.transform = `rotate(${srotaion}deg)`;
}, 1000);