import React from 'react';

const TweetCard = ({ tweet }) => {
  return (
    <div className="tweet-card">
      <div className="tweet-author">
        <img src={tweet.author.avatar} alt="Author Avatar" />
        <span className="author-username">{tweet.author.username}</span>
      </div>
      <p className="tweet-text">{tweet.text}</p>
      <div className="tweet-actions">
        {/* Add action buttons or links here */}
      </div>
    </div>
  );
};

export default TweetCard;