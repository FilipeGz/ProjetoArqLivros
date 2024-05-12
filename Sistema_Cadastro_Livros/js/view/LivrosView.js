class LivrosView {
  constructor(livrosController) {
    this.livrosController = livrosController;
  }

  exibirLivros() {
    const livrosElement = document.getElementById('livros');
    livrosElement.innerHTML = '';

    const livros = this.livrosController.getLivros();
    if (livros.length === 0) {
      livrosElement.innerHTML = '<p>Nenhum livro cadastrado.</p>';
    } else {
      livros.forEach((livro) => {
        const livroElement = document.createElement('div');
        livroElement.classList.add('livro');

        livroElement.innerHTML = `
          <h3>${livro.titulo}</h3>
          <p>Autor: ${livro.autor}</p>
          <p>Ano de Publicação: ${livro.anoPublicacao}</p>
          <p>Número de Páginas: ${livro.numeroPaginas}</p>
        `;

        livrosElement.appendChild(livroElement);
      });
    }
  }

  exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
  }
}
