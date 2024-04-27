import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <header style={HeaderStyle}>
            <div className="container">
                <h1 className="main-title">Welcome to Pokedex</h1>
                <p className="main-para">Join us now and don't waste time</p>
                <div className="buttons">
                    <Link to="/login">
                        <button className="primary-button">Log In</button>
                    </Link>
                    <Link to="/register">
                        <button className="primary-button" id="reg_btn">Register</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

const HeaderStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    color: '#fff',
    textAlign: 'center',
    padding: '4rem 0',
};

export default LandingPage;
