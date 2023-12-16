"use client"
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Cart from "./navigation-cart";
import { ModeToggle } from "./mode-toggle";
import NavigationCategories from "./navigation-categories";
import NavigationHelpAndSupport from "./navigation-help&support";
import Searchbar from "./navigation-searchbar";
import SpecialOffer from "./navigation-special-offer";
import NavigationSignin from "./navigation-sign-in";
import NavigationLogin from "./navigation-log-in";



export const NavigationMenubar=() => {
    return (
<div className="fixed w-full rounded-md top-20">        
    <ScrollArea className="flex flex-col gap-4 space-x-4 overflow-x-scroll justify-evenly dark:bg-emerald-300 dark:text-black overflow-y-0">     
        <Searchbar/>
        <NavigationCategories/>
        <Cart/>
        <SpecialOffer/>
        <NavigationHelpAndSupport/>
        <NavigationSignin/>
        <NavigationLogin/>
        <ModeToggle/>
        
        <ScrollBar orientation="horizontal" />

    </ScrollArea>
</div>
     );
}
 
