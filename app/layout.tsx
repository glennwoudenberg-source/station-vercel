import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Station',
  description: 'Wedding stay near Nunica venues'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
