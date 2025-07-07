import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavigationMenu className="px-4 text-blue-600">
      <NavigationMenuList>
        <NavigationMenuItem className="flex flex-row">
          <NavigationMenuLink asChild>
            <Link to={"/add"}>Add</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to={"/"}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBar;
