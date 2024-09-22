"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    <div className="gap-5 flex  bg-black items-center justify-between text-white h-auto w-full p-2 md:p-8">
    <h1 className="text-lg md:text-3xl   font-semibold hover:text-orange-400 cursor-pointer ">
      My Website
    </h1>
    <div className="flex text-sm md:text-lg items-center justify-end gap-2 md:gap-10">
      <Link href="/" className="hover:text-orange-400">
        Home
      </Link>
      <Link href="/about" className="hover:text-orange-400">
        About
      </Link>
      <Link href="/contact" className="hover:text-orange-400">
        Contact
      </Link>
      <Link href="/services" className="hover:text-orange-400">
        Services
      </Link>
    </div>
    </div>
  
  )
}

export default Navbar