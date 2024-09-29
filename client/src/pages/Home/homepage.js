import React from "react";
import "./homepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/Fin-map-2.png';

function HomePage() {
    return (
        <div className="wrapper">
            <div>

                <nav className="navbar-menu">
                    <img src={logo} alt="page-logo" />
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="fas fa-home"></i>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="./login" className="nav-link">
                                <i className="fas fa-sign-in-alt"></i>Log In</a>
                        </li>
                        <li className="nav-item">
                            <a href="./signup" className="nav-link">
                                <i className="fas fa-user-plus"></i>Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">
                                <i className="fas fa-info-circle"></i>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">
                                <i className="fas fa-envelope"></i>Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <div className="main">
                    <h2 className="dashboard">
                        <div>
                            <li><i className="fas fa-tachometer-alt"></i>Dashboard</li>
                            <li><i className="fas fa-wallet"></i>Budget</li>
                            <li><i className="fas fa-dollar-sign"></i>Income</li>
                            <li><i className="fas fa-money-bill-wave"></i>Expenses</li>
                        </div>
                    </h2>
                </div>
                <div className="display-container">
                    <div className="display-budget">
                        <h2>Budget</h2>
                        <p>Set your budget here</p>
                        <br></br>
                        <label htmlFor="text">Set your budget here</label>
                        <input
                            type="number"
                            name="Enter amount"
                            placeholder="$0.00"
                            min={0}
                            step={0.01}
                            required
                            onReset={clearInterval}
                        />
                        <div className="display-btn"><button type="submit">
                            Enter
                        </button></div>
                    </div>

                    <div className="display-income">
                        <h2>Income</h2>
                        <p>Enter your income here</p>
                    </div>
                    <div className="display-expenses">
                        <h2>Expenses</h2>
                        <p>Enter your expenses here</p>
                    </div>
                </div>
                <div>
                    <footer className="footer">&copy; 2021 Fin-Map</footer>
                </div>
            </div>
        </div>
    )
}

export default HomePage;