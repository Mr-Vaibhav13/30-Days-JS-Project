var count = new Date("Sep 13 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now= new Date().getTime();
    var distance = count - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    
    
    document.getElementById("days").innerHTML=days;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("seconds").innerHTML=seconds;

    if(distance<0){
        clearInterval(x);

        document.getElementById("days").innerHTML='00';
        document.getElementById("days").innerHTML='00';
        document.getElementById("days").innerHTML='00';
        document.getElementById("days").innerHTML='00';




    }
},1000);

