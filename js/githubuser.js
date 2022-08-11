//classe que vai montar o objeto do Usuário (com o retorno da API)
export class GithubUser {
  static search(userName) {
    const endpoint = `https://api.github.com/users/${userName}`
    fetch(endpoint)
    .then(user => user.json())
    .then(user => {
      const login = user.login
      const name = user.name
      const followers = user.followers
      const public_repos = user.public_repos

      return {
        login,
        name,
        followers,
        public_repos
      }
    })
  }
}