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
          if (confirm("Download Finished")) {
            txt = "Files are Downloaded successfully";
            cont.style.display="none";
            document.getElementById("tick-id").style.backgroundImage="url('/animation/svgs/tickgif.gif')";
      
          } else {
            cont.style.display="none";
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
  
 }, 350)
}

function myMove()
{
 move();

}

