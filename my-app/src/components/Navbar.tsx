"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#web3-projects", label: "Web3" },
    { href: "#other-projects", label: "Projects" },
    { href: "#education", label: "Education" },
  ]

  return (
    <nav className="flex justify-between items-center mb-12">
      <div className="font-bold text-xl">YS</div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" size="sm" asChild>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar