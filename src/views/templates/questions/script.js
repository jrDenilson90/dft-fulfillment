document.addEventListener('DOMContentLoaded', function () {
    const btnChecks = document.querySelectorAll('.questionsTemplate .btnCheck');

    // Adiciona um ouvinte de evento de clique para cada botão
    btnChecks.forEach(btn => {
        btn.addEventListener('click', function() {
            // Se o botão já possui a classe 'check', remove-a
            if (this.classList.contains('check')) {
                this.classList.remove('check');
            } else {
                // Remove a classe 'check' de todos os botões
                btnChecks.forEach(button => button.classList.remove('check'));
                
                // Adiciona a classe 'check' ao botão clicado
                this.classList.add('check');
            }
        });
    });

    var question = document.querySelectorAll('.questionsTemplate');
});
