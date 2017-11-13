(function($){'use strict';$.contactButtons=function(options){var defaults={effect:'',buttons:{'facebook':{class:'facebook',use:false,icon:'facebook',link:'',title:'Follow on Facebook'},'google':{class:'gplus',use:false,icon:'google-plus',link:'',title:'Visit on Google Plus'},'linkedin':{class:'linkedin',use:false,icon:'linkedin',link:'',title:'Visit on LinkedIn'},'twitter':{class:'twitter',use:false,icon:'twitter',link:'',title:'Follow on Twitter'},'pinterest':{class:'pinterest',use:false,icon:'pinterest',link:'',title:'Follow on Pinterest'},'phone':{class:'phone',use:false,icon:'phone',link:'',title:'Call us',type:'phone'},'email':{class:'email',use:false,icon:'envelope',link:'',title:'Send us an email',type:'email'}}};var s,settings=options;for(s in defaults.buttons){if(options.buttons[s]){settings.buttons[s]=$.extend(defaults.buttons[s],options.buttons[s]);}}var oContainer=$("#contact-buttons-bar");if(oContainer.length===0){$('body').append('<div id="contact-buttons-bar">');oContainer=$("#contact-buttons-bar");oContainer.addClass(settings.effect);var sShowHideBtn='<button class="contact-button-link show-hide-contact-bar"><span class="fa fa-angle-left"></span></button>';oContainer.append(sShowHideBtn);var i;for(i in settings.buttons){var bs=settings.buttons[i],sLink=bs.link,active=bs.use;if(active){if(bs.type==='phone'){sLink='tel:'+bs.link;}else if(bs.type==='email'){sLink='mailto:'+bs.link;}var sIcon='<span class="fa fa-'+bs.icon+'"></span>',sButton='<a href="'+sLink+'" class="contact-button-link cb-ancor '+bs.class+'" '+(bs.title?'title="'+bs.title+'"':'')+(bs.extras?bs.extras:'')+'>'+sIcon+'</a>';oContainer.append(sButton);}}setTimeout(function(){oContainer.animate({left:0});},200);$('body').on('click','.show-hide-contact-bar',function(e){e.preventDefault();e.stopImmediatePropagation();$('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');oContainer.find('.cb-ancor').toggleClass('cb-hidden');});}};$(function(){var el=$("#contact-buttons-bar.slide-on-scroll");el.attr('data-top',el.css('top'));$(window).scroll(function(){clearTimeout($.data(this,"scrollCheck"));$.data(this,"scrollCheck",setTimeout(function(){var nTop=$(window).scrollTop()+parseInt(el.attr('data-top'));el.animate({top:nTop},500);},250));});});}(jQuery));