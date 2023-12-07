/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Create new tweet
const createTweetElement = function(tweetObj) {
  const timeAgo = timeago.format(tweetObj.created_at);
  
  const $tweet = $(`
 <article class="tweet">
        <header>
          <img src="${tweetObj.user.avatars}" alt="Profile Image">
          <div>
            <p>${tweetObj.user.name}</p>
            <p id="tweet-id"><b>${tweetObj.user.handle}</b></p>
          </div>
        </header>
      
        <div class="tweet-content">
          <p >${tweetObj.content.text}</p>
        </div>
      
        <footer>
          <p><b>${timeAgo}</b></p>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
 `);

  return $tweet;
};

// Append new tweet to the tweet-container
const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    
    $('#tweets-container').append($tweet);
  }
  
};

// function to loads a tweet from '/tweets' and recieve an array of tweets in json
const loadTweets = function() {
  return $.ajax({
    method: "GET",
    url: "/tweets",
    dataType: "json"
  });
};


$(document).ready(function() {
  
  // Load tweets and rendering.
  loadTweets().then((tweets) => {
    renderTweets(tweets);
  }).catch(function(error) {
    console.error("Error loading tweets:", error);
  });

  // Post tweet details to server
  $("#input-tweet").on("submit", function(event) {
    event.preventDefault();
    const formData = $(event.currentTarget).serialize();
    console.log(formData);
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: formData
    }).then(()=>{
      alert("Success Submission of Tweet");
    });
    
    
  });

});

