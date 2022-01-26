import React from "react";
import "../Login.css"; 

export default function Login() {
    return (
        <div>
        <form className="form">
            <div>
                <label>Email: </label>
                <input type="text" name="Email"></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="Password"></input>
            </div>
            <div>
                <input className="submitBtn" type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
    )
}