import React from 'react';
import './TweetBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import RoomIcon from '@mui/icons-material/Room';

function TweetBox() {
    return (
        <div className="tweetBox">
            <img className="tweetBox__profilepic" 
            src="https://xsgames.co/randomusers/avatar.php?g=male"/>
            <div className='tweetBox__group'>
                <form className='tweetBox__form'>
                <input placeholder="What is happening?" type="text" className="tweetBox__input"/>
                    <div className="tweetBox__under">
                        <div className="tweetBox__icons"> 
                            <PermMediaIcon/>
                            <GifBoxIcon/>
                            <AddReactionIcon/>
                            <RoomIcon/>
                        </div>
                        <Button className="tweetBox__tweetButton"> Tweet </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox;