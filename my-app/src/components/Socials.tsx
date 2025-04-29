import { Github, Home, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-8 pt-6 border-t border-zinc-800 text-center text-gray-400">
      <p className="text-xs">© {new Date().getFullYear()} Yatharth. All rights reserved.</p> {/* Smaller text */}
    </footer>
  )
}

const SocialBar = () => {
  const socialLinks = [
    { icon: <Home className="w-4 h-4" />, href: "/", label: "Home" },
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/YATHARTH-Sriv", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/yatharth-srivastava-0b0382261/", label: "LinkedIn" },
    { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/yatharth_sriv", label: "Twitter" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/yatharth_sriv/", label: "Instagram" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:yatharthsriv18@gmail.com", label: "Email" },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-zinc-800 z-50"> {/* Smaller padding */}
      <div className="flex items-center gap-3"> {/* Reduced gap */}
        {socialLinks.map((link) => (
          <Link 
            key={link.label} 
            href={link.href} 
            target={link.href && link.href.startsWith("http") ? "_blank" : undefined}
            className="social-icon-link p-1.5" 
            aria-label={link.label}
          >
            <span className="text-gray-400 hover:text-white transition-all">{link.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { Footer, SocialBar }