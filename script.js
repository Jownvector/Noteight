function salvarArquivoTxt()
{
    // Seleciona o elemento que contém o conteúdo que será salvo
    const elementoConteudo = document.getElementById('conteudo-da-nota');

    // Pega o texto puro dentro do elemento, ignorando tags HTML
    const conteudoDoArquivo = elementoConteudo.innerText;

    // Cria um "blob" (objeto binário) com o conteúdo do texto e tipo 'text/plain'
    const arquivamentoTxt = new Blob([conteudoDoArquivo], { type: 'text/plain' });

    // Gera uma URL temporária que representa o blob (arquivo) na memória
    const urlBlob = URL.createObjectURL(arquivamentoTxt);

    // Cria um elemento <a> (link) dinamicamente para simular o clique de download
    const linkTxt = document.createElement('a');

    // Define o link do arquivo gerado para download
    linkTxt.href = urlBlob;

    // Pega o título do arquivo a partir de outro elemento (por exemplo, um <h1>)
    const titulo = document.getElementById('titulo-principal').innerText.trim();

    // Define o nome do arquivo (usa o título se existir, senão usa um nome padrão)
    linkTxt.download = titulo !== '' ? `${titulo}.txt` : 'arquivo.txt';

    // Adiciona temporariamente o link no corpo da página (necessário para funcionar em alguns navegadores)
    document.body.appendChild(linkTxt);

    // Simula um clique no link para iniciar o download
    linkTxt.click();

    // Remove o link do DOM após o clique, para manter a página limpa
    document.body.removeChild(linkTxt);

    // Libera a URL temporária criada anteriormente para evitar vazamento de memória
    URL.revokeObjectURL(urlBlob);
}


function editarNota()
{

}

function alterarTema()
{

}
