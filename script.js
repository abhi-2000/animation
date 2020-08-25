var n=0;
var cont = document.getElementById("container");   
function move() {
var elem = document.getElementById("img");   
    var pos =45;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 830) {
        clearInterval(id);
        
        if(n<4)
         { elem.style.left = 45 + "px";
            myMove();
        }
        else
        {
          var txt;
          if (confirm("Transfer Finished")) {
            txt = "Files are transfered successfully";
            cont.style.display="none";
            document.getElementById("tick-id").style.backgroundImage="url('/animation/svgs/tick.svg')";
      
          } else {
            txt = "You pressed Cancel!";
          }
          document.getElementById("demo").innerHTML = txt;     
          
        }
     }
      else {
        pos++;
        elem.style.left = pos + "px"; 
      }
    }
    n++;

  setInterval(()=> {
   document.getElementsByTagName('progress')[0].value=
   document.getElementsByTagName('progress')[0].value + 1
  
 }, 310)
}

function myMove()
{
 move();

}

var width=300;
var dif=2;
var intervalID=0;
function increase()
{
  intervalID= setInterval(zoomIn,20);
}
function zoomIn()
{
  if(width<4000)
  {
    width=width+dif;
    document.getElementById("tick-id").style.width=width;
  }
  else{
    clearInterval(intervalID);
  }
}