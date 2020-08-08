$(document).ready(() => {


	// INÍCIO PARALLAX 
	let sensibilidadeParallax = 1; //Valores de 0 a 1!!
	
	var parallax = () => {let coef = sensibilidadeParallax*70
			let offset = $(window).scrollTop()
			let tamanhoImg = parseFloat($('#capa').css('height'))

			let x = (offset/tamanhoImg)*coef + 30
			let offsetAtual = parseFloat($('#capa').css('background-position-y'))

			$('#capa').css('background-position', '0 ' + x + '%')
		}
	parallax()
	$(document).scroll(() => {
		parallax()
	})
	// FIM PARALLAX
	

	// INÍCIO ROLAGEM

	$('a').on('click', function(e) {
		e.preventDefault()
		
		let elem = $(this).attr('href')
		let navegacaoHeight = $('#navegacao-principal').height()
		let parada = $(elem).offset().top - navegacaoHeight

		$('body, html').animate({
			'scrollTop': parada + 'px'
		}, 1000)
		console.log(navegacaoHeight)
		
	})


	// FIM ROLAGEM


	// INÍCIO ANIMAÇÕES

	let elementosAnimacao = $('.animar')
	console.log(elementosAnimacao)
	$(window).on('scroll', () => {
		const getJanelaY = window.scrollY + window.innerHeight
		const getElementoY = (elem) => $(elem).offset().top + 100
		const estaNaTela = (elem) => getJanelaY > getElementoY(elem)

		elementosAnimacao.each(function() {
			if(estaNaTela(this)){
				//$(this).addClass('iniciar-animacao')
				$(this).animate({
					'left': '0',
					'opacity': '1'
				}, 1400, function(){visivel = true})
			}
		})	
	})
	
	console.log($('.animar-para-esquerda').offsetLeft)

	// FIM ANIMAÇÕES
})