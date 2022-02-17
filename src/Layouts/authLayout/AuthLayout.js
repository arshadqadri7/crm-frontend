import React from 'react';
import Image from "next/image";

const AuthLayout = ({ children }) => {
    return (
        <>
            <div>
                <div className='authlayout'>
                    <div className='left' >{children}</div>
                    <div className='right'>
                        <div>
                            <Image src={"/assets/img/login-right-big.png"} width={"460px"} height={"144px"} alt="login" />
                        </div>
                        <div className='small-img'>
                            <Image src={"/assets/img/login-right-small.png"} width={"384px"} height={"17px"} alt="login" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
