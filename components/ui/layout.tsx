import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fiona Zhang Website',
  description: 'Fiona Zhang is a globally oriented entrepreneur, investor, and youth advocate dedicated to fostering cross-border innovation. She is the Cofounder of Bay Area Innovest North America and the Founder of Visionlist Commons, a consulting firm supporting founders and the venture ecosystem. Through these platforms, Fiona incubates ventures at the intersection of artificial intelligence, mentorship, digital commerce, and cross-cultural collaboration.',
  generator: 'Fiona Zhang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
