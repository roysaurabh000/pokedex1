import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
    return (
        <div style={containerStyle} className="text-center m-auto">
            <h2>Sign in</h2>
            <form style={formStyle} action="/">
                <div style={inputGroupStyle} className="mb-3">
                    <label htmlFor="username">Username or Email Address</label><br />
                    <input style={inputStyle} type="text" name="username" required />
                </div>
                <div style={inputGroupStyle} className="mb-3">
                    <label htmlFor="password">Password</label>
                    <Link to="/forget-password" className="right-label">Forgot password?</Link><br />
                    <input style={inputStyle} type="password" name="password" required />
                </div>
                <button style={submitButtonStyle} id="sub_btn" type="submit">Login</button>
            </form>
            <footer style={footerStyle}>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
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

export default SignInPage;
