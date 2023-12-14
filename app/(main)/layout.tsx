import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MainLayout =async ({children}:{children:React.ReactNode}) => {
    
    return ( 
        <div className="w-screen h-full">
            {/**Header */}
            <div className="flex items-center justify-center w-screen space-x-2 from-emerald-950 bg-gradient-to-r to-teal-500">
                <Image src={"/Sample_Pic.png"} alt={"Company Logo"} width={100} height={100} className="bg-transparent h-15 w-15 animate-spin "/>
                <p className="text-4xl italic font-bold bg-transparent ">Product Management System</p>
            </div>
            <div className="hidden md:flex  w-[72px]  flex-col fixed inset-y-0">
                <Button className="bg-red-400">Shadcn Button</Button>
            </div>
            <main className=" md:pl-[72px]">
                {children}
            </main>
        </div>
     );
}
 
export default MainLayout;