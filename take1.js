$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

function toggleCollapse() {    
    var x = document.getElementById("collapseall");
    
    if (x.classList.contains("collapseshown")) {
        $('.card-body').collapse('hide');
        x.classList.remove("collapseshown");
        x.classList.add("collapsehidden");
        x.innerHTML = "Expand tabs"

    } else if (x.classList.contains ("collapsehidden")) {
        $('.card-body').collapse('show');
        x.classList.remove("collapsehidden");
        x.classList.add("collapseshown");
        x.innerHTML = "Collapse tabs"

    } else {
        $('.card-body').collapse('show');
        x.classList.add("collapseshown")
        x.innerHTML = "Collapse tabs"
    }
} 

function toggleImportantVisibility() {    
    var link = document.getElementById("toggleimportant");
    var card = document.getElementsByClassName("card-normal")
    var i;

    if (link.classList.contains("importantisvisible")) {
        for (i = 0; i <card.length; i++){
            card[i].parentElement.style.display = 'inherit';
        }

        //$('.card-important').collapse('hide');
        link.classList.remove("importantisvisible");
        link.classList.add("importantishidden");
        link.innerHTML = "Only show important"

    } else if (link.classList.contains ("importantishidden")) {
        for (i = 0; i <card.length; i++){
            card[i].parentElement.style.display = 'none';
        }
        //$('.card-important').collapse('show');
        link.classList.remove("importantishidden");
        link.classList.add("importantisvisible");
        link.innerHTML = "Show all"

    } else {
        for (i = 0; i <card.length; i++){
            card[i].parentElement.style.display = 'none';
        }
        //$('.card-important').collapse('show');
        link.classList.add("importantisvisible")
        link.innerHTML = "Show all"
    }
} 

