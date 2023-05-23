import { useNewUserForm } from '@/features/users/hooks/useNewUserForm'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'

export const NewUserForm = () => {
  const { methods, isLoading, onSubmit } = useNewUserForm()
  const { register, formState } = methods

  return (
    <div>
      <p className="font-medium text-gray-500 label-s">시작하기</p>
      <h1 className="mt-2 font-bold heading-m">닉네임을 입력해주세요</h1>
      <form onSubmit={onSubmit} className="mt-6">
        <Input
          label="4~10자리 한글, 영문, 숫자"
          placeholder="닉네임"
          negative={formState.errors.nickname?.message}
          {...register('nickname')}
        />
        <Button type="submit" fluid isLoading={isLoading} className="mt-4">
          확인
        </Button>
      </form>
    </div>
  )
}
