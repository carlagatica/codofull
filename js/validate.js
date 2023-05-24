var modal = document.getElementById("myModal"); 
var btn = document.getElementById("myBtn"); 
var span = document.getElementsByClassName("close")[0];
var contactForm = document.getElementById("contactForm");

var myHeaders = new Headers();
myHeaders.append("apikey", "jQW6wRgyo7BQ6q7pNhXldBMWTH7nGAnz");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

contactForm.addEventListener("submit", async function(event){

    var emailInput = document.getElementById("emailFormContact");
    var emailValue = emailInput.value;
    console.log(emailValue);

    //*SE PREVIENE EL ENVIO DE DATOS DEL FORMULARIO A UN SERVIDOR, YA QUE AUN NO EXISTE *//
    event.preventDefault();
try {
    const response = await fetch(`https://api.apilayer.com/email_verification/${emailValue}`, requestOptions);
    if (!response.ok) {
        throw new Error("API request failed");
    }
    const result = await response.text();
    console.log(result);
    alert("EL EMAIL INGRESADO ES VALIDO");
} catch (error) {
    alert("Error en la solicitud del API o EMAIL INGRESADO NO VALIDO");
}

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


/*function validateForm() {
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
} */