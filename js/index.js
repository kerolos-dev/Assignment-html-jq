
//$ == jQuery  => include jquery
//(".test") => jquery selector same as css selector
//hide() => Jquery effect
//3000 duration in miliseconds

// $(".test").hide(3000);
// $(".test").show(3000);
// $(".test").toggle(3000);

// $(".test").slideUp(3000);
// $(".test").slideDown(3000);
// $(".test").slideToggle(3000);

// $(".test").fadeIn(3000);
// $(".test").fadeOut(3000);
// $(".test").fadeToggle(3000);
// $(".test").fadeTo(3000 , 0.5);
//  $(".test").slideUp(500, function () {
//  $("#myBtn").slideUp(500, function () {

//     $(".test").slideDown(500)
//   });
// });
//$(".test").slideUp(1000).slideDown(2000).fadeOut(1000)





// $("section").animate({width:'100%'},1000)
// $("section").animate({height:'100vh'},1000,function(){

// $("h4").slideDown(100,function(){
// $(".desc").slideDown(100,function(){
//   $(".col-md-3").slideDown(1000)
// })
// })
// });


$(".img-item").click(function(eoeventIn){
  let imgsrrc=$(eoeventIn.target).attr('src');
$("#amintmage").attr('src',imgsrrc)

})





