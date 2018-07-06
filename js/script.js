$(document).ready(() => {
    $(".collapse").each(function() {
        $(this).hide();
    })
    $(".btn").click(function() {
        let target = $(this)[0].dataset.target;
        $(".accordion").each(function() {
            if(target === $(this)[0].id) {
                $(this).slideToggle();
            } else {
                $(this).slideUp();
            }
        })
    })
})