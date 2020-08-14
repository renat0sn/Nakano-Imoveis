$(document).ready(() => {


	// INÍCIO PARALLAX 
	
	var parallaxCapa = (getJanelaY) => {
		getJanelaY -= window.innerHeight
		const getTamanhoElem = $('#capa').height()
		let offset = (getJanelaY/getTamanhoElem) * 100

		$('#capa').css('background-position-y', offset + '%')
	}

	var parallaxCarrossel = (getJanelaY) => {
		const getElementoY = $('.carousel-inner').offset().top
		const getTamanhoElem = $('.carousel-inner').height();
		let offset = (getJanelaY-getElementoY)*100/(getTamanhoElem+window.innerHeight)

		$('.item-carrossel').css('background-position-y', offset + '%')
		//console.log(getJanelaY)
	}
	
	// FIM PARALLAX
	

	// INÍCIO ROLAGEM

	$('#navegacao-principal a').on('click', function(e) {
		e.preventDefault()
		
		let elem = $(this).attr('href')
		let parada = $(elem).offset().top + $(elem).height() - window.innerHeight

		$('body, html').animate({
			'scrollTop': parada + 'px'
		}, 1000)
		console.log($(elem))
	})


	// FIM ROLAGEM


	// INÍCIO ANIMAÇÕES

	let elementosAnimacao = $('.animar')

	$(window).on('scroll', () => {
		const getJanelaY = window.scrollY + window.innerHeight
		const getElementoY = (elem) => $(elem).offset().top + 10
		const estaNaTela = (elem) => getJanelaY > getElementoY(elem)

		parallaxCapa(getJanelaY)
		parallaxCarrossel(getJanelaY)

		elementosAnimacao.each(function() {
			if(estaNaTela(this)){
				if(!$(this).hasClass('iniciar-animacao')){
					$(this).addClass('iniciar-animacao')
					$(this).animate({
						'left': '0',
						'opacity': '1'
					}, 800)
				}
			}
			else{
				if($(this).hasClass('iniciar-animacao')){
					let left = '5vw'

					if($(this).hasClass('animar-para-direita')){
						left = '-5vw'
					}

					$(this).animate({
						'opacity': '0',
						'left': left
					}, 800)

					$(this).removeClass('iniciar-animacao')
				}
			}
		})	
	})
	
	console.log($('.animar-para-esquerda').offsetLeft)

	// FIM ANIMAÇÕES
})