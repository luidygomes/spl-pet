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
    const btn = document.getElementById("submit");

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
    if(!regexCpf.test(cpf.value)){
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
        mostrarErro(confirmSenha,"erro-confirm-senha","As senhas não coincidem.");
        valido = false;
    }
    if(valido) {
        btn.disabled = true;
        btn.value = "Criando conta..."
        postData();
    }
}

async function postData(){
    const dados = {
        nome:       document.getElementById("name").value.trim(),
        cpf:        document.getElementById("cpf").value.trim(),
        telefone:   document.getElementById("tel").value.trim(),
        email:      document.getElementById("email").value.trim(),
        senha:      document.getElementById("senha").value
    };

    try {
        const resposta = await fetch('http://localhost:5000/api/auth/cadastro', {
            method: 'POST',

            headers: {'Content-Type': 'application/json' },

            body: JSON.stringify(dados)
        });

        const json = await resposta.json();
        console.log(json);

        if(resposta.ok) {
            localStorage.setItem('spl_token', json.token);

            alert("Página de Triagem disponível em breve!");
        } else{
            const erroApi = document.getElementById('erro-api');
            erroApi.textContent = json.erro;
            erroApi.style.display = 'block';
        }

    } catch (erro) {
        const erroApi = document.getElementById('erro-api');
        erroApi.textContent = 'Não foi possível conectar ao servidor.';
        erroApi.style.display = 'block';

    } finally {
        const submit = document.getElementById("submit");
        submit.disabled = false;
        submit.value = "Criar conta";
    }
}