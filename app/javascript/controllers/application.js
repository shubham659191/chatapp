import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
$('.chat-header .menu .menu-ico').click(function(){
			$('.chat-header .menu ul.list').slideToggle('fast');
		});
		$(document).click(function(){
			$(".chat-header .menu ul.list").slideUp('fast');
		});
		$(".chat-header .menu ul.list,.chat-header .menu .menu-ico").click(function(e){
			e.stopPropagation();
		});
		$('.chat-inp .emoji').click(function(){
			$('.emoji-dashboard').slideToggle('fast');
		});
		$(document).click(function(){
			$(".emoji-dashboard").slideUp('fast');
		});
		$(".chat-header .menu ul.list,.chat-inp .emoji").click(function(e){
			e.stopPropagation();
		});
		$('.emoji-dashboard li .em').click(function(){
			var emo = $(this).css('background-image').split('"')[1];
			$('.chat-inp .input').find('div').remove();
			$('.chat-inp .input').append('<img src="'+emo+'">');
			$(".emoji-dashboard").slideUp('fast');

		});
		$('.chat-inp .opts .send').click(function(){
			var val = $('.chat-inp .input').html();
			if (val.length > 0){
				$('.chat-body .chats-text-cont').append('<p class="chat-text"><span>'+val+'</span></p>')
			}
			$('.chat-inp .input').html('');
			$('.chats-text-cont div').remove();
		});
		$('input,.input').each(function(){
			tmpval = $(this).text().length;
			if(tmpval != '') {
				$(this).prev().addClass('trans');
				$(this).parent().addClass('lined');
			}
		});
		$('input,.input').focus(function() {
			$(this).prev().addClass('trans');
			$(this).parent().addClass('lined');
			$(document).keypress(function(e) {
				if(e.which == 13) {
					$('.chat-inp .opts .send').click();
				}
			});
		}).blur(function() {
			if ($(this).text().length == ''){
				$(this).prev().removeClass('trans');
				$(this).parent().removeClass('lined');
			}
		});