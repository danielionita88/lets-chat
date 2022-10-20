import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/auth/authSlice";
import Modal from "../../UI/Modal";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./EditContainer.css";

const EditContainer = (props) => {
  const { user } = useSelector((state) => state.auth);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    currentLocationCity: "",
    currentLocationCountry: "",
    fromCity: "",
    fromCountry: "",
    relationship: "",
  });

  const {
    firstName,
    lastName,
    currentLocationCity,
    currentLocationCountry,
    fromCity,
    fromCountry,
    relationship,
  } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const pictureSelectHandler = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedPicture(selectedFile);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const userData = {
      userId: user._id,
      firstName,
      lastName,
      currentLocationCity,
      currentLocationCountry,
      fromCity,
      fromCountry,
      profilePicture: selectedPicture,
      relationship,
    };
    Object.keys(userData).forEach((key) => {
      if (!userData[key] || userData[key].trim() === "") {
        delete userData[key];
      }
    });
    dispatch(updateUser(userData));
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitFormHandler} className="profileEditForm">
        <div className="formTop">
          <img
            src={
              selectedPicture
                ? URL.createObjectURL(selectedPicture)
                : user.profilePicture
                ? user.profilePicture
                : "/assets/default.jpeg"
            }
            alt="big profile"
          />
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
        </div>
        <div className="formCenter">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Current Location (city)"
            name="currentLocationCity"
            value={currentLocationCity}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Current Location (country)"
            name="currentLocationCountry"
            value={currentLocationCountry}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="From(city)"
            name="fromCity"
            value={fromCity}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="From(country)"
            name="fromCountry"
            value={fromCountry}
            onChange={changeHandler}
          />
          <input
            type="select"
            placeholder="Relationship Status"
            name="relationship"
            value={relationship}
            onChange={changeHandler}
          />
        </div>
        <div className="formBottom">
          <button className="formButton" type="submit">
            Save
          </button>
          <button
            className="formButton"
            onClick={props.onClose}
            style={{ backgroundColor: "red" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditContainer;
