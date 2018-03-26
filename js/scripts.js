$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var groceries = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val()];
    groceries.sort();
    var newGroceries = groceries.map(function(grocery){
      return grocery.toUpperCase();
    });
    newGroceries.forEach(function(newGrocery) {
      $("ul").append("<li>" + newGrocery + "</li>");
    });
    $("#formOne").hide();
    event.preventDefault(); 
  });
});
