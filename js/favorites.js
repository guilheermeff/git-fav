// classe que vai fazer a lógica dos dados
export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.loadData()
  }
  
  loadData() {
    this.data = [
      {
        login: "guilheermeff",
        name: "Guilherme Fernandes",
        public_repos: "50",
        followers: "350"
      },
      {
        login: "juliuscaezarff",
        name: "Julius Caezar",
        public_repos: "510",
        followers: "400"
      }
    ]
  }
}
// classe que vai criar a vizualização e eventos html
export class FavoritesView extends Favorites {
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }
  
  update() {
    this.removeAllTr()
    this.data.forEach(user => {
      const row = this.addRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.login

      this.tbody.append(row)
    })
  }
  
  addRow() {
    const tr = document.createElement('tr')
    
    tr.innerHTML = `
        <td class="user">
          <img src="" alt="">
          <a href="http://" target="_blank">
            <p></p>
            <span> </span>
          </a>
        </td>
        <td class="repositories"></td>
        <td class="followers"></td>
        <td>
          <button class="remove">&times;</button>
        </td>
    `
    return tr
  }
  
  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()})
  }
}