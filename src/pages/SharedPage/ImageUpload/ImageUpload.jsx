// ImageUpload.js
import axios from "axios";
import { useContext, useState } from "react";
import { AuthProvider } from "../../../Context/UserContext";
import { toast } from "react-toastify";
import Loader from "../../../base-component/Loader";

const ImageUpload = ({ required = false }) => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const { setImgUrl } = useContext(AuthProvider);
  const [loading, setLoading] = useState(false);

  // const handleFileChange = (event) => {
  //   setLoading(true);
  //   const file = event.target.files[0];
  //   console.log(file)
  //   setSelectedFile(file);
  // };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "708ba90fcdb534bfd76013da1ac46b05",
          },
        },
      );

      setImgUrl(response.data.data.url);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };
  // const handleUpload = async () => {
  //   setLoading(true);
  //   if (!selectedFile) {
  //     setLoading(false);
  //     console.error("No file selected");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("image", selectedFile);

  //   try {
  //     const response = await axios.post(
  //       "https://api.imgbb.com/1/upload",
  //       formData,
  //       {
  //         params: {
  //           key: "708ba90fcdb534bfd76013da1ac46b05", // Replace with your ImgBB API key
  //         },
  //       },
  //     );

  //     console.log("File uploaded successfully:", response.data);

  //     // Set the image URL to display or use it as needed
  //     setImgUrl(response.data.data.url);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error("Error uploading file");
  //     console.error("Error uploading file:", error);
  //   }
  // };
  return (
    <>
      {loading && (
        <div className="w-full absolute backdrop-blur-sm ">
          <Loader className={"  z-50"} />
        </div>
      )}
      <input
        // onBlur={handleUpload}
        type="file"
        onChange={handleFileChange}
        className="inline w-1/2"
        required={required}
      />
    </>
  );
};

export default ImageUpload;
