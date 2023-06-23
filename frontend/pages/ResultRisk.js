import handler from "./api/hello"
import { SetStateAction, useEffect, useState } from "react"

// export default function Grade() {
//   const [score, setScore] = useState("0")
//   const [grade, setGrade] = useState("")

//   useEffect(() => {
//     calculateGrade()
//   }, [score])

//   const handleChange = (event: {
//     target: { value: SetStateAction<string> }
//   }) => {
//     setScore(event.target.value)
//   }
//   function calculateGrade() {
//     if (Number(score) >= 90) {
//       setGrade("S")
//     } else if (Number(score) >= 80) {
//       setGrade("A")
//     } else if (Number(score) >= 70 && Number(score) < 80) {
//       setGrade("B")
//     } else if (Number(score) >= 60 && Number(score) < 70) {
//       setGrade("C")
//     } else {
//       setGrade("F")
//     }
//   }

export default function Result() {
  const [totalScore, setTotalScore] = useState(0)

  const retrieveScore = (score) => {
    if (score >= 9) {
      console.log("ระดับความเสี่ยงสูงมาก")
    } else if (score >= 6 && score <= 8) {
      console.log("ระดับความเสี่ยงสูง")
    } else if (score >= 3 && score <= 5) {
      console.log("ระดับความเสี่ยงปานกลาง")
    } else {
      console.log("ระดับความเสี่ยงน้อย")
    }
  }

  return (
    <div>
      <div style={{ backgroundColor: "#B8E4E0" }}>
        <div
          style={{ backgroundColor: "#12A596", marginBlockEnd: "10px" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            background: "#12A596",
          }}
        >
          <h1
            style={{
              color: "white",
              margin: "30px",
              fontSize: "50px",
              marginLeft: "45px",
            }}
          >
            {" "}
            db helper{" "}
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
          fontSize: "50px",
        }}
      >
        ผลการทดสอบความเสี่ยง
      </div>
      <div
        style={{
          backgroundColor: "#FF8484",
          marginLeft: "600px",
          marginRight: "600px",
          marginBlockEnd: "20px",
          marginTop: "50px",
          paddingBlockEnd: "90px",
          paddingTop: "30px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "48px",
          }}
        >
          คะแนนของคุณ
        </h1>
        <p1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "150px",
            color: "white",
          }}
        >
          9
        </p1>
      </div>
      <div
        style={{
          backgroundColor: "#FF5151",
          marginLeft: "600px",
          marginRight: "600px",
          marginBlockEnd: "20px",
          marginTop: "50px",
          paddingBlockEnd: "90px",
          paddingTop: "30px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "48px",
            color: "white",
          }}
        >
          ระดับความเสี่ยงสูงมาก
        </h1>
        <p1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "36px",
          }}
        >
          * คะแนนรวมมากกว่า 8 *
        </p1>
      </div>
      <div
        style={{
          backgroundColor: "white",
          marginLeft: "400px",
          marginRight: "400px",
          marginBlockEnd: "20px",
          marginTop: "50px",
          paddingBlockEnd: "60px",
          paddingTop: "30px",
          borderRadius: "20px",
          marginRight: "100px",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "start",
            marginTop: "50px",
            fontSize: "36px",
            color: "black",
            marginLeft: "100px",
          }}
        >
          *ข้อแนะนำ*
        </h1>
        <p1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "start",
            marginTop: "50px",
            fontSize: "36px",
            marginLeft: "200px",
          }}
        >
          1.ควบคุมอาหาร และออกกำลังกายสม่ำเสมอ
        </p1>
        <p2
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "start",
            marginTop: "50px",
            fontSize: "36px",
            marginLeft: "200px",
          }}
        >
          2.ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม
        </p2>
        <p3
          style={{
            display: "flex",
            flexDirection: "start",
            justifyContent: "start",
            marginTop: "50px",
            fontSize: "36px",
            marginLeft: "200px",
          }}
        >
          3.ตรวจวัดความดันโลหิต
        </p3>
        <p4
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "start",
            marginTop: "50px",
            fontSize: "36px",
            marginLeft: "200px",
          }}
        >
          4.ตรวจวัดระดับน้ำตาลในเลือด
        </p4>
        <p5
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "start",
            marginTop: "50px",
            fontSize: "36px",
            marginLeft: "200px",
          }}
        >
          5.ควรประเมินความเสี่ยงซ้ำทุก 1 ปี
        </p5>
      </div>
      <div>
        <button>
          <div
            style={{
              backgroundColor: "#12A596",
              marginLeft: "2000px",
              marginRight: "100px",
              marginBlockEnd: "20px",
              marginTop: "100px",
              paddingBlockEnd: "60px",
              paddingTop: "60px",
              borderRadius: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <h3
              style={{
                display: "flex",
                flexDirection: "colunm",
                justifyContent: "center",
                fontSize: "36px",
                color: "black",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: "50px",
                color: "white",
              }}
            >
              เข้าสู่หน้าหลัก
            </h3>
          </div>
        </button>
      </div>
    </div>
  )
}
