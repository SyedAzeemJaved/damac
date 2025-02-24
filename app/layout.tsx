import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Damac',
  description: 'Our commitment to nurture every single member of damac',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
