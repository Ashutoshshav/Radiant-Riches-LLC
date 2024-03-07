import React from 'react';
import Vector from "../assets/Vector.png";
import Image from "../assets/IMAGE.png"

export default function Header() {
        return (
                <div>
                        <h1 className='text-5xl my-4 mt-10'>Best Website builders in US</h1>
                        <hr />
                        <div className="container flex items-center p-2 justify-between">
                                <div className="flex text-sm">
                                        <div className="container-first flex items-center mx-5">
                                                <img src={Vector} alt="Vector" className='mx-1' />
                                                <p>Last Updates - February 22, 2020</p>
                                        </div>
                                        <div className="container-second flex items-center mx-4">
                                                <img src={Image} alt="Vector" className='mx-1' />
                                                <p>Advertising</p>
                                        </div>
                                </div>
                                <label htmlFor="select" className='mx-2'>Top Relevent
                                        <select name="" id="select" className='mx-2'>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                        </select>
                                </label>
                        </div>
                        <hr />
                        <div className="flex p-5">
                                <a href="" className='mx-8 text-sm'>Tools</a>
                                <a href="" className='mx-8 text-sm'>AWS Builder</a>
                                <a href="" className='mx-8 text-sm'>Start Build</a>
                                <a href="" className='mx-8 text-sm'>Tools</a>
                                <a href="" className='mx-8 text-sm'>Blue Hosting</a>
                                <a href="" className='mx-8 text-sm'>Build Suppiler</a>
                        </div>
                        <hr />
                        <div className="flex py-5">
                                <a href="" className='mx-8 text-sm'>Home</a>
                                <a href="" className='mx-8 text-sm'>Hosting for all</a>
                                <a href="" className='mx-8 text-sm'>Hosting</a>
                                <a href="" className='mx-8 text-sm'>Hosting6</a>
                                <a href="" className='mx-8 text-sm'>Hosting5</a>
                        </div>
                </div>
        )
}
