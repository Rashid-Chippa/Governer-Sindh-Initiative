import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className=' bg-gray-100 py-8 px-10 text-gary-800 flex justify-around'>
        <div className='mt-10 mb-10 container mx-auto grid grid-col-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-bold mb-4'>Core Courses</h3>
          <ul className='space-y-2 text-lg '>
            <Link href="#"><li className='py-2'>Programming Fundamentals</li></Link>
            <Link href="#"><li className='py-2'>Web2 Using NextJS</li></Link>
            <Link href="#"><li className='py-2'> Earn as You Learn</li></Link>
          </ul>
        </div>
        <div>
        <h3 className='text-xl font-bold mb-4'>Advance Courses</h3>
          <ul className='space-y-2 text-lg '>
          <Link href=""><li className='py-2'>Web 3 and Metaverse</li></Link>
          <Link href=""><li className='py-2'>Cloud-Native Computing</li></Link>
          <Link href=""><li className='py-2'>Artifical Intelligence(AI) and Deep Learning</li></Link>
          <Link href=""><li className='py-2'>Ambient Computing and IoT</li></Link>
          <Link href=""><li className='py-2'>Genomics and Bioinformatcs</li></Link>
          <Link href=""><li className='py-2'>Netwoek Programmability and Automation</li></Link>
          </ul>
        </div>
        <div>
        <h3 className='text-xl font-bold mb-4'>Social Links</h3>
         <div className='flex space-x-4 mb-4 py-2'>
          <Link href="#"><FaFacebookF className='text-white w-6 h-6 rounded-full bg-blue-700 pt-1 pb-1'/> </Link>
          <Link href="#">< FaYoutube className='text-white w-6 h-6 rounded-full bg-red-600 pt-1 pb-1'/></Link>
          <Link href="#">< FaTwitter className='text-white w-6 h-6 rounded-full bg-blue-400 pt-1 pb-1'/></Link>
          <Link href="#">< FaInstagram className="instagram text-white w-6 h-6 rounded-full  pt-1 pb-1"/></Link>
          <Link href="#"><FaTiktok className=" text-white w-6 h-6 rounded-full bg-black pt-1 pb-1"/></Link>
         </div>
         <Link href="mailto:education@governorsindh.com" target="_blank" className='text-blue-800 underline flex items-center gap-3'>
         <AiOutlineMail className='size-5'/>
          education@governorsindh.com</Link>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer