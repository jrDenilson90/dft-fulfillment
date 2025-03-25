document.addEventListener('DOMContentLoaded', function() {
    // Inicio do Menu
    function addScrollEvent(buttonSelector, targetSelector) {
        document.querySelector(buttonSelector)?.addEventListener('click', function() {
            document.querySelector(targetSelector).scrollIntoView({
                block: "start", 
                behavior: "smooth"
            });
        });
    }
    
    addScrollEvent('.btnPrograma', '.programa');
    addScrollEvent('.btnVantagens', '.vantagens');
    addScrollEvent('.btnIncremento', '.incremento');
    addScrollEvent('.btnBeneficios', '.beneficios');
    addScrollEvent('.btnDuvidas', '.duvidas');
    addScrollEvent('.btnCadastro', '.cadastro');
    // Fim do Menu

    // Função para fixar a sec2
    window.addEventListener('scroll', function() {
        const element = document.querySelector('.sec2');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementOffsetTop = element.offsetTop;

        if (scrollTop >= elementOffsetTop) {
            element.classList.add('fixed');
        }
    });

    // Usar IntersectionObserver para detectar quando sec1 aparece
    const sec1 = document.querySelector('.sec1');
    const sec2 = document.querySelector('.sec2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sec2.classList.remove('fixed');
            }
        });
    }, {
        root: null, // Usar a viewport como contêiner
        threshold: 0.1 // Acionar quando 10% do sec1 estiver visível
    });

    observer.observe(sec1);

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