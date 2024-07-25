"use client"

import Link from "next/link"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Datos de los componentes del menú con descripciones mejoradas para SEO
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café en grano",
    href: "/category/grano",
    description: "Descubre nuestra selección de café en grano para una frescura incomparable.", // Descripción mejorada para SEO
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description: "Encuentra café molido listo para preparar y disfrutar.", // Descripción mejorada para SEO
  },
  {
    title: "Café en cápsulas",
    href: "/category/capsula",
    description: "Conveniencia y sabor en cada cápsula para una experiencia rápida y deliciosa.", // Descripción mejorada para SEO
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                    aria-label="Learn more about us"
                  >
                   
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Avendaño
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sumergete en el apasionado mundo del cafe con nuestra pagina web de grano, molido, de capsula y de leche.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/allproducts" title="Tienda">
              Accede  a toda tu informacion,tus pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complemtarios como tazas,molinillos,etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



