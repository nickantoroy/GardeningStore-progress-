import { useState } from "react";
import './Login-Register.css'
import {useNavigate} from 'react-router-dom';

export const Login = (prop) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "vishal@gmail.com" && pass === "sivalovesyou") {
            alert("Successful");
            navigate("/");
        } else {
            alert("Entry denied");
        }
    }

    return (
        <div className="auth-form-container smooth-zoom">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email :</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password :</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password" />
                <button className='submit-btn' type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => prop.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}