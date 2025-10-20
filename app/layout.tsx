import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DocBox Healthcare System - Professional Demo',
  description: 'Enterprise-grade Healthcare Management Platform with AI-Powered RAG, Graph Database, and Self-Check-In Kiosks',
  authors: [{ name: 'Sean McDonnell' }],
  keywords: ['healthcare', 'HIPAA', 'EHR', 'medical records', 'AI', 'RAG', 'telemedicine'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

