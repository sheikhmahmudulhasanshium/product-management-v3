"use client"
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const NavigationCategories = () => {
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger  className="border-0  hover:border-0">
                <Button variant="ghost" >Categories </Button>
            </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/*<DropdownMenuLabel>Categories</DropdownMenuLabel>*/}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                </DropdownMenuContent>
        
        </DropdownMenu>
     );
}
 
export default NavigationCategories;