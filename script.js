var n=0;
var cont = document.getElementById("container");   
function myMove() {
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
      
      } else {
        pos++;
        elem.style.left = pos + "px"; 
      }
    }
    n++;

  setInterval(()=> {
   document.getElementsByTagName('progress')[0].value=
   document.getElementsByTagName('progress')[0].value + 1
  
 }, 360)
}


