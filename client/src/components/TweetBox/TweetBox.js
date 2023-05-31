import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './TweetBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import RoomIcon from '@mui/icons-material/Room';

function TweetBox() {
    const [input, setInput] = useState('');
    const [selectedMedia, setSelectedMedia] = useState([]);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);

    const handleMediaClick = () => {
        fileInputRef.current.click();
    };

    const handleFileSelect = (event) => {
        const fileList = event.target.files;
        const mediaArray = Array.from(fileList).map((file) => ({
          type: file.type.startsWith('image') ? 'image' : 'video',
          url: URL.createObjectURL(file),
        }));
      
        setSelectedMedia((prevMedia) => [...prevMedia, ...mediaArray]);
    };

    const renderMedia = () => {
        const numMedia = selectedMedia.length;
        const maxMedia = 4;
      
        const mediaClassName = `tweetBox__media image-grid-${Math.min(numMedia, maxMedia)}`;
      
        return selectedMedia.map((media, index) => {
          if (media.type === 'image') {
            return (
              <img
                key={index}
                src={media.url}
                alt={`Image ${index}`}
                className={mediaClassName}
              />
            );
          } else if (media.type === 'video') {
            return (
              <video
                key={index}
                src={media.url}
                className={mediaClassName}
                controls
              />
            );
          }
          return null;
        });
      };

    useEffect(() => {
        adjustTextareaHeight();
    }, [input]);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <div className="tweetBox">
            <img className="tweetBox__profilepic" 
            src="https://xsgames.co/randomusers/avatar.php?g=male"/>
            <div className='tweetBox__group'>
                <form className='tweetBox__form'>
                <textarea
                    ref={textareaRef}
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What is happening?" 
                    type="text" 
                    className="tweetBox__input"
                />
                    <div className="tweetBox__media">
                    {renderMedia()}
                        
                    </div>
                    <div className="tweetBox__under">
                        <div className="tweetBox__icons"> 
                            <PermMediaIcon onClick={handleMediaClick}/>
                            <input
                                type="file"
                                accept="image/*,video/*"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                multiple
                            />
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