import '@/styles/globals.css'

import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactElement, ReactNode, useState } from 'react'
import { RecoilRoot } from 'recoil'

import { pretendard } from '@/styles/font'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{
  session: Session
  dehydratedState: DehydratedState
}> & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <SessionProvider session={session}>
            <div className={`${pretendard.className} font-sans`}>
              {getLayout(<Component {...pageProps} />)}
            </div>
          </SessionProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  )
}
