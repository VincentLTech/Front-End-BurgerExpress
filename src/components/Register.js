import React from "react";
import "../Register.css"; 

export default function Register() {
    return (
        <div>
        <form className="form">
            <div>
                <label>First Name: </label>
                <input type="text" name="first"></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="last"></input>
            </div>
            <div>
                <label>Phone: </label>
                <input type="text" name="phone"></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" name="Email"></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="last"></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="email"></input>
            </div>
            <div>
                <input className="submitBtn" type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
    )
}