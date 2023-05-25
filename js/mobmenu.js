function mobmenu() {
    var x = document.getElementById("navbar");
    if (x.className === "mynavbar") {
      x.className += " responsive";
    } else {
      x.className = "mynavbar";
    }
  }