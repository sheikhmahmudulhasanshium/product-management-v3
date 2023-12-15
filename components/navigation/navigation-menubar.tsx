import { Menu, Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ModeToggle } from "../menu-toggle";
import NavigationCategories from "./navigation-categories";

const NavigationMenubar = async() => {
    return (
    <ScrollArea className="fixed flex w-full p-4 m-1 border rounded-md dark:bg-emerald-300 dark:text-black top-20">     

            <div className="flex md:justify-around sm:justify-center">
                <div className="flex w-10 h-10 mr-4 text-white justify-items-center">
                    <Menu className="text-black dark:text-white"/>
                </div>
                {/**Searchbar */}
                <div className="flex m-0.5 bg-white rounded-lg p-0.5 items-center dark:bg-slate-600 w-6/12 lg:justify-between">
                    <p className="p-1 lg:justify-start dark:text-slate-900 text-slate-600">Search...</p>
                    <Search className="lg:justify-end dark:text-slate-900 text-slate-600"/>
                </div>
                <div className="flex justify-between w-auto">
                    <Button variant="ghost">Categories</Button>
                    <Button variant="ghost">Products</Button>
                    <Button variant="ghost">Cart</Button>
                    <Button variant="ghost">Special Offer</Button>
                    <Button variant="ghost">Help & Support</Button>
                    <Button variant="ghost">Sign-in</Button>
                    <Button variant="ghost">Log-in</Button>

                    <ModeToggle />
                </div>
                
            </div>
            <ScrollBar orientation="horizontal" />

    </ScrollArea>
     );
}
 
export default NavigationMenubar;