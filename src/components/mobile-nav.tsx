"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l border-border/40 bg-background/95 backdrop-blur-lg">
        <div className="flex justify-between items-center border-b border-border/20 pb-4 mb-6">
          <Link 
            href="/" 
            className="font-bold text-xl hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Wesley Wong
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </div>
        
        <div className="flex flex-col gap-5 mb-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <Link
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-auto border-t border-border/20 pt-6">
          <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild className="rounded-full">
              <Link href="https://github.com/weslayer" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
              <Link href="https://linkedin.com/in/weslayer" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
              <Link href="mailto:wesleywong1245@yahoo.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
