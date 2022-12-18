import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from 'react';

const App = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <button className="like" onClick={() => setLikeCounter((likeCounter) => likeCounter + 1)}>Like</button>
      <p>Amount of likes: {likeCounter}</p>
    </div>
  );
};

export default App;
