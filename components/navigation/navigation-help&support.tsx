"use client"
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const NavigationHelpAndSupport = () => {
    return ( 
        <DropdownMenu  >
                <DropdownMenuTrigger  className="border-0  hover:border-0">
                    <Button variant="ghost" >Help & Support </Button> 
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/*<DropdownMenuLabel>Help & Support</DropdownMenuLabel>*/}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Help Center</DropdownMenuItem>
                        <DropdownMenuItem>Chat with Us</DropdownMenuItem>
                        <DropdownMenuItem>Call with Us at 0000000000</DropdownMenuItem>
                        <DropdownMenuItem>Shipping & Delivery</DropdownMenuItem>
                        <DropdownMenuItem>Order</DropdownMenuItem>
                        <DropdownMenuItem>Payment</DropdownMenuItem>
                        <DropdownMenuItem>Return & Refund</DropdownMenuItem>
                        <DropdownMenuItem>Complaint Management System</DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default NavigationHelpAndSupport;