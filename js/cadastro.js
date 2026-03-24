function mostrarErro(input, spanId, mensagem) {
    input.classList.add("input-erro");
    document.getElementById(spanId).textContent = mensagem;
}

function limparErro(input, spanId) {
    input.classList.remove("input-erro");
    document.getElementById(spanId).textContent = "";
}

function accountCreate(event){
    event.preventDefault();
    const name = document.getElementById("name");
    const cpf = document.getElementById("cpf");
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const tel = document.getElementById("tel");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmSenha = document.getElementById("confirm_senha");
    const invalidation = document.getElementById("account_invalid");

    limparErro(name, "erro-name");
    limparErro(cpf, "erro-cpf");
    limparErro(email, "erro-email");
    limparErro(tel, "erro-tel");
    limparErro(senha, "erro-senha");
    limparErro(confirmSenha, "erro-confirm-senha");

    let valido = true;

    if(!name.validity.valid){
        mostrarErro(name,"erro-name","O nome precisa ser preenchido!");
        valido = false;
    }
    if(!regexCpf.test(cpf.value) || cpf.value.length < 11){
        mostrarErro(cpf,"erro-cpf","CPF inválido! Use o formato '000.000.000-00'");
        valido = false;
    }
    if (!tel.validity.valid) {
        mostrarErro(tel,"erro-tel","Telefone inválido!");
        valido = false;
    }
    if (!email.validity.valid) {
        mostrarErro(email,"erro-email","Email inválido!");
        email.reportValidity();
        valido = false;
    }
     if (senha.value.length < 8) {
        mostrarErro(senha,"erro-senha","A senha precisa no mínimo 8 caracteres.");
        valido = false;
    }
    if (confirmSenha.value !== senha.value) {
        mostrarErro(confirm_senha,"erro-confirm-senha","As senhas não coincidem.");
        valido = false;
    }

    if(valido)
        alert("Página de Dashboard disponível em breve!");
}