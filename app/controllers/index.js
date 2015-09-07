    function doClick(e) {
    if ($.title.value && $.deadline.value){ // checks if both TextFields has values
        $.projectTitle.text = $.title.value;
        $.projectDeadline.text = $.deadline.value;
    }
    }
    
// alert(JSON.stringify($.projectTitle))

    $.index.open();
    