import React, { useEffect, useState } from "react";

function App() {
  const [ListaProdutos, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=1000")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Executa só uma vez ao carregar

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de produtos</h1>
      <ul>
        {ListaProdutos.map((produto) => (
          <li key={produto.id}>
            {produto.title} {produto.price} {produto.category} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
