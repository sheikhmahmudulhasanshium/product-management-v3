import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {NavigationMenubar} from "@/components/navigation/navigation-menubar";
import React from "react";

const MainLayout =async ({children}:{children:React.ReactNode}) => {
    
    return ( 
        <div className="flex flex-col flex-1 w-fixed h-max">
        {/**Header */}
            <Header/>
            <NavigationMenubar/>

            <main className="" suppressHydrationWarning>
                {children}
            </main>
            {/**Footer */}
            <Footer/>
        </div>
     );
}
 
export default MainLayout;