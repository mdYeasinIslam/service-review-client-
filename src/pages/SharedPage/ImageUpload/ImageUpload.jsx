// ImageUpload.js
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthProvider } from "../../../Context/UserContext";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { setImgUrl, imgUrl } = useContext(AuthProvider);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "708ba90fcdb534bfd76013da1ac46b05", // Replace with your ImgBB API key
          },
        }
      ); 

      console.log("File uploaded successfully:", response.data);

      // Set the image URL to display or use it as needed
      setImgUrl(response.data.data.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  // console.log(selectedFile);
  // console.log(imgUrl);

  return (
   
      <input onBlur={handleUpload} type="file" onChange={handleFileChange} className="inline w-1/2"/>

   
  );
};

export default ImageUpload;
