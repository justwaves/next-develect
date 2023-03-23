import { NextPageWithLayout } from '@/pages/_app'
import { BasicLayout } from '@/shared/layouts/BasicLayout'

import type { ReactElement } from 'react'

const Home: NextPageWithLayout = () => (
  <BasicLayout>
    <p className="heading-m font-bold">Hello World</p>
  </BasicLayout>
)

Home.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}

export default Home
