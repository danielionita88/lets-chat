import { useRef } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Share.css";

const Share = () => {
  const userPostInput = useRef();



  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/dwayne.jpeg" alt="profile" />
          <input ref={userPostInput} placeholder="What's in your mind?" />
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <InsertPhotoIcon className="shareIcon" htmlColor="tomato" />
              <span className="shareOptionText">Photo</span>
            </div>
            <div className="shareOption">
              <LabelIcon className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
