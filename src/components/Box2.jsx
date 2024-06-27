import React from 'react'
import fbLogo from '../../src/assets/fbLogo.png'
import insLogo from '../../src/assets/insLogo.png'
import twLogo from '../../src/assets/twLogo.png'
import youLogo from '../../src/assets/youLogo.png'

export const Box2 = () => {
  return (
    <div className="container-fluid last-section text-xs">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <p className='my-4 text-start'>For business communication, vendors,etc.(excluding charitable donations).,contact our administrative office address;</p>
                   <div className='font-bold '>
                   <p> Institute For Food & Development Policy <br /> ( Food Fierst) <br /> 490 43 Street #1032 <br /> oakland,CA 94609</p>
                   </div>
                </div>
                <div className="col-md-3">
                    <p className='my-4 text-start'> For donation,please send to our Institute For Food & Development Policy Gift procession office </p>
                   <div className='font-bold'>
                   <p> Institute For Food & Development Policy <br />( Food First) <br /> 465 N. Halstead St <br /> Suite 160 <br /> Lockbox:913469 <br /> Pasadena,CA 91107-9905</p>
                   </div>
                </div>
                <div className="col-md-3">
                    <h1 className='font-bold my-4'>Get In Touch</h1>
                    <p className='text-start '> For donations, Please contact <span className='text-black font-bold'> development@foodfirst.org.</span> For all other non donation inquiries, please send inquiries to <span className='text-black font-bold'> info@foodfirst.org.</span></p>
                    <p className='text-black font-bold my-4'>1-240-271-8685</p>
                </div>
                <div className="col-md-3">
                    
                    <div className="container flex-col w-12">
                        <h1 className='my-4 font-bold'>Social</h1>
                        <div className='my-2 flex text-black'> <img src={fbLogo} alt="facebook logo" /><p className='px-1'>Facebook</p></div>
                        <div className='my-2 flex text-black'><img src={insLogo} alt="instagram logo" /> <p className='px-1'>Instagram(X)</p></div>
                        <div className='my-2 flex text-black'><img src={twLogo} alt="twitter logo" /> <p className='px-1'>Twitter</p></div>
                        <div className='my-2 flex text-black'><img src={youLogo} alt="youtube logo" /> <p className='px-1'>Youtube</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
