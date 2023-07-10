"use client";
import { createContext } from "react";

const Context = createContext();
import { TextField } from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import userAPI from "./api/userAPI";

export default function Home() {
  const router = useRouter();
  const [registerData, setRegisterData] = React.useState({
    name: "",
    surname: "",
    phoneNumber: "",
    gender: 0,
    birthDate: null,
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (id, value) => {
    let newValue = id === "gender" ? Number(value) : value;

    if (id === "birthDate" && newValue instanceof Date) {
      newValue = newValue.toISOString();
    }

    setRegisterData((prevFormData) => ({
      ...prevFormData,
      [id]: newValue,
    }));
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const onClickRegister = () => {
    console.log(registerData);
    userAPI
      .register(registerData)
      .then((response) => {
        console.log(response.data);

        localStorage.setItem("username", registerData.username);
        router.push("/risk");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <div style={{ background: "white" }}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        <AppBar position="static" style={{ background: "#12A596" }}>
          <Toolbar variant="green">
            <IconButton edge="start" color="green" sx={{ mr: 2 }}></IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <Avatar>H</Avatar>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <InputLabel id="demo-simple-select-helper-label">รูปโปรไฟล์</InputLabel>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <TextField
          id="name"
          onChange={(event) => handleChange("name", event.target.value)}
          label="ชื่อ"
          variant="outlined"
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <TextField
          id="surname"
          onChange={(event) => handleChange("surname", event.target.value)}
          label="นามสกุล"
          variant="outlined"
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <FormControl sx={{ m: 1, minWidth: 230 }}>
          <InputLabel id="gender">เพศ</InputLabel>
          <Select
            labelId="gender"
            id="demo-simple-select-helper"
            defaultValue={2}
            onChange={(event) => handleChange("gender", event.target.value)}
            label="Gender"
          >
            <MenuItem value={2}>ชาย</MenuItem>
            <MenuItem value={0}>หญิง</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            id="birthDate"
            onChange={(event) => handleChange("birthDate", event)}
            value={registerData.birthDate}
            label={"เดือน/วัน/ปีเกิด"}
            views={["month", "day", "year"]}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <TextField
          id="phoneNumber"
          onChange={(event) => handleChange("phoneNumber", event.target.value)}
          label="หมายเลขโทรศัพท์มือถือ"
          variant="outlined"
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <TextField
          id="email"
          onChange={(event) => handleChange("email", event.target.value)}
          label="อีเมล"
          variant="outlined"
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <TextField
          id="username"
          onChange={(event) => handleChange("username", event.target.value)}
          label="ชื่อผู้ใช้"
          variant="outlined"
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margintop: "10px" }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            รหัสผ่าน
          </InputLabel>
          <OutlinedInput
            id="password"
            onChange={(event) => handleChange("password", event.target.value)}
            type={showPassword ? "text" : "password"}
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margintop: "1px",
          marginBottom: "10px",
        }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirmpassword">
            ยืนยันรหัสผ่าน
          </InputLabel>
          <OutlinedInput
            id="confirmPassword"
            onChange={(event) =>
              handleChange("confirmPassword", event.target.value)
            }
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
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

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <Button
          onClick={onClickRegister}
          variant="contained"
          style={{ background: "#12A596" }}
        >
          ลงทะเบียนใช้งาน
        </Button>{" "}
      </div>
    </div>
  );
}
