import classNames from 'classnames'
import tw from 'twin.macro'

import ChevronDown from '@/public/svg/icons/chevron-down.svg'
import {
  InputHint,
  inputLabelStyle,
  inputStyle,
} from '@/shared/components/Input'

type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options?: Array<{
    label: string
    value: string | number
  }>
  label: string
  size?: SelectSize
  positive?: string
  negative?: string
  disabled?: boolean
  value?: string
}

export const Select = ({
  className,
  options,
  label,
  size = 'md',
  positive,
  negative,
  disabled,
  value,
  placeholder = '선택해주세요',
  ...selectProps
}: SelectProps) => (
  <div>
    <div css={tw`relative flex w-full items-center`}>
      <select
        css={[
          ...inputStyle(size, Boolean(positive), Boolean(negative)),
          tw`cursor-pointer`,
          tw`invalid:text-gray-300`,
        ]}
        id="selectEl"
        className={classNames('peer', className)}
        disabled={!options || disabled}
        required
        value={value || 'placeholder'}
        {...selectProps}
      >
        <option value="placeholder" disabled hidden>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor="selectEl"
        css={inputLabelStyle(size, Boolean(positive), Boolean(negative))}
      >
        {label}
      </label>
      <ChevronDown
        width={16}
        height={16}
        css={tw`absolute right-[14px] fill-gray-400 pointer-events-none`}
      />
    </div>
    <InputHint negative={negative} positive={positive} />
  </div>
)
