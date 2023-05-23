import tw from 'twin.macro'

import { NextPageWithLayout } from '@/pages/_app'
import { BasicLayout } from '@/shared/layouts/BasicLayout'

const Home: NextPageWithLayout = () => <p css={tw`label-xs`}>Home</p>

Home.getLayout = (page) => <BasicLayout>{page}</BasicLayout>

export default Home
