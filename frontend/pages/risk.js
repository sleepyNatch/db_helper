'use client'
import { createContext, useState } from 'react'
const Context = createContext()
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';


export default function Risk() {

  const [selectedKwamdan, setSelectedKwamdan] = useState('');
  const [selectedRelatives, setSelectedRelatives] = useState('');
  const [saveRisk, setSaveRisk] = useState({
    weight: '',
    height: '',
    waistline: '',
    kwamdan: '',
    relatives: '',
  });


  const kwamdanChange = (event) => {
    const selectedValue = event.target.value
    setSelectedKwamdan(selectedValue);

    setSaveRisk((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: selectedValue,
    }));
  };

  const relativesChange = (event) => {
    const selectedValue = event.target.value
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
    console.log(saveRisk);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", background: "#12A596" }}>
        <img
          src="logo.png"
          style={{ height: 65, margin: "10px", justifyContent: "center" }}
        ></img>
      </div>
      <br></br> <br></br>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", background: "white" }}>
        <br></br> <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ fontSize: 30, display: "flex", flexDirection: "row", JustifyContent: "center", color: "white", padding: 30, background: "#12A596", borderRadius: "15px" }}>กรุณาทำเเบบทดสอบความเสี่ยงเพื่อตรวจสอบถึงระดับความเสี่ยงของคุณ</h1>
        </div>
        <div style={{ paddingLeft: 50 }}>
          <br></br>
          <p style={{ color: 'black' }}>1.โปรดกรอกน้ำหนักของคุณ </p> <br></br>
          <TextField
            id="weight"
            onChange={(event) => handleChange('weight', event.target.value)}
            value={saveRisk.weight}
            label="น้ำหนัก (กิโลกรัม)"
            defaultValue=""
          />
          <br></br> <br></br>
          <p style={{ color: 'black' }}>2.โปรดกรอกส่วนสูงของคุณ </p> <br></br>
          <TextField
            id="height"
            onChange={(event) => handleChange('height', event.target.value)}
            value={saveRisk.height}
            label="ส่วนสูง (เซนติเมตร)"
            defaultValue=""
          />
          <br></br> <br></br>
          <p style={{ color: 'black' }}>3.โปรดกรอกรอบเอวของคุณ </p> <br></br>
          <TextField
            id="waistline"
            onChange={(event) => handleChange('waistline', event.target.value)}
            value={saveRisk.waistline}
            label="รอบเอว (เซนติเมตร)"
            defaultValue=""
          />
          <br></br> <br></br>
          <p style={{ color: 'black' }}>4.โปรดระบุความดันโลหิตของคุณ</p>
          <FormGroup style={{ color: 'black' }}>
            <FormControlLabel
              control={<Checkbox checked={selectedKwamdan === "true"} name="kwamdan" onChange={kwamdanChange} value="true" />}
              label="ปกติ"
            />
            <FormControlLabel
              control={<Checkbox checked={selectedKwamdan === "false"} name="kwamdan" onChange={kwamdanChange} value="false" />}
              label="ผิดปกติ"
            />
          </FormGroup>
          <br></br>
          <p style={{ color: 'black' }}>5.ประวัติโรคเบาหวานในญาติสายตรง</p>
          <FormGroup style={{ color: 'black' }}>
            <FormControlLabel
              control={<Checkbox checked={selectedRelatives === "false"} name="relatives" onChange={relativesChange} value="false" />}
              label="ไม่มี"
            />
            <FormControlLabel
              control={<Checkbox checked={selectedRelatives === "true"} name="relatives" onChange={relativesChange} value="true" />}
              label="มี"
            />
          </FormGroup>
        </div>
        <br></br> <br></br>
        <div style={{ display: "flex", justifyContent: "right", padding: 50 }}>
          <botton onClick={onClickSaveRisk} style={{ fontSize: 20, color: "white", padding: 15, background: "#12A596", borderRadius: "15px" }}>ประเมินความเสี่ยง</botton>
        </div>
      </div>
    </div>

  )
}