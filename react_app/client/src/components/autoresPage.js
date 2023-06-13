import React, { useEffect, useState } from 'react';
import './autores.css';


const AutoresPage = () => {
  const [autorData, setAutorData] = useState([]);

  async function fetchAutores() {
    const response = await fetch(`http://localhost:8080/autor`);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchAutores().then(data => {
      setAutorData(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h2>Página de Autores</h2>
      {autorData.length === 0 ? (
        <div>
          <p>Carregando os dados...</p>
        </div>
      ) : (
      <div className="table-container">
          <h3>Os dados foram carregados com sucesso!</h3>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Nacionalidade</th>
              </tr>
            </thead>
            <tbody>
              {autorData.map(autor => (
                <tr key={autor.id}>
                  <td>{autor.id}</td>
                  <td>{autor.nome}</td>
                  <td>{autor.sobrenome}</td>
                  <td>{autor.nacionalidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const AutorPageId = ({ id }) => {
  const [autorData, setAutorData] = useState([]);

  useEffect(() => {
    const fetchAutor = async () => {
      const response = await fetch(`http://localhost:8080/autor/${id}`);
      const data = await response.json();
      setAutorData(data);
      console.log(data);
    };

    fetchAutor();
  }, [id]);

  return (
    <div>
      {autorData.length === 0 ? (
        <div>
          <p>..</p>
        </div>
      ) : (
        <div>
          <div key={autorData.id}>
          <p>{autorData.nome} {autorData.sobrenome}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { AutoresPage, AutorPageId };
