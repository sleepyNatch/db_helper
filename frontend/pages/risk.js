'use client'
import { createContext, useState } from 'react'
const Context = createContext()
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';


export default function Risk() {

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedKwamdan, setSelectedKwamdan] = useState('');
    const [selectedRelatives, setSelectedRelatives] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const genderChange = (event) => {
        setSelectedGender(event.target.value);
      };
    const kwamdanChange = (event) => {
      setSelectedKwamdan(event.target.value);
    };
    const relativesChange = (event) => {
      setSelectedRelatives(event.target.value);
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
        <p style={{color:'black'}}>1.คุณอายุเท่าไหร่</p>
        <FormGroup style={{color:'black'}}>
          <FormControlLabel
            control={<Checkbox checked={selectedValue === 'option1'} onChange={handleChange} value="option1" />}
          label="34-39 ปี"
         />
        <FormControlLabel
        control={<Checkbox checked={selectedValue === 'option2'} onChange={handleChange} value="option2" />}
        label="40-44 ปี"
      />
      <FormControlLabel
        control={<Checkbox checked={selectedValue === 'option3'} onChange={handleChange} value="option3" />}
        label="45-49 ปี"
      />
      <FormControlLabel
        control={<Checkbox checked={selectedValue === 'option4'} onChange={handleChange} value="option4" />}
        label="50 ปีขึ้นไป"
      />
        </FormGroup>
        <br></br>
        <p style={{color:'black'}}>2.โปรดระบุเพศของคุณ</p>
        <FormGroup style={{color:'black'}}>
          <FormControlLabel
            control={<Checkbox checked={selectedGender === 'option1'} onChange={genderChange} value="option1" />}
          label="หญิง"
         />
         <FormControlLabel
            control={<Checkbox checked={selectedGender === 'option2'} onChange={genderChange} value="option2" />}
        label="ชาย"
      />
        </FormGroup>
        <br></br>
        <p style={{color:'black'}}>3.โปรดกรอกน้ำหนักของคุณ </p> <br></br>
        <TextField
          id="outlined-helperText"
          label="น้ำหนัก (กิโลกรัม)"
          defaultValue=""
        />
        <br></br> <br></br>
        <p style={{color:'black'}}>3.โปรดกรอกส่วนสูงของคุณ </p> <br></br>
        <TextField
          id="outlined-helperText"
          label="ส่วนสูง (เซนติเมตร)"
          defaultValue=""
        />
        <br></br> <br></br>
        <p style={{color:'black'}}>4.โปรดกรอกรอบเอวของคุณ </p> <br></br>
        <TextField
          id="outlined-helperText"
          label="รอบเอว (เซนติเมตร)"
          defaultValue=""
        />
        <br></br> <br></br>
        <p style={{color:'black'}}>5.โปรดระบุความดันโลหิตของคุณ</p>
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
      </div>
      </div>

  )
}