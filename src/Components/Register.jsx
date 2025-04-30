import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const { userSignUp } = use(AuthContext)
    const navigate = useNavigate()

    const [error , setError] = useState('')
    const [success , setSuccess] = useState(false)
    const handleSignUp = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;

        setError('')
        setSuccess(false)

        userSignUp(email,password).then(() => {
            setSuccess(true)
            navigate('/')
        })
        
        .catch(err => {
            setError(err.message)
        })
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center py-3">Register now!</h1>
                    <p className={`${success ? 'text-green-500':'text-red-500'} px-4`}>{success ? 'Your Registration Completed Successfully':error}</p>
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="taxt" className="input" placeholder="Name" />

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input name='pass' type="password" className="input" placeholder="Password" />
                            <div>All ready Have an Account -<Link to='/' className='text-blue-500'> Login</Link></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;