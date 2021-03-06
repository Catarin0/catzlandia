import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useHistory} from "react-router";
import {FC} from "react";
import {useAlert} from "react-alert";
import './HomePage.css'
import Video from "../../videos/video.mp4"
import VideoBg from "reactjs-videobg";

const HomePage: FC = () => {


    const [user, setUser] = useState("");

    const [psw, setPsw] = useState("");

    const history = useHistory();

    const alert = useAlert();

    const routeChange = () => {
        let path = "/dash";
        history.push(path);
    }

    const handleLogin = () => {
        if (psw === "admin" && user === "admin") {
            routeChange()
            alert.success("Login successfully!")
        } else {
            alert.error("Verify username and password!")
        }
    }

    const handleUser = (e) => {
        setUser(
            e.target.value
        );
    }
    const handlePsw = (e) => {
        setPsw(
            e.target.value
        );
    }

    return (
        <div className="homepage">
            <VideoBg>
                <VideoBg.Source src={Video} type="video/mp4" />
            </VideoBg>
            <h1>Catzlandia</h1>
            <div>
                <TextField
                    id="outlined-name"
                    label="Username"
                    value={user}
                    onChange={handleUser}
                />
            </div>
            <div>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="Password"
                    autoComplete="current-password"
                    value={psw}
                    onChange={handlePsw}
                />
            </div>
            <div className="spaceButtonLogin">
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default HomePage;
