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

  useEffect(() => {
    let usernameLocal = localStorage.getItem("username");
    handleChange("username", usernameLocal);
    getUserData(usernameLocal);
  }, []);

  useEffect(() => {
    if (isCalLevel && isCalScore) {
      saveData();
    }
  }, [isCalLevel, isCalScore]);

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

  const saveData = () => {
    RiskAPI.saveRisk(saveRisk)
      .then((response) => {
        console.log(response.data);
        router.push("/resultRisk");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const handleChange = (id, value) => {
    setSaveRisk((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const kwamdanChange = (event) => {
    setSelectedKwamdan(event.target.value);
    handleChange(event.target.name, event.target.value);
  };

  const relativesChange = (event) => {
    setSelectedRelatives(event.target.value);
    handleChange(event.target.name, event.target.value);
  };

  const onClickSaveRisk = () => {
    calculateScore(userData);
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

    handleChange("score", score);
    setIsCalScore(true);
    calculateLevel(score);
  };

  const calculateLevel = (totalScore) => {
    let calLevel = 0;
    if (totalScore > 8) calLevel = 4;
    else if (totalScore >= 6 && totalScore <= 8) calLevel = 3;
    else if (totalScore >= 3 && totalScore <= 5) calLevel = 2;
    else if (totalScore <= 2) calLevel = 1;

    handleChange("level", calLevel);
    setIsCalLevel(true);
  };

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
            type="number"
          />
          <br></br> <br></br>
          <p style={{ color: "black" }}>2.โปรดกรอกส่วนสูงของคุณ </p> <br></br>
          <TextField
            id="height"
            onChange={(event) => handleChange("height", event.target.value)}
            value={saveRisk.height}
            label="ส่วนสูง (เซนติเมตร)"
            type="number"
          />
          <br></br> <br></br>
          <p style={{ color: "black" }}>3.โปรดกรอกรอบเอวของคุณ </p> <br></br>
          <TextField
            id="waistline"
            onChange={(event) => handleChange("waistline", event.target.value)}
            value={saveRisk.waistline}
            label="รอบเอว (เซนติเมตร)"
            type="number"
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
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
}
