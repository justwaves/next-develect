import tw from 'twin.macro'

import type { ButtonVariant, ButtonSize } from '@/shared/components/Button'
import { LoadingSpinner } from '@/shared/components/LoadingSpinner'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fluid?: boolean
  isLoading?: boolean
  disabled?: boolean
}

export const Button = ({
  className,
  children = 'Label',
  variant = 'primary',
  size = 'md',
  fluid = false,
  isLoading = false,
  disabled = false,
  ...buttonProps
}: ButtonProps) => (
  <button
    className={className}
    type="button"
    disabled={disabled}
    css={buttonStyle({ size, variant, fluid, isLoading })}
    {...buttonProps}
  >
    {isLoading && !disabled && (
      <LoadingSpinner size={size} className="absolute" />
    )}
    {children}
  </button>
)

type StyledButtonProps = Required<
  Pick<ButtonProps, 'size' | 'variant' | 'fluid' | 'isLoading'>
>

const buttonStyle = ({
  size,
  variant,
  fluid,
  isLoading,
}: StyledButtonProps) => [
  // 공통
  tw`flex items-center justify-center`,
  tw`relative rounded-full font-medium transition-colors`,

  // 버튼 타입 별 스타일
  {
    primary: tw`text-white bg-primary-400 hover:bg-primary-500`,
    secondary: tw`text-primary-400 bg-primary-50 hover:bg-primary-100`,
    warning: tw`text-red-400 bg-red-50 hover:bg-red-100`,
    danger: tw`text-white bg-red-400 hover:bg-red-500`,
  }[variant],

  // 버튼 사이즈 별 스타일
  {
    sm: tw`text-sm leading-4 px-4 py-2.5`,
    md: tw`text-base leading-5 px-6 py-3.5`,
    lg: tw`text-lg leading-6 px-8 py-4`,
  }[size],

  // Fluid & isLoading & disabled
  fluid && tw`w-full`,
  isLoading && tw`cursor-wait text-transparent`,
  tw`disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400`,
]
