const apiUrl = 'http://localhost:3000/produto';

// Elemento onde os dados serão inseridos
const cardsContainer = document.getElementById('cards');

// Função para buscar os dados
function fetchCards() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error('Erro ao buscar os dados');
      return response.json();
    })
    .then(data => {
      renderCards(data); // Chama a função para manipular o DOM
    })
    .catch(error => {
      console.error("Erro");
    });
}

// Função para renderizar os usuários no DOM
function renderCards(card) {
  cardsContainer.innerHTML = ''; // Limpa o contêiner
  card.forEach(card => {
    // Cria os elementos
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
        <div class="produto">
            <img class="card__imagem" src="${card.imageUrl}" alt="${card.alt}">
            <h2 class="produtos__titulo">${card.name}</h2>
            <p>${card.price}</p>
            <button class="remove__btn" data-id="${card.id}">Remover</button>
        </div>
    `;
    // Adiciona ao contêiner
    cardsContainer.appendChild(cardDiv);
  });
}

document.getElementById('cancelar').addEventListener('click', function() {
  document.getElementById('form').reset();  // Limpa o formulário
});

// Busca os usuários ao carregar a página
fetchCards();

