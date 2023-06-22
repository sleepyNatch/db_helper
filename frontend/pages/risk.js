'use client'
import { createContext } from 'react'

const Context = createContext()
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function Risk() {

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
      <div style={{display:"flex",justifyContent:"center",background:"white"}}>
        <br></br> <br></br>
        <div style={{display:"flex",justifyContent:"center",background:"#12A596"}}>
          <h1>กรุณาทำเเบบทดสอบความเสี่ยงเพื่อตรวจสอบถึงระดับความเสี่ยงของคุณ</h1>
        </div>
      </div>
      <div>
        <p>1.คุณอายุเท่าไหร่</p>
        <FormGroup>
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </div>
      </div>

  )
}