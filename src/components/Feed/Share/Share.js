import { useRef, useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Share.css";

const Share = () => {
  const userInputRef = useRef();
  // eslint-disable-next-line
  const [file, setFile] = useState(null);

  const fileSelectHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault()
   
    fetch("http://localhost:8080/api/posts/", {
        method: "POST",
        body: JSON.stringify({
          user_id: '6329ee6979f55824418c7909',
          description: userInputRef.current.value
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
      userInputRef.current.value = ""
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <form onSubmit={submitHandler}>
          <div className="shareTop">
            <img src="/assets/dwayne.jpeg" alt="profile" />
            <input ref={userInputRef} placeholder="What's in your mind?" />
          </div>
          <hr />
          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <InsertPhotoIcon className="shareIcon" htmlColor="tomato" />
                <input
                  type="file"
                  id="file"
                  accept=".jpeg, .jpg, .png"
                  hidden
                  onChange={fileSelectHandler}
                />
                <span className="shareOptionText">Photo</span>
              </label>
              <div className="shareOption">
                <LabelIcon className="shareIcon" htmlColor="blue" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <LocationOnIcon className="shareIcon" htmlColor="green" />
                <span className="shareOptionText">Location</span>
              </div>
            </div>
            <button className="shareButton" type="submit">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
