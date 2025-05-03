import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const { userSignIn,userWithGoogleSignIn } = use(AuthContext)


    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.pass.value

        setError('')
        setSuccess(false)
        userSignIn(email, password).then(() => {
            setSuccess(true)
            navigate(location?.state || '/')
        }).catch(err => {
            setError(err.message)
        })
    }

    const handleGoogleSignIn =()=>{
        userWithGoogleSignIn().then(()=>{
            navigate(location?.state || '/')
        }).catch(err => {
            setError(err.message)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center py-3">Login now!</h1>
                    <div className="card-body">
                        <p className={`${success ? 'text-green-500' : 'text-red-500'} px-4`}>{success ? 'Your are Successfully Loged In' : error}</p>
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='pass' type="password" className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p className='tracking-wide'>New on This Site --<Link to='signUp' className='text-blue-600 decoration-solid'> Sign Up</Link></p>

                            <button className="btn btn-neutral mt-4">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-4">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Sign Up with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;