import React from 'react';
import download from "../assets/download 1.png";
import Image4 from "../assets/IMAGE 4.png";
import Image from "../assets/IMAGE (2).png";

export default function CDK() {
        return (
                <div className='flex items-center my-4'>
                        <div className='text-center w-3/12 p-14'>
                                <img src={download} alt="" className='' />
                                <p>CDK</p>
                        </div>
                        <div className='w-5/12'>
                                <p className='p-3'><span className='font-medium'>CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                        26% Off
                                </span>
                                <p className='font-medium'>Main highlights</p>
                                <div className="bg-orange-100 rounded-md p-1">
                                        <p>
                                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-2">
                                                        9.9
                                                </span>building responsive
                                        </p>
                                        <p>
                                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-2">
                                                        8.9
                                                </span>Cool
                                        </p>
                                        <p>
                                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-2">
                                                        8.9
                                                </span>Docs
                                        </p>
                                </div>
                                <div className="">
                                        <p>Why we love it</p>
                                        <div className="flex">
                                                <img src={Image4} alt="" />
                                                Documentation
                                        </div>
                                        <div className="flex">
                                                <img src={Image4} alt="" />
                                                Easy Use
                                        </div>
                                        <div className="flex">
                                                <img src={Image4} alt="" />
                                                Out of box
                                        </div>

                                </div>
                                <button className='text-blue-800 m-4'>Show more</button>
                        </div>
                        <div className="w-4/12 text-center">
                                <div className="bg-blue-100 w-2/5 py-4 text-center m-auto my-5 rounded">
                                        <h2>9.1</h2>
                                        <p>Very Good</p>
                                        <img src={Image} alt="" className='ml-10' />
                                </div>
                                <button className='bg-blue-500 py-3 px-24 m-10 rounded-2xl text-white'>View</button>
                        </div>
                </div>
        )
}
