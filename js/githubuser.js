//classe que vai montar o objeto do Usuário (com o retorno da API)
export class GithubUser {
  static search(userName) {
    const endpoint = `https://api.github.com/users/${userName}`
    return fetch(endpoint)
    .then(user => user.json())
    .then(user => {
      return {
        login: user.login,
        name: user.name,
        public_repos: user.public_repos,
        followers: user.followers
      }
    })
  }
}