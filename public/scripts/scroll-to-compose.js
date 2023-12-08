$(document).ready(function() {
  // Smooth scrolling to the compose tweet section
  $(".newTweet i").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".container").offset().top
    });
  });
});