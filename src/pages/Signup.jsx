import { useState } from "react";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signup = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/login");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }     
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return(
        <div className = "w-full h-screen">
            <div className = "h-full w-full flex justify-center items-center">
                <form className = "text-center pt-3 pb-3">
                    { "" !== notice &&
                        <div className = "text-red" role = "alert">
                            { notice }    
                        </div>
                    }
                    <div className = "form-floating mb-3">
                        <label htmlFor = "signupEmail" className = "form-label">Enter an email address for your username</label><br></br>
                        <input id = "signupEmail" type = "email" className = "form-control" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                    </div>
                    <div className = "form-floating mb-3">
                        <label htmlFor = "signupPassword" className = "form-label">Password</label><br></br>
                        <input id = "signupPassword" type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                    </div>
                    <div className = "form-floating mb-3">
                        <label htmlFor = "confirmPassword" className = "form-label">Confirm Password</label><br></br>
                        <input id = "confirmPassword" type = "password" className = "form-control" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                    </div>                    
                    <div className = "d-grid">
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => signup(e)}>Signup</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span>Go back to login? <Link to = "/login">Click here.</Link></span>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Signup;