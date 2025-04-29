import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "./Themeprovider"

export const metadata = {
  title: "Yatharth - Portfolio",
  description: "Portfolio of Yatharth Srivastava a Full Stack Web3 Dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-black text-white">
        <ThemeProvider  defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


