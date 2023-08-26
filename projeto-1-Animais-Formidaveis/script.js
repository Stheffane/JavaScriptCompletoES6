
//navegação das imagens referente à seus textos
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

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
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt")
  const className = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(className)
    accordionList[0].nextElementSibling.classList.add(className)

    function activeAccordion() {
      this.classList.toggle(className);
      this.nextElementSibling.classList.toggle(className);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();


function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {

    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href)
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })

      // forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth'
      // })
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    })
  }
}

initSmoothScroll();

function animationScroll() {

  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {

    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo')
        }
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll)
  }
}

animationScroll();