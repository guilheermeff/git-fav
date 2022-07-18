// classe que vai fazer a lógica dos dados
export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
  }

  // funções: carregar, salvar, deletar usuário, adicionar usuário
}
// classe que vai criar a vizualização e eventos html
export class FavoritesView extends Favorites {
  constructor(root){
    super(root)
    
    console.log(this.root)
  }
}

