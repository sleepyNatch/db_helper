"use client";
import { createContext, useState, useEffect } from "react";
const Context = createContext();
import * as React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import RiskAPI from "./api/riskAPI";
import userAPI from "./api/userAPI";
import { useRouter } from "next/router";

export default function Risk() {
  const router = useRouter();
  const [selectedKwamdan, setSelectedKwamdan] = useState("");
  const [selectedRelatives, setSelectedRelatives] = useState("");
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [totalScore, setTotalscore] = useState(0);
  const [riskLevel, setRiskLevel] = useState(0);
  const [isCalScore, setIsCalScore] = useState(false);
  const [isCalLevel, setIsCalLevel] = useState(false);
  const [saveRisk, setSaveRisk] = useState({
    weight: "",
    height: "",
    waistline: "",
    kwamdan: "",
    relatives: "",
    score: 0,
    level: 0,
  });

  const kwamdanChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedKwamdan(selectedValue);

    setSaveRisk((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: selectedValue,
    }));
  };

  const relativesChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRelatives(event.target.value);

    setSaveRisk((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: selectedValue,
    }));
  };

  const handleChange = (id, value) => {
    setSaveRisk((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const onClickSaveRisk = () => {
    calculateScore(userData);
    if (isCalScore) calculateLevel();
    if (isCalScore && isCalLevel) {
      setSaveRisk((prevFormData) => ({
        ...prevFormData,
        score: totalScore,
        level: riskLevel,
        username: username,
      }));

      console.log("saveRisk", saveRisk);
      RiskAPI.saveRisk(saveRisk)
        .then((response) => {
          router.push("/resultRisk");
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const getUserData = (username) => {
    userAPI
      .getUserDataByUsername(username)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const calculateScore = (data) => {
    let score = 0;
    let bmi = saveRisk.weight / Math.pow(saveRisk.height / 100, 2);

    if (data.gender) {
      score += 2;
    }

    if (bmi >= 23 && bmi < 27.5) {
      score += 3;
    } else if (bmi >= 27.5) {
      score += 5;
    }

    if (
      (data.gender && saveRisk.waistline > 90) ||
      (!data.gender && saveRisk.waistline > 80)
    ) {
      score += 2;
    }

    if (saveRisk.kwamdan == "false") {
      score += 2;
    }

    if (saveRisk.relatives == "true") {
      score += 4;
    }
    setTotalscore(score);
    setIsCalScore(true);
  };

  const calculateLevel = () => {
    if (totalScore > 8) setRiskLevel(4);
    else if (totalScore >= 6 && totalScore <= 8) setRiskLevel(3);
    else if (totalScore >= 3 && totalScore <= 5) setRiskLevel(2);
    else if (totalScore <= 2) setRiskLevel(1);
    setIsCalLevel(true);
  };

  useEffect(() => {
    let usernameLocal = localStorage.getItem("username") || "Sugar";
    setUsername(usernameLocal);
    getUserData(usernameLocal);
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#12A596",
        }}
      >
        <img
          src="logo.png"
          style={{ height: 65, margin: "10px", justifyContent: "center" }}
        ></img>
      </div>
      <br></br> <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "white",
        }}
      >
        <br></br> <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              fontSize: 30,
              display: "flex",
              flexDirection: "row",
              JustifyContent: "center",
              color: "white",
              padding: 30,
              background: "#12A596",
              borderRadius: "15px",
            }}
          >
            กรุณาทำเเบบทดสอบความเสี่ยงเพื่อตรวจสอบถึงระดับความเสี่ยงของคุณ
          </h1>
        </div>
        <div style={{ paddingLeft: 50 }}>
          <br></br>
          <p style={{ color: "black" }}>1.โปรดกรอกน้ำหนักของคุณ </p> <br></br>
          <TextField
            id="weight"
            onChange={(event) => handleChange("weight", event.target.value)}
            value={saveRisk.weight}
            label="น้ำหนัก (กิโลกรัม)"
            defaultValue=""
          />
          <br></br> <br></br>
          <p style={{ color: "black" }}>2.โปรดกรอกส่วนสูงของคุณ </p> <br></br>
          <TextField
            id="height"
            onChange={(event) => handleChange("height", event.target.value)}
            value={saveRisk.height}
            label="ส่วนสูง (เซนติเมตร)"
            defaultValue=""
          />
          <br></br> <br></br>
          <p style={{ color: "black" }}>3.โปรดกรอกรอบเอวของคุณ </p> <br></br>
          <TextField
            id="waistline"
            onChange={(event) => handleChange("waistline", event.target.value)}
            value={saveRisk.waistline}
            label="รอบเอว (เซนติเมตร)"
            defaultValue=""
          />
          <br></br> <br></br>
          <p style={{ color: "black" }}>4.โปรดระบุความดันโลหิตของคุณ</p>
          <FormGroup style={{ color: "black" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedKwamdan === "true"}
                  name="kwamdan"
                  onChange={kwamdanChange}
                  value="true"
                />
              }
              label="ปกติ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedKwamdan === "false"}
                  name="kwamdan"
                  onChange={kwamdanChange}
                  value="false"
                />
              }
              label="ผิดปกติ"
            />
          </FormGroup>
          <br></br>
          <p style={{ color: "black" }}>5.ประวัติโรคเบาหวานในญาติสายตรง</p>
          <FormGroup style={{ color: "black" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedRelatives === "false"}
                  name="relatives"
                  onChange={relativesChange}
                  value="false"
                />
              }
              label="ไม่มี"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedRelatives === "true"}
                  name="relatives"
                  onChange={relativesChange}
                  value="true"
                />
              }
              label="มี"
            />
          </FormGroup>
        </div>
        <br></br> <br></br>
        <div style={{ display: "flex", justifyContent: "right", padding: 50 }}>
          <botton
            onClick={onClickSaveRisk}
            style={{
              fontSize: 20,
              color: "white",
              padding: 15,
              background: "#12A596",
              borderRadius: "15px",
            }}
          >
            ประเมินความเสี่ยง
          </botton>
        </div>
      </div>
    </div>
  );
}
