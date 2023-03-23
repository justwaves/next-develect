import { pretendard } from '@/styles/font'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${pretendard.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
