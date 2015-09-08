function update() {
	if ($.projectTitleInput.value && $.projectDeadlineInput.value && $.projectTasksInput.value){ // checks if both TextFields has values
    	$.projectTitle.text = $.projectTitleInput.value;
    	$.projectTitleInput.value = '';
    	$.projectDeadline.text = $.projectDeadlineInput.value;
    	$.projectDeadlineInput.value = '';
    	$.projectTasks.text = $.projectTasksInput.value;
    	$.projectTasksInput.value = '';
	}
}

function edit(){
	$.projectTitleInput.value = $.projectTitle.text;
    $.projectDeadlineInput.value = $.projectDeadline.text;
    $.projectTasksInput.value = $.projectTasks.text;
}

$.index.open();
