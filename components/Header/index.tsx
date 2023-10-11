"use client";
import Image from 'next/image'
import React from 'react'
import user from "../../public/Images/user.png"
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdArrowCircleRight } from "react-icons/md";
import { useSession, signIn, signOut } from 'next-auth/react';
const Header = () => {
    const { data, status } = useSession();
    return (
        <div className='flex justify-between p-4
        border-b-[2px] border-blue-500'>
            <img src='./Images/logo.png'
                className='w-[150px]' />
            <div className='flex gap-5'>
                <button className='px-3 p-2 bg-black text-white rounded-full'>
                    <span className='hidden sm:block'>Add Project</span>
                    <HiOutlinePencilSquare className="sm:hidden" />
                </button>
                {status === "authenticated" ? <button className='px-3 p-2 bg-gray-100  text-Black rounded-full' onClick={() => signOut()}>
                    <span className='hidden sm:block'>Log Out</span>
                    <MdArrowCircleRight className="sm:hidden" />
                </button>
                    : <button className='px-3 p-2 bg-gray-100  text-Black rounded-full' onClick={() => signIn("google")}>
                        <span className='hidden sm:block'>Sign In</span>
                        <MdArrowCircleRight className="sm:hidden" />
                    </button>}
                <Image className='rounded-full' src={data?.user?.image ?? user} width={40} height={40} alt='user' />
            </div>
        </div>
    )
}

export default Header