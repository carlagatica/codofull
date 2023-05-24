function moreLess() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer mas";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
      moreText.style.display = "inline";
    }
  }

let more = document.querySelectorAll('.more');
for (let i=0; i<more.length; i++)
{
  more[i].addEventListener('click',function(){more[i].parentNode.classList.toggle('active') })
}
