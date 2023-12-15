"use client"
import Image from "next/image";

const Header = () => {
    return ( 
        <div className="fixed top-0 flex items-center justify-center w-full space-x-2 text-center from-emerald-950 bg-gradient-to-r to-teal-500 ">
        <Image src={"/Sample_Pic.png"} alt={"Company Logo"} width={100} height={100} quality={100} className="bg-transparent h-15 w-15 animate-spin "/>
        <p className="italic font-bold bg-transparent lg:text-4xl md:text-2xl sm:lg">Product Management System</p>
    </div>
     );
}
 
export default Header;