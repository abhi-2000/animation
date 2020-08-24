function myMove() {
   for(var i=0;i<=1;i++)
   { var elem = document.getElementById("img");   
    var pos =50;
    var id = setInterval(frame, 0);
    function frame() {
      if (pos == 830) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + "px"; 
      }
    }
  }
}