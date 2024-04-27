import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div style={containerStyle} className="text-center m-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form style={formStyle} action="/login">
                <div style={inputGroupStyle} className="mb-3">
                    <label htmlFor="username">Username</label><br />
                    <input style={inputStyle} type="text" name="username" required />
                </div>
                <div style={inputGroupStyle} className="mb-3">
                    <label htmlFor="email">Email address</label><br />
                    <input style={inputStyle} type="email" name="email" required />
                </div>
                <div style={inputGroupStyle} className="mb-3">
                    <label htmlFor="password">Password</label><br />
                    <input style={inputStyle} type="password" name="password" required />
                </div>
                <div className="mb-3">
                    <input type="checkbox" name="checkbox" id="checkbox" required />
                    <label htmlFor="checkbox">I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a>.</label>
                </div>
                <button style={submitButtonStyle} id="sub_btn" type="submit">Register</button>
            </form>
            <footer style={footerStyle}>
                <p><Link to="/landingpage">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
};

const containerStyle = {
    maxWidth: '400px',
    margin: '5rem auto',
};

const formStyle = {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const inputGroupStyle = {
    marginBottom: '1.5rem',
};

const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const submitButtonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const footerStyle = {
    marginTop: '1.5rem',
};

export default SignUpPage;
