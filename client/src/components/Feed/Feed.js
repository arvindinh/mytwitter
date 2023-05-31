import React from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox'
import CachedIcon from '@mui/icons-material/Cached';

function Feed() {
    return (
        //Header, sticks when you scroll
        <div className="feed">
            <div className="feed__header">
            <h1 className="feed__home">Home</h1>
            <CachedIcon className="feed__refreshIcon"/>
            </div>
            <TweetBox/>
        </div>

    )
}

export default Feed;