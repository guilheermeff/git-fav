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
        public_repos: "50",
        followers: "350"
      }
    ]
  }
}
// classe que vai criar a vizualização e eventos html
export class FavoritesView extends Favorites {
  constructor(root){
    super(root)

    this.update()
  }
  
  update() {
    this.removeAllTr()

    
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
    this.tbody = this.root.querySelector('table tbody')
    
    this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()})
  }
}