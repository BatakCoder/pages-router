import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import Navbar from '@/components/layouts/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
