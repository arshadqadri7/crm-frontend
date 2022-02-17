import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const signup = () => {
    return (
        <>
            <Head>
                <title>signup</title>
            </Head>
            <div className='login'>
                <div className='center'>
                    <h1>Create an account</h1>
                    <div className='login-with'>
                        <div className='google-with'>
                            <button><Image src={"/assets/img/google.png"} width={"19px"} height={"19px"} alt="google" /> <span className='ms-2'> Login with Google</span> </button>
                        </div>
                        <div className='google-with'>
                            <button> <Image src={"/assets/img/facebook.png"} width={"19px"} height={"19px"} alt="facebook" /> <span className='ms-2'> Login with Facebook</span> </button>
                        </div>
                    </div>
                    <div className='login-form'>
                        <label htmlFor="">Email Address</label>
                        <input type="email" placeholder='Enter your Email' />
                    </div>
                    <div className='login-form'>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='Enter your Name' />
                    </div>
                    <div className='login-form'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter your password' />
                        <div className='show-password'>
                            <Image src={"/assets/img/hide-password.png"} width={"24px"} height={"24px"} alt='password' />
                        </div>
                    </div>
                    <div className='login-button'>
                        <button>Sign Up</button>
                        <p>Already have an account ? <Link href={"/login"}><a> Sign in </a></Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default signup;
