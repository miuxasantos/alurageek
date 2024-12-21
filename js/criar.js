document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    // Captura os dados do formulário
    const formData = {
      name: document.getElementById('name').value,
      price: document.getElementById('price').value,
      imageUrl: document.getElementById('imageUrl').value,
    };
  
    try {
      // Envia os dados para o JSON Server
      const response = await fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Card adicionado com sucesso!');
        document.getElementById('form').reset(); // Limpa o formulário
      } else {
        throw new Error('Erro ao adicionar o card');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao adicionar o card');
    }
  });

  const removeButton = document.querySelectorAll('.remove__btn');
  removeButton.forEach(button => {
    button.addEventListener('click', (event) => {
      const produtoId = event.target.getAttribute('data-id');
      removeProduto(produtoId);  // Chama a função de remover passando o id
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Adiciona um único event listener ao container de todos os produtos
  const produtoLista = document.getElementById('cards');

  produtoLista.addEventListener('click', function(event) {
    // Verifica se o clique foi em um botão de remover
    if (event.target && event.target.classList.contains('remove__btn')) {
      const produtoId = event.target.getAttribute('data-id');
      removeProduto(produtoId);  // Chama a função de remover passando o id
    }
  });
});

async function removeProduto(produtoId) {
  try {
    // Envia uma requisição DELETE para remover o produto
    const response = await fetch(`http://localhost:3000/produto/${produtoId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Produto removido com sucesso!');
      fetchCards();  // Recarrega a lista de produtos após a remoção
    } else {
      throw new Error('Erro ao remover o produto');
    }
  } catch (error) {
    console.error()
  }
}