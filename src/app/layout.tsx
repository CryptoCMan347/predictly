import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Predictly - Skill-Based Prediction Platform',
  description: 'Monetize your knowledge through PvP predictions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 