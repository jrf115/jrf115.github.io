/** Requires jqery-3.3.1.js **/
var projects_list;
$(document).ready(function(){
    $.getJSON("src/projects.json", function(result) {
        console.log(data.projects);
    }).fail(function() {
        console.log("An error has occured. Turnip");
    });
});