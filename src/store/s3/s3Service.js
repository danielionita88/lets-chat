import axios from "axios";

const API_URL = "http://localhost:8080/api/s3Url/";

const uploadPicture = async (picture, token) => {
  const configUploadUrl = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const configPictureUpload = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const { data } = await axios.get(API_URL, configUploadUrl);

  await axios.put(data, picture, configPictureUpload);

  const imageUrl = data.split("?")[0];
  return imageUrl;
};

const s3Service = {
  uploadPicture
}

export default s3Service;
