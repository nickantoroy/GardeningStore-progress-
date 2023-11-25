import { useState } from "react";
import './login-register.css'
import {useNavigate} from 'react-router-dom';
export const Register = (prop) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email && !pass && !name)
        {
            alert("Please fill the information!!");
        }
        else{
            alert("Successful");
            navigate("/");
        }
    }

    return (
        <div className="auth-form-container smooth-zoom">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name :</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" />
            <label htmlFor="email">Email :</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email" />
            <label htmlFor="password">Password :</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password  " id="password" name="password" />
            <button className='submit-btn'type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => prop.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}