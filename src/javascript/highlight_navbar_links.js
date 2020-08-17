/** Requires jqery-3.3.1.js **/
// Call to Highlight current page
$(document).ready(function highlightNavLink () {
    var link = document.getElementsByClassName("current_page")[0].id;
    switch (link) {
        case "index":
            document.getElementById("home_link").className = "col nav-link active";
            document.getElementById("about_link").className = "col nav-link";
            document.getElementById("projects_link").className = "col nav-link";
            break;
        case "about":
            document.getElementById("home_link").className = "col nav-link";
            document.getElementById("about_link").className = "col nav-link active";
            document.getElementById("projects_link").className = "col nav-link";
            break;
        case "projects":
            document.getElementById("home_link").className = "col nav-link";
            document.getElementById("about_link").className = "col nav-link";
            document.getElementById("projects_link").className = "col nav-link active";
            break;
        default:
            alert("Warning: Unable to highlight '" + link + "'.\n");
            break;
    }
});

// Tried to use window.onload functionality to wait for the page sections to load in before this
// script ran, but it was only working sometimes.    Which was frustrating. 
