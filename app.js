const showTime = () =>  {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (hour < 10){
        document.querySelector(".hour").innerHTML = "0" + hour;
    }else{
        document.querySelector(".hour").innerHTML = hour;
    }
    if (minute < 10) {
      document.querySelector(".minute").innerHTML = "0" + minute;
    }else{
        document.querySelector(".minute").innerHTML = minute;
    }
    if (second < 10) {
      document.querySelector(".second").innerHTML = "0" + second;
    }else{
        document.querySelector(".second").innerHTML = second;
    }
    if (hour < 7){
        document.body.style.backgroundImage = "url(./assets/Night.jpg)";
    }
    else if(hour>=7 && hour < 11){
        document.body.style.backgroundImage = "url(./assets/Sunshine.jpg)";
    }
    else if(hour>=11 && hour<19){
        document.body.style.backgroundImage = "url(./assets/Afternoon.jpg)";
    }
    else{
        document.body.style.backgroundImage = "url(./assets/Night.jpg)";
    }
}


setInterval(() => {
    showTime();
}, 1000);


