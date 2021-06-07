$(function(){

    
/* *********** Stopwatch******************* */

    let [hour,minute,second,milisecond]=[0,0,0,0];
    let timer;
    let h,m,s,ms;

    let time = function (){
        milisecond += 10;
        
        if(milisecond == 1000){
            milisecond = 0;
            second++;
            if(second==60){
                second = 0;
                minute++;
                if(minute==60){
                    minute = 0;
                    hour++;
                }
            }
        }

        if(hour<10){
            h = "0"+hour;
        }else{
            h = hour;
        }
        if(minute<10){
            m = "0"+minute;
        }else{
            m = minute;
        }
        if(second<10){
            s = "0"+second;
        }else{
            s = second;
        }
        if(milisecond<100){
            ms = "0"+milisecond;
            if(milisecond<10){
                ms = "00" + milisecond;
            }
        }else{
            ms = milisecond;
        }


        $(".timer").text(`${h}:${m}:${s}:${ms}`)
    };

    $("#startbtn").on("click",()=>{
        $(".start").animate({"top":"28px"},200);
        timer = setInterval(time,10);
    })

    $("#pausebtn").on("click",()=>{
        clearInterval(timer);
        $(".start").animate({"top":"38px"},100).animate({"top":"7px"},200);
    });

    $("#resetbtn").on("click",()=>{
        $(".reset").animate({"top":"10px","left":"10px"},200).animate({"top":"-14px","left":"-14px"},200);
        [hour,minute,second,milisecond]=[0,0,0,0]
        clearInterval(timer);
        $(".timer").text(`0${hour}:0${minute}:0${second}:00${milisecond}`)
    });



    /* ********** Clock***************** */

    setInterval(()=>{
        let ch,cm,cs;
        let mydate = new Date;
        let clockhour = mydate.getHours();
        let clockminute = mydate.getMinutes();
        let clockseconds = mydate.getSeconds();
        if(clockhour<10){
            ch = "0"+clockhour;
        }else{
            ch = clockhour;
        }
        if(clockminute<10){
            cm = "0"+clockminute;
        }else{
            cm = clockminute;
        }
        if(clockseconds<10){
            cs = "0"+clockseconds;
        }else{
            cs = clockseconds;
        }
        $(".clock").text(`${ch}:${cm}:${cs}`)
    },1000);

    $(".switch-to-clock").on("click",function(){
        $(".timer").toggleClass("hide");
        $(".clock").toggleClass("show");
    });



});