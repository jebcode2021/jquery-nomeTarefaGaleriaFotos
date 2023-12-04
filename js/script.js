$(document).ready(function () {

    document.querySelector('header button').addEventListener('click', function () {
        $('form').slideDown();
    });

    $('#botao-cancelar').on('click', function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const timeData = new Date();
        const botaoRemovaImagem = document.querySelector('.botao-remover').id;
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" alt="Imagem da tarefa">`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank">Ver imagem em tamanho real</a>
           </div>
           <span class="nome-tarefa">${nomeTarefa}</span>
           <span class="time-data">Adicionado em ${timeData.toLocaleDateString()} às ${timeData.toLocaleTimeString()}</span>
           <button type="button" class="botao-remover" id=${botaoRemovaImagem}>Remover tarefa</button>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $(novoItem).on('click', function (botaoRemovaImagem) {
            $(this).fadeOut(1000, function () {
                botaoRemovaImagem.target.parentNode.remove();
            });
           
        });

        $('#endereco-imagem-nova').val('');
    });

    $('.botao-remover').on('click', function (botaoRemovaImagem) {
        $(this).fadeOut(1000, function () {
            botaoRemovaImagem.target.parentNode.remove();
        });
       
    });
});