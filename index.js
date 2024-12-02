document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    
    const senha = document.getElementById("password");
    senha.addEventListener("input", function() {
        if (senha.value.length > 7) {
            senha.value = senha.value.slice(0, 7);
        }
    });

    
    const confirmPassword = document.getElementById("confirmpassword");
    confirmPassword.addEventListener("input", function() {
        if (confirmPassword.value.length > 7) {
            confirmPassword.value = confirmPassword.value.slice(0, 7);
        }
    });

  
    const login = document.getElementById("login");
    login.addEventListener("input", function() {
        if (login.value.length > 5) {
            login.value = login.value.slice(0, 5);
        }
    });

    
    const cpf = document.getElementById("cpf");
    cpf.addEventListener("input", function() {
        let cpfValue = cpf.value.replace(/\D/g, ''); 
        if (cpfValue.length <= 3) {
            cpf.value = cpfValue;
        } else if (cpfValue.length <= 6) {
            cpf.value = cpfValue.replace(/(\d{3})(\d{1,})/, '$1.$2');
        } else if (cpfValue.length <= 9) {
            cpf.value = cpfValue.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
        } else {
            cpf.value = cpfValue.slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
        }
    });

    
    const celular = document.getElementById("celular");
    celular.addEventListener("input", function() {
        let celularValue = celular.value.replace(/\D/g, ''); 
        if (celularValue.length <= 2) {
            celular.value = "+" + celularValue;
        } else if (celularValue.length <= 4) {
            celular.value = "+" + celularValue.slice(0, 2) + " (" + celularValue.slice(2);
        } else if (celularValue.length <= 9) {
            celular.value = "+" + celularValue.slice(0, 2) + " (" + celularValue.slice(2, 4) + ") " + celularValue.slice(4);
        } else {
            celular.value = "+" + celularValue.slice(0, 2) + " (" + celularValue.slice(2, 4) + ") " + celularValue.slice(4, 9) + "-" + celularValue.slice(9, 13);
        }
    });

   
    const telefoneFixo = document.getElementById("telefonefixo");
    telefoneFixo.addEventListener("input", function() {
        let telefoneFixoValue = telefoneFixo.value.replace(/\D/g, ''); 
        if (telefoneFixoValue.length <= 2) {
            telefoneFixo.value = "+" + telefoneFixoValue;
        } else if (telefoneFixoValue.length <= 4) {
            telefoneFixo.value = "+" + telefoneFixoValue.slice(0, 2) + " (" + telefoneFixoValue.slice(2);
        } else if (telefoneFixoValue.length <= 9) {
            telefoneFixo.value = "+" + telefoneFixoValue.slice(0, 2) + " (" + telefoneFixoValue.slice(2, 4) + ") " + telefoneFixoValue.slice(4);
        } else {
            telefoneFixo.value = "+" + telefoneFixoValue.slice(0, 2) + " (" + telefoneFixoValue.slice(2, 4) + ") " + telefoneFixoValue.slice(4, 9) + "-" + telefoneFixoValue.slice(9, 13);
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = false;

        
        const name = document.getElementById("name");
        const nameError = createErrorElement(name, "Nome deve ter pelo menos 10 caracteres e começar com letra maiúscula.");
        const nameRegex = /^[A-Z][a-zA-Z\s]{9,}$/;
        if (!nameRegex.test(name.value)) {
            isValid = false;
            nameError.style.display = "block";
        } else {
            nameError.style.display = "none";
        }

        // Validação Nome Materno
        const nomeMaterno = document.getElementById("nomematerno");
        const nomeMaternoError = createErrorElement(nomeMaterno, "Nome materno deve ter pelo menos 10 caracteres e começar com letra maiúscula.");
        if (!nameRegex.test(nomeMaterno.value)) {
            isValid = false;
            nomeMaternoError.style.display = "block";
        } else {
            nomeMaternoError.style.display = "none";
        }

        // Validação CPF
        const cpfError = createErrorElement(cpf, "CPF deve estar no formato 111.111.111-01.");
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf.value)) {
            isValid = false;
            cpfError.style.display = "block";
        } else {
            cpfError.style.display = "none";
        }

        const celularError = createErrorElement(celular, "Celular deve estar no formato +55 (XX) XXXXX-XXXX.");
        const celularRegex = /^\+55\s\d{2}\s\d{5}-\d{4}$/;
        if (!celularRegex.test(celular.value)) {
            isValid = false;
            celularError.style.display = "#";
        } else {
            celularError.style.display = "none";
        }

       
        const telefoneFixoError = createErrorElement(telefoneFixo, "Telefone fixo deve começar com 2, 3, 4 ou 5.");
        const telefoneFixoRegex = /^\+55\s\d{2}\s[2-5]\d{4}-\d{4}$/;
        if (telefoneFixo.value && !telefoneFixoRegex.test(telefoneFixo.value)) {
            isValid = true;
            telefoneFixoError.style.display = "block";
        } else {
            telefoneFixoError.style.display = "none";
        }

        const endereco = document.getElementById("enderecoCompleto");
        const enderecoError = createErrorElement(endereco, "Endereço deve iniciar com Rua, Avenida, Travessa ou Av., seguido de 10 caracteres.");
        const enderecoRegex = /^(Rua|Avenida|Travessa|Av\.)\s.{10,}$/i;
        if (!enderecoRegex.test(endereco.value)) {
            isValid = false;
            enderecoError.style.display = "block";
        } else {
            enderecoError.style.display = "none";
        }

       
        const loginError = createErrorElement(login, "Login deve ter exatamente 5 letras maiúsculas.");
        const loginRegex = /^[A-Z]{5}$/;
        if (!loginRegex.test(login.value)) {
            isValid = false;
            loginError.style.display = "block";
        } else {
            loginError.style.display = "none";
        }

        
        const senhaError = createErrorElement(senha, "Senha deve ter exatamente 7 caracteres alfanuméricos.");
        const senhaRegex = /^[a-zA-Z0-9]{7}$/;
        if (!senhaRegex.test(senha.value)) {
            isValid = false;
            senhaError.style.display = "block";
        } else {
            senhaError.style.display = "none";
        }

        if (isValid) {
            form.submit();
        }
    });

   
    function createErrorElement(inputElement, message) {
        let errorElement = inputElement.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement("div");
            errorElement.classList.add('error-message');
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
        }
        errorElement.textContent = message;
        return errorElement;
    }
});
