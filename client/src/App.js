import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios'

function App() {
  const [tweet, setTweet] = useState("");

  const handleTweet = () => {
    Axios.post("http://localhost:3001/api/insert", {text: tweet});
  };

  return (
    <div className="App">
      <h1>TWITTER</h1>
      <textarea onChange = {(e) => {setTweet(e.target.value);}}> </textarea>
      <button onClick={handleTweet}>Tweet</button>
    </div>
  );
}

export default App;
