const container = document.querySelector('.container');
const cpfEl = document.getElementById('cpf');
const senhaEl = document.getElementById('senha');
const sendBtn = document.getElementById('send-btn');
const changeBtn = document.getElementById('changeSend-btn');
const titulo = document.getElementById('title')
let novaSenha;
function verificaCpf() {
    let cpf = cpfEl.value;
    let regex = /^\d+$/;

    console.log(cpf.length);
    if (cpf.length === 11 && regex.test(cpf) ) { 
        return true
    } else {
        return false
    }
}
function verificaSenhaProvisoria() {
    const senhaProvisoria = "senhaprovisoria";

    if( senhaEl.value === senhaProvisoria) {
        return true;
    } else {
        return false;
    }

}
function validarFormulario() {
    const cpfValidado = verificaCpf();
    const senhaValidado = verificaSenhaProvisoria();
    
    if(cpfValidado === true && senhaValidado === true) {
        return true;
    } else {
        return false
    }
}
function mudarCamposSenha() {
    senhaEl.value = ""
    cpfEl.value = ""
    sendBtn.style.display = "none"
    changeBtn.style.display = "block"

    // Altera o titulo para "crie sua senha"
    titulo.textContent = "Crie sua senha";
    // Altera o rótulo e o placeholder do campo de CPF
    cpfEl.textContent = 'Nova Senha:';
    cpfEl.placeholder = 'Digite sua nova senha';
    
    // Altera o rótulo e o placeholder do campo de senha
    senhaEl.textContent = 'Confirmar Senha:';
    senhaEl.placeholder = 'Confirmar senha';

    
}
function validarNovaSenha() {
    novaSenha = cpfEl.value

    if(novaSenha === senhaEl.value) {
        return true
    } else {
        return false
    }
}


sendBtn.addEventListener('click', () => {
    if(validarFormulario() === true) {
        mudarCamposSenha();
    } else {
        cpfEl.value = "";
        senhaEl.value = ""
        alert("Cpf ou senha incorreto")
    }
});
changeBtn.addEventListener('click', () => {
    if(validarNovaSenha() === true) {
        // ir pra pagina principal
        window.location.href = "../PaginaPrincipal/paginaPrincipal.html";
    } else {
        cpfEl.value = "";
        senhaEl.value = ""
        alert("Senha incorreto")
    }
});
