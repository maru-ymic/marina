"use strict";

$(function(){
	let $ripp = $('.page-header, #qa');
	$ripp.ripples({
	resolution: 700,
	dropRadius: 70,
	perturbance: 0.09
	});
});

$(document).ready(function() {
	var pagetop = $('.pagetop');
	$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
	pagetop.fadeIn();
	} else {
	pagetop.fadeOut();
	}
	});
	pagetop.click(function () {
	$('body, html').animate({ scrollTop: 0 }, 500);
	return false;
	});
});