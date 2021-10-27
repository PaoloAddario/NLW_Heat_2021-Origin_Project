//function ShowMeSomething(text) {
//window.alert(text)
//}
//ShowMeSomething(links.instagram)
//Sobre Funções.

//Boas práticas para nomes de variáveis
// camelCase
// PascalCase
// snake_case

//Atalhos para comentar várias linhas de código
// Ctrl + K Ctrl + C ou Ctrl + alt + A
// Primeira opção é com '//' a segunda com '/**/''

const socialMediaLinks = {
  github: 'PaoloAddario',
  youtube: '#',
  facebook: 'paolo.addario',
  instagram: 'paolo_Addario',
  twitter: 'Addar1o'
}

function changeLinksSocialMedia() {
  //comments
  // document.getElementById('user_name').textContent = 'Paolo'
  // > Faz exatamente a mesma coisa que o comando abaixo.
  //user_name.textContent = 'Paolo'

  for (let li of socialLinks.children) {
    //alert(li.getAttribute('class')) or
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}` //template string, é uma forma de adicionar uma variável dentro de uma string.
  }
}

changeLinksSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
