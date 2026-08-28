"use client";

import { Menu } from "lucide-react";
import GiveDialog from "./give-dialog";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

type PageName = "home" | "about" | "ministries" | "gallery" | "contact";

const navigation = [
  { name: "Home", href: "/", page: "home" },
  { name: "About", href: "/about", page: "about" },
  { name: "Ministries", href: "/ministries", page: "ministries" },
  { name: "Gallery", href: "/gallery", page: "gallery" },
  { name: "Contact", href: "/contact", page: "contact" },
] as const;

export default function SiteHeader({ active = "home" }: { active?: PageName }) {
  return (
    <nav className={`nav ${active}-nav`} aria-label="Main navigation">
      <a className="brand" href="/">
        <img className="brand-logo" src="/shalom-church-logo.png" alt="Shalom Ethiopian Evangelical Church logo" />
        <span>SHALOM ETHIOPIAN<br /> EVANGELICAL <br /><b>CHURCH</b></span>
      </a>
      <div className="links">
        {navigation.map((item) => (
          <a key={item.page} className={active === item.page ? "active" : undefined} href={item.href} aria-current={active === item.page ? "page" : undefined}>
            {item.name}
          </a>
        ))}
      </div>
      <GiveDialog className="give desktop-give" />
      <Sheet>
        <SheetTrigger asChild>
          <button className="mobile-menu-trigger" type="button" aria-label="Open navigation menu"><Menu aria-hidden="true" /></button>
        </SheetTrigger>
        <SheetContent className="mobile-menu" side="right">
          <SheetHeader className="mobile-menu-header">
            <img src="/shalom-church-logo.png" alt="" aria-hidden="true" />
            <SheetTitle>Shalom Ethiopian<br />Evangelical Church</SheetTitle>
            <SheetDescription>Welcome. Find your place at Shalom.</SheetDescription>
          </SheetHeader>
          <div className="mobile-menu-links">
            {navigation.map((item, index) => (
              <SheetClose asChild key={item.page}>
                <a className={active === item.page ? "active" : undefined} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{item.name}
                </a>
              </SheetClose>
            ))}
          </div>
          <div className="mobile-menu-give"><GiveDialog className="give" /></div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
