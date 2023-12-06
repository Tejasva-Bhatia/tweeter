/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Create new tweet
const createTweetElement = function(tweetObj) {
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
          <p>${tweetObj.content.text}</p>
        </div>
      
        <footer>
          <p><b>${tweetObj.created_at}</b></p>
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

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function() {
  renderTweets(tweetData);
});

