import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInBody.css';
import { SIGN_IN_BODY_TEXT } from "../../constants/components"
import Button from '../../global/Button/Button';
import { auth } from "../../firebase"


function SignInBody({ setIsUserLoggedIn }) {

    const navigate = useNavigate()


    const [showSignInBox, setshowSignInBox] = useState(true);

    function setSignInPageAs(param) {
        setshowSignInBox(param)
    }

    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [nameFieldEmpty, setNameFieldEmpty]=useState(false)


    function signUp() {

        if(name==="" || email==="" || password===""){
            setNameFieldEmpty(true)
            //alert("Name, email or password empty!!")
            return;
        }

        setNameFieldEmpty(false)

        console.log("name ", name)
        console.log("email ", email)
        console.log("password ", password)

        auth.createUserWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data)
                setIsUserLoggedIn(true)
                navigate("/")
            }).catch(err => console.log(err))


    }

    function signIn(){

        if(email==="" || password===""){
            alert("email or password empty!!")
            return;
        }

        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("Successfully logged in!")
            setIsUserLoggedIn(true)
            navigate("/")
        })
        .catch(err=>console.log(err))

    }


    return (
        <>
            {showSignInBox ? (
                //sign in box
                <div className='signinbody_container'>
                    <div className='signinbody_form'>
                        <p className='signinbody_title'>{SIGN_IN_BODY_TEXT.SIGN_IN}</p>
                        <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} value={email} onChange={event => setEmail(event.target.value)} />
                        <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" value={password} onChange={event => setPassword(event.target.value)} />
                        <Button button_name={SIGN_IN_BODY_TEXT.SIGN_IN} onClicking={signIn}/>
                        <Button button_name={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
                        <p className='signinbody_text'>New to website? <span onClick={() => (setSignInPageAs(false))}>{SIGN_IN_BODY_TEXT.SIGN_UP_NOW}</span></p>
                    </div>
                </div>) : (
                //sign up box
                <div className='signinbody_container'>
                    <div className='signinbody_form'>
                        <p className='signinbody_title'>Sign Up</p>
                        <input placeholder='Name' value={name} onChange={event => setName(event.target.value)} />
                        {nameFieldEmpty && <p>Name cannot be empty</p>}
                        <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} value={email} onChange={event => setEmail(event.target.value)} />
                        <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" value={password} onChange={event => setPassword(event.target.value)} />
                        <Button onClicking={signUp} button_name={SIGN_IN_BODY_TEXT.SIGN_UP} />
                        <Button button_name={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
                        <p className='signinbody_text'>Already a member? <span onClick={() => (setSignInPageAs(true))}>Sign In</span></p>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default SignInBody;