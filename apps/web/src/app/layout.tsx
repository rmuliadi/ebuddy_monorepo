import type { Metadata } from 'next'
import ThemeRegistry from '../components/common/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Next.js Firebase App',
  description: 'Firebase Authentication and User Management'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}