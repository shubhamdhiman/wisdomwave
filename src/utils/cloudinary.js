import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuring Cloudinary using environment variables.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

// Defining an asynchronous function called 'uploadOnCloudinary' which takes 'localFilePath' as a parameter.
const uploadOnCloudinary = async (localFilePath) => {
  try {
    // If 'localFilePath' is falsy, return null and exit the function.
    if (!localFilePath) return null;

    // Upload the file on Cloudinary.
    const response = await cloudinary.uploader.upload(
      localFilePath,
      // Setting options for the upload. Here, 'public_id' is set to "olympic_flag", and 'resource_type' is set to "auto".
      { public_id: "olympic_flag", resource_type: "auto" }
    );

    // Log the public URL of the uploaded file.
    console.log(response.url);
    
    // Return the response object.
    return response;

  } catch (error) {
    // If an error occurs during the try block, remove the locally saved temporary file.
    fs.unlinkSync(localFilePath);
  }
};

// Exporting the 'uploadOnCloudinary' function.
export { uploadOnCloudinary };
