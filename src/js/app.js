// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
	if (event.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		}
	}
});

//общий слайдер всех товаров
$('.products-slider').slick({
    slidesToShow: 4,
    swipe: false,
    prevArrow: '<img class="slider_arrow_prev" <img src="img/arrow-prev.svg" alt="">',
    nextArrow: '<img class="slider_arrow_next" src="img/arrow-next.svg" alt="">',
    responsive: [
    {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
});
//слайдер одного товара
$('.product-slider').slick({
    dots: true,
    arrows: false,
});
// при наведении на дотсы сладера товара перелистывает слайдер 
$('.slick-dots button').mouseenter(function (e) {
    var btn = $(this);
    btn[0].click();
});

