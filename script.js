function accountVerification(){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const invalidation = document.getElementById("account_invalid");
    if (email === "test@mail.com" && senha === "senha") {
        alert("O Dashboard será disponibilizado em breve!");
        invalidation.style.opacity = 0;
    } else {
        invalidation.style.opacity = 1;
    }
}