import type { NextPageWithLayout } from '@/pages/_app'
import { BasicLayout } from '@/shared/layouts'

const NewUser: NextPageWithLayout = () => <div>NewUser</div>

NewUser.getLayout = (page) => <BasicLayout>{page}</BasicLayout>

export default NewUser
