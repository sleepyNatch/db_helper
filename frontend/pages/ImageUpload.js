// import axios from "axios"
// import React from "react"
// import { useState } from "react"
// import ImageUploadAPI from "./api/ImageUploadAPI"

// function ImageUpload() {
//   const [image, setImage] = useState("")
//   function handleImage(e) {
//     console.log(e.target.files)
//     setImage(e.target.files[0])
//   }
//   function handleApi() {
//     const formData = new FormData()
//     formData.append("image", image)
//     axios.post("url", formData).then((res) => {
//       console.log(res)
//     })
//   }
//   const onClickImageUpload = () => {
//     console.log(ImageUploadData)

//     ImageUploadAPI.ImageUpload(ImageUploadData)
//       .then((response) => {
//         localStorage.setItem("username", registerData.username)
//         console.log(response.data)
//         router.push("/risk")
//       })
//       .catch((e) => {
//         console.log(e)
//       })
//   }
//   return (
//     <div>
//       <input type="file" name="file" onChange={handleImage} />
//       <button onClick={handleApi}>Submit</button>
//     </div>
//   )
// }

// export default ImageUpload
