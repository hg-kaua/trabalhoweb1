const sendBtn = document.getElementById('send-btn');

function validaNome() {
    const nomeEl = document.getElementById("name");
    const nome = nomeEl.value;
    if (nome.length > 80 || /\d/.test(nome)) {
        nomeEl.setCustomValidity('Campo obrigatório, Nome inválido');
    } else {
        nomeEl.setCustomValidity('');
    }
    nomeEl.reportValidity();
}

function validaData() {
    const dataEl = document.getElementById("dataNasc");
    const data = dataEl.value
    if(/^\d{2}-\d{2}-\d{4}$/.test(data)) {
         dataEl.setCustomValidity("");
    } else {
         dataEl.setCustomValidity("Data inválida! DD-MM-AAAA.");
    }
    dataEl.reportValidity();
}
function validaEmail() {
    const emailEl = document.getElementById("email");
    const email = emailEl.value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        emailEl.setCustomValidity("");
    } else {
        emailEl.setCustomValidity("Email inválido!");
    }
    emailEl.reportValidity();
}
function validaCpf() {
    const cpfEl = document.getElementById("cpf");
    const cpf = cpfEl.value;
    let regex = /^\d+$/;

    if (cpf.length === 11 && regex.test(cpf) ) { 
        cpfEl.setCustomValidity("");
    } else {
        cpfEl.setCustomValidity("CPF inválido!")
    }
    cpfEl.reportValidity();
}

function validarFormulario() {

    validaCpf();

    // Verifique se o formulário é válido após todas as validações
    const form = document.querySelector('form');
    if (form.checkValidity()) {
        // Se o formulário for válido, pode ser submetido ou realizar outras ações.
        alert("Um email com a senha provisória foi enviado para você")
        form.submit();
    } else {
        // Se o formulário for inválido, não faça nada ou forneça feedback adicional ao usuário.
        alert('Ops, CPF não encontrado.');
    }
}
sendBtn.addEventListener('click', validarFormulario);



