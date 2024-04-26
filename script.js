

function updateTime() {
    let date = new Date()

    document.getElementById("hours").innerHTML = date.getHours()
    document.getElementById("mins").innerHTML = date.getMinutes()
    document.getElementById("sec").innerHTML = date.getSeconds()
    // document.getElementById("milli").innerHTML = date.getMilliseconds()
}



setInterval(() => {
    updateTime()
}, 100);

