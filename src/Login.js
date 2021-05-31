import React,{useState} from 'react';
import './Login.css';
import {auth} from './firebase';
import {Link,useHistory} from "react-router-dom";


function Login() {
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn = e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))


    }

    const signUp = e=>{
        e.preventDefault(); 
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    return (
    <div className="login__body">

    
        <div class="login__container">
            <div >
                <img class="login__logo" src="/login_logo.png"></img>
            </div>
            <div class="login__title">DUCKS</div>
            <div class="login__input">
                <label className="login__label">EMAIL</label>
                <input className="login__details" type="email" placeholder="example@test.com" value={email} onChange={e=>setEmail(e.target.value)} />
                <label className="login__label">PASSWORD</label>
                <input className="login__details" type="password" placeholder="Min 6 charaters long" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="login__button" type="submit" onClick={signIn}>SIGN IN</button>
                <button className="login__button" type="submit" onClick={signUp}>SIGN UP</button>
            </div>
            
        </div>
    </div>
        
    )
}

export default Login
