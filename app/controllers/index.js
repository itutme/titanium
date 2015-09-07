    function doClick(e) {
    if ($.title.value && $.deadline.value){ // checks if both TextFields has values
        $.projectTitle.text = $.title.value;
        $.title.value = ''; // empty textfield when the value is set to label
        $.projectDeadline.text = $.deadline.value;
        $.deadline.value = '';
    }
    }
    
// alert(JSON.stringify($.projectTitle))

    $.index.open();
    