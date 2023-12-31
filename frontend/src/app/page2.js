'use client'
import { createContext } from 'react'

const Context = createContext()
import { TextField } from '@mui/material'
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import userAPI from "./api/userAPI";

export default function Home() {
  
  const [Gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault()};

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
      event.preventDefault()};


  const onClickRegister = () => {
    const data= {
      username: values.username,
      email:values.email,
      password: values.password,
      birthDate: birthData,
      gender: gender,
    };

    userAPI
      .register()
      .then((response) => {
        console.log(response.data);
          router.push("/index");
        
      })
      .catch((e) => {
        console.log(e.response.data);
      });

  } ;

    

  return (
  <div style={{background: "white"}}>


    <Box sx={{ flexGrow: 1, backgroundColor: 'primary.dark'
      ,'&:hover': {
          backgroundColor: 'primary.main'}}} >
      <AppBar position="static" style={{ background: "#12A596" }}>
        <Toolbar variant="green">
          <IconButton edge="start" color="green" sx={{ mr: 2 }}>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><Avatar>H</Avatar></div>

    <div style={{display:"flex",justifyContent: "center",marginBottom: "10px"}}><InputLabel id="demo-simple-select-helper-label">รูปโปรไฟล์</InputLabel></div>
    
    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><TextField id="outlined-basic" label="ชื่อ" variant="outlined" /></div>
    
    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><TextField id="outlined-basic" label="นามสกุล" variant="outlined" /></div>
    
    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><FormControl sx={{ m: 1, minWidth: 230 }}>
        <InputLabel id="demo-simple-select-helper-label" >เพศ</InputLabel>
        <Select 
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={Gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={2}>ชาย</MenuItem>
          <MenuItem value={0}>หญิง</MenuItem>
        </Select></FormControl></div>
        <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label={'เดือน/วัน/ปีเกิด'}
            views={['month', 'day', 'year']} />
        </LocalizationProvider></div>
    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><TextField id="outlined-basic" label="หมายเลขโทรศัพท์มือถือ" variant="outlined" /></div>

    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><TextField id="outlined-basic" label="อีเมล" variant="outlined" /></div>

    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}><TextField id="outlined-basic" label="ชื่อผู้ใช้" variant="outlined" /></div>
    
    <div style={{display:"flex",justifyContent: "center",margintop: "10px"}}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">รหัสผ่าน</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </div>


    <div style={{display:"flex",justifyContent: "center",margintop: "1px",marginBottom: "10px"}}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirmpassword">ยืนยันรหัสผ่าน</InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirmpassword"
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick ={handleClickShowConfirmPassword}
                  onMouseDown ={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="ConfirmPassword"
          />
        </FormControl>
    </div>

    <div style={{display:"flex",justifyContent: "center",padding: "10px"}}>
      <Button onClick = {onClickRegister} variant="contained" style={{ background: "#12A596" }}>ลงทะเบียนใช้งาน</Button> </div>

  </div>
  )
}
