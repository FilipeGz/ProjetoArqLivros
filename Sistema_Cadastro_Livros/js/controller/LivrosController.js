import Livro from './Livro.js';

class LivrosController {
  constructor() {
    this.livros = this.carregarLivros();
    this.notificarVisualizacao();
  }

  adicionarLivro(livro) {
    const existingLivro = this.livros.find(l => l.titulo === livro.titulo);
    if (existingLivro) {
      this.notificarCadastro("O Livro" +(livro.titulo)+" já está cadastrado.");
      return;
    }

    this.livros.push(livro);
    this.salvarLivros();
    this.notificarVisualizacao();
    this.notificarCadastro("O Livro "+(livro.titulo)+" foi cadastrado.");
  }

  getLivros() {
    return this.livros;
  }

  notificarVisualizacao() {
    const livrosView = new LivrosView(this);
    livrosView.exibirLivros();
  }

  notificarCadastro(mensagem) {
    const livrosView = new LivrosView(this);
    livrosView.exibirMensagem(mensagem);
  }

  salvarLivros() {
    localStorage.setItem('livros', JSON.stringify(this.livros));
  }

  carregarLivros() {
    const livrosJSON = localStorage.getItem('livros');
    if (livrosJSON) {
      return JSON.parse(livrosJSON).map(livro => new Livro(livro.titulo, livro.autor, livro.anoPublicacao, livro.numeroPaginas));
    }
    return [];
  }
}

export default LivrosController;