import { useState } from "react";
import Modal from "../../UI/Modal";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./EditContainer.css";

const EditContainer = (props) => {
  const [selectedPicture, setSelectedPicture] = useState(null);

  const pictureSelectHandler = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedPicture(selectedFile);
  };

  return (
    <Modal onClose={props.onClose}>
      <form className="profileEditForm">
        <img src={selectedPicture ? selectedPicture : "/assets/dwayne.jpeg"} alt="big profile" />
        <label htmlFor="file" className="profilePictureSelect">
          <CameraAltIcon />
          <input
            type="file"
            id="file"
            accept=".jpeg, .jpg, .png"
            hidden
            onChange={pictureSelectHandler}
          />
        </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          // value={}
          // onChange={}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          // value={lastName}
          // onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Your e-mail"
          name="email"
          // value={email}
          // onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Your password"
          name="password"
          // value={password}
          // onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          // value={confirmPassword}
          // onChange={changeHandler}
        />
        <button className="formButton">Sign Up</button>
        <button
          className="formButton"
          // onClick={props.onCancelRegister}
          style={{ backgroundColor: "red" }}
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EditContainer;
