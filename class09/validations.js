var nameInput = document.getElementById("name");

nameInput.addEventListener("blur", validateName);

function validateName() {
    var nameValue = nameInput.value;
    var nameError = document.getElementById("nameError");

    if (nameValue.length < 6) {
        nameError.innerText = "El nombre debe tener, al menos, 6 caracteres";
    } else if (nameValue.length == nameValue.replace(/\s/g, "").length) {
        nameError.innerText = "El nombre debe tener, al menos, un espacio.";
    } else {
        nameError.innerText = "";
    }
}