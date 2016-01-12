$(function() {
  $(".clickable").click(function() {
    $("initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(function() {
  $(".clickable2").click(function() {
    $("initially-showing2").toggle();
    $("#initially-hidden2").toggle();
  });
});
