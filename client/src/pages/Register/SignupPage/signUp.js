import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css';
import videobg from '../../../assets/react-bg.mp4';
import logo from '../../../assets/Fin-map-2.png';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert('User Register Successfully!');
                navigate('/login');
            } else {
                setError(data.error || 'Something went wrong. PLease try again.')
            }
        } catch (err) {
            setError('Failed to connect to server. Please try again later...');
        } finally {
            setLoading(false);
        }
    };
    // const navigateToAboutUs = () => {
    //     window.location.href = '/about';
    // };

    return (
        <>
            <div className='page-logo'>
                <img src={logo} alt='page-logo' />
            </div>
            <div className="overlay">
                <video src={videobg} autoPlay loop muted />
            </div>
            <div className='signup-container'>

                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    {error && <p className='error'>{error}</p>}
                    <div className='form-group'>
                        <label htmlFor="name">First Name</label>
                        <input
                            type="text"
                            placeholder='First Name'
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Last Name</label>
                        <input
                            type="text"
                            placeholder='Last Name'
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='eg.finmap@gmail.com'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            placeholder='Password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="confirmPassword"></label>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <p className='login-link'>Already have an account? <a href='./logIn' _blank="true" rel="noopener noreferrer">Log In</a></p>
                </form>
            </div>
            <nav className='about-btn'>
                <button onClick={() => navigate('/about')}>About Us</button>
            </nav>
        </>
    );
}

export default SignUp;