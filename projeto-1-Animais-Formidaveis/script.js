const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
 
//navegação das imagens referente à seus textos
if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo')

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
  }

  //adicionando a function a cada item da lista
  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index)
    })
  })
}

