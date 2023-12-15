import { Menu, Search } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ModeToggle } from "../menu-toggle";

const NavigationMenubar = async() => {
    return ( 
        <div className="fixed w-full overflow-x-scroll text-center text-white lg:overflow-x-hidden md:overflow-x-auto top-20 bg-emerald-950 dark:bg-emerald-300 dark:text-black">
            
            <div className="flex flex-1 ">
                <div className="flex w-10 h-10 mx-4 text-white justify-items-center">
                    <Menu className="mt-1"/>
                </div>
                {/**Searchbar */}
                <div className="flex m-0.5 bg-white rounded-lg p-0.5 items-center dark:bg-slate-600 w-6/12 lg:justify-between">
                    <p className="p-1 lg:justify-start dark:text-slate-900 text-slate-600">Search...</p>
                    <Search className="lg:justify-end dark:text-slate-900 text-slate-600"/>
                </div>

                <Button variant="ghost">Categories</Button>
                <Button variant="ghost">Products</Button>
                <Button variant="ghost">Cart</Button>
                <Button variant="ghost">Special Offer</Button>
                <Button variant="ghost">Help & Support</Button>
                <Button variant="ghost">Sign-in</Button>
                <Button variant="ghost">Log-in</Button>
                
                <ModeToggle/>
            </div>
            
        </div>
    
     );
}
 
export default NavigationMenubar;