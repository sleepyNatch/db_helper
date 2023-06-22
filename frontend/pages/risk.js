'use client'
import { createContext, useState } from 'react'
const Context = createContext()
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';


export default function Risk() {

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const genderChange = (event) => {
        setSelectedGender(event.target.value);
      };

  return (
    <div>
      <div style={{display: "flex",flexDirection:"row",justifyContent: "center",background: "#12A596"}}>
        <img
           src="logo.png"
           style={{ height: 50, width: 50, margin: "10px" }}
         ></img> 
        <h1 style={{color:'white',fontSize:30}}> helper </h1>
      </div>
      <br></br> <br></br>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",background:"white"}}>
        <br></br> <br></br>
        <div style={{display:"flex",justifyContent:"center",background:"#12A596"}}>
          <h1>กรุณาทำเเบบทดสอบความเสี่ยงเพื่อตรวจสอบถึงระดับความเสี่ยงของคุณ</h1>
        </div>
        <div>
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
          label="ชาย"
         />
         <FormControlLabel
            control={<Checkbox checked={selectedGender === 'option2'} onChange={genderChange} value="option2" />}
        label="หญิง"
      />
        </FormGroup>
        <br></br>
        <p style={{color:'black'}}>3.โปรดกรอกน้ำหนักของคุณ </p> <br></br>
        <TextField
          id="outlined-helperText"
          label="น้ำหนัก (กิโลกรัม)"
          defaultValue="กิโลกรัม"
        />

        <br></br>
        </div>
      </div>
      </div>

  )
}