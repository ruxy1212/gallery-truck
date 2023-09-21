import { useState } from "react";
import { auth } from "../data/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            toast.success(`Welcome ${email}`, {
                toastId: 'error1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/gallery");
        } catch(error) {
            setLoading(false);
            if (error.code === 'auth/invalid-login-credentials') {
                toast.error('Incorrect credentials. Please check and try again!', {
                  toastId: 'error1',
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else if (error.code === 'auth/network-request-failed') {
                toast.error('Network error. Please check your internet connection and try again!', {
                  toastId: 'error2',
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
            } else {
                toast.error('An error occurred during login. Please try again later!', {
                  toastId: 'error3',
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
            }
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <h2 className="text-center text-blue-500 font-bold text-xl p-4">Log In</h2>
                <form className = "bg-blue-500 rounded-md shadow-md p-6 w-[500px] max-w-[80%] mx-auto">   
                    <div className = "mb-4 mt-3 flex gap-6 ">
                    <label htmlFor = "exampleInputEmail1" className = "text-white">Email address</label>
                        <input type = "email" className = "p-2 flex-grow outline outline-offset-2 outline-blue-500 rounded-md" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>   
                    </div>
                    <div className = "mb-4 flex gap-6">
                        <label htmlFor = "exampleInputPassword1" className = "text-white">Password</label>
                        <input type = "password" className = "p-2 flex-grow outline outline-offset-2 outline-blue-500 rounded-md" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>    
                    </div>
                    <div className="text-center mb-4">
                        <button type="submit" className="text-white font-bold ring-2 ring-white px-4 py-2 w-[100px] hover:text-blue-500 hover:bg-white rounded-md" onClick = {(e) => login(e)}>
                            { loading &&
                                <span><svg className="animate-spin w-[18px] text-center mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></span>
                            }
                            {
                                !loading &&
                                <span>Submit</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;