import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Form = props =>{
    const[firstName, setFirstName] =useState("");
    const[firstNameError, setFirstNameError] =useState("");
    const[lastName, setLastName]=useState("");
    const[lastNameError, setLastNameError] =useState("");
    const[email, setEmail] =useState("");
    const[emailError, setEmailError] =useState("");
    const[password, setPassword] =useState("");
    const[passwordError, setPasswordError] =useState("");
    const[confirmPassword, setConfirmPassword] =useState("");
    const[confirmPasswordError, setConfirmPasswordError] =useState("");

    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length === 1){
            setFirstNameError('First Name should be longer than two characters');
        }
        else{
            setFirstNameError('');
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length === 1){
            setLastNameError('Last Name should be longer than two characters');
        }
        else{
            setLastNameError('');
        }
    }
        const handleEmail = (e) => {
            setEmail(e.target.value);
            if (e.target.value.length > 0 && e.target.value.length < 3){
                setEmailError('Email must be Longer');
            }
            else{
                setEmailError('');
            }
        }
    const handlePassword =(e) => {
        setPassword(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 6){
            setPasswordError('Password should be at least 6 characters');
        }
        else {
            setPasswordError('');
        }
    } 
    const handleConfirmPassword = (e) => {
        setConfirmPassword (e.target.value);
        if (e.target.value.length > 0 && e.target.value !== password){
            setConfirmPasswordError('password should be the same');
        }
        else {
            setConfirmPasswordError('');
        }
    }      
    
    return(
        <form onSubmit={ (e) => e.preventDefault()}>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input onChange={handleFirstName} type="text" id='firstName' name='firstName' value={firstName}/>
            </div>
            {
                firstNameError ?
                <p style={{color: 'orange'}}>{firstNameError}</p>:
            ''
            }
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input onChange={handleLastName} type="text" id='lastName' name='lastName' value={lastName}/>
            </div>
            {
                lastNameError ?
                <p style={{color: 'orange'}}>{lastNameError}</p>:
            ''
            }
            <div>
                <label htmlFor='email'>Email</label>
                <input onChange={handleEmail} type="email" id='email' name='email' value={email}/>
            </div>
            {
                emailError ?
                <p style={{color: 'orange'}}>{emailError}</p>:
            ''
            }
            <div>
                <label htmlFor='password'>Password</label>
                <input onChange={handlePassword} type="password" id='password' name='passowrd' value={password}/>
            </div>
            {
                passwordError ?
                <p style={{color: 'orange'}}>{passwordError}</p>:
            ''
            }
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input onChange={handleConfirmPassword} type="password" id='confirmPassword' name='confirmPassowrd' value={confirmPassword}/>
            </div>
            {
                confirmPasswordError ?
                <p style={{color: 'orange'}}>{confirmPasswordError}</p>:
            ''
            }
            <div>
                <h2 style={{textAlign: 'center'}}> Form</h2>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password:{password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>

        </form>
    )

}

export default Form;