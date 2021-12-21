function time(){
    var date = new Date(); 
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var period = "";
    if(hour >= 12){
        period = "pm";
    }
    else{
        period = "am";
    }
    if(hour == 0){
        hour = 12;
    }
    else{
        if(hour > 12){
            hour = hour - 12;
        }
    }
    hour = update(hour);
    minute = update(minute);
    second = update(second);

    document.getElementById("digital-time").innerText = hour + " : " + minute + " : " + second + " " + period;

    setTimeout(time, 1000)
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else{
        return t;
    }
}
time();