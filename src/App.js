import React, { useState } from "react";

function App() {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);

  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }
    
    if (activeBtn === 'dislike'){
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };


  return (
    <div className="container">
      <div className="btn-container">
        <button
          className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
          onClick={handleLikeClick}
        >
          <span className="material-symbols-rounded">thumb_up</span>
          Like {likeCount}
        </button>

        <button
          className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
          onClick={handleDisikeClick}
        >
          <span className="material-symbols-rounded">thumb_down</span>
          Dislike {dislikeCount}
        </button>
      </div>
    </div>
  );
}

export default App;
