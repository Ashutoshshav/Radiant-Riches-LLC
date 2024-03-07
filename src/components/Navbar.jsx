import React from 'react'

export default function navbar() {
        return (
                <div>
                        <nav className="bg-gray-800 p-3 flex">
                                <div className="container mx-auto flex items-center justify-center">
                                        <div className="mx-4">
                                                <i class="fa-solid fa-magnifying-glass"><input
                                                        type="text"
                                                        placeholder="Search..."
                                                        className="w-30 p-2 rounded-md"
                                                /></i>
                                        </div>
                                        <div className="flex space-x-4">
                                                <a href="" className="text-white">Categories</a>
                                                <a href="" className="text-white">Website Builders</a>
                                                <a href="" className="text-white">Today's Deals</a>
                                        </div>
                                </div>
                        </nav>
                </div>
        )
}
