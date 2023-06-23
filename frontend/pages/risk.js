'use client'
import { createContext, useState } from 'react'
const Context = createContext()
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';


export default function Risk() {

    const [selectedKwamdan, setSelectedKwamdan] = useState('');
    const [selectedRelatives, setSelectedRelatives] = useState('');

    const kwamdanChange = (event) => {
      setSelectedKwamdan(event.target.value);
    };
    const relativesChange = (event) => {
      setSelectedRelatives(event.target.value);
    };

    const [saveRisk, setSaveRisk] = useState({
      weight: '',
      height: '',
      waistline: '',
      kwamdan: '',
      relatives: '',
    });

    const handleChange = (event) => {
      const { id, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    };

    const getValue = () => {
      console.log(formData);
    };

  return (
    <div>
      <div style={{display: "flex",justifyContent: "center",background: "#12A596"}}>
        <img
           src="logo.png"
           style={{ height: 65, margin: "10px",justifyContent:"center" }}
         ></img> 
      </div>
      <br></br> <br></br>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",background:"white"}}>
        <br></br> <br></br>
        <div style={{display:"flex",justifyContent:"center"}}>
          <h1 style={{fontSize:30, display:"flex", flexDirection:"row", JustifyContent:"center", color:"white",padding:30,background:"#12A596",borderRadius:"15px"}}>กรุณาทำเเบบทดสอบความเสี่ยงเพื่อตรวจสอบถึงระดับความเสี่ยงของคุณ</h1>
        </div>
      <div style={{paddingLeft:50}}>
        <br></br>
        <p style={{color:'black'}}>1.โปรดกรอกน้ำหนักของคุณ </p> <br></br>
        <TextField
          id="weight"
          onChange={handleChange}
          value={registerData.weight}
          label="น้ำหนัก (กิโลกรัม)"
          defaultValue=""
        />
        <br></br> <br></br>
        <p style={{color:'black'}}>2.โปรดกรอกส่วนสูงของคุณ </p> <br></br>
        <TextField
          id="height"
          onChange={handleChange}
          value={registerData.height}
          label="ส่วนสูง (เซนติเมตร)"
          defaultValue=""
        />
        <br></br> <br></br>
        <p style={{color:'black'}}>3.โปรดกรอกรอบเอวของคุณ </p> <br></br>
        <TextField
          id="waistline"
          onChange={handleChange}
          value={registerData.waistline}
          label="รอบเอว (เซนติเมตร)"
          defaultValue=""
        />
        <br></br> <br></br>
        <p style={{color:'black'}}>4.โปรดระบุความดันโลหิตของคุณ</p>
        <FormGroup style={{color:'black'}}>
          <FormControlLabel
            control={<Checkbox checked={selectedKwamdan === 'option1'} onChange={kwamdanChange} value="option1" />}
          label="ปกติ"
         />
         <FormControlLabel
            control={<Checkbox checked={selectedKwamdan === 'option2'} onChange={kwamdanChange} value="option2" />}
        label="ผิดปกติ"
      />
        </FormGroup>
        <br></br>
        <p style={{color:'black'}}>5.ประวัติโรคเบาหวานในญาติสายตรง</p>
        <FormGroup style={{color:'black'}}>
          <FormControlLabel
            control={<Checkbox checked={selectedRelatives === 'option1'} onChange={relativesChange} value="option1" />}
          label="ไม่มี"
         />
         <FormControlLabel
            control={<Checkbox checked={selectedRelatives === 'option2'} onChange={relativesChange} value="option2" />}
        label="มี"
      />
        </FormGroup>
      </div>
      <br></br> <br></br>
      <div style={{display:"flex",justifyContent:"right",padding:50}}>
              <botton style={{fontSize:20, color:"white",padding:15,background:"#12A596",borderRadius:"15px"}}>ประเมินความเสี่ยง</botton>
      </div>
      </div>
      </div>

  )
}