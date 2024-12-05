// Função para navegação suave entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Rolagem suave até o destino do link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Função para exibir uma mensagem ao passar o mouse sobre o link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.textDecoration = 'underline';
        this.style.color = '#FF6347';  // Cor laranja ao passar o mouse
    });
    link.addEventListener('mouseleave', function () {
        this.style.textDecoration = 'none';
        this.style.color = 'white';  // Volta à cor original
    });
});

// Função para alterar o conteúdo dinamicamente (quando o usuário interage com os tópicos)
const pontosPositivos = document.getElementById('positivos');
const pontosNegativos = document.getElementById('negativos');

pontosPositivos.addEventListener('mouseover', () => {
    pontosPositivos.style.backgroundColor = '#e0f7fa';  // Cor de fundo suave
});

pontosPositivos.addEventListener('mouseout', () => {
    pontosPositivos.style.backgroundColor = 'transparent';  // Retorna ao fundo transparente
});

pontosNegativos.addEventListener('mouseover', () => {
    pontosNegativos.style.backgroundColor = '#f8bbd0';  // Cor de fundo suave
});

pontosNegativos.addEventListener('mouseout', () => {
    pontosNegativos.style.backgroundColor = 'transparent';  // Retorna ao fundo transparente
});

// Função para mostrar o botão de voltar ao topo quando o usuário rolar para baixo
window.addEventListener('scroll', () => {
    let scrollButton = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';  // Exibe o botão
    } else {
        scrollButton.style.display = 'none';  // Oculta o botão
    }
});

// Função para voltar ao topo ao clicar no botão
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Rolagem suave até o topo
    });
});
