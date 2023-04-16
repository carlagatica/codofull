window.onload = () => {
  document.getElementById('fundacion').style.display = "grid";
}
function openCard(evt, linkname) {
    var i, card;
    card = document.getElementsByClassName("show");
    for (i = 0; i < card.length; i++) {
      card[i].style.display = "none";     
    }
    document.getElementById(linkname).style.display = "grid";
  
    var nav = document.getElementById("navbar");
    var btns = nav.getElementsByClassName("btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
}
