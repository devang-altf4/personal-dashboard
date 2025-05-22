"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden hover-scale transition-all duration-300">
          <Menu className="h-5 w-5 animate-pulse" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px] animate-slide-in-right">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#profile"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary hover-scale transition-all duration-300 animate-fade-in"
          >
            Profile
          </Link>
          <Link
            href="#experience"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary hover-scale transition-all duration-300 animate-fade-in delay-100"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary hover-scale transition-all duration-300 animate-fade-in delay-200"
          >
            Skills
          </Link>
          <Link
            href="#goals"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary hover-scale transition-all duration-300 animate-fade-in delay-300"
          >
            Goals & Hobbies
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
