import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Management System',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className,"bg-white dark:bg-[#A2F38F]")}>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false} storageKey='product-management-system-v3'>
          {children} 
      </ThemeProvider>
      </body>
    </html>
  )
}
