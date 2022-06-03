const addDiv = () => {
  const div = document.createElement('div')
  const h1 = document.createElement('h1')

  h1.textContent = 'Работа с DOM'
  div.append(h1)
  return div
}

document.body.prepend(addDiv())


const divMain = document.getElementById('main')

const addLink = () => {
  const mainLink = document.createElement('a')

  mainLink.textContent = 'Статья на DOM'
  mainLink.href = 'https://learn.javascript.ru/dom-nodes'

  divMain.append(mainLink)
}

addLink()


const changeColor = (color) => {
  document.body.style.backgroundColor = color
}

changeColor('green')


const addList = (text) => {
  const list = document.getElementById('list')
  const li = document.createElement('li')

  li.textContent = text

  list.append(li)
}

addList('js')
addList('python')


const remCopyright = () => {
  const copyright = document.getElementById('copyright')

  copyright.remove()
}

remCopyright()