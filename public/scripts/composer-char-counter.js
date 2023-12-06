$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on('input', function() {
    
    var tweetLength = $(this).val().length;
    var remainingCharacters = 140 - tweetLength;
    $('.counter').text(remainingCharacters);
    if (remainingCharacters < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '');
    }
  });
});