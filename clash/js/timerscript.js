
//window.onload = CreateTimer("timer",{{t}});
var Timer;
var TotalSeconds;


function CreateTimer(timer, Time) 
{
Timer = document.getElementById(timer);     //  To display the updated time
TotalSeconds = Time; 
move();               //  time left in seconds returned by the backend
UpdateTimer()       //  to display tim in format
window.setTimeout("Tick()", 2000);
}

function Tick() 
{
if (TotalSeconds <= 0)
 {
window.location.href="/logout";
return;
}

TotalSeconds -= 1;
UpdateTimer()
window.setTimeout("Tick()", 2000);
}

function UpdateTimer() 
{
Seconds=TotalSeconds;
var Hours = Math.floor(Seconds / 3600);     //To get hours and minutes
Seconds -= Hours * (3600);

var Minutes = Math.floor(Seconds / 60);
Seconds -= Minutes * (60);

Hours=Hours%24

var totalTime=Set(Hours)+":"+Set(Minutes)+":"+Set(Seconds);     //time in the correct format

Timer.innerHTML=totalTime;      //Display time

function Set(Time) {            //Doubt

return (Time < 10) ? "0" + Time : + Time;

}
}

//The only thing needed is the an html tag with id = "timer" 
//line 50 window.location.href = ""; or window.location.href = "log_out";

      function move() {
              var elem = document.getElementById("myBar");     
              var time= TotalSeconds;
              var width= time/15;
              elem.style.width = width+'%';
            }

