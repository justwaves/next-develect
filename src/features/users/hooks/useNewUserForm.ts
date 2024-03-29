import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { useUpdateUser } from '@/features/users/queries/useUpdateUser'
import { formResolver } from '@/lib/forms/formResolver'

interface NewUserFormFields {
  nickname: string
}

export const useNewUserForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || '/'
  const { data: session } = useSession({ required: true })

  const methods = useForm<NewUserFormFields>({
    resolver: formResolver(['nickname']),
    defaultValues: {
      nickname: '',
    },
  })
  const { handleSubmit, setError } = methods

  const { mutate, isLoading } = useUpdateUser({
    onSuccess: () => {
      router.push(redirectUrl)
    },
    onError: () => {
      setError('nickname', { message: '에러가 발생했습니다.' })
    },
  })

  const onSubmit = handleSubmit(({ nickname }) => {
    const id = session?.user?.id
    if (!id) {
      setError('nickname', { message: '로그인이 필요합니다.' })
    } else {
      mutate({ id, nickname })
    }
  })

  return {
    methods,
    onSubmit,
    isLoading,
  }
}
