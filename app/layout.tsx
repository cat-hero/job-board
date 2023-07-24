import './globals.css'
import Head from 'next/head'
import Header from '@/components/shared/Header'
import localFont from 'next/font/local'
import { Lato } from 'next/font/google'

const neueFont = localFont({ src: './neue.woff2' })
const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={lato.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
