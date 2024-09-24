import React, { useState } from 'react';
import './logIn.css';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import videobg from '../../../assets/react-bg.mp4';
import logo from '../../../assets/Fin-map-2.png';

function LogIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess("Login Successful!");
                setError('');
                navigate('/Home');
            } else {
                setError(data.error || 'Something went wrong...!')
            }
        } catch (err) {
            setError("Error connecting to server");
        }
    };

    return (
        <>
            <div className='page-logo'>
                <img src={logo} alt='page-logo' />
            </div>
            <div className="overlay">
                <video src={videobg} autoPlay loop muted />
            </div>
            <div className='login-container'>

                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    {error && <p className="error">{error}</p>}
                    {success && <p className='success'>{success}</p>}
                    <div className='form-group'>
                        <label htmlFor="email"><i className='fas fa-envelope'></i>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"><i className='fas fa-lock'></i>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default LogIn;