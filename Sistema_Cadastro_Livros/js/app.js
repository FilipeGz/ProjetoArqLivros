// js/app.js
import LivrosController from './controller/LivrosController.js';

const livrosController = new LivrosController();
livrosController.notificarVisualizacao();

const cadastroLivroForm = document.getElementById('cadastroLivro');
cadastroLivroForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const anoPublicacao = parseInt(document.getElementById('anoPublicacao').value);
  const numeroPaginas = parseInt(document.getElementById('numeroPaginas').value);

  const novoLivro = new Livro(titulo, autor, anoPublicacao, numeroPaginas);
  livrosController.adicionarLivro(novoLivro);

  cadastroLivroForm.reset();
});
