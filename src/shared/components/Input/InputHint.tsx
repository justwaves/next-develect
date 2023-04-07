import tw from 'twin.macro'

import NegativeIcon from '@/public/svg/icons/alert.svg'
import PositiveIcon from '@/public/svg/icons/double-check.svg'

interface HintProps {
  negative?: string
  positive?: string
}

export const InputHint = ({ negative, positive }: HintProps) => {
  // 우선 순위: negative > positive
  const message = negative || positive

  const icon = negative ? (
    <NegativeIcon width={16} height={16} css={tw`fill-red-400`} />
  ) : (
    <PositiveIcon width={16} height={16} css={tw`fill-green-400`} />
  )

  if (!message) return null

  return (
    <span
      css={[
        tw`text-sm leading-4 mt-1 flex gap-x-1`,
        negative ? tw`text-red-400` : tw`text-green-400`,
      ]}
    >
      {icon}
      {message}
    </span>
  )
}
