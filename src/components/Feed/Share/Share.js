import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../store/posts/postSlice";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Share.css";

const Share = () => {
  const { user } = useSelector((state) => state.auth);
  const userInputRef = useRef();
  const [selectedPicture, setSelectedPicture] = useState(null);
  const dispatch = useDispatch();

  const pictureSelectHandler = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedPicture(selectedFile);
  };

  const removeSelectedPictureHandler = () => {
    setSelectedPicture(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPost({
        description: userInputRef.current.value,
        picture: selectedPicture,
      })
    );
    userInputRef.current.value = "";
    setSelectedPicture(null);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <form onSubmit={submitHandler}>
          <div className="shareTop">
            <img
              src={
                user.profile_picture
                  ? user.profile_picture
                  : "/assets/default.jpeg"
              }
              alt="profile"
            />
            <input ref={userInputRef} placeholder="What's in your mind?" />
          </div>
          <hr />
          {selectedPicture && (
            <div>
              <img
                className="selectedPicture"
                src={URL.createObjectURL(selectedPicture)}
                alt="selected"
              />
              <button onClick={removeSelectedPictureHandler}>X</button>
            </div>
          )}
          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <InsertPhotoIcon className="shareIcon" htmlColor="tomato" />
                <input
                  type="file"
                  id="file"
                  accept=".jpeg, .jpg, .png"
                  hidden
                  onChange={pictureSelectHandler}
                />
                <span className="shareOptionText">Picture</span>
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
            <div>
              <button className="shareButton" type="submit">
                Share
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
