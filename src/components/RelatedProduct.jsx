import React from 'react';
import download from "../assets/download 1.png";

export default function RelatedProduct({ discount, title, price, maxPrice }) {
        return (
                <div className='w-1/3 m-4 p-8'>
                        <img src={download} alt="" className='w-full p-10' />
                        <div className="flex">
                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-2">
                                        {discount}
                                </span>

                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-2">
                                        Limited time
                                </span>
                        </div>
                        <p className='font-medium text-center'>Webbuilder 1</p>
                        <h3 className='m-1'>{title}</h3>
                        <div className="flex m-1 text-start">
                                <p className='text-lg m-1'>{price}</p>
                                <p className='m-1 text-xs font-medium'>{maxPrice}</p>
                                <p className='m-1 text-xs text-red-800 font-medium'>{discount}</p>
                        </div>
                        <button className='bg-blue-500 w-full py-3 px-10 rounded-2xl text-white'>View Deal</button>
                </div>
        )
}
