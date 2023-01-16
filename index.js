$(function () {
	var a = $('#a')
	var timer = null
	$(document).on('click', function (e) {
		if (timer) return
		timer = setTimeout(() => {
			al.css('top', e.pageY + 'px')
			timer = null
		}, 16)
	})
})
