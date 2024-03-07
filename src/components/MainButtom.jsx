import React from 'react'

export default function MainButtom() {
        return (
                <div className='flex py-5 my-5'>
                        <h2 className='text-4xl w-1/2'>Sign up and get exclusive special deals</h2>
                        <div className="w-1/2 ml-4">
                                <input type="text" className="w-30 p-3 rounded-l-xl border w-4/6" />
                                <button className='bg-blue-500 p-3 px-4 text-white rounded-r-xl border-sky-500'>Sign Up</button>
                        </div>
                </div>
        )
}
