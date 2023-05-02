import { NextPageWithLayout } from '@/pages/_app'
import { BasicLayout } from '@/shared/layouts/BasicLayout'

const Home: NextPageWithLayout = () => <p>Home</p>

Home.getLayout = (page) => <BasicLayout>{page}</BasicLayout>

export default Home
