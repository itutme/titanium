function doClick(e) {
    if ($.title.value && $.deadline.value){ // checks if both TextFields has values
	    $.projectTitle.text = $.title.value;
	    $.title.value = ''; // empty textfield when the value is set to label
	    $.projectDeadline.text = $.deadline.value;
	    $.deadline.value = '';
	}
}

function update() {
	if ($.title2.value && $.deadline2.value && $.tasks2.value){ // checks if both TextFields has values
    	$.projectTitle2.text = $.title2.value;
    	$.title2.value = '';
    	$.projectDeadline2.text = $.deadline2.value;
    	$.deadline2.value = '';
    	$.projectTasks2.text = $.tasks2.value;
    	$.tasks2.value = '';
	}
}

function edit(){
	$.title2.value = $.projectTitle2.text;
    $.deadline2.value = $.projectDeadline2.text;
    $.tasks2.value = $.projectTasks2.text;
}

$.index.open();
