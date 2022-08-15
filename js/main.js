import { GithubUser } from "./githubuser.js"
// classe que vai conter a logica dos dos dados
class Favorites {
  constructor(root) {
    this.page = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github_fav:')) || []
    console.log(this.entries)
  }

  save(){
    localStorage.setItem('@github_fav:', JSON.stringify(this.entries))
    console.log(this.entries)
  }

  async add(user) {
    
    const userdata = await GithubUser.search(user)
    this.addRow()
    this.save()
    this.entries = [userdata, ...this.entries]
    
  }

  delete(user) {
    const filteredEntries = this.entries.filter(element => element.login !== user.login)

    this.entries = filteredEntries
    this.addRow()
    this.save()
  }
}
//classe que vai conter a vizualização dos dados
class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.page.querySelector('table tbody')

    this.addRow()
    this.getUserName()
  }

  getUserName() {
    const addButton = this.page.querySelector('.search button')
    addButton.onclick = () => {
      const inputBox = this.page.querySelector('#input-search')
      const username = inputBox.value

      const userNotFound = username == undefined
      const untypedUser = username === ""

      if(userNotFound){
        alert('Usuário não encontrado!')
      } else if(untypedUser){
        alert('Digite um nome de usuário para adicionar!')
      } else {
        this.add(username)
      }
    }
  }

  addRow() {
    this.removeAllRows()

    this.entries.forEach(user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers


      const removeButton = row.querySelector('.remove')
      removeButton.onclick = () => {
        const confirmation = confirm('Tem certeza que deseja excluir este usuário?')

        if(confirmation){
          this.delete(user)
        }
      }
      this.tbody.append(row)
    })
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