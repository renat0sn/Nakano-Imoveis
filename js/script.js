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
	



})