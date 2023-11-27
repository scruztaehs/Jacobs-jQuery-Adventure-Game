$(".f15").click(function() {
  $(".Part-Two-Yes ").show("slow");
  $(".partone").hide();  
});
$(".SU-57").click(function() {
  $(".Part-Two-No").show();
  $(".partone").hide();  
});
$(".yes-button3").click(function() {
      $(".Story-Ending-No").show("slow");
  $(".Part-Two-No").hide();  
});                   
$(".no-button3").click(function() {
  $(".Story-Ending-No").show("slow");
  $(".Part-Two-No").hide();  
});       
$(".yes-button2").click(function() {
  $(".Story-Ending-Yes").show("slow");
  $(".Part-Two-Yes").hide();  
});
$(".no-button2").click(function() {
  $(".Story-Ending-No").show("slow");
  $(".Part-Two-Yes").hide();  
});
$(".reset").click(function() {
  $(".partone").show("slow");
   $(".Story-Ending-No").hide();
    $(".Story-Ending-Yes").hide();
});
