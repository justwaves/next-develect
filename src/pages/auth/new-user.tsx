import type { NextPageWithLayout } from '@/pages/_app'
import { AuthLayout } from '@/shared/layouts/AuthLayout'

const NewUser: NextPageWithLayout = () => <div>NewUser</div>

NewUser.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default NewUser
