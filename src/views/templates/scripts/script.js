document.addEventListener('DOMContentLoaded', function() {
    // Função para adicionar evento de scroll suave a botões
    function addScrollEvent(buttonSelector, targetSelector) {
        document.querySelector(buttonSelector)?.addEventListener('click', function() {
            document.querySelector(targetSelector).scrollIntoView({
                block: "start", 
                behavior: "smooth"
            });
        });
    }

    // Adiciona eventos de scroll suave para os botões do menu
    addScrollEvent('.btnPrograma', '.programa');
    addScrollEvent('.btnVantagens', '.vantagens');
    addScrollEvent('.btnIncremento', '.incremento');
    addScrollEvent('.btnBeneficios', '.beneficios');
    addScrollEvent('.btnDuvidas', '.duvidas');
    addScrollEvent('.btnCadastro', '.cadastro');
    addScrollEvent('.btnCadastroFixed', '.cadastro');

    // Evento de scroll para mostrar/ocultar botão fixo de cadastro
    document.addEventListener('scroll', function() {
        const sec2 = document.querySelector('.sec2');
        const btnCadastroFixed = document.querySelector('.centerButton');
        const secCadastro = document.querySelector('.sec9');
    
        if (sec2 && btnCadastroFixed && secCadastro) {
            const rectSec2 = sec2.getBoundingClientRect();
            const rectCadastro = secCadastro.getBoundingClientRect();
    
            if (rectSec2.bottom < 0 && rectCadastro.top > window.innerHeight) {
                btnCadastroFixed.classList.add('block');
            } else {
                btnCadastroFixed.classList.remove('block');
            }
        }
    });

    // Função para aplicar o efeito de parallax
    function parallaxEffect() {
        const parallaxImage = document.querySelector('.parallaxImage');
        const scrollPosition = window.scrollY;
        // Ajuste o fator de multiplicação para evitar que a imagem seja cortada
        // parallaxImage.style.transform = 'translateY(' + scrollPosition * -0.1 + 'px)';
    }

    // Adiciona o evento de scroll para aplicar o efeito de parallax
    window.addEventListener('scroll', parallaxEffect);

    // Configuração do IntersectionObserver para animações
    const elementosParaObservar = document.querySelectorAll('.faixa, .line, .box, .boxInfos, .barra');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function createObserver() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (window.innerWidth >= 768) {
                        entry.target.classList.add('anima');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elementosParaObservar.forEach(elemento => {
            observer.observe(elemento);
        });
    }

    // Cria o observer inicialmente
    createObserver();

    // Atualiza o observer ao redimensionar a janela
    window.addEventListener('resize', function() {
        elementosParaObservar.forEach(elemento => {
            elemento.classList.remove('anima');
        });
        createObserver();
    });

    // Ajuste capa
    const maskImgCapa = document.querySelector('.maskImg');
    setTimeout(() => {
        maskImgCapa.classList.add('invisible');
    }, 1200);

    // Adiciona tabindex aos elementos filhos da classe .dafitiStructure
    const elements = document.querySelectorAll('.dafitiStructure h1, .dafitiStructure h2, .dafitiStructure h3, .dafitiStructure h4, .dafitiStructure h5, .dafitiStructure p, .dafitiStructure button, .dafitiStructure a, .dafitiStructure img[alt], .dafitiStructure video, .dafitiStructure .sr-only');
    let currentIndex = 1;

    elements.forEach((element) => {
        // Verifica se o elemento já tem tabindex
        if (element.hasAttribute('tabindex')) {
            return;
        }

        if (element.tagName === 'IMG') {
            if (element.getAttribute('alt').trim() !== '') {
                element.setAttribute('tabindex', currentIndex);
                currentIndex++;
            }
        } else if (element.tagName === 'BUTTON' || element.tagName === 'VIDEO') {
            element.setAttribute('tabindex', currentIndex);
            currentIndex++;
        } else if (element.tagName === 'A') {
            element.setAttribute('tabindex', currentIndex);
            element.setAttribute('aria-label', 'Esse link enviará você para outra página.');
            currentIndex++;
        } else if (element.tagName !== 'P' || (element.parentElement.tagName !== 'BUTTON' && element.parentElement.tagName !== 'A')) {
            element.setAttribute('tabindex', currentIndex);
            currentIndex++;
        }
    });
});