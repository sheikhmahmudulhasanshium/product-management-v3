"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

const NavigationCategories = () => {
    return ( 
<NavigationMenu className="flex">
  <NavigationMenuList>
    <NavigationMenuItem className="bg-green-600 dark:bg-green-400">
      <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
      <NavigationMenuContent className="absolute w-full top-25 from-green-400 to-blue-400 ">
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

     );
}
 
export default NavigationCategories;