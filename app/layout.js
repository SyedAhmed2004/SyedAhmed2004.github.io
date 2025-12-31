import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Syed Ahmed | Portfolio',
  description: 'Modern Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased tracking-tight`}>{children}</body>
    </html>
  )
}