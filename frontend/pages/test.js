import axios from "axios"
import * as FormData from "form-data"
import * as fs from "fs"

const data = new FormData()
data.append(
  "uploadfile",
  fs.createReadStream("/Users/hok191/Downloads/ฉลาก2.png")
)

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

async function getApi() {
  try {
    console.log(data)
    const response = await axios(config)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const data2 = await getApi()
console.log(data2.Original)

export default function test() {
  return <></>
}
