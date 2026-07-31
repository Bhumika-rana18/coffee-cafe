$(document).ready(function(){

$("#searchInput").keyup(function(){

let value=$(this).val().toLowerCase();

$("[data-name]").each(function(){

let name=$(this).data("name").toLowerCase();

$(this).toggle(name.includes(value));

});

});

});