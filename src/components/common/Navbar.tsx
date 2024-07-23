import Link from "next/link";
import {
  NavigationMenuTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
export default function Navbar() {
  return (
    <div className="w-full px-4 py-4 flex justify-between items-center lg:px-16 bg-white">
      <div>
        <Image src={logo} alt="logo" height={50} />
      </div>
      <div className="">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} className="bg-white lg:hidden ">
              <HamburgerMenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Paraplantas</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4">
              <Link href={"/"}>
                <li>Ofertas</li>
              </Link>
              <Link href={"/"}>
                <li>Jardin Y hogar</li>
              </Link>
              <Link href={"/"}>
                <li> Productos</li>
              </Link>
              <Link href={"/"}>
                <li>Nosotros</li>
              </Link>
            </ul>
          </SheetContent>
        </Sheet>
        <DesktopMenu />
      </div>
      <span className="hidden lg:block" />
    </div>
  );
}
function DesktopMenu() {
  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !text-lg `}
              >
                Ofertas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !text-lg `}
              >
                Jardin y hogar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !text-lg `}
              >
                Productos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} !text-lg `}
              >
                Nosotros
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
