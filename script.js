// Seleção dos elementos do DOM
const inputSenha = document.getElementById('senha');
const inputTamanho = document.getElementById('tamanho');
const valorTamanho = document.getElementById('tamanho-valor');
const checkMaiusculas = document.getElementById('maiusculas');
const checkMinusculas = document.getElementById('minusculas');
const checkNumeros = document.getElementById('numeros');
const checkSimbolos = document.getElementById('simbolos');
const btnGerar = document.getElementById('btn-gerar');
const btnCopiar = document.getElementById('btn-copiar');

// Conjuntos de caracteres
const MAIUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz';
const NUMEROS = '0123456789';
const SIMBOLOS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Atualiza o texto do tamanho ao mover o slider
inputTamanho.addEventListener('input', () => {
    valorTamanho.textContent = inputTamanho.value;
});

// Função principal para gerar a senha
function gerarSenha() {
    let caracteresPermitidos = '';
    
    if (checkMaiusculas.checked) caracteresPermitidos += MAIUSCULAS;
    if (checkMinusculas.checked) caracteresPermitidos += MINUSCULAS;
    if (checkNumeros.checked) caracteresPermitidos += NUMEROS;
    if (checkSimbolos.checked) caracteresPermitidos += SIMBOLOS;

    if (caracteresPermitidos === '') {
        alert('Selecione pelo menos uma opção para gerar a senha!');
        return;
    }

    let senha = '';
    const tamanho = parseInt(inputTamanho.value);

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[indiceAleatorio];
    }

    inputSenha.value = senha;
}

// Função para copiar a senha para a área de transferência
function copiarSenha() {
    if (!inputSenha.value) return;

    navigator.clipboard.writeText(inputSenha.value).then(() => {
        alert('Senha copiada para a área de transferência!');
    });
}

// Eventos de clique
btnGerar.addEventListener('click', gerarSenha);
btnCopiar.addEventListener('click', copiarSenha);

// Gerar uma senha inicial ao carregar a página
gerarSenha();
