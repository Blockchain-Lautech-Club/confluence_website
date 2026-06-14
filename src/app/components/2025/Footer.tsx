import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-black px-20 max-sm:px-5 py-[5%] mt-[5%]' >
        <div className="flex items-center justify-between flex-col lg:flex-row gap-5">
            <div className="flex flex-col lg:items-start items-center">
                <div className="logo flex gap-2 items-center mb-2">
                    <Image 
                        src='/con-img (1).jpg'
                        width={32}
                        height={32}
                        className='h-10 w-10 rounded-full'
                        alt='logo'
                    />
                     <span className="self-center text-2xl font-semibold whitespace-nowrap text-white uppercase">
                        Confluence 2025
                    </span>
                </div>

                <p className='text-white'>Ogbomoso, Nigeria</p>
            </div>

            <div className="flex gap-5">
                <span className='text-white py-2'>Contact Us</span>
                
                <a href="mailto:blockchainlautech@gmail.com">
                    <div className="p-2 cursor-pointer bg-white rounded-lg w-10 h-10 text-xl flex justify-center items-center">
                        <i className="bi bi-envelope"></i>
                    </div>
                </a>
                <a href="https://x.com/ConfluenceEvent/">
                    <div className='p-2 cursor-pointer bg-white rounded-lg w-10 h-10 text-xl flex justify-center items-center'>
                    <i className="bi bi-twitter-x"></i>
                    </div>
                </a>
                <a href="https://t.me/BlockchainLautech/24">
                    <div className='p-2 cursor-pointer bg-white rounded-lg w-10 h-10 text-xl flex justify-center items-center'>
                    <i className="bi bi-telegram"></i>
                    </div>
                </a>
                <a href="https://chat.whatsapp.com/BvmEcyxnRsKAI64ht8LQls">
                    <div className='p-2 cursor-pointer bg-white rounded-lg w-10 h-10 text-xl flex justify-center items-center'>
                    <i className="bi bi-whatsapp"></i>
                    </div>
                </a>
            </div>
            
            {/* <div className="flex text-white gap-5 text-center lg:text-start">
                <p className='cursor-pointer text-xs'>Privacy Policy</p>
                <p className='cursor-pointer text-xs'>Terms of Service</p>
                <p className='cursor-pointer text-xs'>Code of Conduct</p>
            </div> */}
        </div>

        <hr className='text-white my-7' />

        <div className="flex justify-center items-center min-h-[35px]">
            <div className="text-white text-sm text-center">
                <p>© 2025 Blockchain Lautech. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer