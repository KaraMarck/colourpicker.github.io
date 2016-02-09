/* Exercise 2: Color picker */

var previewColor;


function setPreviewColor(color) {
	$('.preview').css('background-color', color);
	$('.color-code').text($('.preview').css('background-color'));
};

$(document).on('keyup', '#color', function() {
	setPreviewColor($('#color').val());
});

function addBox(color) {
	$('#colors').prepend("<div class='item' style='background-color: " + color + ";'></div>");
};

$(document).on('click', '#add-to-favorite', function() {
	addBox($('.preview').css('background-color'));
	$('#color').val("");
	if ($("#colors .item").length > 16) {
		$("#colors .item").last().remove();
	}
	$('#color').focus();
});

$(document).ready(function() {
	var colors = [ "22ac5e", "d68236", "770077" ];
	$.each(colors, function(index, color) {
		addBox(color);
	});
	setPreviewColor(colors[Math.floor( Math.random() * colors.length)]);
});

//call mouseenter on document, like with a click event
$(document).on('mouseenter', '#colors .item', function() {
	previewColor = $('.preview').css('background-color');
	setPreviewColor($(this).css('background-color'));	
});

$(document).on('mouseleave', '#colors .item', function() {
	setPreviewColor(previewColor);
})
