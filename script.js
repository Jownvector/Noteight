//Função para salvar o conteúdo da nota como um arquivo "".txt"
function salvarArquivoTxt() {
     // Pega o elemento da nota
    const elementoConteudo = document.getElementById('conteudo-da-nota');

     // Extrai o texto puro
    const conteudoDoArquivo = elementoConteudo.innerText;

    // Cria um Blob com o texto
    const arquivamentoTxt = new Blob([conteudoDoArquivo], { type: 'text/plain' });

    // Cria URL temporária para o arquivo
    const urlBlob = URL.createObjectURL(arquivamentoTxt);

    // Cria um link
    const linkTxt = document.createElement('a');

    // Define a URL para download
    linkTxt.href = urlBlob;

    // Pega o título da nota
    const titulo = document.getElementById('titulo-principal').innerText.trim();

    // Define nome do arquivo
    linkTxt.download = titulo !== '' ? `${titulo}.txt` : 'arquivo.txt';

    // Adiciona o link ao DOM
    document.body.appendChild(linkTxt);

    // Simula o clique para download
    linkTxt.click();

    // Remove o link
    document.body.removeChild(linkTxt);

    // Libera a URL temporária
    URL.revokeObjectURL(urlBlob);
}

//Função para alternar entre tema claro e escuro
function alterarTema() {
    // Pega input do tema claro
    const temaClaro = document.getElementById('radio-tema-claro');

    // Pega input do tema escuro
    const temaEscuro = document.getElementById('radio-tema-escuro');

    if (temaClaro.checked) {
        // Aplica classe de tema claro
        document.body.classList.add('tema-claro-principal');

        // Remove classe de tema escuro
        document.body.classList.remove('tema-escuro-principal');

    } else if (temaEscuro.checked) {
        // Aplica classe de tema escuro
        document.body.classList.add('tema-escuro-principal');

        // Remove classe de tema claro
        document.body.classList.remove('tema-claro-principal');
    }
}

// Aguarda o carregamento do DOM para adicionar eventos
window.addEventListener('DOMContentLoaded', () => {
    // Evento para tema claro
    document.getElementById('radio-tema-claro').addEventListener('change', alterarTema);

    // Evento para tema escuro
    document.getElementById('radio-tema-escuro').addEventListener('change', alterarTema);
});

// Aviso sobre o salvamento das anotações
window.addEventListener("beforeunload", function (event) {
  // Define a mensagem de aviso
  const message = "Você tem alterações não salvas. Tem certeza de que deseja sair?";
  
  // Linha de compatibilidade para os navegadores
  event.preventDefault();

  // Retorna a mensagem customizada
  return message;
});
