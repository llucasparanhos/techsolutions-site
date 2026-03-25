// Seleciona o botão e o corpo da página
const btnToggle = document.getElementById('toggle-mode');
const body = document.body;

// 1. Ao carregar a página, verifica se o usuário já tinha escolhido o modo escuro antes
const darkModeSaved = localStorage.getItem('dark-mode');

if (darkModeSaved === 'enabled') {
    body.classList.add('dark-mode');
}

// 2. Adiciona o evento de clique no botão
btnToggle.addEventListener('click', () => {
    // Alterna a classe .dark-mode (se tiver, tira; se não tiver, coloca)
    body.classList.toggle('dark-mode');

    // 3. Salva a preferência atual no navegador para a próxima visita
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});