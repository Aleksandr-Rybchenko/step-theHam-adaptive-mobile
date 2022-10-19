const texts = document.querySelectorAll('.tab-text')
const btns = document.querySelectorAll('.btn-tab-menu')

const changeTabHandler = (idx) => {
  texts.forEach((elem, index) => {
    if (idx === index) {
      elem.style.display = 'flex'
    } else {
      elem.style.display = 'none'
    }
  })
  btns.forEach((elem, index) => {
    if (idx === index) {
      elem.classList.add('active-tab')
    } else {
      elem.classList.remove('active-tab')
    }
  })
}
const initTabs = () => {
  texts.forEach((elem, i) => {
    if (i !== 0) {
      elem.style.display = 'none'
    }
  })
  btns.forEach((el, ind) => {
    console.log(ind);
    el.addEventListener('click', () => changeTabHandler(ind))
  })
}
const start = () => {
  initTabs()
}
start()



// Our Amazing Work start
function Gallery() {
  const images = [{
      data: 'graphic_design',
      src: './img/graphicdesign/graphicdesign20.jpg'
    },
    {
      data: 'landing_pages',
      src: './img/landingpages/landingpages30.jpg'
    },
    {
      data: 'web_design',
      src: './img/webdesign/webdesign20.jpg'
    }, {
      data: 'wordpress',
      src: './img/wordpress/wordpress20.jpg'
    },
    {
      data: 'graphic_design',
      src: './img/graphicdesign/graphicdesign30.jpg'
    },
    {
      data: 'landing_pages',
      src: './img/landingpages/landingpages10.jpg'
    },
    {
      data: 'web_design',
      src: './img/webdesign/webdesign30.jpg'
    }, {
      data: 'wordpress',
      src: './img/wordpress/wordpress30.jpg'
    },
    {
      data: 'graphic_design',
      src: './img/graphicdesign/graphicdesign30.jpg'
    },
    {
      data: 'landing_pages',
      src: './img/landingpages/landingpages10.jpg'
    },
    {
      data: 'web_design',
      src: './img/webdesign/webdesign40.jpg'
    }, {
      data: 'wordpress',
      src: './img/wordpress/wordpress40.jpg'
    },
  ]
  // галлерея
  const galleryMenuWrapper = document.querySelector('.gallery-menu');
  //кнопка
  const loadMore = document.querySelector('.load_more');
  //контейнер с картинками
  const galleryContent = document.querySelector('.gallery-content')
  //лоадер
  const ldsSpinner = document.querySelector('.lds-spinner')

  galleryMenuWrapper.addEventListener('click', (event) => {
    let dataMenu = null;
    const dataGallery = document.querySelectorAll('.image-item');
    if (event.target.nodeName === "BUTTON") {
      dataMenu = event.target.getAttribute('data-menu');
    }
    // активное состояние кнопок старт
    let menuItems = document.querySelectorAll('[data-menu]')
    menuItems.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active')
    }
    // активное состояние кнопок конец
    dataGallery.forEach((item) => {
      if (dataMenu !== item.getAttribute('data-gallery') && dataMenu !== 'all') {
        item.style.display = 'none'
      } else {
        item.style.display = 'block'
      }
    })

  })
  // счетчик кнопки старт
  let counter = 0;

  loadMore.addEventListener('click', () => {

    counter++
    // loadMore.classList.add('loader');
    loadMore.style.display = 'none'
    ldsSpinner.style.display = 'inline-block'
    setTimeout(() => {
      ldsSpinner.style.display = 'none'
      loadMore.style.display = 'block'
    }, 2500)
    //счетчик удаления кнопки старт
    if (counter === 2) {
      loadMore.remove()
    }
    //счетчик удаления кнопки конец

    images.forEach((image, id) => {
      galleryContent.insertAdjacentHTML('beforeend', `
      <div class="image-item" data-gallery="${image.data}">
      <img class="img" src="${image.src}" alt="" />
      <div class="block-back">
      <div class="img-block-back">
        <img class="sharcep-img" src="./img/sharcep.png" alt="shar" />
        <img
          class="elipce-img"
          src="./img/Ellipse2.png"
          alt="elipce"
        />
      </div>
      <h2>creative design</h2>
      <p>Web Design</p>
    </div>
      </div>`)
    })
  })








}
document.addEventListener('DOMContentLoaded', () => {
  Gallery();
});
// slider start
const test = new Swiper(".thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});

const swiperMain = new Swiper(".slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next ",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: test,
  },
});
// slider start end
