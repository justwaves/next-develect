import classNames from 'classnames'
import React, { forwardRef } from 'react'
import tw from 'twin.macro'

import type { InputSize } from '@/shared/components/Input'
import { InputHint } from '@/shared/components/Input'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  size?: InputSize
  positive?: string
  negative?: string
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      css,
      label,
      placeholder = '텍스트를 입력해주세요',
      size = 'md',
      positive,
      negative,
      disabled,
      ...inputProps
    }: InputProps,
    ref
  ) => (
    <div css={css}>
      <div css={tw`relative flex w-full items-center`}>
        <input
          id="inputEl"
          className={classNames('peer', className)}
          css={inputStyle(size, Boolean(positive), Boolean(negative))}
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
          ref={ref}
        />
        <label
          htmlFor="inputEl"
          css={inputLabelStyle(size, Boolean(positive), Boolean(negative))}
        >
          {label}
        </label>
      </div>
      <InputHint negative={negative} positive={positive} />
    </div>
  )
)

export const inputStyle = (
  size: InputSize,
  positive?: boolean,
  negative?: boolean
) => [
  // 공통
  tw`appearance-none`,
  tw`border border-gray-300 focus:outline-none`,
  tw`w-full rounded-lg px-[14px] ease-in-out bg-white`,

  // Placeholder & Disabled
  tw`placeholder:text-transparent focus:placeholder:text-gray-300`,
  tw`disabled:(text-gray-400 bg-gray-100 border-gray-100 cursor-not-allowed)`,

  // Positive, Negative, Default
  positive && tw`border-green-400 bg-green-50`,
  negative && tw`border-red-400 bg-red-50 `,
  !positive && !negative && tw`focus:(border-primary-400)`,

  // 사이즈 별 스타일
  // &:not(:placeholder-shown)는 Input의 value가 채워져 있을 때의 상태
  ...{
    sm: [
      tw`text-sm leading-4`,
      tw`py-[10px] focus:(pt-[18px] pb-[2px])`,
      tw`[&:not(:placeholder-shown)]:(pt-[18px] pb-[2px])`,
    ],
    md: [
      tw`text-base leading-5`,
      tw`py-[14px] focus:(pt-[22px] pb-[6px])`,
      tw`[&:not(:placeholder-shown)]:(pt-[22px] pb-[6px])`,
    ],
    lg: [
      tw`text-lg leading-6`,
      tw`py-[16px] focus:(pt-[24px] pb-[8px])`,
      tw`[&:not(:placeholder-shown)]:(pt-[24px] pb-[8px])`,
    ],
  }[size],
]

export const inputLabelStyle = (
  size: InputSize,
  positive?: boolean,
  negative?: boolean
) => [
  // 공통
  tw`absolute pointer-events-none px-[14px] `,
  tw`duration-100 ease-in-out`,
  tw`peer-disabled:text-gray-400`,

  // Positive, Negative, Default
  positive && tw`text-green-400`,
  negative && tw`text-red-400`,
  !positive && !negative && tw`text-gray-500 peer-focus:text-primary-400`,

  // 사이즈 별 스타일
  // 'peer-'를 통해 Input의 상태값(focus, disabled 등) 가져옴
  ...{
    sm: [
      tw`text-sm leading-4`,
      tw`peer-focus:(text-xs leading-4)`,
      tw`peer-[&:not(:placeholder-shown)]:(text-xs leading-4)`,
      tw`peer-focus:-translate-y-[8px]`,
      tw`peer-[&:not(:placeholder-shown)]:-translate-y-[8px]`,
    ],
    md: [
      tw`text-base leading-5`,
      tw`peer-focus:(text-xs leading-4)`,
      tw`peer-[&:not(:placeholder-shown)]:(text-xs leading-4)`,
      tw`peer-focus:-translate-y-[12px] `,
      tw`peer-[&:not(:placeholder-shown)]:-translate-y-[12px]`,
    ],
    lg: [
      tw`text-lg leading-6`,
      tw`peer-focus:(text-sm leading-4)`,
      tw`peer-[&:not(:placeholder-shown)]:(text-sm leading-4)`,
      tw`peer-focus:-translate-y-[14px]`,
      tw`peer-[&:not(:placeholder-shown)]:-translate-y-[14px]`,
    ],
  }[size],
]
