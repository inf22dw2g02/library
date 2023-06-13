import React, { useEffect, useState } from 'react';
import { AutorPageId } from './autoresPage';

const LivroPage = () => {
  const [livroData, setLivroData] = useState([]);

  async function fetchLivro() {
    const response = await fetch("http://localhost:8080/livro");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchLivro().then(data => {
      setLivroData(data);
    });
  }, []);

  return (
    <div className="livro-page">
      <h2>Página de Livros</h2>
      {livroData.length === 0 ? (
        <div>
          <p>Carregando os dados...</p>
        </div>
      ) : (
        <div>
          <div className="livro-container">
            {livroData.map(livro => (
              <div key={livro.id} className="livro-card">
                <h3>{livro.titulo}</h3>
                <p>Autor: <AutorPageId id={livro.autorId} /></p>
                <p>Ano de Publicação: {livro.anoPublicacao}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LivroPage;
