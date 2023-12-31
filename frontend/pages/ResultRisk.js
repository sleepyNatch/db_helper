import { useState, useEffect } from "react";
import RiskAPI from "./api/riskAPI";
import * as Constant from "../constant/resultConstant";
import { useRouter } from "next/router";

export default function ResultRisk() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [levelTitle, setLevelTitle] = useState("");
  const [levelDescription, setLevelDescription] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    let usernameLocal = localStorage.getItem("username") || "Sugar";
    getResult(usernameLocal);
  }, []);

  useEffect(() => {
    setDescription();
  }, [score, level]);

  const getResult = (username) => {
    RiskAPI.getRiskResult(username)
      .then((response) => {
        setLevel(response.data.level);
        setScore(response.data.score);
      })
      .catch((e) => {
        console.log("No level for this user");
      });
  };

  const goToMainPage = () => {
    router.push("/register");
  };

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
      {/* <NavBar /> */}
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
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            padding: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
            backgroundColor: "#FF8484",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              marginTop: "50px",
              fontSize: "48px",
            }}
          >
            คะแนนของคุณ
          </h1>
          <p
            style={{
              marginTop: "10px",
              fontSize: "150px",
              color: "white",
              textAlign: "center",
            }}
          >
            {score}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "#FF5151",
            padding: "70px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              color: "white",
              textAlign: "center",
            }}
          >
            {levelTitle}
          </h1>
          <p
            style={{
              marginTop: "20px",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            {levelDescription}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            marginTop: "50px",
            padding: "80px",
            paddingLeft: "150px",
            paddingRight: "150px",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              color: "black",
            }}
          >
            *ข้อแนะนำ*
          </h1>
       
            {suggestion.map((data, index) => {
              return (
                <div key={index} data={data}>
                  <p  style={{
              marginTop: "50px",
              fontSize: "36px",
              marginLeft: "100px",
            }}>  {index + 1}. {data}</p>
                
                </div>
              );
            })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <button onClick={goToMainPage}>
          <div
            style={{
              backgroundColor: "#12A596",
              padding: "10px",
              borderRadius: "20px",
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
