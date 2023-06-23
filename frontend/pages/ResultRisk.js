import { useState, useEffect } from "react";
import resultAPI from "./api/resultAPI";
import * as Constant from "../constant/resultConstant";

export default function Result() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(4);
  const [levelTitle, setLevelTitle] = useState("");
  const [levelDescription, setLevelDescription] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const getLevel = () => {
    resultAPI
      .getLevelResult(username)
      .then((response) => {
        // setLevel(response.data)
      })
      .catch((e) => {
        console.log("No level for this user");
      });
  };

  useEffect(() => {
    localStorage.getItem("username");
    setDescription();
  }, []);

  const setDescription = () => {
    let suggestions = [];
    if (level == 1) {
      setLevelTitle(Constant.LEVEL1);
      setLevelDescription(Constant.DESCRIPTION_LEVEL1);
      suggestions = [
        Constant.SUGGEST_EXERCISE,
        Constant.SUGGEST_CONTROL_WEIGHT,
        Constant.SUGGEST_CHECK_PRESSURE,
        Constant.SUGGEST_EVALUATE_3_YEAR,
      ];
    } else if (level == 2) {
      setLevelTitle(Constant.LEVEL2);
      setLevelDescription(Constant.DESCRIPTION_LEVEL2);
      suggestions = [
        Constant.SUGGEST_EXERCISE,
        Constant.SUGGEST_CONTROL_WEIGHT,
        Constant.SUGGEST_CHECK_PRESSURE,
        Constant.SUGGEST_EVALUATE_1_to_3_YEAR,
      ];
    } else if (level == 3) {
      setLevelTitle(Constant.LEVEL3);
      setLevelDescription(Constant.DESCRIPTION_LEVEL3);
      suggestions = [
        Constant.SUGGEST_FOOD_EXERCISE,
        Constant.SUGGEST_CONTROL_WEIGHT,
        Constant.SUGGEST_CHECK_PRESSURE,
        Constant.SUGGEST_CHECK_SUGAR,
        Constant.SUGGEST_EVALUATE_1_to_3_YEAR,
      ];
    } else {
      setLevelTitle(Constant.LEVEL4);
      setLevelDescription(Constant.DESCRIPTION_LEVEL4);
      suggestions = [
        Constant.SUGGEST_FOOD_EXERCISE,
        Constant.SUGGEST_CONTROL_WEIGHT,
        Constant.SUGGEST_CHECK_PRESSURE,
        Constant.SUGGEST_CHECK_SUGAR,
        Constant.SUGGEST_EVALUATE_1_YEAR,
      ];
    }
    setSuggestion(suggestions);
  };

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
          {score}
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
          {levelTitle}
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
          {levelDescription}
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
          1.{suggestion[0]}
          {/* 1.ควบคุมอาหาร และออกกำลังกายสม่ำเสมอ */}
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
          2.{suggestion[1]}
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
          3.{suggestion[3]}
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
          4.{suggestion[3]}
        </p4>
        {suggestion[4] && (
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
            5.{suggestion[4]}
          </p5>
        )}
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
  );
}
