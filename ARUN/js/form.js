var inpGp = document.getElementsByClassName("inpgp");
var valGp = document.getElementsByClassName("validgp");
var fm1 = document.getElementById("fm1");
var val1 = document.getElementById("valid");

fm1.addEventListener("submit", (elm) => {
    elm.preventDefault();
    val1.innerText = "";

    // Loop through input fields and check if any are empty
    for (let inp of inpGp) {
        if (inp.value === "") {
            val1.innerText = "*Please fill data";
            val1.style.color = "red";
            break;
        }
    }
});

var data = ["name", "age", "password", "mobilno", "email"];

for (let x = 0; x < inpGp.length; x++) {
    // Fix comparison to check placeholder for "AGE"
    if (inpGp[x].getAttribute("placeholder") === "AGE") {
        continue; // Skip AGE field
    }

    inpGp[x].addEventListener("focusout", (eml) => {
        if (eml.target.value === "") {
            valGp[x].style.color = "red";
            valGp[x].innerText = `*required ${data[x]}`;
        } else {
            valGp[x].style.color = "green";
            valGp[x].innerText = "*OK";
        }
    });
}
