"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
    return ( 
    <div className='fixed bottom-0 flex flex-col items-center flex-1 w-full justify-evenly to-green-300 bg-gradient-to-t from-teal-950'>  
      <div className='py-4 text-2xl'><img src="./next.svg" alt="logo" className='w-20 '/></div>
      <div className='flex gap-4 pt-2 justify-evenly'>
          <Link className='hover:underline hover:text-yellow-700' href={'/about'}>About</Link>
          <Link className='hover:underline hover:text-yellow-700' href={'/privacy_policy'}>Privacy Policy</Link>
          <Link className='hover:underline hover:text-yellow-700'href={'/licensing'}>Licensing</Link>
          <Link className='hover:underline hover:text-yellow-700' href={'/contacts'}>Contact</Link>
      </div>
      {/*<hr className="w-8/12 h-1 mt-6 border-0 bg-slate-900"></hr>*/}
      <Separator className=" bg-zinc-300 dark:bg-zinc-700"></Separator>
      <p>&copy; 2023 Shium&trade;. All right Reseseved.</p>
      <div className='flex space-x-2 justify-evenly'><Button className='hover:text-blue-700'>Facebook</Button><Button className='hover:text-blue-700'>LinkedIn</Button><Button className='hover:text-red-700'>Email</Button></div>
    </div>
     );
}
 
export default Footer;