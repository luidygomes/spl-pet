const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const submitBtn = document.getElementById("submit");

submitBtn.style.opacity = 0.5;
submitBtn.style.cursor = "default";

function verificarCampos() {
    const emailValido = emailInput.validity.valid;
    const senhaPreenchida = senhaInput.value.length > 0;

    if(emailValido && senhaPreenchida) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = 1;
        submitBtn.style.cursor = "pointer";
    } else {
        submitBtn.style.opacity = 0.5;
        submitBtn.style.cursor = "default";
    }
}

emailInput.addEventListener("input", verificarCampos);
senhaInput.addEventListener("input", verificarCampos);

function accountVerification(event){
    event.preventDefault();
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const invalidation = document.getElementById("account_invalid");
    if(email.validity.valid && senha.value.length > 0) {
        if (email.value === "test@mail.com" && senha.value === "senha") {
            alert("O Dashboard será disponibilizado em breve!");
            invalidation.style.opacity = 0;
        } else {
            invalidation.style.opacity = 1;
        }
    } else {
        senha.reportValidity();
        email.reportValidity();
    }
}