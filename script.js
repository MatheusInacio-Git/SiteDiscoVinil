const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');
let indice=0;

itemForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const itemName = document.getElementById('nome').value;
  const itemArtist = document.getElementById('artista').value;
  const itemYear = document.getElementById('ano').value;
  const itemGender = document.getElementById('genero').value;
  const itemTracks = document.getElementById('qtfaixas').value;
  const itemCover = document.getElementById('capa').value;
  
  addItem(itemName, itemArtist, itemYear, itemGender, itemTracks, itemCover);
  
  itemForm.reset();
});

 
function addItem(nome, artista, ano, genero, qtfaixas, capa) {
  const item = document.createElement('div');
  item.classList.add('item');
  indice++;
  item.innerHTML = `
    <img src="${capa}" /> <br>
    <strong>${nome}</strong> - ${artista} <br>
    ${ano} <br>
    ${genero} <br>
    ${qtfaixas} <br>
    <button onclick="removeItem(this)">Remover</button>
    <button onclick="editarItem(this})">Editar</button>
  `;
  itemList.appendChild(item);
}


function editItem(itemId) {
  const item = document.getElementById(itemId);
  const itemName = item.querySelector('strong').innerText;
  const itemArtist = item.innerText.split(' - ')[1].split('\n')[0];
  const itemYear = item.innerText.split('\n')[1];
  const itemGender = item.innerText.split('\n')[2];
  const itemTracks = item.innerText.split('\n')[3];
  const itemCover = item.querySelector('img').src;

  // Preencher o formulário de edição com os valores atuais do item
  document.getElementById('nome').value = itemName;
  document.getElementById('artista').value = itemArtist;
  document.getElementById('ano').value = itemYear;
  document.getElementById('genero').value = itemGender;
  document.getElementById('qtfaixas').value = itemTracks;
  document.getElementById('capa').value = itemCover;

  // Remover o item da lista durante a edição
  item.remove();
}

// Função para atualizar um item na lista após a edição
function updateItem(itemId, nome, artista, ano, genero, qtfaixas, capa) {
  const item = document.createElement('div');
  item.id = itemId;
  item.classList.add('item');
  item.innerHTML = `
    <img src="${capa}" /> <br>
    <strong>${nome}</strong> - ${artista} <br>
    ${ano} <br>
    ${genero} <br>
    ${qtfaixas} <br>
    <button onclick="removeItem('${itemId}')">Remover</button>
    <button onclick="editItem('${itemId}')">Editar</button>
  `;
  itemList.appendChild(item);
}

function removeItem(itemId) {
  const item = document.getElementById(itemId);
  if (confirm("Deseja realmente remover esse disco?")) {
    item.remove();
  }
}

let itemIdCounter = 0;

// Função para adicionar um novo item à lista
function addItem(nome, artista, ano, genero, qtfaixas, capa) {
  const itemId = 'item-' + itemIdCounter++;
  const item = document.createElement('div');
  item.id = itemId;
  item.classList.add('item');
  item.innerHTML = `
    <img src="${capa}" /> <br>
    <strong>${nome}</strong> - ${artista} <br>
    ${ano} <br>
    ${genero} <br>
    ${qtfaixas} <br>
    <button onclick="removeItem('${itemId}')">Remover</button>
    <button onclick="editItem('${itemId}')">Editar</button>
  `;
  itemList.appendChild(item);
}

