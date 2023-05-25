import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className="outerwidget">
            <div className="widgets">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter" className="widgets__input"/>
            </div>
        </div>
    )
}

export default Widgets;