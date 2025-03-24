document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento de parallax e a imagem dentro dele
    const parallaxImage = document.querySelector('.parallaxImage');

    // Função para aplicar o efeito de parallax
    function parallaxEffect() {
        const scrollPosition = window.scrollY;
        // parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.02 + '%)';
    }

    // Adiciona o evento de scroll para aplicar o efeito de parallax
    window.addEventListener('scroll', parallaxEffect);

    // Seleciona todos os elementos que precisam ser observados
    const elementosParaObservar = document.querySelectorAll('.faixa, .line, .box, .boxInfos');

    // Define as opções do IntersectionObserver
    const observerOptions = {
        root: null, // Usar a viewport como contêiner
        rootMargin: '0px',
        threshold: 0.1 // Acionar quando 10% do elemento estiver visível
    };

    // Função para criar o IntersectionObserver
    function createObserver() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Verifica se a largura da janela é maior ou igual a 768px
                    if (window.innerWidth >= 768) {
                        entry.target.classList.add('anima');
                    }
                    observer.unobserve(entry.target); // Parar de observar uma vez que a classe é adicionada
                }
            });
        }, observerOptions);

        // Observa cada elemento selecionado
        elementosParaObservar.forEach(elemento => {
            observer.observe(elemento);
        });
    }

    // Cria o observer inicialmente
    createObserver();

    // Atualiza o observer ao redimensionar a janela
    window.addEventListener('resize', function() {
        // Remove a classe 'anima' de todos os elementos
        elementosParaObservar.forEach(elemento => {
            elemento.classList.remove('anima');
        });

        // Recria o observer para aplicar as mudanças
        createObserver();
    });
});