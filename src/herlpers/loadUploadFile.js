export const loadUploadFile = async (file) => {
 const url = "https://api.cloudinary.com/v1_1/dltbcx5es/upload";

 const formData = new FormData();
 formData.append("file", file);
 formData.append("upload_preset", "react-journal");

 try {
  const resp = await fetch(url, {
   method: "POST",
   body: formData,
  });
  if (resp.ok) {
   const cloudResp = await resp.json();
   return cloudResp.secure_url;
  }

  return await resp.json();
 } catch (err) {
  console.log(err);
 }
};
