import { NewUserForm } from '@/features/users/components/NewUserForm'
import type { NextPageWithLayout } from '@/pages/_app'
import { AuthLayout } from '@/shared/layouts/AuthLayout'

const NewUser: NextPageWithLayout = () => <NewUserForm />

NewUser.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default NewUser
