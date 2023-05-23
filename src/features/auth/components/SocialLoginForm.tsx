import tw from 'twin.macro'

import GoogleIcon from '@/public/svg/logos/google.svg'
import { useSignInWithGoogle } from '@/features/auth/hooks/useSignInWithGoogle'

export const SocialLoginForm = () => {
  const { signInWithGoogle } = useSignInWithGoogle()

  return (
    <>
      <h1 className="font-bold heading-m">
        디벨렉트에 오신 것을 <br />
        환영합니다.
      </h1>
      <h2 className="mt-3 text-gray-600">
        토픽을 선택하고 의견을 공유해주세요.
      </h2>
      <button
        type="button"
        css={[
          tw`mt-8 w-full rounded-lg bg-gray-50 px-4 py-3`,
          tw`transition-colors hover:bg-gray-100`,
          tw`flex items-center justify-center gap-2`,
          tw`border border-gray-100`,
        ]}
        onClick={signInWithGoogle}
      >
        <GoogleIcon />
        <p className="font-medium text-gray-700 label-m">구글로 시작하기</p>
      </button>
      <div className="mt-16 flex flex-col items-center gap-y-1 text-gray-500 label-xs">
        <p>이용약관 | 개인정보처리방침</p>
        <p>Copyright © 2023 Develect. All rights reserved.</p>
      </div>
    </>
  )
}
