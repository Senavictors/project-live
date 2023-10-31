const spiders = [
  {
    id: 1,
    nome: 'Miles Morales',
    terra: 2,
    habilidades: 'Força Sobre-Humana: Miles possui força sobre-humana, tornando-o capaz de levantar pelo menos 10 toneladas. ...Velocidade Sobre-Humana: Miles possui a velocidade proporcional de uma aranha, portanto ele pode correr e se mover em velocidades que estão além dos limites físicos do melhor atleta humano.',
    foto: 'https://ovicio.com.br/wp-content/uploads/2023/05/20230531-image-555x555.png'
  },
  {
    id: 2,
    nome: 'Gwen Stacy',
    terra: 8,
    habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis minus quod, impedit eum libero, consequatur, nulla reiciendis itaque repellendus hic! Nihil iure deserunt doloremque voluptate deleniti soluta, quo nisi?',
    foto: 'https://i.pinimg.com/736x/a7/77/eb/a777eb12c109c712a2dd42a66fc67e91.jpg'
  },
  {
    id: 3,
    nome: 'Miguel Ohara',
    terra: 4,
    habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis minus quod, impedit eum libero, consequatur, nulla reiciendis itaque repellendus hic! Nihil iure deserunt doloremque voluptate deleniti soluta, quo nisi?',
    foto: 'https://timnews.com.br/system/images/photos/15493663/original/open-uri20230404-18-14m8ddb?1680615283'
  },
  {
    id: 4,
    nome: 'SpiderPunk',
    terra: 3,
    habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis minus quod, impedit eum libero, consequatur, nulla reiciendis itaque repellendus hic! Nihil iure deserunt doloremque voluptate deleniti soluta, quo nisi?',
    foto: 'https://tm.ibxk.com.br/2023/06/06/06153541923238.jpg'
  },
  {
    id: 5,
    nome: 'Peter Parker',
    terra: 9,
    habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis minus quod, impedit eum libero, consequatur, nulla reiciendis itaque repellendus hic! Nihil iure deserunt doloremque voluptate deleniti soluta, quo nisi?',
    foto: 'https://i0.wp.com/hitsite.com.br/wp-content/uploads/2023/01/Peter-Parker-em-Homem-Aranha-no-Aranhaverso.jpg?fit=1200%2C675&ssl=1'
  }
]

const secao = document.querySelector ('.spiders')
const botao = document.querySelector ('.btn')


botao.addEventListener('click', ()=> {
  document.documentElement.classList.toggle('dark')


})

const todosOsSpiders = spiders.map (spiders => {
    return `<div> 
      <p>Nome: ${spiders.nome}</p>
      <p>Terra: ${spiders.terra}</p>
      <img src="${spiders.foto}">
      <p class="habilidades">Habilidades: ${spiders.habilidades}</p>
    </div>`

})

secao.innerHTML = todosOsSpiders

