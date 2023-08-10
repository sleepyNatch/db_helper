import axios from "axios"
import fs from "fs"
import FormData from "form-data"

export const getScanApi = async (scanUpload) => {
  const data = new FormData()
  data.append("uploadfile", fs.createReadStream(scanUpload.path))

  const config = {
    method: "post",
    url: "https://api.aiforthai.in.th/ocr",
    headers: {
      Apikey: "Tvh46BlooVd3TApKrtCu1ZazfwoZ10xl",
      "Content-Type": "application/x-www-form-urlencoded",
      ...data.getHeaders(),
    },
    data: data,
  }

  try {
    const response = await axios(config)
    return response.data.Original
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const scanApiFormat = (scanData) => {
  return scanData.split("\n")
}
