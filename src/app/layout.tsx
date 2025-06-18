import './globals.css'
import type { Metadata } from 'next'
import NavBar from '../components/NavBar';
import ClientSessionProvider from '../components/ClientSessionProvider';

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
      <body>
        {/* Provide session context to the whole app */}
        <ClientSessionProvider>
          {/* Global Navigation Bar */}
          <NavBar />
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  )
} 