import React, { useEffect, useState } from 'react';
import './autores.css';


const AutoresPage = () => {
  const [autorData, setAutorData] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newAutorData, setNewAutorData] = useState({
    id: '',
    nome: '',
    sobrenome: '',
    nacionalidade: '',
  });
  const [selectedAutorId, setSelectedAutorId] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  async function fetchAutores() {
    const response = await fetch(`http://localhost:8080/autor`);
    const data = await response.json();
    return data;
  }

  async function createAutor(authorData) {
    try {
      const response = await fetch('http://localhost:8080/autor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authorData),
      });

      if (!response.ok) {
        throw new Error('Failed to create author');
      }

      // Author created successfully, fetch the updated list of authors
      const updatedAutores = await fetchAutores();
      setAutorData(updatedAutores);
      setIsCreating(false);
      setNewAutorData({
        id: '',
        nome: '',
        sobrenome: '',
        nacionalidade: '',
      });
    } catch (error) {
      console.error(error);
      // Handle the error here, show an error message, or perform any necessary actions
    }
  }

  async function deleteAutor(id) {
    try {
      const response = await fetch(`http://localhost:8080/autor/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete author');
      }

      // Author deleted successfully, fetch the updated list of authors
      const updatedAutores = await fetchAutores();
      setAutorData(updatedAutores);
    } catch (error) {
      console.error(error);
      // Handle the error here, show an error message, or perform any necessary actions
    }
  }

  async function updateAutor(id, updatedData) {
    try {
      const response = await fetch(`http://localhost:8080/autor/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update author');
      }
  
      // Author updated successfully, fetch the updated list of authors
      const updatedAutores = await fetchAutores();
      setAutorData(updatedAutores);
      setSelectedAutorId(null);
      setIsUpdating(false);
    } catch (error) {
      console.error(error);
      // Handle the error here, show an error message, or perform any necessary actions
    }
  }

  useEffect(() => {
    fetchAutores().then((data) => {
      setAutorData(data);
      console.log(data);
    });
  }, []);

  const handleEditClick = (id) => {
    setSelectedAutorId(id);
    setIsUpdating(true);
  };

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
          <button className="create-button-autor" onClick={() => setIsCreating(true)}>
            Create Autor
          </button>
          {isCreating && (
            <div>
              <h3>Create New Autor</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createAutor(newAutorData);
                }}
              >
                <label>
                  Nome:
                  <input
                    type="text"
                    value={newAutorData.nome}
                    onChange={(e) => setNewAutorData({ ...newAutorData, nome: e.target.value })}
                  />
                </label>
                <label>
                  Sobrenome:
                  <input
                    type="text"
                    value={newAutorData.sobrenome}
                    onChange={(e) =>
                      setNewAutorData({ ...newAutorData, sobrenome: e.target.value })
                    }
                  />
                </label>
                <label>
                  Nacionalidade:
                  <input
                    type="text"
                    value={newAutorData.nacionalidade}
                    onChange={(e) =>
                      setNewAutorData({ ...newAutorData, nacionalidade: e.target.value })
                    }
                  />
                </label>
                <button type="submit" className="autorButton">
                  Create
                </button>
                <button onClick={() => setIsCreating(false)} className="autorButton">
                  Cancel
                </button>
              </form>
            </div>
          )}
          <table className="custom-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Nacionalidade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {autorData.map((autor) => (
                <tr key={autor.id}>
                  <td>{autor.id}</td>
                  <td>{autor.nome}</td>
                  <td>{autor.sobrenome}</td>
                  <td>{autor.nacionalidade}</td>
                  <td>
                    <button onClick={() => handleEditClick(autor.id)}>Edit</button>
                    <button onClick={() => deleteAutor(autor.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isUpdating && selectedAutorId && (
  <div>
    <h3>Update Autor</h3>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const updatedData = {
          nome: document.getElementById('updated-nome').value,
          sobrenome: document.getElementById('updated-sobrenome').value,
          nacionalidade: document.getElementById('updated-nacionalidade').value,
        };
        updateAutor(selectedAutorId, updatedData);
      }}
    >
      <label>
        Nome:
        <input type="text" id="updated-nome" defaultValue={newAutorData.nome} />
      </label>
      <label>
        Sobrenome:
        <input type="text" id="updated-sobrenome" defaultValue={newAutorData.sobrenome} />
      </label>
      <label>
        Nacionalidade:
        <input
          type="text"
          id="updated-nacionalidade"
          defaultValue={newAutorData.nacionalidade}
        />
      </label>
      <button type="submit" className="autorButton">
        Update
      </button>
      <button onClick={() => setIsUpdating(false)} className="autorButton">
        Cancel
      </button>
    </form>
  </div>
)}
        </div>
      )}
    </div>
  );
};

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
