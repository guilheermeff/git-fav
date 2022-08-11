import { GithubUser } from "./githubuser.js"
// classe que vai conter a logica dos dos dados
class Favorites {
  constructor(root) {
    this.page = document.querySelector(root)
    console.log(this.load())
  }

  load() {
    this.entries = []
  }

  async add(username) {
    const user = await GithubUser.search(username)
    console.log(user)
  }
}
//classe que vai conter a vizualização dos dados
class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.page.querySelector('table tbody')

    this.update()
    this.getUserName()
  }

  update() {
    this.removeAllRows()
    this.addRow()
  }

  getUserName() {
    const addButton = this.page.querySelector('.search button')
    addButton.onclick = () => {
      const userName = this.page.querySelector('#input-search')
      // include verification steps
      console.log(this.add(userName.value))
    }
  }

  addRow() {
    const row = this.createRow()

    row.querySelector('.user img').src = `https://github.com/guilheermeff.png`
    row.querySelector('.user img').alt = `imagem de Guilherme Fernandes`
    row.querySelector('.user a').href = `https://github.com/guilheermeff`
    row.querySelector('.user p').textContent = `Guilherme Fernandes`
    row.querySelector('.user span').textContent = `guilheermeff`
    row.querySelector('.repositories').textContent = `80`
    row.querySelector('.followers').textContent = `100`

    this.tbody.append(row)
  }
  
  createRow() {
    
    const tr =  document.createElement('tr')
    
    tr.innerHTML = `
      <tr>
        <td class="user">
          <img src="" alt="">
          <a href="" target="_blank">
            <p></p>
            <span></span>
          </a>
        </td>
        <td class="repositories"></td>
        <td class="followers"></td>
        <td>
          <button class="remove">&times;</button>
        </td>
      </tr>
    `
    return tr
  }

  removeAllRows() {
    const tr = this.tbody.querySelectorAll('tr')
    tr.forEach((tr) => {
      tr.remove()
    })
  }
}

new FavoritesView('#app')