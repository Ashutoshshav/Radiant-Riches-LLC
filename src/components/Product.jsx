import React from 'react';
import download from "../assets/download 1.png"

export default function Product({ imageTitle, firstHeading, firstPara, secondHeading, secondPara, ratingNumber, ratingTitle, ratingImage }) {
  return (
    <div className='flex items-center my-4'>
      <div className='text-center w-3/12 p-14'>
        <img src={download} alt="" className='' />
        <p>{imageTitle}</p>
      </div>
      <div className='w-5/12'>
        <p className='p-3'><span className='font-medium'>{firstHeading}</span>{firstPara}</p>
        <p className='p-3'><span className='font-medium'>{secondHeading}</span>{secondPara}</p>
        <button className='text-blue-800 m-4'>Show more</button>
      </div>
      <div className="w-4/12 text-center">
        <div className="bg-blue-100 w-2/5 py-4 text-center m-auto my-5 rounded">
          <h2>{ratingNumber}</h2>
          <p>{ratingTitle}</p>
          <img src={ratingImage} alt="" className='ml-10' />
        </div>
        <button className='bg-blue-500 py-3 px-24 m-10 rounded-2xl text-white'>View</button>
      </div>
    </div>
  )
}
